"use client";

import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Lista de las secciones que queremos mapear
    const sections = ["home", "projects", "about", "contact"];
    
    // Configuración del observador
    const observerOptions = {
      root: null, // Monitorea el scroll de la ventana global
      rootMargin: "-60% 0px -50% 0px", // Evalúa la sección que cruza por la mitad de la pantalla
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Si la sección entra en la zona activa del viewport, actualizamos el estado
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Conectamos las secciones de forma segura. Si no encuentra el ID, no estalla.
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Desconectamos al desmontar para mantener limpia la memoria
    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleItemClick = (id: string) => {
    setActiveSection(id);
    // Dejamos que el navegador haga el scroll nativo al href de forma limpia
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        
        <a
          href="#home"
          onClick={() => handleItemClick("home")}
          className={`nav-item transition-all duration-300 ${
            activeSection === "home"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Home
        </a>

        <a
          href="#projects"
          onClick={() => handleItemClick("projects")}
          className={`nav-item transition-all duration-300 ${
            activeSection === "projects"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Projects
        </a>

        <a
          href="#about"
          onClick={() => handleItemClick("about")}
          className={`nav-item transition-all duration-300 ${
            activeSection === "about"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          About
        </a>

        <a
          href="#contact"
          onClick={() => handleItemClick("contact")}
          className={`nav-item transition-all duration-300 ${
            activeSection === "contact"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Contact
        </a>

      </nav>
    </div>
  );
};