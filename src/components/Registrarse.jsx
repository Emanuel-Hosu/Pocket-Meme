import React from 'react';
import {UserInput} from './UserInput';
import {PasswordInput} from './PasswordInput';
import { RegistrarseInput } from './RegistrarseInput';
import FooterRegistro from './FooterRegistro';
import {CorreoInput} from './CorreoInput';
import { User } from 'lucide-react';


export const Registrarse = () => {
    return (
      <div className="bg-black h-screen w-screen px-10 py-20 flex items-center justify-center">
      <div className=' bg-slate-300 p-2 border-2 border-black rounded-lg gap-4 flex flex-col items-center justify-center w-full h-full max-w-3xl'>
        <img src="/logopkt.png" alt="Logo" className="w-32 h-32 mx-auto" />
        <UserInput />
        <CorreoInput />
        <PasswordInput />
        <RegistrarseInput />
        <a className="text-blue-400 transition block mt-3">
        Si ya tienes una cuenta{" "}
        <a className="text-blue-600" href="./components/IniciarSesion">
          inicia sesión.{" "}
        </a>
        Y vuelve a tu aventura
      </a>
      </div>
        <FooterRegistro />
      
      </div>
    );
};

export default Registrarse;