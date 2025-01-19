import React from 'react';


export const UserInput = ({ value, onChange }) => {
    return (
        <div className="relative">
            <div className="top-1/2 left-3 absolute text-stone-50 -translate-y-1/2">
                <img src='' alt="user" className="pr-1 w-8 h-8" />

            </div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Usuario"
                className="border-gray-300 focus:border-gray-500-500 shadow-md py-3 pr-12 pl-10 border rounded-2xl focus:ring-2 focus:ring-gray-300 w-full transition-colors outline-none"
            />
        </div>
    );
}