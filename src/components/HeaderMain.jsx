import React, { useState } from "react";

const PlayerLevelBar = () => {
    const [progress, setProgress] = useState(70);
    //para subir porcentage updateProgress(progress + 10)
    //para bajar porcentage updateProgress(progress - 10)
    const updateProgress = (newProgress) => {
        if (newProgress >= 0 && newProgress <= 100) {
            setProgress(newProgress);
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col items-center bg-red-400 shadow-2xl rounded-lg">
                <button className="py-2">
                    <img className="shadow-lg rounded-full size-20" src="/public/gatt.jpg" alt="" />
                </button>
                <div className="pb-2 w-80">
                    <div className="relative bg-gray-300 rounded-full h-6">
                        <div
                            className="top-0 left-0 absolute bg-green-500 rounded-full h-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div>
                        <p>
                            Nivel 7
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PlayerLevelBar;
