// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import "../Styles/Navbar.css"; // Asegúrate de que esté bien importado
// import LogoImg from "../assets/images/image.webp";
// import MenuIcon from "../assets/images/menu.png";
// import CloseIcon from "../assets/images/close.png";

// const Navbar: React.FC = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const location = useLocation();
//     const navigate = useNavigate();

//     // 🔹 Función para manejar navegación interna
//     const handleNavigation = (path: string, section?: string) => {
//         if (location.pathname === "/") {
//             const sectionElement = document.getElementById(section || "");
//             if (sectionElement) {
//                 sectionElement.scrollIntoView({ behavior: "smooth" });
//             }
//         } else {
//             navigate(`/${path}${section ? `#${section}` : ""}`);
//         }
//         setMenuOpen(false); // ✅ Cierra el menú después de hacer click
//     };

//     return (
//         <nav className={`navbar ${menuOpen ? "open" : ""}`}>
//             <div className="navbar-container">
//                 {/* 🔹 Logo */}
//                 <img 
//                     src={LogoImg} 
//                     alt="Logo" 
//                     className="navbar-logo" 
//                     onClick={() => navigate("/")}
//                 />

//                 {/* 🔹 Menú de navegación (versión desktop) */}
//                 <div className="navbar-nav">
//                     <button onClick={() => handleNavigation("", "hero")}>Inicio</button>
//                     <div className="dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
//                         <button className="dropbtn">Servicios ▼</button>
//                         {dropdownOpen && (
//                             <div className="dropdown-content">
//                                 <button onClick={() => handleNavigation("", "beneficios")}>Beneficios</button>
//                                 <button onClick={() => handleNavigation("", "sectores")}>Sectores</button>
//                                 <button onClick={() => handleNavigation("", "productos")}>Cámaras</button>
//                             </div>
//                         )}
//                     </div>
//                     <button onClick={() => handleNavigation("", "clientes")}>Clientes</button>
//                     <button onClick={() => handleNavigation("", "faq")}>Preguntas</button>
//                     <button onClick={() => handleNavigation("", "contacto")}>Contacto</button>
//                     <div className="dropdown">
//                         <button className="dropbtn">Herramientas ▼</button>
//                         <div className="dropdown-content">
//                             <Link to="/nsf">Simulador</Link>
//                             <Link to="/ndf">Diagnóstico</Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* 🔹 Botón menú hamburguesa */}
//                 <div 
//                     className="menu-toggle" 
//                     role="button" 
//                     onClick={() => setMenuOpen(!menuOpen)}
//                 >
//                     <img src={menuOpen ? CloseIcon : MenuIcon} alt="Menú" />
//                 </div>

//                 {/* 🔹 Menú responsive (móvil) */}
//                 {menuOpen && (
//                     <div className="mobile-menu">
//                         <button onClick={() => handleNavigation("", "hero")}>Inicio</button>
//                         <button onClick={() => handleNavigation("", "beneficios")}>Beneficios</button>
//                         <button onClick={() => handleNavigation("", "sectores")}>Sectores</button>
//                         <button onClick={() => handleNavigation("", "productos")}>Cámaras</button>
//                         <button onClick={() => handleNavigation("", "clientes")}>Clientes</button>
//                         <button onClick={() => handleNavigation("", "faq")}>Preguntas</button>
//                         <button onClick={() => handleNavigation("", "contacto")}>Contacto</button>
//                         <Link to="/nsf">Simulador</Link>
//                         <Link to="/ndf">Diagnóstico</Link>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
