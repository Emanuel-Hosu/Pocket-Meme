// src/components/MainLayout.jsx
import React from 'react';
import NombreUsuario from './NombreUsuario';
import BotonMisiones from './BotonMisiones';
import BotonTienda from './BotonTienda';
import BotonSetting from './BotonSetting';
import UserId from './UserId';

const MenuMain = () => {
    return (
        <div className="flex justify-center items-center px-10 py-20 w-screen h-screen">
            <div className='flex flex-col justify-center items-center gap-6 bg-white/80 shadow-lg backdrop-blur-sm px-6 rounded-lg w-auto max-w-3xl h-full'>
                <NombreUsuario name="Salchuca" photo="/profile.jpg" />
                <div className="flex space-x-6">
                    <BotonMisiones />
                    <BotonTienda />
                </div>
                <BotonSetting />
                <UserId />
            </div>
        </div>

    );
};

export default MenuMain;
