import React from 'react';
import {UserInput} from './UserInput';
import {PasswordInput} from './PasswordInput';
import {LoginButton} from './LoginButton';
import FooterIniciarSesion from './FooterIniciarSesion';
import { User } from 'lucide-react';


export const IniciarSesion = () => {
    return (
      <div className="bg-black h-screen w-screen px-10 py-20 flex items-center justify-center">
      <div className=' bg-slate-300 p-2 border-2 border-black rounded-lg gap-4 flex flex-col items-center justify-center w-full h-full max-w-3xl'>
        <img src="/logopkt.png" alt="Logo" className="w-32 h-32 mx-auto" />
        <UserInput />
        <PasswordInput />
        <LoginButton />
        <a className="text-blue-400 transition block mt-3">
        ¿No tienes cuenta? Empieza tu aventura en {" "}
        <a href="./components/Registrarse" className="text-blue-600 ">
          registrándote.
        </a>
      </a>
      </div>
        <FooterIniciarSesion />
      
      </div>
    );
};

export default IniciarSesion;