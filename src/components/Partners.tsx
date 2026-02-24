import React from "react";
import "../Styles/Partners.css";

// Importa los logos de los partners tecnológicos
import aliend from '../assets/images/aliend.webp';
import altai from '../assets/images/altai.webp';
import cambium from '../assets/images/cambium.webp';
import came from '../assets/images/came.webp';
import charofil from '../assets/images/charofil.webp';
import faac from '../assets/images/faac.webp';
import fanvil from '../assets/images/fanvil.webp';
import fiberhome from '../assets/images/fiberhome.webp';
import grandstream from '../assets/images/grandstream.webp';
import hid from '../assets/images/hid.webp';
import hikvision from '../assets/images/hikvision.webp';
import idemia from '../assets/images/idemia.webp';
import kenwood from '../assets/images/kenwood.webp';
import lutron from '../assets/images/lutron.webp';
import mimosa from '../assets/images/mimosa.webp';
import panduit from '../assets/images/panduit.webp';
import planet from '../assets/images/planet.webp';
import resideo from '../assets/images/resideo.webp';
import rosslare from '../assets/images/rosslare.webp';
import suprema from '../assets/images/suprema.webp';
import tplink from '../assets/images/tp-link.webp';
import ubiquiti from '../assets/images/ubiquiti.webp';
import zkteco from '../assets/images/zkteco.webp';

// Estructura de objetos para manejar metadatos (alt y src)
const partnersFila1 = [
  { src: aliend, name: "Aliend" },
  { src: altai, name: "Altai" },
  { src: cambium, name: "Cambium Networks" },
  { src: came, name: "Came" },
  { src: charofil, name: "Charofil" },
  { src: faac, name: "FAAC" },
  { src: fanvil, name: "Fanvil" },
  { src: fiberhome, name: "Fiberhome" },
  { src: grandstream, name: "Grandstream" },
  { src: hid, name: "HID Global" },
  { src: hikvision, name: "Hikvision" },
];

const partnersFila2 = [
  { src: idemia, name: "Idemia" },
  { src: kenwood, name: "Kenwood" },
  { src: lutron, name: "Lutron" },
  { src: mimosa, name: "Mimosa" },
  { src: panduit, name: "Panduit" },
  { src: planet, name: "Planet" },
  { src: resideo, name: "Resideo" },
  { src: rosslare, name: "Rosslare" },
  { src: suprema, name: "Suprema" },
  { src: tplink, name: "TP-Link" },
  { src: ubiquiti, name: "Ubiquiti" },
  { src: zkteco, name: "ZKTeco" },
];

const Partners: React.FC = () => {
  return (
    <section className="partners" id="partners">
      <div className="partners-container">
        <h2 className="partners-title">Partners Tecnológicos</h2>
        <p className="partners-subtitle">
          Colaboramos con los líderes en tecnología para ofrecerte la mejor seguridad.
        </p>

        <div className="partners-slide-wrapper">
          {/* Fila 1 */}
          <div className="partners-slider partners-slider-derecha">
            <div className="partners-slide-track">
              {partnersFila1.concat(partnersFila1).map((partner, index) => (
                <div key={index} className="partners-slide">
                  <img
                    src={partner.src.src}
                    alt={`Partner tecnológico: ${partner.name}`}
                    loading="lazy"
                    decoding="async"
                    width="100"
                    height="50"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Fila 2 */}
          <div className="partners-slider partners-slider-izquierda">
            <div className="partners-slide-track">
              {partnersFila2.concat(partnersFila2).map((partner, index) => (
                <div key={index} className="partners-slide">
                  <img
                    src={partner.src.src}
                    alt={`Partner tecnológico: ${partner.name}`}
                    loading="lazy"
                    decoding="async"
                    width="100"
                    height="50"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;