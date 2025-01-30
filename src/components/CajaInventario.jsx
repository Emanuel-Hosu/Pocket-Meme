import React, { useEffect } from "react";
import { useEEffect, useState } from "react";

export const CajaInventario = () => {
    const [cartas, setCartas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const user_id = "w08u6z7l"; //cambiar por el usuario registrado
        const fetchCartas = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/get_inventory/?user_id=${user_id}&isStarred=false`)

                if (!response.ok) {
                    throw new Error('Error al obtener las cartas');
                }

                const data = await response.json();
                setCartas(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCartas();
    }, []);

    if (loading) {
        return <p>Cargando cartas...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }


    return(
        <div className="">
            <h1>Lista de cartas</h1>
            <ul className="grid grid-cols-3">
                {cartas.map((carta) => (
                    <li key={carta._id}>
                        <h2>{carta.name}</h2>
                        <img src={carta.photo} alt={carta.name} width="100" />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CajaInventario