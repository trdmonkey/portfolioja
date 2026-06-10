import memojiAvatar1 from "@/assets/images/siso_sf.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/dev_sf.png";
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
    avatar: memojiAvatar1, // Tu memoji original o el de SST
  },
  {
    name: "Inteligencia Técnica",
    position: "Ingeniería de software a la medida + VFX de alto impacto.",
    text: "No solo cumplimos la norma, la usamos para potenciar tu marca y acelerar tus ventas.",
    avatar: memojiAvatar3, // El nuevo memoji de Desarrollador / Programador
  },
  {
    name: "Marketing Digital Estratégico",
    position: "Transformamos tu presencia técnica en un imán de clientes.",
    text: "Diseñamos embudos B2B y estrategias de posicionamiento que convierten la infraestructura de tu empresa en su mejor argumento de ventas.",
    avatar: memojiAvatar5, 
  },
  {
    name: "Gestión Ambiental Integral",
    position: "Sostenibilidad real alineada con el crecimiento de tu negocio.",
    text: "Garantizamos el cumplimiento normativo estricto e implementamos sistemas de economía circular que reducen el impacto ambiental y optimizan tus costos operativos.",
    avatar: memojiAvatar2, // El nuevo memoji de Ingeniera Ambiental (el de tu esposa)
  },
  {
    name: "Factura y Nómina Electrónica",
    position: "Automatización fiscal absoluta, sin fricciones.",
    text: "Sincronizamos tus procesos contables bajo el sistema MAGNUM, asegurando validez legal inmediata ante los entes de control con cero errores manuales.",
    avatar: memojiAvatar4,
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
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
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
