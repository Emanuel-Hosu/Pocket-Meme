import React from "react";
import { ArrowLeft } from "lucide-react";

export const TerminosCondiciones = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200">
      <div className="flex-1 flex items-center">
        <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg w-80 p-8 flex flex-col items-center">
          <a
            href="/settings"
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
              Términos Y Condiciones
            </h1>
            <p className="text-sm text-gray-600">
              <br />
              <strong>Uso del Servicio:</strong> La aplicación permite la
              apertura de sobres virtuales que pueden contener premios, cupones
              o contenido informativo. Usted se compromete a usar la aplicación
              de manera legal y conforme a estos términos.
              <br />
              <br />
              <strong>Propiedad Intelectual:</strong> Todos los derechos de
              propiedad intelectual relacionados con la aplicación son propiedad
              de [Nombre de la empresa o desarrollador].
              <br />
              <br />
              <strong>Privacidad:</strong> Recopilamos y procesamos datos
              personales según nuestra{" "}
              <a href="/politicas" className="text-blue-500">
                Política de Privacidad
              </a>
              .
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminosCondiciones;
