"""
Pre-render the JavaScript-built parts of each page into the static HTML.

Why: the header nav, footer and app-card grids are built in the browser by
script.js / apps-data.js. Google renders JavaScript, but Pinterest, Facebook,
Bing (partly) and most AI crawlers read only the raw HTML, so they saw empty
<header>/<footer> tags and no links to the apps. This script loads each page in
a headless browser, copies the HTML that the site's own JavaScript produces into
the matching empty container, and wraps it in <!--prerendered--> markers.

At runtime nothing changes: script.js still overwrites those containers with
the identical markup (innerHTML =), so the page looks and behaves exactly as
before. Re-run after editing apps-data.js, NAV_LINKS or the footer so the
static copy stays current (the live site is always correct either way).

Usage (from the repo root):
    pip install playwright && python -m playwright install chromium
    python tools/prerender_static.py
"""
import os, re, sys, threading, functools, http.server, asyncio

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PORT = 8899
FIXED_IDS = ["site-header", "site-footer", "newsletterCta", "trustStrip", "whyGrid", "keyStageSections"]
MARK_OPEN, MARK_CLOSE = "<!--prerendered-->", "<!--/prerendered-->"

class Handler(http.server.SimpleHTTPRequestHandler):
    """Static server that mimics Netlify Pretty URLs (/about -> about.html)."""
    def log_message(self, *a): pass
    def send_head(self):
        path = self.path.split("?")[0].split("#")[0]
        fs = self.translate_path(path)
        dir_without_index = os.path.isdir(fs) and not os.path.exists(os.path.join(fs, "index.html"))
        if (not os.path.exists(fs) or dir_without_index) and os.path.exists(fs.rstrip("/") + ".html"):
            self.path = path.rstrip("/") + ".html" + self.path[len(path):]
        return super().send_head()

def container_pattern(cid):
    # an element with this id whose content is empty or a previous prerender
    return re.compile(r'(<(header|footer|div|section)\b[^>]*\bid="' + re.escape(cid) + r'"[^>]*>)\s*(?:' +
                      re.escape(MARK_OPEN) + r'.*?' + re.escape(MARK_CLOSE) + r')?\s*(</\2>)', re.S)

def target_ids(html):
    ids = [i for i in FIXED_IDS if container_pattern(i).search(html)]
    for m in re.finditer(r'<div\b[^>]*class="card-grid"[^>]*\bid="([^"]+)"[^>]*>|<div\b[^>]*\bid="([^"]+)"[^>]*class="card-grid"[^>]*>', html):
        cid = m.group(1) or m.group(2)
        if cid not in ids and container_pattern(cid).search(html):
            ids.append(cid)
    return ids

async def main():
    from playwright.async_api import async_playwright
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", PORT), functools.partial(Handler, directory=ROOT))
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    pages = []
    for d, dirs, files in os.walk(ROOT):
        dirs[:] = [x for x in dirs if not x.startswith(".") and x != "tools"]
        for f in files:
            if f.endswith(".html"):
                rel = os.path.relpath(os.path.join(d, f), ROOT).replace(os.sep, "/")
                html = open(os.path.join(ROOT, rel), encoding="utf-8").read()
                if 'id="site-header"' in html:
                    pages.append(rel)
    changed = 0
    async with async_playwright() as pw:
        browser = await pw.chromium.launch()
        ctx = await browser.new_context(reduced_motion="reduce", viewport={"width": 1280, "height": 900})
        for rel in sorted(pages):
            path = os.path.join(ROOT, rel)
            html = open(path, encoding="utf-8").read()
            ids = target_ids(html)
            if not ids:
                continue
            url = "http://127.0.0.1:%d/%s" % (PORT, rel[:-5])
            if url.endswith("/index"):
                url = url[:-5]
            page = await ctx.new_page()
            await page.goto(url, wait_until="load")
            await page.wait_for_timeout(300)
            rendered = await page.evaluate("ids => ids.map(i => { const e = document.getElementById(i); return e ? e.innerHTML : null; })", ids)
            await page.close()
            new = html
            for cid, inner in zip(ids, rendered):
                if not inner or not inner.strip():
                    continue
                new = container_pattern(cid).sub(lambda m: m.group(1) + MARK_OPEN + inner + MARK_CLOSE + m.group(3), new, count=1)
            if new != html:
                open(path, "w", encoding="utf-8").write(new)
                changed += 1
        await browser.close()
    srv.shutdown()
    print("pre-rendered %d pages" % changed)

if __name__ == "__main__":
    asyncio.run(main())
