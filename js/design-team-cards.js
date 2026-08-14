/*
  ============================================================
  DESIGN TEAM CARDS
  ============================================================
  Wires up the .dt-card icon cards on design_teams.html. Each
  card sits in its own .dt-row alongside a .dt-panel-inline.
  Clicking a card toggles that row's "is-open" class, which
  expands the panel to the right (see css/style.css). Rows
  toggle independently — more than one can be open at once.
  ============================================================
*/

(function () {
  "use strict";

  function initDesignTeamCards() {
    var cards = document.querySelectorAll(".dt-card");
    if (!cards.length) return;

    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        var row = card.closest(".dt-row");
        if (!row) return;
        var isOpen = row.classList.toggle("is-open");
        card.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initDesignTeamCards);
})();
