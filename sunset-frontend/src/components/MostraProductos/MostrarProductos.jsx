import { useEffect, useState } from "react";
import { getProductos } from "../../services/getPrductos";

export default function MostrarProductos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos().then(setProductos);
    }, []);

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {productos.map(p => (
                <div key={p.id} style={{ border: "1px solid #ccc", padding: 10 }}>
                    <img
                        src={p.imagen}
                        alt={p.nombre}
                        style={{ width: "100%", height: 200, objectFit: "cover" }}
                    />
                    <h3>{p.nombre}</h3>
                    <p>{p.descripcion}</p>
                    <strong>${p.precio}</strong>

                    <div>
                        {p.stockPorTalle.map(s => (
                            <span key={s.id}>
                                {s.talle}: {s.cantidad}{" "}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
