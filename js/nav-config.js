/*
  ============================================================
  NAVIGATION CONFIG
  ============================================================
  This is the ONLY file you need to touch to add a new subpage
  to the site. Add a new object to the NAV_LINKS array below,
  then create the matching HTML file inside /pages using
  /pages/_template.html as a starting point.

  Example — adding a "Sponsors" page:

    1. Copy pages/_template.html -> pages/sponsors.html
    2. Edit the title/content inside sponsors.html
    3. Add this line to the array below:
         { label: "Sponsors", href: "pages/sponsors.html" },

  The sidebar will pick it up automatically — no other files
  need to change. Order in this array = order in the menu.
  ============================================================
*/

const NAV_LINKS = [
  { label: "Home", href: "/index.html" },
  { label: "About", href: "/pages/about.html" },
  { label: "Missions", href: "/pages/missions.html" },
  { label: "Team", href: "/pages/team.html" },
  { label: "Sponsors", href: "/pages/sponsors.html" },
  { label: "Contact", href: "/pages/contact.html" },
];
