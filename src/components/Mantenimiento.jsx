import React from "react";
import { ArrowLeft } from "lucide-react";

export const Mantenimiento = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="flex-1 flex items-center">
        <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg w-80 p-10 py-8 flex flex-col items-center">
          <a
            href="#"
            className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-6 h-6" />
            <span className="ml-2 text-sm">Atrás</span>
          </a>
          <div className="flex flex-col items-center justify-center w-full max-w-3xl">
            <div className="mb-6 flex justify-center">
              <img
                src="/logopkt.png"
                alt="Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
            <h1 className="text-2xl font-semibold text-center mb-4">
              Mantenimiento
            </h1>
            <p className="text-sm text-gray-600">
              Esta pagina esta en mantenimiento, por favor revise mas tarde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mantenimiento;
