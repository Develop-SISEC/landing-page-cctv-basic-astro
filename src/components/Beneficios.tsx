import React from "react";
import "../Styles/Beneficios.css";

const whatsappNumber = "529984128573";
const beneficiosCtaMsg = encodeURIComponent("Hola, me interesó conocer más sobre los beneficios de sus cámaras de seguridad. ¿Podrían enviarme más información?");

// ✅ Usaremos rutas desde /public/Beneficios (sin imports)
// Estructura esperada:
// public/Beneficios/vanguardia.webp
// public/Beneficios/inteligente.webp
// public/Beneficios/monitoreo.webp
// public/Beneficios/soporte.webp

const beneficiosData = [
  {
    titulo: "Tecnología de Vanguardia",
    descripcion:
      "Soluciones de seguridad avanzadas con cámaras de videovigilancia para la protección continua de tu entorno.",
    img: "/Beneficios/vanguardia.webp",
    alt: "Tecnología de vanguardia en cámaras de videovigilancia",
  },
  {
    titulo: "Detección Inteligente",
    descripcion:
      "Cámaras de seguridad con visión nocturna y detección avanzada de movimiento, ideales para monitoreo en cualquier entorno.",
    img: "/Beneficios/inteligente.webp",
    alt: "Cámaras de seguridad con detección inteligente",
  },
  {
    titulo: "Monitoreo en Tiempo Real",
    descripcion:
      "Tecnologías innovadoras que garantizan el control total en tiempo real desde cualquier dispositivo.",
    img: "/Beneficios/monitoreo.webp",
    alt: "Monitoreo en tiempo real con cámaras de seguridad",
  },
  {
    titulo: "Soporte y Garantía",
    descripcion:
      "Equipo especializado en instalación, mantenimiento y asistencia técnica de sistemas de videovigilancia.",
    img: "/Beneficios/soporte.webp",
    alt: "Soporte y garantía en sistemas de videovigilancia",
  },
];

const Beneficios: React.FC = () => {
  return (
    <section className="beneficios" id="beneficios">
      <div className="beneficios-container">
        <h2 className="beneficios-title">Beneficios de Nuestras Cámaras de Seguridad</h2>
        <p className="beneficios-subtitle">
          Soluciones de videovigilancia avanzada diseñadas para tu tranquilidad y
          protección en cualquier entorno.
        </p>

        <div className="beneficios-grid">
          {beneficiosData.map((b, i) => (
            <div key={i} className="beneficio-card">
              <img
                src={b.img}
                alt={b.alt}
                className="beneficio-img"
                loading="lazy"
                decoding="async"
                width={600}
                height={280}
              />

              <div className="beneficio-overlay">
                <h3 className="beneficio-title">{b.titulo}</h3>
                <p className="beneficio-text">{b.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA inline - Awareness */}
        <div className="seccion-cta-inline">
          <p className="seccion-cta-texto">Descubre cómo podemos proteger tu hogar o negocio con tecnología avanzada.</p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${beneficiosCtaMsg}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="seccion-cta-btn seccion-cta-outline"
            aria-label="Ver todos los servicios de Grupo SAOM"
            data-gtm-id="cta-beneficios-servicios"
          >
            🔍 Conocer todos los servicios
          </a>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
