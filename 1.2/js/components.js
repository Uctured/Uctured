/* ============================================================
   UCTURED — Shared HTML Components (Navbar + Footer)
   Injected via JS to avoid repetition across pages
   ============================================================ */

const SITE_ROOT = (() => {
  // Detect if we are in /pages/ subfolder
  const path = window.location.pathname;
  return path.includes('/pages/') ? '../' : './';
})();

/* ── NAVBAR ──────────────────────────────────────────────── */
function renderNavbar() {
  const root = SITE_ROOT;
  const navHTML = `
<nav class="navbar" role="navigation" aria-label="Menú principal">
  <div class="container navbar__inner">

    <!-- 1) Logo -->
    <div class="navbar__brand">
      <a href="${root}index.html" class="navbar__logo" aria-label="Uctured inicio">
        <img src="${root}img/logo/uctured-logo.png" alt="Uctured" width="190" height="52" style="height:52px;width:auto;" loading="eager"/>
      </a>
    </div>

    <!-- 2) Nav links -->
    <div class="navbar__nav">
    <ul class="navbar__menu">
      <li><a href="${root}index.html">Inicio</a></li>
      <li class="has-submenu">
        <a href="#" aria-haspopup="true" aria-expanded="false">
          Servicios
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </a>
        <div class="mega-menu" role="menu">
          <a class="mega-menu__item" href="${root}pages/disenyo-web-lite.html" role="menuitem">
            <div class="mega-menu__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <div class="mega-menu__text">
              <div class="mega-menu__name">Diseño Web Lite</div>
              <div class="mega-menu__desc">Hasta 5 páginas · desde 299 €</div>
            </div>
          </a>
          <a class="mega-menu__item" href="${root}pages/disenyo-web-pro.html" role="menuitem">
            <div class="mega-menu__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <div class="mega-menu__text">
              <div class="mega-menu__name">Diseño Web Pro</div>
              <div class="mega-menu__desc">Hasta 10+ páginas · premium</div>
            </div>
          </a>
          <a class="mega-menu__item" href="${root}pages/tienda-online-lite.html" role="menuitem">
            <div class="mega-menu__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
            <div class="mega-menu__text">
              <div class="mega-menu__name">Tienda Online Lite</div>
              <div class="mega-menu__desc">Hasta 50 productos · WooCommerce</div>
            </div>
          </a>
          <a class="mega-menu__item" href="${root}pages/tienda-online-pro.html" role="menuitem">
            <div class="mega-menu__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            </div>
            <div class="mega-menu__text">
              <div class="mega-menu__name">Tienda Online Pro</div>
              <div class="mega-menu__desc">Productos ilimitados · avanzada</div>
            </div>
          </a>
          <a class="mega-menu__item" href="${root}pages/landing-page-lite.html" role="menuitem">
            <div class="mega-menu__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <div class="mega-menu__text">
              <div class="mega-menu__name">Landing Page Lite</div>
              <div class="mega-menu__desc">1 página de captación · conversión</div>
            </div>
          </a>
          <a class="mega-menu__item" href="${root}pages/landing-page-pro.html" role="menuitem">
            <div class="mega-menu__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <div class="mega-menu__text">
              <div class="mega-menu__name">Landing Page Pro</div>
              <div class="mega-menu__desc">A/B testing · CRM · Analytics</div>
            </div>
          </a>
          <a class="mega-menu__item" href="${root}pages/desarrollo-medida.html" role="menuitem">
            <div class="mega-menu__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <div class="mega-menu__text">
              <div class="mega-menu__name">Desarrollo a Medida</div>
              <div class="mega-menu__desc">React, Next.js, Node.js · custom</div>
            </div>
          </a>
          <a class="mega-menu__item" href="${root}pages/hosting-dominio.html" role="menuitem">
            <div class="mega-menu__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
            </div>
            <div class="mega-menu__text">
              <div class="mega-menu__name">Hosting y Dominio</div>
              <div class="mega-menu__desc">SSL · backups · 99.9% uptime</div>
            </div>
          </a>
          <a class="mega-menu__item" href="${root}pages/disenyo-grafico.html" role="menuitem">
            <div class="mega-menu__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
            </div>
            <div class="mega-menu__text">
              <div class="mega-menu__name">Diseño Gráfico</div>
              <div class="mega-menu__desc">Logos · branding · identidad visual</div>
            </div>
          </a>
        </div>
      </li>
      <li><a href="${root}pages/empresa.html">Empresa</a></li>
      <li><a href="${root}pages/garantia.html">Garantía</a></li>
      <li><a href="${root}pages/contacto.html">Contacto</a></li>
    </ul>
    </div>

    <!-- 3) Actions -->
    <div class="navbar__actions">
      <a href="https://clientes.uctured.com/" target="_blank" rel="noopener" class="btn btn--ghost btn--sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
        Área de Clientes
      </a>
      <a href="${root}pages/contacto.html" class="btn btn--primary btn--sm">
        Solicitar Presupuesto
      </a>
    </div>

    <!-- Hamburger (móvil) -->
    <button class="navbar__toggle" aria-label="Abrir menú" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- Mobile Menu -->
<div class="navbar__mobile" role="dialog" aria-modal="true" aria-label="Menú móvil">
  <nav class="navbar__mobile-menu">
    <a href="${root}index.html">Inicio</a>
    <div>
      <button class="navbar__mobile-sub-toggle" style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:0.85rem 1rem;font-weight:600;font-size:1rem;color:var(--text);border-bottom:1px solid var(--border);background:none;cursor:pointer;font-family:var(--font-body);">
        Servicios
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="transition:transform 0.25s;flex-shrink:0;"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="navbar__mobile-submenu">
        <a href="${root}pages/disenyo-web-lite.html">Diseño Web Lite</a>
        <a href="${root}pages/disenyo-web-pro.html">Diseño Web Pro</a>
        <a href="${root}pages/tienda-online-lite.html">Tienda Online Lite</a>
        <a href="${root}pages/tienda-online-pro.html">Tienda Online Pro</a>
        <a href="${root}pages/landing-page-lite.html">Landing Page Lite</a>
        <a href="${root}pages/landing-page-pro.html">Landing Page Pro</a>
        <a href="${root}pages/desarrollo-medida.html">Desarrollo a Medida</a>
        <a href="${root}pages/hosting-dominio.html">Hosting y Dominio</a>
        <a href="${root}pages/disenyo-grafico.html">Diseño Gráfico</a>
      </div>
    </div>
    <a href="${root}pages/empresa.html">Empresa</a>
    <a href="${root}pages/garantia.html">Garantía</a>
    <a href="${root}pages/contacto.html">Contacto</a>
  </nav>
  <div class="navbar__mobile-actions">
    <a href="https://clientes.uctured.com/" target="_blank" rel="noopener" class="btn btn--secondary w-full" style="justify-content:center;">Área de Clientes</a>
    <a href="${root}pages/contacto.html" class="btn btn--primary w-full" style="justify-content:center;">Solicitar Presupuesto Gratis</a>
  </div>
</div>
  `;

  const container = document.getElementById('navbar-container');
  if (container) {
    container.innerHTML = navHTML;
  } else {
    const div = document.createElement('div');
    div.innerHTML = navHTML;
    document.body.prepend(div);
  }
}

