import React, { useState } from 'react';
import MainFooter from "./MainFooter";
import CModalTienda from './C-ModalTienda';
import CTiendaBuyComponent from './C-TiendaBuyComponent';

const Tienda = ({ dinero }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <React.Fragment>
      <div className="relative mx-auto p-6 max-w-lg h-full">
        {/* Header */}
        <div className="flex justify-between items-center shadow-blue-400 shadow-md mb-8 p-3 rounded-xl">
          <h1 className="font-thin text-4xl text-blue-500">Tienda</h1>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-slate-400 px-3 py-1 rounded-full text-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
              <span>{dinero}</span>
            </button>
            <button onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="gap-6 grid grid-cols-2 mb-20 px-2">
          <CTiendaBuyComponent multiplicador={24} precio={3} />
          <CTiendaBuyComponent multiplicador={64} precio={5} />
          <CTiendaBuyComponent multiplicador={148} precio={8} />
          <CTiendaBuyComponent multiplicador={262} precio={10} />
        </div>

        <div className="right-0 bottom-0 left-0 fixed mx-auto p-4 max-w-lg">
          <MainFooter />
        </div>
      </div>
      <CModalTienda isOpen={isModalOpen} onClose={handleCloseModal} />
    </React.Fragment>
  );
};

export default Tienda;