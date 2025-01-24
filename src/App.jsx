import React from "react";
import { Registrarse } from "./components/Registrarse";
import { IniciarSesion } from "./components/IniciarSesion";
import {Logo} from './components/Logo';
import { BotonFormulario } from "./components/BotonFormulario";

function App() {
  return (
    <>
    <div className="flex flex-col items-center min-h-screen">
     <BotonFormulario 
        img="/logopkt.png"
        texto="Enviar" 
        
      />
      <BotonFormulario 
        img="/logopkt.png"
        texto="Enviar" 
        
      />
      </div>
    </>
  );
}

export default App;
