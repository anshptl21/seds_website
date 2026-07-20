/*
  ============================================================
  MISSION TIMELINE
  ============================================================
  Wires up click-to-expand behavior for the scrollable Mission
  Timeline dots (class .mtl-dot). Clicking a dot toggles the
  info box directly underneath it open/closed. Multiple boxes
  can be open at once — this is intentional.

  No edits needed here to use it on a new page — just include
  this script and follow the markup pattern already used in
  index.html / sedssolarsail.html / studentastronautcorps.html:

    <div class="mtl-item">
      <div class="mtl-dot-slot">
        <button class="mtl-dot" aria-expanded="false"
                aria-controls="mtl-box-ID" title="Milestone name"></button>
      </div>
      <div class="mtl-box" id="mtl-box-ID">
        <p>Milestone details...</p>
      </div>
    </div>
  ============================================================
*/

(function () {
  "use strict";

  function initMissionTimeline() {
    const dots = document.querySelectorAll(".mtl-dot");
    if (!dots.length) return;

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const item = dot.closest(".mtl-item");
        const box = item ? item.querySelector(".mtl-box") : null;
        if (!box) return;

        const isOpen = dot.classList.toggle("is-open");
        box.classList.toggle("is-open", isOpen);
        dot.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initMissionTimeline);
})();
