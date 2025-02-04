import React, { useState } from "react";
import { BotonMultiusosAzul } from "./BotonMultiusosAzul";
import { ArrowLeft } from "lucide-react";

export const CrearUsuario = () => {
  const [selectedIcon, setSelectedIcon] = useState("/default-icon.jpg");
  const icons = [
    "/icon1.jpeg",
    "/icon2.jpg",
    "/icon3.jpeg",
    "/icon4.jpg",
    "/icon5.jpg",
    "/icon6.jpg",
  ];

  return (
    <div className="h-screen w-full flex items-center justify-center relative">
      <div className="bg-white/80 shadow-lg rounded-lg gap-6 flex flex-col items-center justify-center w-full h-full max-w-3xl relative px-10 py-6">
        <a
          href="#"
          className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="ml-2 text-sm">Atrás</span>
        </a>

        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-24 h-24 border-4 border-gray-300 rounded-full overflow-hidden mb-4">
            <img
              src={selectedIcon}
              alt=""
              className="w-full h-full object-cover "
            />
          </div>
          <p className="text-sm text-gray-600">Cambia Icono</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {icons.map((icon, index) => (
            <button
              key={index}
              className="w-16 h-16 rounded-full border border-gray-300 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 transform hover:scale-110 transition duration-200 overflow-hidden"
              onClick={() => setSelectedIcon(icon)}
            >
              <img
                src={icon}
                alt={`Icono ${index + 1}`}
                className="w-full h-full object-cover "
              />
            </button>
          ))}
        </div>
        <div className="mt-6">
          <BotonMultiusosAzul textoSpan="Confirmar" />
        </div>
      </div>
    </div>
  );
};

export default CrearUsuario;
