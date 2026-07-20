/*
  ============================================================
  LIGHTBOX
  ============================================================
  Wires up any element with the [data-lightbox] attribute to
  open a full-screen zoomed view on click.

  Usage in HTML:
    <button class="luna-gallery__item" data-lightbox
            data-lightbox-src="assets/gallery/photo1.jpg"
            data-lightbox-alt="Rover on the test course">
      <span class="luna-gallery__img">...</span>
    </button>

  If data-lightbox-src is omitted (e.g. placeholder photos that
  haven't been added yet), the lightbox opens with just the
  alt text shown instead of an image — once a real photo is
  added via data-lightbox-src, it displays automatically.

  No edits needed here to use it on a new page — just include
  this script and add the attributes to your markup.
  ============================================================
*/

(function () {
  "use strict";

  function initLightbox() {
    const items = document.querySelectorAll("[data-lightbox]");
    if (!items.length) return;

    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML =
      '<button class="lightbox-overlay__close" aria-label="Close">&times;</button>' +
      '<div class="lightbox-overlay__frame"></div>';
    document.body.appendChild(overlay);

    const frame = overlay.querySelector(".lightbox-overlay__frame");
    const closeBtn = overlay.querySelector(".lightbox-overlay__close");

    function open(src, alt) {
      if (src) {
        frame.style.backgroundImage = "url('" + src + "')";
        frame.textContent = "";
      } else {
        frame.style.backgroundImage = "none";
        frame.textContent = alt || "Image coming soon";
      }
      overlay.classList.add("is-open");
      overlay.setAttribute("aria-hidden", "false");
      document.body.classList.add("lightbox-locked");
    }

    function close() {
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      document.body.classList.remove("lightbox-locked");
    }

    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const src = item.getAttribute("data-lightbox-src") || "";
        const alt = item.getAttribute("data-lightbox-alt") || "";
        open(src, alt);
      });
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
    closeBtn.addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  document.addEventListener("DOMContentLoaded", initLightbox);
})();
