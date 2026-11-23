/* Centro de Beleza Leda May — interações */
(() => {
  'use strict';

  /* ---------- Agendamento via WhatsApp ---------- */
  const WHATS_NUMBER = '554599911991';

  const whatsLink = (servico, msgCustom) => {
    const msg = msgCustom
      || (servico
        ? `Olá! Gostaria de agendar: ${servico}`
        : 'Olá! Gostaria de agendar um horário');
    return `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  // data-servico="Nome" → mensagem de agendamento; data-msg="..." → mensagem livre
  document.querySelectorAll('[data-servico]').forEach((el) => {
    el.href = whatsLink(el.dataset.servico.trim(), el.dataset.msg);
  });

  /* ---------- Pré-visualização local (file://) ----------
     Aberto direto do disco, o navegador não abre o index.html de uma pasta
     (mostra a listagem de arquivos). Completa os links internos só nesse caso;
     no site publicado nada muda. */
  if (location.protocol === 'file:') {
    document.querySelectorAll('a[href]').forEach((a) => {
      const href = a.getAttribute('href');
      if (/^([a-z]+:|#|\/\/)/i.test(href)) return; // externos, âncoras, tel:, mailto:
      const [path, hash] = href.split('#');
      if (path === '') return;
      if (path.endsWith('/') || path === '.' || path === '..') {
        a.setAttribute('href', `${path.replace(/\/?$/, '/')}index.html${hash !== undefined ? `#${hash}` : ''}`);
      }
    });
  }

  /* ---------- Menu mobile ---------- */
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');

  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.sr-only').textContent = open ? 'Fechar menu' : 'Abrir menu';
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
    window.matchMedia('(min-width: 900px)').addEventListener('change', (mq) => { if (mq.matches) setMenu(false); });
  }

  /* ---------- Reveal ao rolar ---------- */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');

  if (!reduceMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    // pequeno atraso em cascata para itens irmãos
    revealEls.forEach((el) => {
      const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
      const i = siblings.indexOf(el);
      if (i > 0) el.style.transitionDelay = `${Math.min(i, 5) * 80}ms`;
      io.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- Ano no rodapé ---------- */
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Header com sombra ao rolar ---------- */
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
})();
