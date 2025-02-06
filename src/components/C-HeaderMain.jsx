import React, { useState } from "react";
import CModalHeader from "./C-ModalHeader";

const MainHeader = () => {
  const [progress, setProgress] = useState(50);
  const [lvl, setLvl] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para actualizar la barra de nivel
  const updateProgress = (newProgress) => {
    if (newProgress >= 0 && newProgress <= 20) {
      setProgress(newProgress);
    }
  };

  // Función para actualizar el nivel
  const updateLvl = (newLvl) => {
    if (newLvl >= 1 && newLvl <= 100) {
      setLvl(newLvl);
    }
  };

  function handleClick() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <React.Fragment>
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col items-center shadow-blue-400 shadow-md mx-5 rounded-3xl w-full bg-white relative transition-all duration-200 ease-in-out">
          {/* Png del simbolo de interrogacion */}
          <div className="absolute top-2 right-2">
            <button onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </button>
          </div>
          {/* Logo de la aplicacion a la izquierda */}
          <div className="absolute top-2 left-2">
            <img
              src="/logopkt.png"
              alt="Logo"
              className="w-10 h-7 object-contain"
            />
          </div>
          {/* Foto de perfil y icono de editar */}
          <div className="flex items-center">
            <button className="shadow-md mt-4 rounded-full">
              <img
                className="shadow-md rounded-full size-16"
                src="/gatt.jpg"
                alt=""
              />
            </button>
            <div className="ml-2 relative top-1 cursor-pointer self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 relative top-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4 mb-4 pb-2 rounded-lg w-36">
            <div className="relative flex shadow-blue-400">
              <div
                className="absolute bg-green-400 rounded-full h-3"
                style={{ width: `${progress}%` }}
              ></div>
              <div className="ml-40 -mt-2 font-medium">Nvl.{lvl}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Header */}
      <CModalHeader isOpen={isModalOpen} onClose={handleCloseModal} />
    </React.Fragment>
  );
};

export default MainHeader;
