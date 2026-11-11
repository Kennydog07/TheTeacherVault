/* ==========================================================================
   THE TEACHER VAULT — HOMEPAGE “WHAT’S NEW” TICKER

   Add each new live resource to WHATS_NEW_ITEMS below, with its go-live
   date, so the homepage ticker stays current. Date-only values (YYYY-MM-DD)
   are treated as 00:00 Asia/Riyadh on that day. Use a full ISO timestamp
   (for example 2026-11-08T20:00:00+03:00) if a Sunday evening launch should
   count in the week that begins at 19:00.

   The ticker is a weekly snapshot. It rolls over at 19:00 Asia/Riyadh every
   Sunday and shows resources added since the last rollover. If nothing has
   been added in the current week, it keeps showing the previous week’s
   items. If older items are the most recent, it shows the week that
   contains them, so the tape is never blank while this list has any items.
   ========================================================================== */

(function (global) {
  var TICKER_TZ = "Asia/Riyadh";
  var ROLLOVER_HOUR = 19;
  var WEEK_MS = 7 * 24 * 60 * 60 * 1000;
  var COLOURS = ["sunshine", "pink", "mint", "coral", "lilac", "blue"];
  var WEEKDAY_INDEX = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

  var WHATS_NEW_ITEMS = [
    { date: "2026-11-11", title: "Thanksgiving Kids’ Table Activity Pack", url: "/thanksgiving-kids-table-pack", price: "£5.99" },
    { date: "2026-11-11", title: "Cold Day Indoor Activity Pack", url: "/cold-day-indoor-activity-pack", price: "£4.99" },
    { date: "2026-11-11", title: "6-Week Christmas Countdown Planner 2026", url: "/christmas-countdown-planner-2026", price: "£5.99" },
    { date: "2026-11-08", title: "Screen-Free Times Tables Pack (Years 3–6)", url: "/screen-free-times-tables-pack", price: "£2.99" },
    { date: "2026-11-06", title: "Word Card Maker — free keyring word cards", url: "/teacher-apps/word-card-maker", price: "Free" }
  ];

  function getTzParts(date, timeZone) {
    var parts = {};
    new Intl.DateTimeFormat("en-GB", {
      timeZone: timeZone,
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23"
    }).formatToParts(date).forEach(function (part) {
      if (part.type !== "literal") parts[part.type] = part.value;
    });
    return parts;
  }

  /* Asia/Riyadh is UTC+3 all year (no daylight saving). */
  function riyadhWallTimeToDate(year, month, day, hour, minute, second) {
    return new Date(Date.UTC(year, month - 1, day, (hour || 0) - 3, minute || 0, second || 0));
  }

  function startOfTickerWeek(now) {
    var parts = getTzParts(now, TICKER_TZ);
    var weekdayIndex = WEEKDAY_INDEX[parts.weekday];
    var thisSundayRollover = riyadhWallTimeToDate(
      +parts.year,
      +parts.month,
      +parts.day,
      ROLLOVER_HOUR,
      0,
      0
    );
    thisSundayRollover = new Date(thisSundayRollover.getTime() - weekdayIndex * 24 * 60 * 60 * 1000);
    if (now.getTime() < thisSundayRollover.getTime()) {
      return new Date(thisSundayRollover.getTime() - WEEK_MS);
    }
    return thisSundayRollover;
  }

  function parseGoLive(value) {
    if (!value) return null;
    var str = String(value).trim();
    var dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(str);
    if (dateOnly) {
      return riyadhWallTimeToDate(+dateOnly[1], +dateOnly[2], +dateOnly[3], 0, 0, 0);
    }
    var parsed = new Date(str);
    if (isNaN(parsed.getTime())) return null;
    return parsed;
  }

  function itemsInRange(items, start, endExclusive, now) {
    var startMs = start.getTime();
    var endMs = endExclusive.getTime();
    var latestAllowed = now.getTime();
    return items.filter(function (item) {
      return item._t >= startMs && item._t < endMs && item._t <= latestAllowed;
    });
  }

  function sortItems(list) {
    return list.slice().sort(function (a, b) {
      if (b._t !== a._t) return b._t - a._t;
      return a._index - b._index;
    }).map(function (item) {
      return { date: item.date, title: item.title, url: item.url, price: item.price };
    });
  }

  function prepareItems(items) {
    var prepared = [];
    (items || []).forEach(function (item, index) {
      if (!item || !item.title || !item.url || !item.date) return;
      var t = parseGoLive(item.date);
      if (!t) return;
      prepared.push({
        date: item.date,
        title: item.title,
        url: item.url,
        price: item.price || "",
        _t: t.getTime(),
        _index: index
      });
    });
    return prepared;
  }

  function selectWhatsNewItems(items, now) {
    now = now || new Date();
    var prepared = prepareItems(items);
    if (!prepared.length) return [];

    var weekStart = startOfTickerWeek(now);
    var weekEnd = new Date(weekStart.getTime() + WEEK_MS);
    var current = itemsInRange(prepared, weekStart, weekEnd, now);
    if (current.length) return sortItems(current);

    var previousStart = new Date(weekStart.getTime() - WEEK_MS);
    var previous = itemsInRange(prepared, previousStart, weekStart, now);
    if (previous.length) return sortItems(previous);

    var past = prepared.filter(function (item) { return item._t <= now.getTime(); });
    if (!past.length) return [];
    var latest = past.reduce(function (a, b) { return a._t >= b._t ? a : b; });
    var latestWeekStart = startOfTickerWeek(new Date(latest._t));
    return sortItems(itemsInRange(
      prepared,
      latestWeekStart,
      new Date(latestWeekStart.getTime() + WEEK_MS),
      now
    ));
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function itemHtml(item, colour, focusable) {
    var tabindex = focusable ? "" : " tabindex=\"-1\"";
    return (
      "<a class=\"whats-new-ticker__item chalk--" + colour + "\" href=\"" + escapeHtml(item.url) + "\"" + tabindex + ">" +
        escapeHtml(item.title) +
        " <span class=\"whats-new-ticker__price\">" + escapeHtml(item.price) + "</span>" +
      "</a>" +
      "<span class=\"whats-new-ticker__sep\" aria-hidden=\"true\">✦</span>"
    );
  }

  function groupHtml(items, focusable) {
    return items.map(function (item, i) {
      return itemHtml(item, COLOURS[i % COLOURS.length], focusable);
    }).join("");
  }

  function fillUntilWide(group, chunkHtml, minWidth) {
    group.innerHTML = chunkHtml;
    var guard = 0;
    while (group.offsetWidth < minWidth && guard < 12) {
      group.insertAdjacentHTML("beforeend", chunkHtml);
      guard++;
    }
  }

  function renderTicker(track, items) {
    var liveHtml = groupHtml(items, true);
    var cloneHtml = groupHtml(items, false);
    track.innerHTML = "";

    var live = document.createElement("div");
    live.className = "whats-new-ticker__group";
    track.appendChild(live);

    var clone = document.createElement("div");
    clone.className = "whats-new-ticker__group";
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);

    var viewport = track.parentElement;
    var minWidth = viewport ? Math.max(viewport.clientWidth, 1) : 1;
    fillUntilWide(live, liveHtml, minWidth);
    fillUntilWide(clone, cloneHtml, minWidth);

    var duration = Math.max(20, Math.round(live.offsetWidth / 80));
    track.style.animationDuration = duration + "s";
  }

  function initWhatsNewTicker() {
    var ticker = document.getElementById("whatsNewTicker");
    var track = document.getElementById("whatsNewTrack");
    if (!ticker || !track) return;

    var items = selectWhatsNewItems(WHATS_NEW_ITEMS, new Date());
    if (!items.length) return;
    renderTicker(track, items);
  }

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initWhatsNewTicker);
    } else {
      initWhatsNewTicker();
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      WHATS_NEW_ITEMS: WHATS_NEW_ITEMS,
      selectWhatsNewItems: selectWhatsNewItems,
      startOfTickerWeek: startOfTickerWeek,
      parseGoLive: parseGoLive
    };
  }
})(typeof window !== "undefined" ? window : this);
