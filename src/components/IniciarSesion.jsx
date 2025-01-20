import React from 'react';
import {UserInput} from './UserInput';
import {PasswordInput} from './PasswordInput';
import {LoginButton} from './LoginButton';
import FooterIniciarSesion from './FooterIniciarSesion';
import { User } from 'lucide-react';


export const IniciarSesion = () => {
    return (
      <div className="bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200 h-screen w-screen px-10 py-20 flex items-center justify-center">
      <div className=' bg-white/80 backdrop-blur-sm shadow-lg rounded-lg gap-4 flex flex-col items-center justify-center w-full h-full max-w-3xl'>
        <img src="/logopkt.png" alt="Logo" className="w-32 h-32 mx-auto" />
        <UserInput />
        <PasswordInput />
        <LoginButton />
        <a className="text-sm text-center mt-4 text-gray-600">
        ¿No tienes cuenta? Empieza tu aventura en {" "}
        <a href="./components/Registrarse" className="text-blue-600 hover:underline ml-1 ">
          registrándote.
        </a>
      </a>
      </div>
        <FooterIniciarSesion />
      
      </div>
    );
};

export default IniciarSesion;