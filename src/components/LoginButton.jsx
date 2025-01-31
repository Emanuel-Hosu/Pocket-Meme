/**
 * Pendiente de hacer codigo que al iniciar sesion y este todo correcto este enrute a main
 */
import { a } from 'framer-motion/client';
import React from 'react';

export const LoginButton = () => {
    return (
        <a href='/main'>
            <button className="gap-2 bg-blue-600 hover:bg-blue-700 text-center shadow-md px-4 py-2 rounded-full text-base text-stone-50 transition-colors w-40 h-12">

                <span>Iniciar Sesión</span>
            </button>
        </a>
    );
};