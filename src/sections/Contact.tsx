"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { useState } from "react";

// Actualizamos los nombres exactos que se ven en tu captura
const listaServicios = [
  "Gestión de Seguridad y Salud en el Trabajo (SG-SST).",
  "Gestión Ambiental y Disposición Final / Consultoría.",
  "Facturación Electrónica / Desarrollo de Software.",
  "Producción Multimedia y Publicidad Digital / 3D.",
];

export const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleServiceChange = (servicio: string) => {
    if (services.includes(servicio)) {
      setServices(services.filter((s) => s !== servicio));
    } else {
      setServices([...services, servicio]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, services, message }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setServices([]);
        setMessage("");
        setTimeout(() => {
          setIsOpen(false);
          setStatus("idle");
        }, 2500);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="py-16 pt-4 lg:py-16 lg:pt-4">
      <div className="container">
        {/* SECCIÓN PRINCIPAL */}
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-15 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          {/* Modifica esta línea dentro de tu Contact.tsx */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-between text-center lg:text-left">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2 className="font-serif text-2xl md:text-3xl font-bold">
                ¿Listo para legalizar tu operación?
              </h2>
              <p className="text-sm md:text-base mt-2 text-gray-800 leading-relaxed">
                No esperes a una auditoría o un accidente. Hablemos de cómo
                integrar SST, cumplimiento ambiental y tecnología para que tu
                empresa deje de preocuparse por sanciones y se enfoque en
                escalar.
              </p>
            </div>
            <div className="w-full md:w-auto flex justify-center lg:justify-start">
              <button
                onClick={() => setIsOpen(true)}
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 transition-colors cursor-pointer text-sm font-semibold shadow-lg whitespace-nowrap"
              >
                <span>Programar consultoría técnica</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* VENTANA MODAL CORREGIDA */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/70 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-slate-900 border border-white/10 rounded-3xl w-full max-w-xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl text-white">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors cursor-pointer size-8 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full text-lg"
            >
              ✕
            </button>

            {/* Ajuste de color del título a la paleta corporativa */}
            <div className="mb-6">
              <h3 className="font-serif text-xl md:text-2xl text-emerald-300">
                Solicitud de Consultoría Técnica
              </h3>
              <p className="text-xs md:text-sm text-white/60 mt-1">
                Complete los siguientes datos para asignar un ingeniero
                especializado de J&A.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Nombre completo o Empresa"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={status === "sending" || status === "success"}
                  className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "sending" || status === "success"}
                  className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-transparent transition-all"
                />
                <input
                  type="tel"
                  placeholder="Teléfono / WhatsApp"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={status === "sending" || status === "success"}
                  className="w-full h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-transparent transition-all"
                />
              </div>

              {/* Ajuste de Grid y Alineación de Checkboxes */}
              <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                <p className="text-xs font-semibold text-white/80 mb-3 font-mono uppercase tracking-wider">
                  ¿Qué servicios especializados requiere cotizar?
                </p>
                {/* Cambiado a 1 columna en móviles (grid-cols-1) y 1 columna en escritorio para nombres largos */}
                <div className="grid grid-cols-1 gap-3.5">
                  {listaServicios.map((servicio) => (
                    <label
                      key={servicio}
                      className="flex items-start gap-3 text-xs text-white/70 hover:text-white cursor-pointer select-none"
                    >
                      {/* El shrink-0 bloquea el tamaño del checkbox evitando que se achique */}
                      <input
                        type="checkbox"
                        checked={services.includes(servicio)}
                        onChange={() => handleServiceChange(servicio)}
                        disabled={status === "sending" || status === "success"}
                        className="accent-emerald-300 size-4 rounded bg-white/5 border-white/10 shrink-0 mt-0.5"
                      />
                      <span className="leading-tight">{servicio}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Describe brevemente tu sector económico o requerimiento específico..."
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={status === "sending" || status === "success"}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300/40 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Ajuste de Botón a la paleta de colores oficial */}
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 inline-flex items-center justify-center px-6 h-12 rounded-xl gap-2 w-full transition-opacity disabled:opacity-40 cursor-pointer text-sm font-semibold mt-2 shadow-lg hover:opacity-90"
              >
                <span>
                  {status === "sending"
                    ? "Enviando requerimiento..."
                    : status === "success"
                      ? "¡Recibido con éxito!"
                      : "Enviar Solicitud Segura"}
                </span>
                {status === "idle" && <ArrowUpRightIcon className="size-4" />}
              </button>

              {/* Mensajes de feedback */}
              {status === "success" && (
                <p className="text-xs font-medium text-emerald-300 text-center bg-emerald-500/10 py-2.5 rounded-lg border border-emerald-500/20">
                  ¡Solicitud enviada! Nos comunicaremos al correo/teléfono
                  indicado.
                </p>
              )}
              {status === "error" && (
                <p className="text-xs font-medium text-rose-400 text-center bg-rose-500/10 py-2.5 rounded-lg border border-rose-500/20">
                  Hubo un problema de conexión. Inténtalo de nuevo.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
