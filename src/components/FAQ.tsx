import React, { useState } from 'react';
import '../Styles/FAQ.css';

const whatsappNumber = "529984128573";
const faqCtaMsg = encodeURIComponent("¡Hola! Tengo algunas preguntas sobre sus servicios de videovigilancia y me gustaría recibir más información.");

const faqs = [
    {
        pregunta: "¿Quiénes somos en Grupo SAOM?",
        respuesta: "Grupo SAOM es una empresa especializada en seguridad electrónica y videovigilancia con más de 20 años de experiencia. Ofrecemos soluciones personalizadas para hogares, empresas e industrias, garantizando tecnología avanzada y un servicio de calidad.",
    },
    {
        pregunta: "¿Qué servicios ofrece Grupo SAOM?",
        respuesta: "Nuestros servicios incluyen instalación de cámaras de seguridad, integración de sistemas de videovigilancia, configuración de control de accesos, mantenimiento preventivo y correctivo, asesoría en seguridad y monitoreo remoto.",
    },
    {
        pregunta: "¿Qué soluciones de seguridad ofrecemos?",
        respuesta: "Brindamos soluciones integrales de seguridad, como videovigilancia con inteligencia artificial, monitoreo 24/7, reconocimiento facial, detección de movimiento avanzada, cámaras con visión nocturna y sistemas de alarma conectados a la nube.",
    },
    {
        pregunta: "¿Es posible monitorear las cámaras de forma remota?",
        respuesta: "Sí, nuestras cámaras permiten acceso remoto a través de aplicaciones móviles y plataformas web, lo que te permite monitorear tu propiedad en tiempo real desde cualquier parte del mundo.",
    },
    {
        pregunta: "¿Qué tipos de cámaras de seguridad instalamos?",
        respuesta: "Instalamos cámaras de seguridad para interiores, exteriores, con movimiento PTZ, WiFi, ojo de pez y visión nocturna. También ofrecemos soluciones con reconocimiento facial, audio bidireccional y análisis de video.",
    },
    {
        pregunta: "¿Dónde ofrecemos nuestros servicios?",
        respuesta: "Nuestra sede está en Cancún, Quintana Roo, pero brindamos servicios en toda la Riviera Maya, incluyendo Playa del Carmen y Tulum. También podemos atender clientes en otras partes de México bajo coordinación previa.",
    },
    {
        pregunta: "¿Cómo puedo solicitar una cotización o asesoría?",
        respuesta: "Puedes contactarnos a través de nuestra página web, redes sociales, correo electrónico o teléfono. Nuestro equipo de expertos te ayudará a encontrar la mejor solución de seguridad para tus necesidades.",
    },
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq" id="faq">
            <div className="faq-container">
                <h2 className="faq-title">Preguntas Frecuentes</h2>
                <p className="faq-subtitle">Resolvemos tus dudas sobre nuestros servicios y soluciones de seguridad.</p>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.pregunta}</h3>
                                <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.respuesta}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA inline - Cierre de objeciones */}
                <div className="seccion-cta-inline seccion-cta-faq">
                    <p className="seccion-cta-texto">¿Aún tienes dudas? Nuestro equipo resuelve todo en minutos.</p>
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${faqCtaMsg}`}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="seccion-cta-btn"
                        aria-label="Contactar por WhatsApp para resolver dudas"
                        data-gtm-id="cta-faq-experto"
                    >
                        💬 Hablar con un experto ahora
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
