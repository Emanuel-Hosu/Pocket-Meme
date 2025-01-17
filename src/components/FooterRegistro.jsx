import React from "react";

const FooterRegistro = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-5 absolute bottom-0 left-0 w-full">
      {/* Mensaje de inicio de sesión */}
      <a className="text-white transition block mb-3">
        Si ya tienes una cuenta{" "}
        <a className="text-blue-400" href="#Pagina de Login">
          inicia sesión.
        </a>
        <br /> Y vuelve a tu aventura
      </a>

      {/* Derechos reservados */}
      <p className="mb-2">
        &copy; {new Date().getFullYear()} PocketMeme. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default FooterRegistro;
