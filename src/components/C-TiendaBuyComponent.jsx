import React from 'react';

const CTiendaBuyComponent = ({ multiplicador, precio }) => {

    return (
        <div className="flex flex-col items-center cursor-pointer">
            <div className="relative bg-stone-100 shadow-blue-300 shadow-md hover:shadow-xl hover:shadow-blue-400 p-4 rounded-lg transition-shadow">
                <img
                    src="/elmoReloj.png"
                    alt="Elmo Reloj"
                    className="w-24 h-24 object-contain"
                />
                <div className="bottom-3 left-2 absolute bg-red-600 px-2 rounded-full">
                    <span className="font-bold text-sm text-white">
                        x{multiplicador}
                    </span>
                </div>
                <div className="top-2 right-2 absolute bg-green-600 px-2 rounded-full">
                    <span className="font-bold text-sm text-white">
                        {precio}€
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CTiendaBuyComponent;
