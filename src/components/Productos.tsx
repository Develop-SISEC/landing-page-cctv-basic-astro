import React from 'react';
import '../Styles/Productos.css';

const whatsappNumber = "529984128573";
const productosCtaMsg = encodeURIComponent("Hola, me gustaría recibir una asesoría para elegir la cámara de seguridad ideal para mi espacio.");

// Imágenes de las cámaras
import interiores from '../assets/images/interores.webp';
import exteriores from '../assets/images/exteriores.webp';
import movimiento from '../assets/images/movimiento.webp';
import wifi from '../assets/images/wifi.webp';
import ojopez from '../assets/images/ojo de pez.webp';
import visionnocturna from '../assets/images/nocturnas.webp';

const productos = [
    {
        nombre: "Cámaras para Interiores",
        descripcion: "Cámaras de seguridad diseñadas para brindar protección en espacios cerrados como casas, oficinas y negocios en Cancún. Son compactas, discretas y ofrecen imágenes nítidas para monitorear cada detalle sin alterar la estética del lugar.",
        imagen: interiores,
        detalles: [
            "✅ Diseño discreto y compacto.",
            "✅ Imágenes en alta definición.",
            "✅ Fácil instalación en techos y paredes.",
            "✅ Monitoreo en tiempo real desde dispositivos móviles.",
        ]
    },
    {
        nombre: "Cámaras para Exteriores",
        descripcion: "Cámaras de videovigilancia resistentes a la intemperie y con visión de amplio alcance. Ideales para patios, estacionamientos y entradas. Capturan imágenes de alta calidad incluso bajo condiciones climáticas adversas.",
        imagen: exteriores,
        detalles: [
            "✅ Protección contra lluvia, polvo y sol.",
            "✅ Visión de largo alcance en exteriores.",
            "✅ Opciones con detección de movimiento.",
            "✅ Ideal para entradas, patios y estacionamientos.",
        ]
    },
    {
        nombre: "Cámaras con Movimiento PTZ",
        descripcion: "Controla el ángulo de visión y el zoom a distancia. Perfectas para monitorear grandes áreas con un solo equipo, permitiendo seguir personas u objetos en tiempo real y eliminando puntos ciegos.",
        imagen: movimiento,
        detalles: [
            "✅ Movimiento horizontal y vertical con zoom.",
            "✅ Seguimiento automático de objetos en movimiento.",
            "✅ Ideal para vigilar grandes espacios.",
            "✅ Compatible con sistemas de seguridad avanzados.",
        ]
    },
    {
        nombre: "Cámaras WiFi",
        descripcion: "Cámaras de seguridad inalámbricas que permiten el monitoreo remoto desde cualquier dispositivo. Fáciles de instalar y perfectas para hogares y negocios en crecimiento.",
        imagen: wifi,
        detalles: [
            "✅ Conexión sin cables para mayor flexibilidad.",
            "✅ Acceso en tiempo real desde dispositivos móviles.",
            "✅ Instalación sencilla sin necesidad de técnicos.",
            "✅ Opciones con batería recargable y almacenamiento en la nube.",
        ]
    },
    {
        nombre: "Cámaras Panorámicas",
        descripcion: "Captura una vista panorámica de 360° con una sola cámara. Su lente especial cubre áreas amplias sin necesidad de múltiples dispositivos, ideal para tiendas, oficinas y espacios abiertos.",
        imagen: ojopez,
        detalles: [
            "✅ Visión de 360° sin puntos ciegos.",
            "✅ Reduce la cantidad de cámaras necesarias en un área.",
            "✅ Monitoreo en tiempo real y grabaciones en alta definición.",
            "✅ Compatible con aplicaciones móviles para visualización remota.",
        ]
    },
    {
        nombre: "Cámaras con Visión Nocturna",
        descripcion: "Seguridad garantizada las 24 horas con imágenes claras incluso en total oscuridad. Su tecnología de infrarrojos permite detectar movimientos y personas sin necesidad de luz.",
        imagen: visionnocturna,
        detalles: [
            "✅ Captura imágenes claras incluso en total oscuridad.",
            "✅ Tecnología de infrarrojos para mejor visibilidad nocturna.",
            "✅ Detección de movimiento para alertas automáticas.",
            "✅ Ideal para vigilancia nocturna en interiores y exteriores.",
        ]
    },
];

const Productos: React.FC = () => {
    return (
        <section className="productos" id="productos">
            <div className="productos-container" aria-label="Lista de cámaras de seguridad en Cancún">
                <h2 className="productos-title">Cámaras de Seguridad para Cada Necesidad</h2>
                <p className="productos-subtitle">Soluciones de videovigilancia avanzadas diseñadas para adaptarse a tu entorno. Encuentra la cámara ideal para tu hogar o negocio.</p>

                {productos.map((producto, index) => (
                    <article key={index} className={`producto-item ${index % 2 === 0 ? 'invertido' : ''}`}>
                        <div className="producto-texto">
                            <h3>{producto.nombre}</h3>
                            <p>{producto.descripcion}</p>
                            <ul className="producto-detalles">
                                {producto.detalles.map((detalle, i) => (
                                    <li key={i}>{detalle}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="producto-imagen">
                            <img
                                src={producto.imagen.src}
                                alt={`Cámara de seguridad ${producto.nombre}`}
                                loading="lazy"
                                decoding="async"
                                className="producto-img"
                            />
                        </div>
                    </article>
                ))}
            </div>

            {/* CTA inline - Alta intención de compra */}
            <div className="seccion-cta-inline">
                <p className="seccion-cta-texto">¿No sabes cuál cámara necesitas? Nuestros expertos te orientan sin costo.</p>
                <a
                    href={`https://wa.me/${whatsappNumber}?text=${productosCtaMsg}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="seccion-cta-btn"
                    aria-label="Solicitar asesoría gratuita por WhatsApp"
                    data-gtm-id="cta-productos-asesoria"
                >
                    🎯 Recibir asesoría gratuita
                </a>
            </div>
        </section>
    );
};

export default Productos;
