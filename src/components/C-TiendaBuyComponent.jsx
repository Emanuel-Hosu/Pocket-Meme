import React from 'react';

const CTiendaBuyComponent = ({ multiplicador, precio }) => {

    return (
        <div className="flex flex-col items-center cursor-pointer">
            <div className="relative bg-stone-100 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                <img 
                    src="/elmoReloj.png" 
                    alt="Elmo Reloj" 
                    className="w-24 h-24 object-contain"
                />
                <div className="absolute bottom-3 left-2 bg-red-600 rounded-full px-2">
                    <span className="text-white font-bold text-sm">
                        x{multiplicador}
                    </span>
                </div>
                <div className="absolute top-2 right-2 bg-green-600 rounded-full px-2">
                    <span className="text-white font-bold text-sm">
                        {precio}€
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CTiendaBuyComponent;
