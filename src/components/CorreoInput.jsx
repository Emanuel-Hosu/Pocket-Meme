import React from "react";

export const CorreoInput = ({ value, onChange }) => {
  return (
    <div className="relative">
      <div className="top-1/2 left-3 absolute text-stone-50 -translate-y-1/2">
        <span role="img" aria-label="email" className="text-gray-500 text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
        </span>
      </div>
      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Correo electrónico"
        className="border-gray-300 focus:border-gray-500 shadow-md py-3 pr-12 pl-10 border rounded-2xl focus:ring-2 focus:ring-gray-300 w-full transition-colors outline-none"
      />
    </div>
  );
};
