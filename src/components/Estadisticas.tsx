import React, { useEffect, useState } from "react";
import "../Styles/Estadisticas.css";

const whatsappNumber = "529984128573";
const estadisticasCtaMsg = encodeURIComponent("Hola, me gustaría unirme a sus más de 2,000 clientes satisfechos. ¿Podrían contactarme para recibir más información?");

const estadisticas = [
  { numeroFinal: 2000, descripcion: "Clientes Satisfechos" },
  { numeroFinal: 35, descripcion: "Años de Experiencia en Seguridad" },
  { numeroFinal: 15, descripcion: "Proyectos en Curso" },
  { numeroFinal: 500, descripcion: "Proyectos Concluidos con Éxito" },
];

const Estadisticas: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(estadisticas.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".estadisticas-grid");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;
        if (sectionTop < triggerPoint) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCounters((prevCounters) =>
          prevCounters.map((counter, i) =>
            counter < estadisticas[i].numeroFinal
              ? counter + Math.ceil(estadisticas[i].numeroFinal / 50)
              : estadisticas[i].numeroFinal
          )
        );
      }, 30);

      setTimeout(() => clearInterval(interval), 2000);
    }
  }, [isVisible]);

  return (
    <section className="estadisticas" id="estadisticas" aria-label="Resultados y Experiencia en Videovigilancia">
      <div className="estadisticas-container">
        <h2 className="estadisticas-title">Resultados que nos Respaldan</h2>
        <p className="estadisticas-subtitle">
          Con más de 35 años de experiencia, hemos asegurado hogares y negocios con tecnología avanzada.
        </p>

        <div className="estadisticas-grid">
          {estadisticas.map((item, index) => (
            <div key={index} className={`estadistica-item ${isVisible ? "show" : ""}`} role="presentation">
              <h2 className="estadistica-numero">{counters[index]}</h2>
              <p className="estadistica-descripcion">{item.descripcion}</p>
            </div>
          ))}
        </div>

        {/* CTA inline - Credibilidad alta */}
        <div className="seccion-cta-inline">
          <p className="seccion-cta-texto">Más de 2,000 clientes ya confían en nosotros. ¿Te unirás al equipo?</p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${estadisticasCtaMsg}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="seccion-cta-btn"
            aria-label="Contactar a Grupo SAOM por WhatsApp"
            data-gtm-id="cta-estadisticas-cliente"
          >
            ⭐ Quiero ser su próximo cliente
          </a>
        </div>
      </div>
    </section>
  );
};

export default Estadisticas;
