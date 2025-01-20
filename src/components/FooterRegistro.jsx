import React from "react";

const FooterRegistro = () => {
  return (
    <footer className=" text-blue-700 text-center text-sm py-7 absolute bottom-0 left-0 w-full">
      {/* Derechos reservados */}
      <p className="mb-2">
        &copy; {new Date().getFullYear()} PocketMeme. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default FooterRegistro;
