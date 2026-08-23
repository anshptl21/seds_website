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
    return linkFile === current;
  }

  function buildSidebar() {
    const list = document.getElementById("sidebar-links");
    if (!list || typeof NAV_LINKS === "undefined") return;

    NAV_LINKS.forEach((item, i) => {
      const li = document.createElement("li");
      li.className = "sidebar__item";
      li.style.transitionDelay = (i * 45) + "ms";

      const hasChildren = Array.isArray(item.children) && item.children.length > 0;

      if (!hasChildren) {
        const a = document.createElement("a");
        a.href = item.href;
        a.className = "sidebar__link";
        a.textContent = item.label;
        highlightCurrentPage(a);
        li.appendChild(a);
        list.appendChild(li);
        return;
      }

      // Parent item — may or may not have its own href.
      li.classList.add("sidebar__item--parent");

      const row = document.createElement("div");
      row.className = "sidebar__parent-row";

      let parentIsActive = false;

      if (item.href) {
        const a = document.createElement("a");
        a.href = item.href;
        a.className = "sidebar__link sidebar__link--parent";
        a.textContent = item.label;
        parentIsActive = highlightCurrentPage(a);
        row.appendChild(a);
      } else {
        const span = document.createElement("span");
        span.className = "sidebar__link sidebar__link--parent sidebar__link--label";
        span.textContent = item.label;
        row.appendChild(span);
      }

      const toggleBtn = document.createElement("button");
      toggleBtn.type = "button";
      toggleBtn.className = "sidebar__submenu-toggle";
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.setAttribute("aria-label", "Toggle " + item.label + " submenu");
      toggleBtn.innerHTML = '<span class="sidebar__submenu-chevron" aria-hidden="true"></span>';
      row.appendChild(toggleBtn);

      li.appendChild(row);

      const sublist = document.createElement("ul");
      sublist.className = "sidebar__sublist";

      let childIsActive = false;

      item.children.forEach((child) => {
        const subLi = document.createElement("li");
        subLi.className = "sidebar__subitem";
        const subA = document.createElement("a");
        subA.href = child.href;
        subA.className = "sidebar__sublink";
        subA.textContent = child.label;
        if (highlightCurrentPage(subA)) childIsActive = true;
        subLi.appendChild(subA);
        sublist.appendChild(subLi);
      });

      li.appendChild(sublist);
      list.appendChild(li);

      // Auto-expand if the current page is this parent or one of its children.
      if (parentIsActive || childIsActive) {
        li.classList.add("is-open");
        toggleBtn.setAttribute("aria-expanded", "true");
      }

      toggleBtn.addEventListener("click", () => {
        const isOpen = li.classList.toggle("is-open");
        toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
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
