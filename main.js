// main.js

document.addEventListener("DOMContentLoaded", () => {
  // buscamos los elementos del slider
  const slides = document.querySelectorAll(".logos__slide");
  const dotsContainer = document.getElementById("dots");
  const prevBtn = document.getElementById("prev-slide");
  const nextBtn = document.getElementById("next-slide");

  // si esta página no tiene slider, salimos y no da error
  if (!slides.length || !dotsContainer || !prevBtn || !nextBtn) {
    return;
  }

  let current = 0;

  // crear los dots dinámicamente
  slides.forEach((_, i) => {
    const d = document.createElement("button");
    d.className = "dot" + (i === 0 ? " dot--active" : "");
    d.setAttribute("data-idx", i);
    dotsContainer.appendChild(d);
  });

  const dots = document.querySelectorAll(".dot");

  function showSlide(idx) {
    // quitar activo a todos
    slides.forEach((s) => s.classList.remove("logos__slide--active"));
    dots.forEach((d) => d.classList.remove("dot--active"));

    // activar el actual
    slides[idx].classList.add("logos__slide--active");
    dots[idx].classList.add("dot--active");
    current = idx;
  }

  // botón siguiente
  nextBtn.addEventListener("click", () => {
    const next = (current + 1) % slides.length;
    showSlide(next);
  });

  // botón anterior
  prevBtn.addEventListener("click", () => {
    const prev = (current - 1 + slides.length) % slides.length;
    showSlide(prev);
  });

  // click en los dots
  dots.forEach((d) => {
    d.addEventListener("click", (e) => {
      const idx = Number(e.target.getAttribute("data-idx"));
      showSlide(idx);
    });
  });
});

// Toggle del menú responsive y accesibilidad básica
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  if(!btn || !nav) return;
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('nav--open', !expanded);
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && nav.classList.contains('nav--open')){
      nav.classList.remove('nav--open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });

  // Cerrar al hacer click fuera (en mobile)
  document.addEventListener('click', (e) => {
    if(!nav.contains(e.target) && !btn.contains(e.target) && nav.classList.contains('nav--open')){
      nav.classList.remove('nav--open');
      btn.setAttribute('aria-expanded','false');
    }
  });
});
