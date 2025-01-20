import React from 'react';
import { UserInput } from './UserInput';
import { PasswordInput } from './PasswordInput';
import { LoginButton } from './LoginButton';
import FooterIniciarSesion from './FooterIniciarSesion';
import { User } from 'lucide-react';

export const IniciarSesion = () => {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen">
            <div className="flex-1 flex items-center">
                <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg w-80 p-8 flex flex-col items-center">
                    <div className="mb-6">
                        <img 
                            src="/logopkt.png" 
                            alt="Logo" 
                            className="w-32 h-32 object-contain"
                        />
                    </div>
                    
                    <div className="w-full space-y-6">
                        <UserInput />
                        <PasswordInput />
                        <div className="pt-4 flex justify-center w-full">
                            <LoginButton />
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <span className="text-sm text-gray-600">
                            ¿No tienes cuenta? Empieza tu aventura{" "}
                            <a 
                                href="./components/Registrarse" 
                                className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
                            >
                                registrándote
                            </a>
                        </span>
                    </div>
                </div>
            </div>

            <FooterIniciarSesion />
        </div>
    );
};

export default IniciarSesion;
