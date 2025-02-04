import React from 'react';

const CModalTienda = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">TPV Virtual</h2>
        <p>Información simulada del TPV virtual.</p>
        <button 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default CModalTienda;