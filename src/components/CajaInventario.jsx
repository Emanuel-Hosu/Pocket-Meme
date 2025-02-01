import React, { useEffect, useState } from "react";

export const CajaInventario = () => {
  const [cartas, setCartas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [terminoBuscado, setTerminoBuscado] = useState("");
  const [numeroCartas, setNumeroCartas] = useState(0);

  useEffect(() => {
    const user_id = "9rg74t9e"; // Cambiar por el usuario registrado
    const fetchCartas = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/get_inventory/?user_id=${user_id}&isStarred=false`
        );

        if (!response.ok) {
          throw new Error("Error al obtener las cartas");
        }

        const data = await response.json();
        setCartas(data);
        setNumeroCartas(data.length);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCartas();
  }, []);

  const elementosFiltrados = cartas.filter((item) =>
    item.name.toLowerCase().includes(terminoBuscado.toLowerCase())
  );

  function handleSearchChange(e) {
    setTerminoBuscado(e.target.value);
  }

  if (loading) {
    return <p>Cargando cartas...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="bg-white h-full">
      {/* Header fijo */}
      <div className="flex fixed top-0 left-0 right-0 shadow-xl rounded-xl justify-around items-center w-full bg-white overflow-hidden transition-transform duration-700 ease-in-out z-10">
        <div
          className={`flex items-center bg-[#D9D9D9] rounded-3xl shadow-stone-400 w-[25%] justify-around my-4 shadow-inner transition-all duration-700 ease-in-out ${
            isSearchActive
              ? "-translate-x-full opacity-0 display-none"
              : "translate-x-0 opacity-100 flex"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="27px"
            viewBox="0 -960 960 960"
            width="27px"
            fill="#C8C8C8"
          >
            <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z" />
          </svg>
          <p className="text-[#C8C8C8] px-1 py-2 text-[23px]">{numeroCartas}</p>
        </div>
        <div
          className={`flex items-center bg-[#D9D9D9] rounded-3xl shadow-stone-400 justify-around my-4 ml-2 shadow-inner transition-all duration-700 ease-in-out ${
            isSearchActive ? "w-[100%]" : "w-[40%]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#C8C8C8"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
          <input
            type="text"
            name="Buscador"
            placeholder="Buscar"
            id="Buscador"
            className="w-[70%] bg-transparent text-[#C8C8C8] p-2 text-[20px] focus:outline-none"
            onFocus={() => setIsSearchActive(true)}
            onBlur={() => setIsSearchActive(false)}
            onChange={handleSearchChange}
          />
        </div>
        <div
          className={`flex items-center bg-[#D9D9D9] rounded-3xl shadow-stone-400 w-[20%] justify-around my-4 ml-2 shadow-inner transition-all duration-700 ease-in-out ${
            isSearchActive
              ? "translate-x-full opacity-0 display-none"
              : "translate-x-0 opacity-100 flex"
          }`}
        >
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#C8C8C8"
              className="m-1"
            >
              <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Contenedor de las cartas con margen inferior */}
      <div className="w-full overflow-y-auto mt-24 pb-24">
        <div className="grid grid-cols-3 gap-4 p-4">
          {elementosFiltrados.length > 0 ? (
            elementosFiltrados.map((item, index) => (
              <div
                className="w-full flex justify-center items-center"
                key={index}
              >
                <img
                  src={item.photo}
                  width="120"
                  alt={item.name}
                  className="shadow-xl shadow-stone-400 rounded-lg"
                />
              </div>
            ))
          ) : (
            <div className="text-red-700 text-3xl w-full h-[90%] justify-center items-center grid grid-cols-1 ">
              No hay resultados
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CajaInventario;