/* ── FOOTER ──────────────────────────────────────────────── */
function renderFooter() {
  const root = SITE_ROOT;
  const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__top">
      <!-- Brand -->
      <div class="footer__brand">
        <a href="${root}index.html" class="footer__logo">
          <img src="${root}img/logo/uctured-logo-white.png" alt="Uctured" width="150" height="40" style="height:40px;width:auto;" loading="lazy"/>
        </a>
        <p class="footer__desc">Agencia de diseño web profesional en España. Creamos webs que convierten visitas en clientes, desde 299 €.</p>
        <div class="footer__social">
          <a href="#" class="footer__social-link" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="#" class="footer__social-link" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" class="footer__social-link" aria-label="Twitter / X">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          <a href="https://wa.me/34711245375" class="footer__social-link" aria-label="WhatsApp" target="_blank" rel="noopener">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          </a>
        </div>
      </div>

      <!-- Servicios -->
      <div>
        <div class="footer__col-title">Servicios</div>
        <ul class="footer__links">
          <li><a href="${root}pages/disenyo-web-lite.html">Diseño Web Lite</a></li>
          <li><a href="${root}pages/disenyo-web-pro.html">Diseño Web Pro</a></li>
          <li><a href="${root}pages/tienda-online-lite.html">Tienda Online Lite</a></li>
          <li><a href="${root}pages/tienda-online-pro.html">Tienda Online Pro</a></li>
          <li><a href="${root}pages/landing-page-lite.html">Landing Page</a></li>
          <li><a href="${root}pages/desarrollo-medida.html">Desarrollo a Medida</a></li>
          <li><a href="${root}pages/hosting-dominio.html">Hosting y Dominio</a></li>
          <li><a href="${root}pages/disenyo-grafico.html">Diseño Gráfico</a></li>
        </ul>
      </div>

      <!-- Empresa -->
      <div>
        <div class="footer__col-title">Empresa</div>
        <ul class="footer__links">
          <li><a href="${root}pages/empresa.html">Quiénes somos</a></li>
          <li><a href="${root}pages/nuestro-recorrido.html">Nuestro Recorrido</a></li>
          <li><a href="https://clientes.uctured.com/" target="_blank" rel="noopener">Área de Clientes</a></li>
          <li><a href="${root}pages/contacto.html">Contacto</a></li>
        </ul>
      </div>

      <!-- Legal -->
      <div>
        <div class="footer__col-title">Legal</div>
        <ul class="footer__links">
          <li><a href="#">Política de Privacidad</a></li>
          <li><a href="#">Política de Cookies</a></li>
          <li><a href="#">Aviso Legal</a></li>
          <li><a href="#">Términos y Condiciones</a></li>
        </ul>
      </div>

      <!-- Contacto -->
      <div>
        <div class="footer__col-title">Contacto</div>
        <ul class="footer__links">
          <li style="color:rgba(255,255,255,0.6);font-size:0.85rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;margin-right:6px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.55 3.29a2 2 0 0 1 1.73-2.18H6.3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.9 8.91a16 16 0 0 0 6.29 6.29l.65-.65a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <a href="tel:+34711245375">711 24 53 75</a>
          </li>
          <li style="color:rgba(255,255,255,0.6);font-size:0.85rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;margin-right:6px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <a href="mailto:hola@uctured.com">hola@uctured.com</a>
          </li>
          <li style="margin-top:0.75rem;">
            <a href="https://wa.me/34711245375" target="_blank" rel="noopener" class="btn btn--success btn--sm" style="width:100%;justify-content:center;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              WhatsApp directo
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom">
      <span>© 2025 Uctured. Todos los derechos reservados.</span>
      <div class="footer__legal">
        <a href="#">Privacidad</a>
        <a href="#">Cookies</a>
        <a href="#">Aviso Legal</a>
      </div>
      <span style="display:flex;align-items:center;gap:0.4rem;">
        Hecho con
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#ef4444" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        en España
      </span>
    </div>
  </div>
</footer>

<!-- WhatsApp Floating Button -->
<a href="https://wa.me/34711245375" class="whatsapp-btn" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
  <span class="whatsapp-tooltip">¡Escríbenos!</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
</a>
  `;

  const container = document.getElementById('footer-container');
  if (container) {
    container.innerHTML = footerHTML;
  } else {
    const div = document.createElement('div');
    div.innerHTML = footerHTML;
    document.body.appendChild(div);
  }
}

/* ── CTA BANNER ──────────────────────────────────────────── */
function renderCTABanner() {
  const root = SITE_ROOT;
  const html = `
<section class="cta-banner" aria-label="Llamada a la acción">
  <div class="container">
    <div class="cta-banner__label">¿Tienes un proyecto?</div>
    <h2 class="display-md cta-banner__title">¿Listo para dar el salto digital?</h2>
    <p class="cta-banner__subtitle">Cuéntanos tu proyecto y te enviamos un presupuesto personalizado en menos de 24 horas. Sin compromisos.</p>
    <div class="cta-banner__actions">
      <a href="${root}pages/contacto.html" class="btn btn--lg" style="background:white;color:var(--primary);box-shadow:0 4px 20px rgba(0,0,0,0.15);">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Solicitar Presupuesto Gratis
      </a>
      <a href="https://wa.me/34711245375" target="_blank" rel="noopener" class="btn btn--lg btn--ghost-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        WhatsApp: 711 24 53 75
      </a>
    </div>
  </div>
</section>
  `;

  const container = document.getElementById('cta-container');
  if (container) container.innerHTML = html;
}

/* ── INIT ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderCTABanner();
  renderFooter();
});
