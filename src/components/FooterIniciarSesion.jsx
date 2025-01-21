import React from "react";

const FooterIniciarSesion = () => {
  return (
    <footer className=" text-blue-700 text-center text-sm mb-7 bottom-0 left-0 w-full">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} PocketMeme. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default FooterIniciarSesion;
