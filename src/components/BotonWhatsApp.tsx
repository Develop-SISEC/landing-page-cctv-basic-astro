import React from "react";
import "../Styles/BotonWhatsApp.css";
import whatsappIcon from "../assets/images/whatsapp.webp"; // ✅ Importa la imagen correctamente

// Número y mensaje de WhatsApp
//const whatsappNumber = "529983381675";
const whatsappNumber = "529984128573";
const whatsappMessage = "¡Hola! Me gustaría recibir información sobre los servicios de videovigilancia de Grupo SAOM. Muchas gracias.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const BotonWhatsApp: React.FC = () => {
  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="boton-whatsapp">
      <span className="tooltip-text">Chatea con nosotros</span>
      <img src={whatsappIcon.src} alt="WhatsApp - Grupo SAOM" />
    </a>
  );
};

export default BotonWhatsApp;
