import React from "react";
import { ArrowLeft } from "lucide-react";

export const Mantenimiento = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200">
      <div className="flex-1 flex items-center">
        <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg w-80 p-8 flex flex-col items-center">
          <a
            href="/settings"
            className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft href="" className="w-6 h-6" />
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
              Proximamente
            </h1>
            <p className="text-sm text-gray-600">
              <strong>Comunidad: </strong> Recopilamos y procesamos datos
              personales necesarios para mejorar la experiencia del usuario y
              proporcionar un servicio personalizado dentro de nuestra
              comunidad.
              <br />
              <br />
              <strong>Amigos: </strong>Implementamos medidas de seguridad para
              proteger sus datos personales de accesos no autorizados y uso
              indebido. La información compartida con amigos dentro de la
              aplicación está protegida mediante encriptación y controles de
              privacidad para garantizar su seguridad.
              <br />
              <br />
              <strong>Intercambio de cartas: </strong> Nuestra aplicación
              permite a los usuarios intercambiar cartas digitales con otros
              jugadores.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mantenimiento;
