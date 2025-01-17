import React from "react";

const FooterIniciarSesion = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-7 absolute bottom-0 left-0 w-full">
      {/* Mensaje de registro */}
      <a className="text-blue-400 transition block mb-3">
        ¿No tienes cuenta? Empieza tu aventura{" "}
        <a href="#Pagina de registro" className="text-gray-400">
          registrándote.
        </a>
      </a>

      {/* Derechos reservados */}
      <p className="mb-2">
        &copy; {new Date().getFullYear()} PocketMeme. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default FooterIniciarSesion;
