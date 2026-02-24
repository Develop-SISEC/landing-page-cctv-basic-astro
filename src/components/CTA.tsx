import React from 'react';
import '../Styles/CTA.css';

const CTA: React.FC = () => {
    const whatsappNumber = "529984128573";
    const contactMessage = "¡Hola! Me gustaría recibir más información sobre sus servicios de videovigilancia. Agradezco su atención.";
    const quoteMessage = "Buen día, ¿podrían proporcionarme una cotización para sistemas de videovigilancia? Muchas gracias.";
    const whatsappContactLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactMessage)}`;
    const whatsappQuoteLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(quoteMessage)}`;

    return (
        <section className="cta" id="cta" aria-label="Sección de asesoría gratuita y contacto">
            <div className="cta-overlay" role="presentation">
                <h2 className="cta-title">Seguridad y Videovigilancia Inteligente</h2>
                <p className="cta-subtitle">
                    Obtén una asesoría gratuita y descubre cómo proteger tu hogar o negocio con tecnología avanzada.
                </p>
                <div className="cta-buttons">
                    <a href={whatsappContactLink} target="_blank" rel="nofollow noopener noreferrer" className="cta-button whatsapp">
                        Contactar por WhatsApp
                    </a>
                    <a href={whatsappQuoteLink} target="_blank" rel="nofollow noopener noreferrer" className="cta-button secondary">
                        Solicitar Cotización
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
