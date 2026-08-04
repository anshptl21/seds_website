/*
  ============================================================
  SUBTEAM TOGGLE
  ============================================================
  Wires up click-to-expand behavior for .luna-subteam chip cards.
  Clicking a chip's toggle button expands/collapses its member
  list. Each card toggles independently.

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
    const toggles = document.querySelectorAll(".luna-subteam__toggle");
    if (!toggles.length) return;

    toggles.forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".luna-subteam");
        if (!card) return;
        const isOpen = card.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initSubteamToggles);
})();
