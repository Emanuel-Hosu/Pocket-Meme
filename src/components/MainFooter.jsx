import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuMain from "./MenuMain";

const MainFooter = () => {
  console.log("Renderizando MainFooter"); // Depuración
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <hr className="mb-0 shadow-lg border-2" />
      <div className="flex justify-around items-center h-16 bg-white">
        <a href="/main">
          <button className="hover:shadow-stone-400 hover:shadow-inner rounded-full transition ease-in-out size-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-md fill-stone-400"
              viewBox="0 -960 960 960"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
          </button>
        </a>
        <a href="/collection">
          <button className="hover:shadow-inner hover:shadow-stone-400 rounded-full transition ease-in-out size-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-md fill-stone-400"
              viewBox="0 -960 960 960"
            >
              <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z" />
            </svg>
          </button>
        </a>
        <a href="/maitenance">
          <button className="hover:shadow-inner hover:shadow-stone-400 rounded-full transition ease-in-out size-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-md fill-stone-400"
              viewBox="0 -960 960 960"
            >
              <path d="M38-428q-18-36-28-73T0-576q0-112 76-188t188-76q63 0 120 26.5t96 73.5q39-47 96-73.5T696-840q112 0 188 76t76 188q0 38-10 75t-28 73q-11-19-26-34t-35-24q9-23 14-45t5-45q0-78-53-131t-131-53q-81 0-124.5 44.5T480-616q-48-56-91.5-100T264-760q-78 0-131 53T80-576q0 23 5 45t14 45q-20 9-35 24t-26 34ZM0-80v-63q0-44 44.5-70.5T160-240q13 0 25 .5t23 2.5q-14 20-21 43t-7 49v65H0Zm240 0v-65q0-65 66.5-105T480-290q108 0 174 40t66 105v65H240Zm540 0v-65q0-26-6.5-49T754-237q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780ZM480-210q-57 0-102 15t-53 35h311q-9-20-53.5-35T480-210Zm-320-70q-33 0-56.5-23.5T80-360q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-280Zm640 0q-33 0-56.5-23.5T720-360q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-280Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-440q0 50-34.5 85T480-320Zm0-160q-17 0-28.5 11.5T440-440q0 17 11.5 28.5T480-400q17 0 28.5-11.5T520-440q0-17-11.5-28.5T480-480Zm0 40Zm1 280Z" />
            </svg>
          </button>
        </a>
        <a onClick={handleButtonClick}>
          <button className="hover:shadow-inner hover:shadow-stone-400 rounded-full transition ease-in-out size-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-lg fill-stone-400"
              viewBox="0 -960 960 960"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </a>
      </div>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <MenuMain />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainFooter;
