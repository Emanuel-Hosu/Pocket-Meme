import React from 'react';
import {UserInput} from './UserInput';
import {PasswordInput} from './PasswordInput';
import { RegistrarseInput } from './RegistrarseInput';
import FooterRegistro from './FooterRegistro';
import {CorreoInput} from './CorreoInput';
import { User } from 'lucide-react';


export const Registrarse = () => {
    return (
      <div className="bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200 h-screen w-screen px-10 py-20 flex items-center justify-center">
      <div className=' bg-white/80 backdrop-blur-sm shadow-lg rounded-lg gap-6 flex flex-col items-center justify-center w-80 h-full max-w-3xl'>
        <img src="/logopkt.png" alt="Logo" className="w-36 h-36 mb-2" />
        <UserInput />
        <CorreoInput />
        <PasswordInput />
        <div className="mt-4">
        <RegistrarseInput />
        </div>
        <div className="px-4 text-center">
        <a className="text-sm text-center text-gray-600 ">
        Si ya tienes una cuenta{" "}
        
        <a className="text-blue-600 hover:underline ml-1" href="./components/IniciarSesion">
          inicia sesión.{" "}
        </a>
        Y vuelve a tu aventura
      </a>
      </div>
      </div>
        <FooterRegistro />
      
      </div>
    );
};

export default Registrarse;