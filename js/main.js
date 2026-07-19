/*
  ============================================================
  SITE NAVIGATION — sidebar build + animation
  ============================================================
  Reads NAV_LINKS from nav-config.js and builds the sidebar
  menu automatically, then wires up the open/close animation.
  You should not need to edit this file when adding pages —
  edit js/nav-config.js instead.
  ============================================================
*/

(function () {
  "use strict";

  function highlightCurrentPage(link) {
    const current = window.location.pathname.replace(/\/+$/, "").split("/").pop() || "index.html";
    const linkFile = link.href.split("/").pop();
    if (linkFile === current) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  }

  function buildSidebar() {
    const list = document.getElementById("sidebar-links");
    if (!list || typeof NAV_LINKS === "undefined") return;

    NAV_LINKS.forEach((item, i) => {
      const li = document.createElement("li");
      li.className = "sidebar__item";
      li.style.transitionDelay = (i * 45) + "ms";

      const a = document.createElement("a");
      a.href = item.href;
      a.className = "sidebar__link";
      a.textContent = item.label;

      highlightCurrentPage(a);
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  function initSidebarToggle() {
    const toggleBtn = document.getElementById("nav-toggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebar-overlay");
    const closeBtn = document.getElementById("sidebar-close");

    if (!toggleBtn || !sidebar || !overlay) return;

    function openSidebar() {
      document.body.classList.add("sidebar-open");
      toggleBtn.setAttribute("aria-expanded", "true");
      sidebar.setAttribute("aria-hidden", "false");
    }

    function closeSidebar() {
      document.body.classList.remove("sidebar-open");
      toggleBtn.setAttribute("aria-expanded", "false");
      sidebar.setAttribute("aria-hidden", "true");
    }

    toggleBtn.addEventListener("click", function () {
      const isOpen = document.body.classList.contains("sidebar-open");
      isOpen ? closeSidebar() : openSidebar();
    });

    overlay.addEventListener("click", closeSidebar);
    if (closeBtn) closeBtn.addEventListener("click", closeSidebar);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeSidebar();
    });
  }

  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    window.addEventListener("scroll", function () {
      header.classList.toggle("site-header--scrolled", window.scrollY > 10);
    }, { passive: true });
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildSidebar();
    initSidebarToggle();
    initHeaderScroll();
  });
})();
