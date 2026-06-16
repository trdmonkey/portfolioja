"use client";

// Componente interno para renderizar los SVG puros de SVGRepo
const SocialIcon = ({ title }: { title: string }) => {
  const iconClasses = "size-4 transition-transform duration-300";
  
  switch (title) {
    case "LinkedIn":
      return (
        <svg className={iconClasses} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      );
    case "Instagram":
      return (
        <svg className={iconClasses} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0 3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case "YouTube":
      return (
        <svg className={iconClasses} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    case "Twitter":
      return (
        <svg className={iconClasses} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      );
    default:
      return null;
  }
};

const footerLinks = [
  { title: "LinkedIn", href: "https://linkedin.com" },
  { title: "Instagram", href: "https://instagram.com" },
  { title: "YouTube", href: "https://youtube.com" },
  { title: "Twitter", href: "https://twitter.com" },
];

export const Footer = () => {
  return (
    // CAMBIO CLAVE: Agregamos un gradiente vertical sutil que arranca transparente y se oscurece abajo de forma tenue
    <footer className="relative z-10 overflow-x-clip bg-gradient-to-b from-transparent via-gray-950/40 to-gray-950/80 pt-16 pb-8">
      
      {/* EL RESPLANDOR CENTRAL: Subido a bg-emerald-400/20 para que brille con más fuerza en el centro */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-400/20 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none"></div>
      
      <div className="container">
        {/* Línea superior con opacidad controlada para no cortar bruscamente */}
        <div className="border-t border-white/10 flex flex-col gap-8">
          
          {/* BLOQUE SUPERIOR: Identidad Corporativa */}
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 pt-8">
            <div>
              <span className="font-serif text-lg tracking-wide bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent font-bold">
                J&A Soluciones Integradas
              </span>
              <p className="text-xs text-white/40 mt-1 max-w-sm">
                Integrando seguridad de vanguardia, cumplimiento ambiental estratégico y soluciones de software de alto impacto.
              </p>
            </div>
            
            <div className="text-[10px] tracking-widest text-white/30 uppercase font-medium border border-white/5 px-2.5 py-1 rounded-md bg-white/5">
              Legalidad · Tecnología · Escalabilidad
            </div>
          </div>

          {/* LÍNEA DIVISIONARIA INTERNA SUTIL */}
          <div className="h-px bg-white/5 w-full"></div>

          {/* BLOQUE INFERIOR: Copyright y Enlaces */}
          <div className="text-sm flex flex-col-reverse md:flex-row md:justify-between items-center gap-6">
            <div className="text-white/30 text-xs">
              &copy; 2026 J&A Soluciones Integradas. Todos los derechos reservados.
            </div>
            
            <nav className="flex flex-wrap justify-center items-center gap-3">
              {footerLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  // FIJADO EL TAMAÑO Y TIPOGRAFÍA: Soluciona el parpadeo/temblor al hacer hover
                  className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 ease-out text-xs font-normal will-change-transform transform hover:-translate-y-0.5 select-none"
                >
                  <SocialIcon title={link.title} />
                  <span>{link.title}</span>
                </a>
              ))}
            </nav>
          </div>

        </div>
      </div>
    </footer>
  );
};