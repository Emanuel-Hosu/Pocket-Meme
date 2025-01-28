import React from "react";
import { Registrarse } from "./components/Registrarse";
import { IniciarSesion } from "./components/IniciarSesion";
import {Logo} from './components/Logo';
import { BotonFormulario } from "./components/BotonFormulario";
import { Formulario } from "./components/Formulario";
import { Tienda } from "./components/Tienda";


function App() {
  return (
    <>
    <Tienda dinero={10} />
    </>
  );
}

export default App;