"use client";

import { useEffect, useState } from "react";

const SLIDES = [
  {
    theme: "parking",
    title: "Estacionamiento libre y gratuito",
    text: "Martes, jueves y sábados a partir de las 13 hs.",
    image: "/promos/estacionamiento.png",
    imageAlt: "Municipalidad de Pilar",
  },
  {
    theme: "dni",
    title: "Descuentos con Cuenta DNI",
    text: "En el centro de Pilar hay muchos medios de pago y promociones. En varios locales, descuentos con Cuenta DNI.",
    image: "/promos/cuenta-dni.png",
    imageAlt: "Cuenta DNI",
  },
  {
    theme: "amex",
    title: "3 y 6 cuotas con American Express",
    text: "Todos los días, en locales adheridos.",
    image: "/promos/amex.png",
    imageAlt: "American Express",
  },
  {
    theme: "bbva",
    title: "3 cuotas sin interés BBVA",
    text: "Rubros y días determinados, en locales adheridos.",
    image: "/promos/bbva.png",
    imageAlt: "BBVA",
  },
];

export default function PromoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <aside
      className="promo-carousel"
      aria-roledescription="carrusel"
      aria-label="Publicidad y promociones del centro"
    >
      <div className="promo-viewport">
        <div
          className="promo-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((slide) => (
            <div className={`promo-slide theme-${slide.theme}`} key={slide.theme}>
              <div className="promo-copy">
                <div className="promo-kicker">Publicidad</div>
                <p className="promo-title">{slide.title}</p>
                <p className="promo-text">{slide.text}</p>
              </div>
              {slide.image ? (
                <img
                  className="promo-logo"
                  src={slide.image}
                  alt={slide.imageAlt ?? ""}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <div className="promo-dots" role="tablist">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.theme}
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
