import React from "react";
import { CajaInventario } from "./CajaInventario";
import MainFooter from "./MainFooter";

export const Colection = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Contenedor principal que ocupa el resto del espacio */}
      <div className="flex-grow overflow-y-auto">
        <CajaInventario />
      </div>

      {/* Footer fijo en la parte inferior */}
      <div className="fixed bottom-0 left-0 right-0">
        <MainFooter />
      </div>
    </div>
  );
};

export default Colection;
