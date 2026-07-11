"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { CardAbout } from "@/components/CardAbout";
import bookImage from "@/assets/images/book22.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import FlutterIcon from "@/assets/icons/flutter.svg";
import PhpIcon from "@/assets/icons/php.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map2.png";
import smileMemoji from "@/assets/images/jorge2.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "Php",
    iconType: PhpIcon,
  },
  {
    title: "Git Hub",
    iconType: GithubIcon,
  },
  {
    title: "Flutter",
    iconType: FlutterIcon,
  },
];

const serviciosSST = [
  {
    title: "AT",
    type: "critical", // Determina el color del LED
    left: "57%",
    top: "48%",
    animateX: [0, 15, -20, 10, 0],
    animateY: [0, -15, 10, -10, 0],
    duration: 7,
  },
  {
    title: "SG-SST",
    type: "active",
    left: "5%",
    top: "51%",
    animateX: [0, -20, 15, -10, 0],
    animateY: [0, 20, -15, 15, 0],
    duration: 9,
  },
  {
    title: "Matriz",
    type: "active",
    left: "50%",
    top: "25%",
    animateX: [0, 25, -15, 20, 0],
    animateY: [0, -10, 20, -15, 0],
    duration: 8,
  },
  {
    title: "ARL",
    type: "info",
    left: "64%",
    top: "0%",
    animateX: [0, -15, 20, -10, 0],
    animateY: [0, 25, -20, 10, 0],
    duration: 10,
  },
  {
    title: "Capacitación",
    type: "active",
    left: "43%",
    top: "75%",
    animateX: [0, 20, -25, 15, 0],
    animateY: [0, -20, 10, -20, 0],
    duration: 11,
  },
  {
    title: "Auditoría",
    type: "info",
    left: "5%",
    top: "24%",
    animateX: [0, -10, 25, -15, 0],
    animateY: [0, 15, -25, 20, 0],
    duration: 7.5,
  },
  {
    title: "Consultoría",
    type: "active",
    left: "1%",
    top: "2%",
    animateX: [0, 15, -15, 25, 0],
    animateY: [0, 20, -10, 15, 0],
    duration: 8.5,
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Nosotros"
          title="Un vistazo a nuestro ecosistema"
          description="Ven a conocer sobre nuestra misión, visión y valores corporativos"
        />
        <div className="mt-16 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <CardAbout className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Normatividad"
                description="Reglamento Interno · Manual de Funciones · Identidad Corporativa."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </CardAbout>
            <CardAbout className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Stack Tecnológico"
                description="Desarrollamos soluciones robustas utilizando un stack moderno."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </CardAbout>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <CardAbout className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Gestión de Seguridad (SST)"
                description="Licencia vigente · Cumplimiento normativo."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {serviciosSST.map((servicio) => (
                  <motion.div
                    key={servicio.title}
                    className="inline-flex items-center gap-2.5 px-5 bg-gray-950/40 border border-white/10 rounded-full py-1.5 absolute cursor-grab active:cursor-grabbing select-none backdrop-blur-sm"
                    style={{
                      left: servicio.left,
                      top: servicio.top,
                    }}
                    animate={{ x: servicio.animateX, y: servicio.animateY }}
                    transition={{
                      duration: servicio.duration,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                    drag
                    dragConstraints={constraintRef}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 15 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(52,211,153,0.4)",
                      backgroundColor: "rgba(17,24,39,0.6)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Micro-LED de Precisión Técnica en lugar del emoji */}
                    <span
                      className={`size-2 rounded-full shadow-[0_0_8px_currentColor] ${
                        servicio.type === "critical"
                          ? "text-rose-400 bg-rose-400"
                          : servicio.type === "active"
                            ? "text-emerald-400 bg-emerald-400"
                            : "text-cyan-400 bg-cyan-400"
                      }`}
                    />

                    <span className="font-mono text-xs font-semibold tracking-wider text-white/90">
                      {servicio.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardAbout>
            <CardAbout className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover"
              />{" "}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping-large [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="smile" className="size-20" />
              </div>
            </CardAbout>
          </div>
        </div>
      </div>
    </div>
  );
};
