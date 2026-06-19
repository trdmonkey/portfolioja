import memojiImage from "@/assets/images/version___44.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/fondo18.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";

const whatsappUrl = "https://wa.me/573245695802?text=Hola,%20estoy%20interesado%20en%20una%20consultoría%20técnica%20para%20mi%20empresa.";

export const HeroSection = () => {
  return (
    // CAMBIO CLAVE: Agregamos justify-center para que en conjunto con flex e items-center posicione todo matemáticamente al centro
    <div id="home" className="relative z-0 overflow-x-clip min-h-screen flex items-center justify-center">
      
      {/* CONTENEDOR DE EFECTOS VISUALES CON TU MÁSCARA ORIGINAL RESTAURADA (black_70%) */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_70%,transparent)]">
        
        {/* Tu Textura de Grano Original */}
        <div
          className="absolute inset-0 -z-30 opacity-10"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>

        {/* REJILLA CYBERNETIC GRID */}
        <div className="absolute inset-0 -z-30 opacity-20 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* EFECTO DE ESCÁNER LÁSER: Ahora usa la nueva animación de barrido vertical continuo */}
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent shadow-[0_0_20px_rgba(52,211,153,0.4)] opacity-40 animate-laser -z-20 pointer-events-none"></div>

        {/* Círculos Concéntricos Originales */}
        <div className="size-[620px] absolute inset-0 border border-emerald-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_100px_inset] shadow-emerald-500/5"></div>
        <div className="size-[820px] absolute inset-0 border border-cyan-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_100px_inset] shadow-cyan-500/5"></div>
        <div className="size-[1020px] absolute inset-0 border border-emerald-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="size-[1220px] absolute inset-0 border border-cyan-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

        {/* ÓRBITAS CON NODOS DE PRECISIÓN Y CRUCES TÉCNICAS INTACTAS */}
        <HeroOrbit size={430} rotation={-14} shouldSpin spinDuration="40s" shouldOrbit orbitDuration="80s">
          <div className="text-emerald-400/40 text-xs font-mono select-none font-bold animate-pulse">+</div>
        </HeroOrbit>
        <HeroOrbit size={480} rotation={79} shouldSpin spinDuration="35s" shouldOrbit orbitDuration="70s">
          <div className="size-1.5 rounded-full bg-cyan-400/60 shadow-[0_0_8px_#22d3ee] animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={-12} shouldSpin spinDuration="50s" shouldOrbit orbitDuration="90s">
          <div className="text-cyan-400/30 text-sm font-mono select-none font-bold animate-pulse">[ ]</div>
        </HeroOrbit>
        <HeroOrbit size={610} rotation={-41} shouldSpin spinDuration="45s" shouldOrbit orbitDuration="85s">
          <div className="size-1 rounded-full bg-emerald-400/40 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={680} rotation={98} shouldSpin spinDuration="55s" shouldOrbit orbitDuration="100s">
          <div className="text-emerald-400/30 text-sm font-mono select-none font-bold animate-pulse">+</div>
        </HeroOrbit>
        <HeroOrbit size={760} rotation={178} shouldSpin spinDuration="60s" shouldOrbit orbitDuration="110s">
          <div className="size-2 rounded-full bg-cyan-400/50 shadow-[0_0_10px_#22d3ee] animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={840} rotation={144} shouldSpin spinDuration="65s" shouldOrbit orbitDuration="120s">
          <div className="text-cyan-400/40 text-xs font-mono select-none font-bold animate-pulse">+</div>
        </HeroOrbit>
        <HeroOrbit size={920} rotation={-72} shouldSpin spinDuration="70s" shouldOrbit orbitDuration="130s">
          <div className="size-1.5 rounded-full bg-emerald-400/60 shadow-[0_0_8px_#34d399] animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={1000} rotation={42} shouldSpin spinDuration="75s" shouldOrbit orbitDuration="140s">
          <div className="text-white/20 text-xs font-mono select-none font-bold animate-pulse">&lt;/&gt;</div>
        </HeroOrbit>

      </div>

      {/* CAMBIO CLAVE: Mantiene pt-20 en móvil, pero en escritorio se equilibra (md:pt-4 md:pb-4) para subir el bloque de botones y evitar el scroll */}
      <div className="container relative z-10 pt-20 md:pt-4 md:pb-4">
        <div className="flex flex-col items-center">
          
          {/* Tu Avatar / Logo original e imponente intacto */}
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
            <Image
              src={memojiImage}
              alt="J&A Soluciones Integradas"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* BADGE DE AUTORIDAD REESTRUCTURADA */}
          <div className="bg-gray-950/80 border border-emerald-500/30 px-4 py-1.5 inline-flex items-center gap-3 rounded-full backdrop-blur shadow-[0_0_20px_rgba(52,211,153,0.1)]">
            <div className="bg-emerald-400 size-2.5 rounded-full relative">
              <div className="bg-emerald-400 absolute inset-0 rounded-full animate-ping-large" ></div>
            </div>
            <div className="text-xs md:text-sm font-semibold tracking-wide">
              Licencia SST Vigente & Software Corporativo
            </div>
          </div>
        </div>

        {/* COPYWRITING LETAL */}
        <div className="max-w-3xl mx-auto text-center mt-2">
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent font-bold max-w-2xl mx-auto leading-tight">
            Blindamos tu operation empresarial
          </h1>
          
          <p className="mt-5 text-white/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Garantizamos el cumplimiento obligatorio de <span className="text-emerald-400 font-medium">SST y Gestión Ambiental</span>, integrado con soluciones avanzadas de <span className="text-cyan-400 font-medium">Software a la medida</span>, facturación electrónica y producción multimedia de alta conversión.
          </p>
        </div>

        {/* BOTONES ORIGINALES CON REDIRECCIÓN DE ENLACE */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 h-12 rounded-full cursor-pointer hover:bg-white/5 transition-all duration-300"
          >
            <span className="font-semibold text-sm">Nuestras soluciones</span>
            <ArrowDown className="size-4" />
          </a>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-full cursor-pointer hover:bg-white/90 transition-all duration-300"
          >
            <span>👋</span>
            <span className="font-semibold text-sm">Diagnóstico</span>
          </a>
        </div>

      </div>
    </div>
  );
};