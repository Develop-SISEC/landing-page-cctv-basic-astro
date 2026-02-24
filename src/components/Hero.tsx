// Hero.tsx
import React, { useState, useCallback } from "react";
import "../Styles/Hero.css";

import LogoImg from "../assets/images/image.webp";
import MenuIcon from "../assets/images/menu.png";
import CloseIcon from "../assets/images/close.png";

const Hero: React.FC = () => {
  const whatsappNumber = "529984128573";
  const whatsappMessage =
    "¡Hola! Me interesa conocer más sobre sus servicios de videovigilancia en Cancún.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id);
    if (section) {
      setMenuOpen(false);

      requestAnimationFrame(() => {
        const offset = section.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: "smooth" });
      });
    }
  }, []);

  const navItems = [
    { name: "Inicio", id: "hero" },
    { name: "Beneficios", id: "beneficios" },
    { name: "Sectores", id: "sectores" },
    { name: "Cámaras", id: "productos" },
    { name: "Blog", url: "/blog/" },
    { name: "Contacto", id: "cta" },
  ];

  return (
    <section className="hero" id="hero">
      <header className="hero-header">
        <a href="#hero" className="hero-logo-link" aria-label="Volver al inicio">
          <img
            src={LogoImg.src}
            alt="Grupo SAOM - Cámaras de Seguridad"
            className="hero-logo"
            width={180}
            height={62}
            decoding="async"
          />
        </a>

        <nav className="hero-nav" aria-label="Menú de navegación">
          {navItems.map((item) => (
            'url' in item ? (
              <a href={item.url} key={item.name} className="nav-link-btn">
                {item.name}
              </a>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link-btn"
                type="button"
              >
                {item.name}
              </button>
            )
          ))}
        </nav>

        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <img
            src={menuOpen ? CloseIcon.src : MenuIcon.src}
            alt=""
            aria-hidden="true"
            width={35}
            height={35}
            decoding="async"
          />
        </button>

        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              'url' in item ? (
                <a
                  key={`${item.name}-mobile`}
                  href={item.url}
                  className="mobile-nav-link"
                >
                  {item.name}
                </a>
              ) : (
                <button
                  key={`${item.id}-mobile`}
                  onClick={() => scrollToSection(item.id)}
                  type="button"
                >
                  {item.name}
                </button>
              )
            ))}
          </div>
        )}
      </header>

      {/* Imagen HERO (posible LCP) */}
      <picture className="hero-picture">
        <source type="image/webp" srcSet="/camara.webp" />
        <img
          src="/camara.webp"
          alt="Sistema de videovigilancia inteligente en Cancún"
          className="hero-bg"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1600}
          height={900}
        />
      </picture>

      <div className="hero-overlay">
        <div className="hero-text">
          <h1>Cámaras de Seguridad en Cancún - Videovigilancia Inteligente</h1>
          <h2>Protección Integral con Cámaras de Seguridad</h2>
          <p>
            Protege tu empresa o residencia con sistemas de videovigilancia
            avanzada. Monitoreo en tiempo real y control total.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
            data-gtm-id="cta-hero-asesoria"
          >
            Solicita tu asesoría
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
