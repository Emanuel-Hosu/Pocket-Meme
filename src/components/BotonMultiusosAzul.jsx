import React, { useState } from 'react';

export const BotonMultiusosAzul = ({textoSpan}) => {
  return (
    <button className=" gap-2 bg-blue-600 hover:bg-blue-700 text-center shadow-md px-4 py-2 rounded-full text-base text-stone-50 *:transition-colors w-40 h-12">
      <span>{textoSpan}</span>
    </button>
  );
};