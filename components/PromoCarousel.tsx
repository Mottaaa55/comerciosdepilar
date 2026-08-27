"use client";

import { useEffect, useState } from "react";

const SLIDES = [
  {
    title: "Estacionamiento libre y gratuito",
    text: "Martes, jueves y sábados a partir de las 13 hs.",
  },
  {
    title: "Medios de pago y promociones",
    text: "En el centro de Pilar hay muchos. Por ejemplo, descuentos con Cuenta DNI en varios locales.",
  },
  {
    title: "3 y 6 cuotas con American Express",
    text: "Todos los días, en locales adheridos.",
  },
  {
    title: "3 cuotas sin interés BBVA",
    text: "Rubros y días determinados, en locales adheridos.",
  },
];

export default function PromoCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <aside
      className="promo-carousel"
      aria-roledescription="carrusel"
      aria-label="Publicidad y promociones del centro"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="promo-viewport">
        <div
          className="promo-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((slide) => (
            <div className="promo-slide" key={slide.title}>
              <div className="promo-kicker">Publicidad</div>
              <p className="promo-title">{slide.title}</p>
              <p className="promo-text">{slide.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="promo-dots" role="tablist">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            className={i === index ? "active" : ""}
            aria-label={slide.title}
            aria-selected={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </aside>
  );
}
