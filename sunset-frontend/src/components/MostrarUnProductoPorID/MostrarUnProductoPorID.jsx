import { useEffect, useState } from "react";
import { getProductoPorID } from "../../services/getProductoPorID.js";
import "./mostrarUnProductoPorID.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { useCart } from "../../context/CartContext";


export default function MostrarUnProductoPorID() {
  
  const { agregarProducto } = useCart();
  const { id } = useParams(); // id viene de la URL
  const [producto, setProducto] = useState(null);
  const [stockPorTalle, setStockPorTalle] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [talleSeleccionado, setTalleSeleccionado] = useState(null);

  useEffect(() => {
    getProductoPorID(id).then(p => {
      setProducto(p);
      setStockPorTalle(p.stockPorTalle);
    });
  }, []);


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function agregarAlCarrito() {

    if (!talleSeleccionado) {
      alert("Seleccioná un talle por favor");
      return;
    }

    agregarProducto({
    id: producto.id,
    nombre: producto.nombre,
    precio: producto.precio,
    imagen: producto.imagen,
    talle: talleSeleccionado
  });
  }

  return (
    <div >
      {producto && (<>
        <div className="producto margin-top" >
          <div className="producto-contenido">
            <img
              className="producto-image"
              src={producto.imagen}
              alt=""
              onClick={() => openModal()}
            />
            {isOpen && (
              <div className="modal show">
                <span className="close" onClick={closeModal}>&times;</span>
                <img src={producto.imagen} className="modal-content" />
              </div>
            )}

          </div>
          <div className="producto-contenido">
            <h1 >{producto.nombre}</h1>
            <p className="texto-descripcion">{producto.descripcion}</p>
            <span className="producto-texto-resaltado">${producto.precio} AR</span>
            <hr />
            <span className="producto-texto-resaltado">Tamaño</span>
            <div className="talle-button">
              {stockPorTalle.map(s => (
                <button
                  key={s.talle}
                  className={`talle-chip ${talleSeleccionado === s.talle ? "selected" : ""}`}
                  onClick={() => setTalleSeleccionado(s.talle)}>
                  {s.talle}
                </button>
              ))}
            </div>
            <button
              className="agregar-bolsa-button"
              onClick={agregarAlCarrito}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </>)}
    </div>);
}