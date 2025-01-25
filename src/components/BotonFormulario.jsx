import React, { useState } from 'react';

export const BotonFormulario = ({ texto, img }) => {
  
  const [isActive, setIsActive] = useState(false);

  
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={handleClick}
      className={`text-center text-sm px-1 rounded-full focus:outline-none flex items-center gap-2 
        ${isActive ? 'bg-blue-600 text-white' : 'bg-white text-blue-400 shadow-none'}`}
    >
      <img src={img} alt="Logo" className="w-4 h-4 rounded-full" />
      <span>{texto}</span>
    </button>
  );
};

export default BotonFormulario;
