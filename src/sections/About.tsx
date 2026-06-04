import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardAbout } from "@/components/CardAbout";
import StarIcon from "@/assets/icons/star.svg";
import StarIcon2 from "@/assets/icons/arrow2.svg";
import bookImage from "@/assets/images/book22.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import FlutterIcon from "@/assets/icons/flutter.svg";
import PhpIcon from "@/assets/icons/php.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map2.png";
import smileMemoji from "@/assets/images/jorge2.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

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

const hobbies = [
  {
    title: "Vigilancia Epidem.",
    emoji: "🏥",
    left: "57%",
    top: "48%",
  },
  {
    title: "Planes de Emergencia",
    emoji: "🚨",
    left: "5%",
    top: "51%",
  },
  {
    title: "Control Contratistas",
    emoji: "📋",
    left: "50%",
    top: "25%",
  },
  {
    title: "Investigación Accidental",
    emoji: "🔍",
    left: "54%",
    top: "3%",
  },
  {
    title: "Gestión de EPP",
    emoji: "🦺",
    left: "43%",
    top: "75%",
  },
  {
    title: "Auditoría Legal",
    emoji: "⚖️",
    left: "10%",
    top: "24%",
  },
  {
    title: "Matriz de Riesgos",
    emoji: "⚠️",
    left: "1%",
    top: "2%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
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
                description="Reglamento interno, manual de funciones e identidad corporativa."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </CardAbout>
            <CardAbout className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Stack Tecnológico"
                description="Desarrollamos soluciones robustas utilizando un stack moderno para garantizar rendimiento, seguridad y escalabilidad."
                className=""
              />
              {/* <div>
              {toolboxItems.map((item) => (
                <div key={item.title} className="inline-flex items-center gap-2 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                  <TechIcon component={item.iconType} />
                  <span className="font-semibold" >{item.title}</span>
                </div>
              ))}
            </div> */}
              <ToolboxItems items={toolboxItems} className="" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
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
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-300 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-700">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </CardAbout>
            <CardAbout className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover"
              />{" "}
              {/* object-left-top */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image src={smileMemoji} alt="smile" className="size-20" />
              </div>
            </CardAbout>
          </div>
        </div>
      </div>
    </div>
  );
};
