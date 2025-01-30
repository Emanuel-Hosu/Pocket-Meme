import React from 'react';
import NombreUsuario from './NombreUsuario';
import BotonMisiones from './BotonMisiones';
import BotonTienda from './BotonTienda';
import BotonSetting from './BotonSetting';
import UserId from './UserId';

const MenuMain = () => {
    return (
        <div className="flex justify-center items-center px-2 sm:px-10 py-4 sm:py-20 w-96">
            <div className='flex flex-col justify-center items-center gap-2 bg-white/80 shadow-lg backdrop-blur-sm px-4 py-6 rounded-lg w-96'>
                <NombreUsuario name="Salchuca" photo="/profile.jpg" />
                <div className="flex space-x-4">
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