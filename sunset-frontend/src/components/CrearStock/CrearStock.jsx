import { useState } from "react";
import { crearStock } from "../../services/createStock";

export default function CrearStockForm() {
    const [productoId, setProductoId] = useState("");
    const [talle, setTalle] = useState("S");
    const [cantidad, setCantidad] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();

        await crearStock({
            productoId: Number(productoId),
            talle,
            cantidad: Number(cantidad)
        });

        alert("Stock agregado!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Agregar stock</h3>

            <input
                placeholder="Producto ID"
                value={productoId}
                onChange={e => setProductoId(e.target.value)}
            />

            <select value={talle} onChange={e => setTalle(e.target.value)}>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </select>
            
            <input
                placeholder="Cantidad"
                value={cantidad}
                onChange={e => setCantidad(e.target.value)}
            />

            <button>Guardar</button>
        </form>
    );
}
