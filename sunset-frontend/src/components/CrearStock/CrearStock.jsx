import { useState, useEffect } from "react";
import { crearStock } from "../../services/createStock";
import { getProductos } from "../../services/getPrductos";
import './CrearStock.css'

export default function CrearStockForm() {
  const [productos, setProductos] = useState([]);
  const [productoId, setProductoId] = useState("");
  const [talle, setTalle] = useState("S");
  const [cantidad, setCantidad] = useState("");

  useEffect(() => {
    getProductos().then(data => {
      setProductos(data);
      if (data.length) setProductoId(data[0].id);
    });
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    await crearStock({
      productoId: Number(productoId),
      talle,
      cantidad: Number(cantidad)
    });

    alert("Stock agregado!");
    setCantidad("");
  };

  return (
    <div className="crear-stock-wrapper">
      <form onSubmit={handleSubmit} className="crear-stock-form">

        <h3>Agregar stock</h3>

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
    </div>
  );
}