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
  { label: "Home", href: "/seds_website/index.html" },
  { label: "About", href: "/seds_website/pages/about.html" },
  { label: "Join", href: "/seds_website/pages/join.html" },
  { label: "Team", href: "/seds_website/pages/team.html" },
  { label: "Design Teams", href: "/seds_website/pages/design_teams.html" },
  { label: "Speakers", href: "/seds_website/pages/speakers.html" },
  { label: "Space Networking Fair", href: "/seds_website/spacenetworkingfair.html" },
  { label: "SAC", href: "/seds_website/studentastronautcorps.html" },
  { label: "Solar Sail", href: "/seds_website/sedssolarsail.html" },
  { label: "Lunabotics", href: "/seds_website/sedslunabotics.html" },
  { label: "Member Portal", href: "/seds_website/memberportal.html" },
  { label: "Contact", href: "/seds_website/pages/contact.html" },
];
