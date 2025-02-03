import React, { useState } from 'react';

const CTiendaBuyComponent = () => {
    const [multiplier, setMultiplier] = useState(48);

    const prices = {
        6: '2€',
        12: '3€',
        48: '5€',
        333: '10€'
    };

    const toggleMultiplier = () => {
        setMultiplier(multiplier === 48 ? 12 : multiplier === 12 ? 6 : multiplier === 6 ? 333 : 48);
    }

    return (
        <div 
            className="flex flex-col items-center cursor-pointer"
            onClick={toggleMultiplier}
        >
            <div className="relative bg-stone-100 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                <img 
                    src="/elmoReloj.png" 
                    alt="Elmo Reloj" 
                    className="w-24 h-24 object-contain"
                />
                <div className="absolute bottom-3 left-2 bg-red-600 rounded-full px-2">
                    <span className="text-white font-bold text-sm">
                        x{multiplier}
                    </span>
                </div>
                <div className="absolute top-2 right-2 bg-green-600 rounded-full px-2">
                    <span className="text-white font-bold text-sm">
                        {prices[multiplier]}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CTiendaBuyComponent;
