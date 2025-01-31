import React, { useState } from "react";
import {BotonMultiusosRojo} from "./BotonMultiusosRojo";
import {BotonMultiusosAzul} from "./BotonMultiusosAzul";
import {UserId} from "./UserId";

export const Cuenta = () => {
const [progress, setProgress] = useState(50);
    //para subir porcentage updateProgress(progress + 10)
    //funcion para subir la barra de nivel
    const updateProgress = (newProgress) => {
        if (newProgress >= 0 && newProgress <= 20) {
            setProgress(newProgress);
        }
    };
    //funcion para subir el nivel
    const [lvl, setLvl] = useState(1);
    const updateLvl = (newLvl) => {
        if (newLvl >= 1 && newLvl <= 100) {
            setLvl(newLvl);
        }
    };

  const [buttonText, setButtonText] = useState('hola');
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(buttonText);

  const handleButtonClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    setButtonText(inputValue);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-white bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200">
        <div className="bg-white backdrop-blur-sm shadow-lg rounded-lg w-96 h-full px-4 py-8 flex flex-col items-center ">
            <p className="text-4xl text-gray-400 font-thin rounded-sm ml-6">Cuenta</p>

                <button className="shadow-md mt-14 rounded-full ml-4">
                        <img className="shadow-md rounded-full size-20" src="/public/gatt.jpg" alt="" />
                </button>

                <div className="my-4 pb-2 rounded-lg w-36">
                    <div className="relative flex shadow-inner rounded-full h-6">
                        <div
                            className="absolute bg-green-400 rounded-full h-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                        <div className="ml-40">
                            Nvl.{lvl}
                        </div>

                    </div>
                </div>

            {isEditing ? (
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className="shadow-md mt-2 rounded-full ml-4 px-4 py-2 text-gray-500"
                />
            ) : (
                <button
                    className="shadow-md mt-2 rounded-full ml-4 flex items-center gap-2 px-4 py-2 text-gray-500"
                    onClick={handleButtonClick}
                >
                    {buttonText}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>

                </button>
            )}

            {/* Aquí va lo tuyo beltran */}
            <div className=" mt-14 gap-8 flex ">
            <a href="/perfil">
                <BotonMultiusosAzul textoSpan="Editar Perfil"/>
            </a>

            <a href="/iniciar-sesion">
                <BotonMultiusosRojo textoSpan="Cerrar Sesión"/>
            </a>
            </div>

            <UserId />
        </div>  
        </div>
  );
};

export default Cuenta;