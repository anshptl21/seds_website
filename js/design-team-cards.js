/*
  ============================================================
  DESIGN TEAM CARDS
  ============================================================
  Wires up the .dt-card icon cards on design_teams.html. Clicking
  a card opens the shared .dt-panel below the row with that card's
  description and apply link; clicking the same card again closes
  it; clicking a different card swaps the panel's content.

  Each .dt-card carries data attributes:
    data-name        — team name (used as the panel heading, optional)
    data-desc        — description text
    data-apply-href  — URL for the apply/learn-more button
    data-apply-label — button text (e.g. "Apply Now", "Learn More")
  ============================================================
*/

(function () {
  "use strict";

  function initDesignTeamCards() {
    var cards = document.querySelectorAll(".dt-card");
    var panel = document.getElementById("dt-panel");
    if (!cards.length || !panel) return;

    var descEl = document.getElementById("dt-panel-desc");
    var applyEl = document.getElementById("dt-panel-apply");
    var activeCard = null;

    function closePanel() {
      panel.classList.remove("is-open");
      if (activeCard) {
        activeCard.classList.remove("is-active");
        activeCard.setAttribute("aria-expanded", "false");
      }
      activeCard = null;
    }

    function openPanel(card) {
      descEl.textContent = card.getAttribute("data-desc") || "";
      applyEl.href = card.getAttribute("data-apply-href") || "#";
      applyEl.textContent = card.getAttribute("data-apply-label") || "Learn More";

      cards.forEach(function (c) {
        c.classList.remove("is-active");
        c.setAttribute("aria-expanded", "false");
      });

      card.classList.add("is-active");
      card.setAttribute("aria-expanded", "true");
      panel.classList.add("is-open");
      activeCard = card;
    }

    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        if (activeCard === card) {
          closePanel();
        } else {
          openPanel(card);
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initDesignTeamCards);
})();
