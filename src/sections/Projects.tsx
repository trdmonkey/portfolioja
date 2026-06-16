import Image from "next/image";

import darkSaasLandingPage from "@/assets/images/sst.jpg";
import lightSaasLandingPage from "@/assets/images/gestionam.jpg";
import aiStartupLandingPage from "@/assets/images/dev.jpg";
import productMultimedia from "@/assets/images/produccionmultimedia.jpg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/fondo1.jpg";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Auditoría e Implementación",
    year: "2026",
    title: "Sistemas de Gestion en Seguridad y Salud en el Trabajo",
    results: [
      { title: "Reducción del 87% en tasa de accidentalidad laboral." },
      { title: "Cumplimiento del 100% en estándares mínimos legales." },
      { title: "Centralización documental con el Ministerio de Trabajo y ARL." },
    ],
    link: "https://astrid-hernandez.netlify.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "Cumplimiento Normativo y Ecoeficiencia",
    year: "2026",
    title: "Sostenibilidad Ambiental Estratégica",
    results: [
      { title: "Reducción del 45% en costos operativos por gestión de residuos." },
      { title: "Cumplimiento integral ante autoridades ambientales (CORPONARIÑO)." },
      { title: "Implementación de planes de manejo ambiental automatizados." },
    ],
    link: "https://astrid-hernandez.netlify.app/",
    image: lightSaasLandingPage,
  },
  {
    company: "Ecosistema Digital B2B",
    year: "Facturación DIAN",
    title: "Desarrollo a la Medida",
    results: [
      { title: "Sistemas web y moviles, personalizados con stack moderno." },
      { title: "Facturación electrónica 100% integrada y normativa DIAN." },
      { title: "Automatización de procesos contables y operativos en VPS." },
    ],
    link: "https://jorge-luis.netlify.app/",
    image: aiStartupLandingPage,
  },
  {
    company: "Identidad Visual",
    year: "Contenido Digital 3D",
    title: "Producción Multimedia y VFX",
    results: [
      { title: "Creación de identidad corporativa y branding de alto impacto." },
      { title: "Desarrollo de piezas audiovisuales y efectos visuales CGI y VFX." },
      { title: "Modelado, texturizado y renderizado 3D para marketing digital." },
    ],
    link: "https://jorge-luis.netlify.app/",
    image: productMultimedia,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader 
          eyebrow="Servicios" 
          title="Nuestras Soluciones Integradas" 
          description="Transformamos desafíos técnicos y legales en activos operativos." 
        />
        
        <div className="mt-10 md:mt-20 flex flex-col gap-12">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-12 lg:px-14 after:pointer-events-none sticky"
              style={{
                // 1. Calculamos el top dinámicamente usando inline styles.
                // 64px equivale a tu 'top-16' inicial. Cada tarjeta siguiente se frena 40px más abajo.
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-10 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-12" >
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-2 mt-4 md:mt-5">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Metodología</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative" >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};