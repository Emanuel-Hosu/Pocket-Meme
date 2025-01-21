import React, { useState } from 'react';
import {UserInput} from './UserInput';
import {PasswordInput} from './PasswordInput';
import { RegistrarseInput } from './RegistrarseInput';
import FooterRegistro from './FooterRegistro';
import {CorreoInput} from './CorreoInput';
import { User } from 'lucide-react';


export const Registrarse = () => {
    return (
      <div className="bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200 h-screen w-screen px-10 py-20 flex items-center justify-center">
      <div className=' bg-white/80 backdrop-blur-sm shadow-lg  rounded-lg gap-4 flex flex-col items-center justify-center w-full h-full max-w-3xl'>
        <img src="/logopkt.png" alt="Logo" className="w-32 h-32 mx-auto" />
        <UserInput />
        <CorreoInput />
        <PasswordInput />
        <RegistrarseInput />
        <a className="text-sm text-center mt-4 text-gray-600">
        Si ya tienes una cuenta{" "}
        <a className="text-blue-600 hover:underline ml-1" href="./components/IniciarSesion">
          inicia sesión.{" "}
        </a>
        <br />
        Y vuelve a tu aventura
      </a>
      </div>
        <FooterRegistro />
      
      </div>
    );
};

export default Registrarse;