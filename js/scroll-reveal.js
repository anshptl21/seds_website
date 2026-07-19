/*
  ============================================================
  SCROLL REVEAL
  ============================================================
  Adds the "is-visible" class to any element with class "reveal"
  once it scrolls into view. Combine with "reveal--left" or
  "reveal--right" (see css/style.css) to control which direction
  it animates in from.

  Usage in HTML:
    <div class="about-row__media reveal reveal--left">...</div>
    <div class="about-row__text reveal reveal--right">...</div>

  No edits needed here to use it on a new page — just include
  this script and add the classes to your markup.
  ============================================================
*/

(function () {
  "use strict";

  function initScrollReveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      // Fallback for very old browsers: just show everything.
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
  }

  document.addEventListener("DOMContentLoaded", initScrollReveal);
})();
