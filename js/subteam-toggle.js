/*
  ============================================================
  SUBTEAM TOGGLE
  ============================================================
  Wires up click-to-expand behavior for expandable subteam chip
  cards (e.g. .luna-subteam on sedslunabotics.html, .solar-subteam
  on sedssolarsail.html). Clicking a chip's toggle button toggles
  its "is-open" class and expands/collapses its member list.
  Each card toggles independently. Works for any card whose
  toggle button's class ends in "__toggle" and whose card class
  ends in "-subteam" — no page-specific wiring needed.

  Markup pattern:
    <div class="luna-subteam">
      <button class="luna-subteam__toggle" aria-expanded="false">
        <span>Electrical</span>
        <span class="luna-subteam__chevron">...</span>
      </button>
      <ul class="luna-subteam__list">
        <li>Member name</li>
      </ul>
    </div>
  ============================================================
*/

(function () {
  "use strict";

  function initSubteamToggles() {
    const toggles = document.querySelectorAll('[class$="-subteam__toggle"]');
    if (!toggles.length) return;

    toggles.forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.parentElement;
        if (!card) return;
        const isOpen = card.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initSubteamToggles);
})();
