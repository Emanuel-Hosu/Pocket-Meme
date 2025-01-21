import React from "react";

export const BotonMultiusosRojo = ({textoSpan}) => {
  return (
    <button className=" gap-2 bg-red-600 hover:bg-red-700 text-center shadow-md px-4 py-2 rounded-full text-base text-stone-50 *:transition-colors w-40 h-12">
      <span>{textoSpan}</span>
    </button>
  );
};