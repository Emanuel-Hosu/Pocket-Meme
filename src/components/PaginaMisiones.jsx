import React from "react";

import { MainFooter } from './MainFooter';


// Array de misiones con sus propiedades: id, título, descripción y número
const missions = [
    {
        id: '1',
        title: 'hahhahaah',
        description: 'Completa el tutorial básico del juego ',
        number: 1,
        total: 5
    },
    {
        id: '2',
        title: 'lorem ipsum',
        description: 'Explora tu primera zona .',
        number: 2,
        total: 4
    },
    {
        id: '3',
        title: 'lorem ipsum',
        description: 'Recolecta 10 objetos diferentes .',
        number: 3,
        total: 5
    },
    {
        id: '4',
        title: 'lorem ipsum',
        description: 'Completa tu primer encuentro .',
        number: 4,
        total: 5
    },
    {
        id: '5',
        title: 'Explorador Experto',
        description: 'Descubre todos los secretos .',
        number: 5,
        total: 5
    },
    {
        id: '6',
        title: 'Cazador de Tesoros',
        description: 'Encuentra tu primer cofre legendario.',
        number: 2,
        total: 4
    },
    {
        id: '7',
        title: 'Maestro de Armas',
        description: 'Mejora tu primera arma al nivel máximo.',
        number: 7,
        total: 7
    },
    {
        id: '8',
        title: 'Héroe del Pueblo',
        description: 'Completa tu primera misión secundaria.',
        number: 4,
        total: 5
    },
];


const Missions = () => {
    return (
        // Contenedor principal con altura fija de pantalla
        <div className="flex flex-col h-screen">
            {/* Contenedor de las tarjetas de misiones con scroll */}
            <div className="flex-1 overflow-y-auto">
                {/* Contenedor para centrar y limitar el ancho */}
                <div className="mx-auto px-4 py-6 max-w-2xl">
                    {/* Contenedor de las tarjetas con espacio entre ellas */}
                    <div className="space-y-6">
                        {/* Mapeo del array de misiones para crear cada tarjeta */}
                        {missions.map((mission) => (
                            <div
                                key={mission.id}
                                className="bg-stone-100 shadow-xl hover:shadow-2xl rounded-2xl transition-shadow duration-200 overflow-hidden"
                            >
                                <div className="flex justify-between p-2">
                                    {/* Contenido de la misión */}
                                    <div className="space-y-1">
                                        <h2 className="m-2 font-semibold text-stone-700 md:text-xl">
                                            {mission.title}
                                        </h2>
                                        <p className="m-2 text-sm text-stone-500 md:text-lg leading-relaxed">
                                            {mission.description}
                                        </p>
                                        <span className="inline-flex justify-center items-center w-12 h-12 font-semibold text-lg text-stone-500">
                                            {mission.number}/{mission.total}
                                        </span>
                                    </div>

                                    {/* Icono a la derecha */}
                                    <div className="flex-shrink-0 ml-2">
                                        <svg className='w-36 h-36' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                            <path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer fijo */}
            <div className="flex-shrink-0">
                <MainFooter />
            </div>
        </div>
    );
};


export default Missions;