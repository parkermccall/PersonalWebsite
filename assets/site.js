/* ============================================================
   SHARED HEADER + FOOTER — edit here ONCE, every page updates.
   Each page loads this via:
     <script src="/assets/site.js" defer></script>   (in <head>)
   The correct nav link is highlighted automatically based on
   the page URL, so no per-page "active" class is needed.
   ============================================================ */
(function () {

  /* ---- EDIT NAV LINKS HERE ---- */
  const LINKS = [
    { href: '/',           label: '/Home' },
    { href: '/resume/',    label: '/Resume' },
    { href: '/portfolio/', label: '/Portfolio' },
    { href: '/Aerrow/',    label: '/Aerrow' },
    { href: '/contact/',   label: '/Contact' },
  ];

  /* ---- EDIT FOOTER HERE ---- */
  const FOOTER = `
<footer><div class="wrap foot-in">
  <span>© 2026 PARKER McCALL · NC STATE MAE</span>
  <span><a href="/">HOME</a> · <a href="/portfolio/">PORTFOLIO</a> · <a href="/contact/">CONTACT</a></span>
</div></footer>`;

  /* ---- HEADER + FOOTER STYLES (uses each page's :root color variables) ---- */
  const CSS = `
nav{position:sticky;top:0;z-index:50;backdrop-filter:blur(10px);background:rgba(7,7,7,.7);border-bottom:1px solid var(--line)}
.nav-in{display:flex;align-items:center;justify-content:space-between;height:70px}
.logo{font-family:var(--mono);font-weight:700;letter-spacing:.18em;font-size:13px}
.nav-links{display:flex;gap:26px;font-family:var(--mono);font-size:12px;letter-spacing:.1em}
.nav-links a{color:var(--dim);transition:color .2s;position:relative;padding:4px 0}
.nav-links a:hover,.nav-links a.active{color:var(--ink)}
.nav-links a:hover::after,.nav-links a.active::after{content:'';position:absolute;bottom:-4px;left:0;width:100%;height:2px;background:var(--hot)}
.burger{display:none;font-family:var(--mono);color:var(--dim);background:none;border:1px solid var(--line2);padding:6px 12px;cursor:pointer;letter-spacing:.1em}
footer{border-top:1px solid var(--line);padding:40px 0}
.foot-in{display:flex;justify-content:space-between;align-items:center;font-family:var(--mono);font-size:11px;letter-spacing:.16em;color:var(--faint);flex-wrap:wrap;gap:16px}
.foot-in a:hover{color:var(--hot)}
@media(max-width:780px){
  .nav-links{display:none}
  .burger{display:block}
  .nav-links.open{display:flex;position:absolute;top:70px;left:0;right:0;flex-direction:column;background:var(--panel);border-bottom:1px solid var(--line);padding:20px 22px;gap:18px}
}`;

  /* ---- no edits needed below ---- */
  document.head.insertAdjacentHTML('beforeend', '<style>' + CSS + '</style>');

  const path = location.pathname.toLowerCase();
  const isActive = (href) =>
    href === '/' ? (path === '/' || path === '/index.html')
                 : path.startsWith(href.toLowerCase());

  const navLinks = LINKS.map(l =>
    `<a href="${l.href}"${isActive(l.href) ? ' class="active"' : ''}>${l.label}</a>`
  ).join('');

  const NAV = `
<nav><div class="wrap nav-in">
  <a href="/" class="logo">PARKER McCALL</a>
  <button class="burger" id="site-burger">MENU</button>
  <div class="nav-links" id="nl">${navLinks}</div>
</div></nav>`;

  function inject() {
    document.body.insertAdjacentHTML('afterbegin', NAV);
    document.body.insertAdjacentHTML('beforeend', FOOTER);
    document.getElementById('site-burger').addEventListener('click', function () {
      document.getElementById('nl').classList.toggle('open');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
