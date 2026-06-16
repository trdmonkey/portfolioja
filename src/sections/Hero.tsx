import memojiImage from "@/assets/images/version___44.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/fondo18.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div id="home" className="relative z-0 overflow-x-clip min-h-screen flex items-center">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-15"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        <div className="size-[620px] absolute inset-0 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="size-[820px] absolute inset-0 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="size-[1020px] absolute inset-0 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>
        <div className="size-[1220px] absolute inset-0 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5"></div>


        {/* 
        
        shouldOrbit?: boolean;
        shouldSpin?: boolean;
        spinDuration?: string;
        orbitDuration?: string;
        
        */}


        <HeroOrbit size={430} rotation={-14} shouldSpin  spinDuration="20s" shouldOrbit orbitDuration="50s">
          <SparkleIcon className="size-10 text-cyan-100 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldSpin  spinDuration="25s" shouldOrbit orbitDuration="45s">
          <SparkleIcon className="size-5 text-cyan-100 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={-12} shouldSpin  spinDuration="30s" shouldOrbit orbitDuration="55s">
          <StarIcon className="size-12 text-cyan-100 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={568} rotation={-41} shouldSpin  spinDuration="35s" shouldOrbit orbitDuration="60s">
          <SparkleIcon className="size-4 text-cyan-100 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldSpin  spinDuration="40s" shouldOrbit orbitDuration="65s">
          <StarIcon className="size-8 text-cyan-100 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={630} rotation={178} shouldSpin  spinDuration="45s" shouldOrbit orbitDuration="70s">
          <SparkleIcon className="size-10 text-cyan-100 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldSpin  spinDuration="50s" shouldOrbit orbitDuration="75s">
          <SparkleIcon className="size-14 text-cyan-100 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={730} rotation={-5} shouldSpin  spinDuration="55s" shouldOrbit orbitDuration="80s">
          <div className="size-1 rounded-full bg-cyan-100 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldSpin  spinDuration="60s" shouldOrbit orbitDuration="85s">
          <StarIcon className="size-20 text-emerald-200 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={900} rotation={-172} shouldSpin  spinDuration="60s" shouldOrbit orbitDuration="85s">
          <StarIcon className="size-23 text-cyan-100 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={930} rotation={-92} shouldSpin  spinDuration="60s" shouldOrbit orbitDuration="85s">
          <StarIcon className="size-18 text-cyan-100 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={960} rotation={42} shouldSpin  spinDuration="60s" shouldOrbit orbitDuration="85s">
          <StarIcon className="size-20 text-cyan-100 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={868} rotation={-55} shouldSpin  spinDuration="65s" shouldOrbit orbitDuration="90s">
          <div className="size-1 rounded-full bg-cyan-100 animate-pulse" />
        </HeroOrbit>
        <HeroOrbit size={990} rotation={115} shouldSpin  spinDuration="70s" shouldOrbit orbitDuration="95s">
          <div className="size-1 rounded-full bg-cyan-100 animate-pulse" />
        </HeroOrbit>

      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="relative w-[350px] h-[350px]">
            <Image
              src={memojiImage}
              alt="J&A Soluciones Integradas"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-full">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large" ></div>
            </div>
            <div className="text-sm font-medium">
              Consultoría técnica y legal certificada
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wider">
            Nos integramos a tu empresa
          </h1>
          <p className="mt-4 text-center text-white/70 md:text-lg max-w-2xl mx-auto">
            Acompañamos a las empresas con Seguridad y Salud en el Trabajo,
            Gestión Ambiental, software a la medida, facturación electrónica, y
            estrategias audiovisuales y de marketing, todo bajo un enfoque
            técnico, legal y medible.
          </p>
        </div>
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
