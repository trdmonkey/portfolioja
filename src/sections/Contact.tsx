import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  // Construimos el link de WhatsApp con el número y el mensaje predeterminado
  const whatsappUrl = "https://wa.me/573245695802?text=Hola,%20estoy%20interesado%20en%20una%20consultoría%20técnica%20para%20mi%20empresa.";

  return (
    <div className="py-16 pt-4 lg:py-16 lg:pt-4">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-15 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                ¿Listo para legalizar tu operación?
              </h2>
              <p className="text-sm md:text-base mt-2">
                No esperes a una auditoría o un accidente. Hablemos de cómo integrar SST, cumplimiento ambiental y tecnología para que tu empresa deje de preocuparse por sanciones y se enfoque en escalar.
              </p>
            </div>
            <div>
              {/* Cambiamos el button por un <a> para que actúe como enlace */}
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Programar consultoría técnica</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};