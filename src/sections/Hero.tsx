"use client";

import { useState, useEffect } from "react";
import memojiImage from "@/assets/images/version___44.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/fondo18.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";

const whatsappUrl = "https://wa.me/573245695802?text=Hola,%20estoy%20interesado%20en%20una%20consultoría%20técnica%20para%20mi%20empresa.";

export const HeroSection = () => {
  // Captura de coordenadas del mouse para el efecto interactivo (Multimedia & Software)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculamos la desviación desde el centro de la pantalla (-0.5 a 0.5)
      setMousePos({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Multiplicadores de movimiento (Paralaje sutil para que no marea)
  const offsetX = mousePos.x * 35; 
  const offsetY = mousePos.y * 35;

  return (
    <div id="home" className="relative z-0 overflow-x-clip min-h-screen flex items-center justify-center">
      
      {/* CONTENEDOR DE EFECTOS VISUALES */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_70%,transparent)]">
        
        {/* Textura de Grano Original - INTACTA */}
        <div
          className="absolute inset-0 -z-30 opacity-20"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>

        {/* REJILLA CYBERNETIC GRID ORIGINAL - INTACTA */}
        <div className="absolute inset-0 -z-30 opacity-20 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* ESCÁNER ENMACOPLADO A LA REJILLA: Las líneas barren coincidiendo con los cuadrantes de ingeniería */}
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent shadow-[0_0_15px_rgba(52,211,153,0.4)] opacity-40 animate-laser-main -z-20 pointer-events-none"></div>
        <div className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.3)] opacity-30 animate-laser-secondary -z-20 pointer-events-none"></div>

        {/* NODOS FIJOS EN LA MATRIZ - INTACTOS */}
        <div className="absolute top-1/4 left-1/4 size-1 bg-emerald-500/30 rounded-full animate-telemetry-pulse hidden md:block"></div>
        <div className="absolute top-1/3 right-1/4 size-1 bg-cyan-500/30 rounded-full animate-telemetry-pulse [animation-delay:1.5s] hidden md:block"></div>
        <div className="absolute bottom-1/3 left-1/3 size-1 bg-cyan-400/20 rounded-full animate-telemetry-pulse [animation-delay:2.5s] hidden md:block"></div>
        <div className="absolute bottom-1/4 right-1/3 size-1 bg-emerald-400/30 rounded-full animate-telemetry-pulse [animation-delay:0.7s] hidden md:block"></div>

        {/* SISTEMA DE NUCLEOS CON INTERACTIVIDAD DEL MOUSE MÁS ANIMACIÓN ALEATORIA */}
        <div 
          className="absolute inset-0 pointer-events-none overflow-hidden -z-10 transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px)`,
          }}
        >
          {/* Enjambre Cuántico 1 - J&A */}
          <div className="absolute top-1/4 left-[15%] animate-float-random-1 flex flex-col gap-1 items-center opacity-60">
            <div className="size-2 rounded-full bg-emerald-400/60 shadow-[0_0_8px_#34d399]" />
            <span className="text-[9px] font-mono text-emerald-500/30 select-none">J&A</span>
          </div>
          
          {/* Enjambre Cuántico 2 - PM */}
          <div className="absolute top-1/3 right-[12%] animate-float-random-2 flex flex-col gap-1 items-center opacity-50">
            <div className="size-1.5 rounded-full bg-cyan-400/70 shadow-[0_0_8px_#22d3ee]" />
            <span className="text-[9px] font-mono text-cyan-500/30 select-none">PM</span>
          </div>

          {/* Enjambre Cuántico 3 - [SG-SST] */}
          <div className="absolute bottom-1/3 left-[18%] animate-float-random-3 opacity-40">
            <div className="text-cyan-400/40 text-xs font-mono font-bold">[SG-SST]</div>
          </div>

          {/* Enjambre Cuántico 4 - ++ */}
          <div className="absolute bottom-1/4 right-[16%] animate-float-random-1 [animation-delay:-5s] flex flex-col gap-1 items-center opacity-50">
            <div className="size-2 rounded-full bg-emerald-400/50 shadow-[0_0_6px_#34d399]" />
            <span className="text-[9px] font-mono text-emerald-400/30 select-none">++</span>
          </div>
        </div>

        {/* Círculos Concéntricos Originales - INTACTOS */}
        <div className="size-[620px] absolute inset-0 border border-emerald-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_100px_inset] shadow-emerald-500/5"></div>
        <div className="size-[820px] absolute inset-0 border border-cyan-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_100px_inset] shadow-cyan-500/5"></div>
        <div className="size-[1020px] absolute inset-0 border border-emerald-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
        <div className="size-[1220px] absolute inset-0 border border-cyan-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

        {/* Órbitas Con Nodos Estables de Precisión - INTACTOS */}
        <HeroOrbit size={430} rotation={-14} shouldSpin spinDuration="40s" shouldOrbit orbitDuration="80s">
          <div className="text-emerald-400/40 text-xs font-mono select-none font-bold animate-pulse">+</div>
        </HeroOrbit>
        <HeroOrbit size={480} rotation={79} shouldSpin spinDuration="35s" shouldOrbit orbitDuration="70s">
          <div className="size-1.5 rounded-full bg-cyan-400/60 shadow-[0_0_8px_#22d3ee] animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={-12} shouldSpin spinDuration="50s" shouldOrbit orbitDuration="90s">
          <div className="text-cyan-400/30 text-sm font-mono select-none font-bold animate-pulse">*</div>
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

      {/* CONTENIDO TEXTUAL - INTACTO */}
      <div className="container relative z-10 pt-20 md:pt-4 md:pb-4">
        <div className="flex flex-col items-center">
          
          {/* Logo Corporativo Imponente */}
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
            <Image
              src={memojiImage}
              alt="J&A Soluciones Integradas"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Badge de Certificados */}
          <div className="bg-gray-950/80 border border-emerald-500/30 px-4 py-1.5 inline-flex items-center gap-3 rounded-full backdrop-blur shadow-[0_0_20px_rgba(52,211,153,0.1)]">
            <div className="bg-emerald-400 size-2.5 rounded-full relative">
              <div className="bg-emerald-400 absolute inset-0 rounded-full animate-ping-large" ></div>
            </div>
            <div className="text-xs md:text-sm font-semibold tracking-wide">
              Licencia SST Vigente & Software Corporativo
            </div>
          </div>
        </div>

        {/* Copywriting */}
        <div className="max-w-3xl mx-auto text-center mt-4">
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent font-bold max-w-2xl mx-auto leading-tight">
            Blindamos tu operación empresarial
          </h1>
          
          <p className="mt-5 text-white/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Garantizamos el cumplimiento obligatorio de <span className="text-emerald-400 font-medium">SST y Gestión Ambiental</span>, integrado con soluciones avanzadas de <span className="text-cyan-400 font-medium">Software a la medida</span>, facturación electrónica y producción multimedia de alta conversión.
          </p>
        </div>

        {/* Botones Optimizados Sin Requerir Scroll */}
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