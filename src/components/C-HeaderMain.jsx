import React, { useState } from "react";

const MainHeader = () => {
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

    return (
        <div className="flex justify-center items-center w-full">
            <div className="flex flex-col items-center shadow-gray-400 shadow-md mx-5 rounded-3xl w-full bg-white" >
                {/*contenedor de la imagen de usuario*/}
                <button className="shadow-md mt-4 rounded-full">
                    <img className="shadow-md rounded-full size-16" src="/public/gatt.jpg" alt="" />
                </button>

                {/*contenedor de la barra lateral y el nivel*/}
                <div className="mt-2 mb-4 pb-2 rounded-lg w-36">
                    <div className="relative flex shadow-gray-400 shadow-inner rounded-full h-4">
                        <div
                            className="absolute bg-green-400 rounded-full h-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                        <div className="ml-40">
                            Nvl.{lvl}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;
