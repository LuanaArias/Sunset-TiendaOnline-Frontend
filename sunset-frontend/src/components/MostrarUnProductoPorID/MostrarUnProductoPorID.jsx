import { useEffect, useState } from "react";
import { getProductoPorID } from "../../services/getProductoPorID.js";
import "./mostrarUnProductoPorID.css";
import { useParams } from "react-router-dom";

export default function MostrarUnProductoPorID() {

  const { id } = useParams(); // id viene de la URL
  const [producto, setProducto] = useState(null);
  const [stockPorTalle, setStockPorTalle] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div >
      {producto && (<>
        <div className="product" >
          <div className="producto-contenido">
            <img
              className="product-image"
              src={producto.imagen}
              alt=""
              onClick={() => openModal()}
            />
            {isOpen && (
              <div className="modal show">
                <span className="close" onClick={closeModal}>&times;</span>
                <img src={producto.imagen}  className="modal-content" />
              </div>
            )}

          </div>
          <div className="producto-contenido">
            <h1 >{producto.nombre}</h1>
            <p className="texto-descripcion">{producto.descripcion}</p>
            <span className="product-price ">${producto.precio} AR</span>
            <hr />
            <p>Tamaño</p>



          </div>

        </div>

      </>)}
    </div>);
}