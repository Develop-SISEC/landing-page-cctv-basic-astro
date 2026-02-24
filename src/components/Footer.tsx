import React from 'react';
import '../Styles/Footer.css';
import LogoImg from '../assets/images/image.webp';
import UbicacionIcon from '../assets/images/ubicacion.png';
import TelefonoIcon from '../assets/images/telefono.png';
import CorreoIcon from '../assets/images/correo.png';
import GoogleIcon from '../assets/images/google-business.png';
import YoutubeIcon from '../assets/images/youtube.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className="footer" id="contacto">
            <div className="footer-container">
                {/* COLUMNA IZQUIERDA - LOGO Y DESCRIPCIÓN */}
                <div className="footer-brand">
                    <img src={LogoImg.src} alt="Grupo SAOM - Seguridad y Videovigilancia" className="footer-logo" loading="lazy" />
                    <p className="footer-description">
                        Seguridad y videovigilancia con tecnología avanzada. Protegemos lo que más importa.
                    </p>
                </div>

                {/* COLUMNA CENTRAL - ENLACES */}
                <div className="footer-links">
                    <h3>Enlaces</h3>
                    <div className="footer-links-columns">
                        <div className="footer-links-column">
                            <a href="#beneficios">Beneficios</a>
                            <a href="#sectores">Sectores</a>
                            <a href="#clientes">Clientes</a>
                            <a href="#productos">Productos</a>
                            <a href="#cta">Contacto Rápido</a>
                        </div>
                        <div className="footer-links-column">
                            <a href="#estadisticas">Estadísticas</a>
                            <a href="#testimonios">Testimonios</a>
                            <a href="#partners">Partners</a>
                            <a href="#faq">Preguntas Frecuentes</a>
                            <a href="#contacto">Contacto</a>
                        </div>
                    </div>
                </div>

                {/* COLUMNA DERECHA - CONTACTO */}
                <div className="footer-contact">
                    <h3>Contacto</h3>
                    <div className="contacto-item">
                        <img src={UbicacionIcon.src} alt="" aria-hidden="true" className="contacto-icon" />
                        <p>Cancún, Quintana Roo</p>
                    </div>
                    <div className="contacto-item">
                        <img src={CorreoIcon.src} alt="" aria-hidden="true" className="contacto-icon" />
                        <p>
                            <a href="mailto:ventas@gruposaom.com.mx">ventas@gruposaom.com.mx</a>
                        </p>
                    </div>
                    <div className="contacto-item">
                        <img src={TelefonoIcon.src} alt="" aria-hidden="true" className="contacto-icon" />
                        <p>
                            <a href="tel:+529989148930">+52 998 914 8930</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* REDES SOCIALES */}
            <div className="footer-social">
                <h2>Síguenos en:</h2>
                <div className="social-icons">
                    <a href="https://www.facebook.com/onlinegruposaom" target="_blank" rel="noopener noreferrer" aria-label="Visitar nuestro Facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/gruposaom" target="_blank" rel="noopener noreferrer" aria-label="Visitar nuestro Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/company/grupo-saom" target="_blank" rel="noopener noreferrer" aria-label="Visitar nuestro perfil de LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.youtube.com/@GRUPO_SAOM" target="_blank" rel="noopener noreferrer" aria-label="Visitar nuestro canal de YouTube" className="custom-social-link">
                        <img src={YoutubeIcon.src} alt="YouTube" className="custom-icon-svg" />
                    </a>
                    <a href="https://share.google/SeVu5FxAPtEH0GNWQ" target="_blank" rel="noopener noreferrer" aria-label="Ver nuestro perfil de Google Negocios" className="custom-social-link">
                        <img src={GoogleIcon.src} alt="Google Business" className="custom-icon-svg" />
                    </a>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} <a href="https://gruposaom.com.mx/">Grupo SAOM.</a> Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;