// src/components/UserIdInput.jsx
// src/components/UserIdInput.jsx
import React, { useState } from 'react';

const UserIdInput = () => {
    const [userId] = useState('jdn2uq3eas22');

    const handleCopy = () => {
        navigator.clipboard.writeText(userId).then(() => {
            alert('Copiado al portapapeles');
        }).catch((err) => {
            console.error('Error al copiar al portapapeles: ', err);
        });
    };

    return (
        <div className="flex flex-col items-center m-4 p-4 rounded-lg w-min">
            <span className="mb-2 text-stone-800">Id Usuario:</span>
            <div className="flex items-center bg-stone-50 shadow-inner px-4 py-2 border rounded-full text-stone-400">
                <span className="flex-1">{userId}</span>
                <button onClick={handleCopy} className="hover:bg-gray-300 ml-2 p-2 rounded-md">
                    <svg className='fill-stone-400' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default UserIdInput;


