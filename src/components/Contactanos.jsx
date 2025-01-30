import React from "react";

export const Contactanos = () => {
  const equipo = [
    { name: "Emi.", github: "https://github.com/Emanuel-Hosu" },
    { name: "Mayra.", github: "https://github.com/mayrabpi" },
    { name: "Beltran.", github: "https://github.com/ZMiK0" },
    { name: "Adrian.", github: "https://github.com/adriesco" },
    { name: "David.", github: "https://github.com/DavEsp2406" },
    { name: "Arturo.", github: "https://github.com/ArthurAlvvarez" },
    { name: "Oscar.", github: "https://github.com/MainKataVerde" },
  ];

  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="flex-1 flex items-center">
        <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg max-w-md p-8 flex flex-col items-center">
          <a
            href="#"
            className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </a>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="mb-6 flex justify-center">
              <img
                src="/logopkt.png"
                alt="Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
            <h1 className="text-2xl font-semibold text-center mb-4">
              Contactanos
            </h1>
            <p className="text-sm text-gray-600 mb-6">Desarrollado por:</p>

            {/* Grid of GitHub icons with names and links */}
            <div className="grid grid-cols-3 gap-6 w-full">
              {equipo.map((dev, index) => (
                <div key={index} className="flex flex-col items-center">
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center hover:scale-110 transition-transform mb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 text-gray-800 hover:text-gray-600"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900 text-center"
                  >
                    {dev.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;
