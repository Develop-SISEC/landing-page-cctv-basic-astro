import React, { useEffect, useState } from 'react';
import '../Styles/Testimonios.css';

const testimonios = [
    { nombre: "Carlos Sanchez", comentario: "Excelente servicio y calidad de equipos." },
    { nombre: "Israel Ojeda", comentario: "Muy profesionales, atención de especialistas." },
    { nombre: "Anahi Ruíz", comentario: "Muy profesionales, explicaron todo el proceso y resolvieron mis dudas. Recomiendo ampliamente." },
    { nombre: "Lenueba", comentario: "Me brindaron una asesoría de alta calidad, la instalación realizada fue rápida y un trabajo muy limpio. Me instalaron un sistema de alarma." },
];

const MAX_LENGTH = 100;
const colorClasses = ["perfil-azul", "perfil-naranja", "perfil-morado", "perfil-rojo"];

const Testimonios: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector(".testimonios-grid");
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

    return (
        <section className="testimonios" id="testimonios">
            <div className="testimonios-container">
                <h2 className="testimonios-title">Lo que dicen nuestros clientes satisfechos</h2>
                <p className="testimonios-subtitle">
                    Más de 500 familias y empresas en Cancún confían en nuestras soluciones de videovigilancia y seguridad.
                </p>

                <div className="testimonios-grid">
                    {testimonios.map((t, index) => {
                        const isExpanded = expanded[index] || false;
                        const shouldTruncate = t.comentario.length > MAX_LENGTH;
                        const colorClass = colorClasses[index % colorClasses.length];
                        return (
                            <div key={index} className={`testimonio-card ${isVisible ? "show" : ""}`}>
                                <div className="testimonio-header">
                                    <div className={`perfil-icon ${colorClass}`}>
                                        {t.nombre.charAt(0).toUpperCase()}
                                    </div>
                                    <span>{t.nombre}</span>
                                </div>
                                <div className="testimonio-stars">★★★★★</div>
                                <p className="testimonio-text">
                                    {shouldTruncate && !isExpanded ? t.comentario.substring(0, MAX_LENGTH) + "..." : t.comentario}
                                </p>
                                {shouldTruncate && (
                                    <button
                                        className="ver-mas"
                                        onClick={() => setExpanded(prev => ({ ...prev, [index]: !isExpanded }))}>
                                        {isExpanded ? "Ver menos" : "Ver más"}
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* BOTÓN DE RESEÑA DE GOOGLE */}
                <div className="google-review-container">
                    <a 
                        href="https://g.page/r/Cc8l1C4njd6bEAE/review" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="google-review-btn"
                        aria-label="Dejar una reseña en Google"
                    >
                        Dejar una reseña en Google
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonios;