import { useEffect, useState } from "react";
import { getProductos } from "../../services/getPrductos";
import "./MostrarProductos.css";

export default function MostrarProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then(setProductos);
  }, []);

  return (
    <div className="product-grid">
      {productos.map(p => (
        <div key={p.id} className="product-card">

          <div className="product-image-wrapper">
            <img src={p.imagen} alt={p.nombre} />
          </div>

          <div className="product-content">
            <h3>{p.nombre}</h3>
            <p>{p.descripcion}</p>

            <span className="product-price">${p.precio}</span>

            <div className="product-sizes">
              {p.stockPorTalle.map(s => (
                <span key={s.id} className="size-chip">
                  {s.talle} · {s.cantidad}
                </span>
              ))}
            </div>

            <button className="product-button">
              Agregar al carrito
            </button>

          </div>
        </div>
      ))}
    </div>
  );
}