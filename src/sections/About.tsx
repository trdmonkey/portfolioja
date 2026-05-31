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
import smileMemoji from "@/assets/images/memoji-smile.png";
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
    title: "Painting",
    emoji: "🎨",
  },
  {
    title: "Photography",
    emoji: "📷",
  },
  {
    title: "Gaming",
    emoji: "🎮",
  },
  {
    title: "Drumming",
    emoji: "🥁",
  },
  {
    title: "Music",
    emoji: "🎵",
  },
  {
    title: "Fitness",
    emoji: "🤸‍♀️",
  },
  {
    title: "Reading",
    emoji: "👨‍🎓",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Nosotros"
          title="Un vistazo a nuestro ecosistema"
          description="Ven a conocer sobre nuestra misión, visión y valores corporativos"
        />
        <div className="mt-16">
          <CardAbout className="h-[320px]">
            <CardHeader
              title="Mis libros"
              description="Explore my books shaping my perspectives."
            />
            {/* <div className="flex flex-col" >
              <div className="inline-flex items-center gap-2">
                <StarIcon2 className="size-7 text-emerald-200" />
                <h3 className="font-serif text-3xl" >Mis libros</h3>
              </div>
              <p className="text-sm text-white/60 mt-2" >Explore my books shaping my perspectives.</p>
            </div> */}
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </CardAbout>
          <CardAbout className="h-[320px] p-0">
            <CardHeader
              title="Mis Herramientas"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
              className="px-6 pt-6"
            />
            {/* <div>
              {toolboxItems.map((item) => (
                <div key={item.title} className="inline-flex items-center gap-2 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                  <TechIcon component={item.iconType} />
                  <span className="font-semibold" >{item.title}</span>
                </div>
              ))}
            </div> */}
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems items={toolboxItems} className="mt-6" />
          </CardAbout>
          <CardAbout>
            <CardHeader
              title="Tecnologías"
              description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </CardAbout>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="smile" />
          </Card>
        </div>
      </div>
    </div>
  );
};
