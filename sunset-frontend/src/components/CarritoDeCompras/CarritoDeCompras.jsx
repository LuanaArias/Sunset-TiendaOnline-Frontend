import "./CarritoDeCompras.css";
import { useCart } from "../../context/CartContext";
import iconTacho from "../../assets/iconTacho.png"

export default function CarritoDeCompras({ cerrar }) {

  const { productos, total, eliminarProducto } = useCart();

  return (

    <div className="modal-overlay" onClick={cerrar}>

      <div className="modal-carrito" onClick={(e) => e.stopPropagation()}>
        <div className="carrito-header">
          <h2 className="titulo-carrito">Carrito de compras</h2>
          <button className="cerrar" onClick={cerrar}>✕</button>
        </div>

        <div className="contenedor-productos">
          {productos.map(p => (

            <div key={p.id + p.talle} className="producto-carrito">

              <img className="producto-carrito-imagen-wrapper" src={p.imagen} />

              <div>

                <h3 className="producto-carrito-contenido">{p.nombre}</h3>

                <p>Talle: {p.talle}</p>

                <p>Cantidad: {p.cantidad}</p>

                <span className="producto-carrito-precio">${p.precio}</span>

              </div>

              <div >
                <img className="eliminar-producto-carrito-button" onClick={() => eliminarProducto(p.id, p.talle)}src={iconTacho} />
              </div>
            </div>

          ))}
        </div>

        <hr />

        <h2 className="titulo-carrito">Subtotal: ${total}</h2>

      </div>

    </div>
  );
}