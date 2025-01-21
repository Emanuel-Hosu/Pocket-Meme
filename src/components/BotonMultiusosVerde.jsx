import React, { useState } from 'react';

export const BotonMultiusosVerde = ({textoSpan}) => {
  return (
    <button className=" gap-2 bg-green-600 hover:bg-green-700 text-center shadow-md px-4 py-2 rounded-full text-base text-stone-50 *:transition-colors w-40 h-12">
      <span>{textoSpan}</span>
    </button>
  );
};