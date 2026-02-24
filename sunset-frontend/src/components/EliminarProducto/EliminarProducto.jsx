import { useState, useEffect } from "react";
import { getProductos } from "../../services/getPrductos";
import { deleteProducto } from "../../services/deleteProducto";

export default function EliminarProducto() {
  const [productos, setProductos] = useState([]);
  const [productoId, setProductoId] = useState("");

    useEffect(() => {
        getProductos().then(data => {
            setProductos(data);
        if (data.length) setProductoId(data[0].id);
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!window.confirm("¿Eliminar producto?")) return;

        try {
            await deleteProducto(Number(productoId));

            setProductos(prev =>
                prev.filter(p => p.id !== Number(productoId))
            );

            alert("Producto eliminado correctamente");
        } catch (error) {
            alert("Error al eliminar producto");
        }
    };

    return (
        <div className="eliminar-producto-wrapper">
            <form onSubmit={handleSubmit} className="eliminar-producto-form">

                <h3>Eliminar producto</h3>

                <select
                    value={productoId}
                    onChange={e => setProductoId(e.target.value)}
                >
                    {productos.map(p => (
                        <option key={p.id} value={p.id}>
                            {p.nombre}
                        </option>
                    ))}
                </select>

                <button>Eliminar</button>

            </form>
        </div>
    );
}