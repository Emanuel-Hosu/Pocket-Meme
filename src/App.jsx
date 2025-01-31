import React from "react";
import { Registrarse } from "./components/Registrarse";
import { IniciarSesion } from "./components/IniciarSesion";
import { Formulario } from "./components/Formulario";
import  MainPage  from "./components/MainPage";
import Tienda from "./components/Tienda"; 
import Missions  from "./components/PaginaMisiones";
import Settings from "./components/SettingsPage"
import TerminosCondiciones from "./components/Terminos"
import PoliticasPrivacidad from "./components/Politicas"
import Contactanos from "./components/Contactanos"
import Cuenta from "./components/W-Cuenta"
import CrearUsuario from "./components/W-CrearUsuario"
/**
 * Falta mantenimiento page y collection page
 */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/**
 * Cosas pendientes: 
 * --- COSAS DE BACK Y ENRUTAMIENTO ---
 * - Hacer que el boton de iniciar sesion redirija a la pagina principal siempre que se haya iniciado sesion correctamente
 * - Hacer que el boton de registrarse redirija a la pagina de formulario siempre que no haya una cuenta existente
 * - Hablar con beltran sobre enrutamiento DINAMICO
 * - ID en el input del idUsuario dinamico
 * 
 * --- COSAS DE DISEÑO ---
 * - Cambiar el fondo del footer padre al ser pulsado por una opcion del menu (ACTIVATE)
 * - Quitar animacion de cuando se clique en settings otra vez
 * - En W-Cuenta FALTA el boton de echar para atras gg
 * 
 * --- PENDIENTE --- 
 * - Pagina colecciones
 * - Pagina mantenimiento
 * @returns 
 */

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/iniciar-sesion" element={<IniciarSesion />} /> 
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/misiones" element={<Missions/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/terminos" element={<TerminosCondiciones/>}/>
          <Route path="/cuenta" element={<Cuenta/>}/>
          <Route path="/contacto" element={<Contactanos/>}/>
          <Route path="/politicas" element={<PoliticasPrivacidad/>}/>
          <Route path="/perfil" element={<CrearUsuario/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
