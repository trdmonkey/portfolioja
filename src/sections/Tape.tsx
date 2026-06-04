import StarIcon from "@/assets/icons/bolt.svg";
import { Fragment } from "react";

const words = [
  "SG-SST",
  "Gestión Ambiental",
  "Software Fullstack",
  "Facturación Electrónica",
  "Multimedia",
  "CGI",
  "VFX",
  "Consultoría",
  "3D",
  "Auditoría",
  "Innovación",
  "Publicidad",
  "Marketing online",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-12 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-700 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]" >
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-100 -rotate-12 " />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
