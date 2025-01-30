import React from 'react';

const BotonTienda = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-blue-600 shadow-md hover:shadow-xl m-4 border-radius-3xl rounded-3xl w-28 md:w-32 h-28 md:h-32 text-center transition-all duration-200 ease-in-out hover:scale-105">
            <a href="#">
                <svg className='w-20 h-20' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" /></svg>
                <span className="text-stone-400">Tienda</span>
            </a>
        </div>

    );
};
export default BotonTienda;
