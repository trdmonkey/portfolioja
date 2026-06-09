import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Eficiencia Operativa",
    position: "Eliminamos la fragmentación administrativa.",
    text: "Centralizamos en un solo ecosistema B2B: SST, Ambiental, Software, Facturación y Marketing.",
    avatar: memojiAvatar1,
  },
  {
    name: "Inteligencia Técnica",
    position: "Ingeniería de software a la medida + VFX de alto impacto.",
    text: "No solo cumplimos la norma, la usamos para potenciar tu marca y acelerar tus ventas.",
    avatar: memojiAvatar2,
  },
  {
    name: "Marketing Digital Estratégico",
    position: "CEO @ InnovateCo",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley",
    avatar: memojiAvatar3,
  },
  {
    name: "Gestión Ambiental Integral",
    position: "Product Manager @ GlobalTech",
    text: " the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.",
    avatar: memojiAvatar4,
  },
  {
    name: "Factura y Nomina Electrónica",
    position: "Sistema contable MAGNUM",
    text: "It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="¿POR QUÉ ELEGIRNOS?"
          title="Blindaje Integral y Escalabilidad"
          description="Dejamos de lado los servicios aislados. En J&A, fusionamos el cumplimiento normativo con tecnología de vanguardia para convertir obligaciones legales en una ventaja competitiva para tu negocio."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] py-4 -my-4">
          <div className="flex gap-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition-transform duration-300 cursor-pointer"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
