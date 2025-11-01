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
