import React, { useState } from 'react';


export const PasswordInput = ({ value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            <div className="top-1/2 left-3 absolute text-gray-400 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/></svg>
            </div>
            <input

                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Contraseña"
                className="border-gray-300 focus:border-gray-500-500 shadow-md py-3 pr-12 pl-10 border rounded-2xl focus:ring-2 focus:ring-gray-300 w-full transition-colors outline-none"
            />

        </div>
    );
}