import React from 'react';
import '../Styles/Sectores.css';

const whatsappNumber = "529984128573";
const sectoresCtaMsg = encodeURIComponent("Hola, me interesa conocer las soluciones de seguridad para mi tipo de negocio o propiedad. ¿Podrían asesorarme?");

// Importar imágenes de sectores
import residencial from '../assets/images/residencia.webp';
import corporativo from '../assets/images/corporativo.webp';
import hoteleria from '../assets/images/hotel.webp';
import industrial from '../assets/images/industrial.webp';
import gobierno from '../assets/images/gobierno.webp';
import financiero from '../assets/images/financiero.webp';

const sectores = [
    { nombre: "Residencial", descripcion: "Protección total para tu hogar con sistemas de seguridad avanzados.", imagen: residencial },
    { nombre: "Corporativo", descripcion: "Soluciones de seguridad personalizadas para empresas y oficinas.", imagen: corporativo },
    { nombre: "Hotelería", descripcion: "Garantiza la seguridad de tus huéspedes con monitoreo 24/7.", imagen: hoteleria },
    { nombre: "Industrial", descripcion: "Protección robusta para entornos industriales con videovigilancia avanzada.", imagen: industrial },
    { nombre: "Gobierno", descripcion: "Tecnología de seguridad de alto nivel para instituciones gubernamentales.", imagen: gobierno },
    { nombre: "Financiero", descripcion: "Seguridad optimizada para bancos y entidades financieras.", imagen: financiero },
];

const Sectores: React.FC = () => {
    return (
        <section className="sectores" id="sectores">
            <div className="sectores-container">
                <h2 className="sectores-title">Soluciones de Videovigilancia por Sector</h2>
                <p className="sectores-subtitle">Brindamos protección avanzada adaptada a cada tipo de industria.</p>

                <div className="sectores-grid">
                    {sectores.map((sector, index) => (
                        <div key={index} className="sector-card">
                            <div
                                className="sector-imagen"
                                style={{ backgroundImage: `url(${sector.imagen.src})` }}
                                aria-hidden="true"
                            ></div>
                            <div className="sector-overlay">
                                <h3 className="sector-nombre">{sector.nombre}</h3>
                                <p className="sector-descripcion">{sector.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA inline - Identificación de sector */}
                <div className="seccion-cta-inline">
                    <p className="seccion-cta-texto">Diseñamos la solución exacta para tu sector. Contáctanos y recibe una propuesta personalizada.</p>
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${sectoresCtaMsg}`}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="seccion-cta-btn"
                        aria-label="Solicitar propuesta personalizada de seguridad"
                        data-gtm-id="cta-sectores-negocio"
                    >
                        🏢 Quiero proteger mi negocio
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Sectores;
