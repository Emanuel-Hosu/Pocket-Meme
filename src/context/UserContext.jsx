// src/context/UserContext.js
import React, { createContext, useState } from "react";

// Crear el contexto
export const UserContext = createContext();

// Crear un proveedor para el contexto
export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);  // Estado para el ID del usuario

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};