"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, COMERCIOS } from "@/data/comercios";
import MerchantCard from "./MerchantCard";
import PromoCarousel from "./PromoCarousel";
import { SearchIcon, WhatsAppIcon } from "./icons";

const REGISTER_WA =
  "https://wa.me/5491100000000?text=" +
  encodeURIComponent(
    "Hola! Quiero publicar mi comercio en la guía de Comercios de Pilar 🏪",
  );

export default function HomeDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("todos");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return COMERCIOS.filter((c) => {
      const catMatch = category === "todos" || c.category === category;
      if (!catMatch) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.address.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        (c.instagram ?? "").toLowerCase().includes(q.replace(/^@/, "")) ||
        (c.website ?? "").toLowerCase().includes(q) ||
        (c.phone ?? "").replace(/\s/g, "").includes(q.replace(/\s/g, ""))
      );
    }).sort((a, b) => a.name.localeCompare(b.name, "es"));
  }, [query, category]);

  const uniqueCategories = new Set(COMERCIOS.map((c) => c.category)).size;

  return (
    <>
      <header className="hero">
        <div className="hero-inner">
          <span className="hero-badge">📍 Pilar, Buenos Aires</span>
          <h1>
            Mira todos los <em>comercios</em> que tenemos en pilar
          </h1>
          <p>
            Encontrá todo lo que necesitás cerca tuyo. Apoyá a los comerciantes
            locales de Pilar.
          </p>
          <a className="hero-cta" href="#comercios">
            <SearchIcon />
            Explorar comercios
          </a>
          <div className="hero-stats">
            <div>
              <div className="stat-num">{COMERCIOS.length}</div>
              <div className="stat-label">Comercios</div>
            </div>
            <div>
              <div className="stat-num">{uniqueCategories}</div>
              <div className="stat-label">Categorías</div>
            </div>
            <div>
              <div className="stat-num">Pilar</div>
              <div className="stat-label">Partido</div>
            </div>
          </div>
        </div>
      </header>

      <div className="search-section">
        <div className="search-box">
          <span className="search-icon">
            <SearchIcon size={22} />
          </span>
          <input
            autoComplete="off"
            placeholder="Buscá por nombre, rubro o dirección…"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="search-btn"
            type="button"
            onClick={() => undefined}
          >
            Buscar
          </button>
        </div>
      </div>

      <PromoCarousel />

      <div className="filter-section">
        <div className="filter-label">Filtrar por categoría</div>
        <div className="pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`pill${category === cat.id ? " active" : ""}`}
              onClick={() => setCategory(cat.id)}
            >
              <span className="pill-icon">{cat.icon}</span> {cat.label}
            </button>
          ))}
        </div>
      </div>

      <section className="grid-section" id="comercios">
        <div className="grid-header">
          <h2>Comercios disponibles</h2>
          <span className="grid-count">
            {filtered.length} resultado{filtered.length === 1 ? "" : "s"}
          </span>
        </div>
        {filtered.length === 0 ? (
          <div className="empty-state">
            <div className="empty-emoji">🔍</div>
            <p className="empty-title">No encontramos resultados</p>
            <p className="empty-text">Probá con otro nombre o categoría</p>
          </div>
        ) : (
          <div className="grid">
            {filtered.map((comercio) => (
              <MerchantCard key={comercio.id} comercio={comercio} />
            ))}
          </div>
        )}
      </section>

      <section className="register-banner">
        <h2>
          ¿Tenés un local en Pilar?
          <br />
          <em>¡Publicalo!</em>
        </h2>
        <p>
          Sumate a la guía de comercios locales y llegá a miles de vecinos de
          Pilar todos los días.
        </p>
        <a
          className="btn-register"
          href={REGISTER_WA}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={22} />
          Publicar mi comercio por WhatsApp
        </a>
      </section>

      <footer>
        <p>
          © {new Date().getFullYear()} Comercios de Pilar · Hecho con ❤️ para el
          partido de Pilar, Buenos Aires
        </p>
        <p className="footer-note">
          Las fotos son ilustrativas. Los números de WhatsApp deben actualizarse
          por cada comerciante.
        </p>
      </footer>
    </>
  );
}
