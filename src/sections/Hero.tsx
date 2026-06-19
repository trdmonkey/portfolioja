import memojiImage from "@/assets/images/version___44.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/fondo18.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    // CORREGIDO: Eliminamos el bg-gray-950 para recuperar la fusión limpia entre secciones
    <div id="home" className="relative z-0 overflow-x-clip min-h-screen flex items-center">
      
      {/* CONTENEDOR DE EFECTOS VISUALES CON TU MÁSCARA ORIGINAL RESTAURADA (black_70%) */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_70%,transparent)]">
        
        {/* Tu Textura de Grano Original */}
        <div
          className="absolute inset-0 -z-30 opacity-10"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>

        {/* REJILLA CYBERNETIC GRID: Ahora se difumina perfectamente al llegar abajo gracias a la máscara */}
        <div className="absolute inset-0 -z-30 opacity-20 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* EFECTO DE ESCÁNER LÁSER: Protegido dentro de la máscara para no generar cortes bruscos */}
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent shadow-[0_0_20px_rgba(52,211,153,0.4)] opacity-40 animate-[bounce_8s_infinite] -z-20 pointer-events-none top-1/4"></div>

        {/* Círculos Concéntricos Originales */}
        <div className="size-[620px] absolute inset-0 border border-emerald-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_100px_inset] shadow-emerald-500/5"></div>
        <div className="size-[820px] absolute inset-0 border border-cyan-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_100px_inset] shadow-cyan-500/5"></div>
        <div className="size-[1020px] absolute inset-0 border border-emerald-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="size-[1220px] absolute inset-0 border border-cyan-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

        {/* ÓRBITAS CON NODOS DE PRECISIÓN Y CRUCES TÉCNICAS */}
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

      {/* CONTENIDO TEXTUAL Y CENTRAL */}
      <div className="container relative z-10 pt-20">
        <div className="flex flex-col items-center">
          
          {/* Tu Avatar / Logo */}
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
        <div className="max-w-3xl mx-auto text-center mt-8">
          <h1 className="font-serif text-4xl md:text-6xl tracking-tight bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent font-bold max-w-2xl mx-auto leading-tight">
            Blindamos tu operación empresarial
          </h1>
          
          <p className="mt-5 text-white/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Garantizamos el cumplimiento obligatorio de <span className="text-emerald-400 font-medium">SST y Gestión Ambiental</span>, integrado con soluciones avanzadas de <span className="text-cyan-400 font-medium">Software a la medida</span>, facturación electrónica y producción multimedia de alta conversión.
          </p>
        </div>

        {/* LLAMADOS A LA ACCIÓN (CTA) */}
{/*         <div className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-4">
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 px-6 h-12 rounded-full text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300">
            <span>Nuestras soluciones</span>
            <ArrowDown className="size-4 opacity-70" />
          </button>
          
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-gray-950 h-12 px-6 rounded-full text-sm font-semibold hover:bg-white/90 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)]">
            <span>👋</span>
            <span>Solicitar Diagnóstico</span>
          </button>
        </div> */}



        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-full">
            <span className="font-semibold">Nuestras soluciones</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-full">
            <span>👋</span>
            <span className="font-semibold">Diagnóstico</span>
          </button>
        </div>




      </div>
    </div>
  );
};