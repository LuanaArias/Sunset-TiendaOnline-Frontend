import SunsetLogo from "../../assets/SunsetLogo.png";
import "./Header.css";
import Compra from "../../assets/iconCompra.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function handleProductosClick() { 
    navigate("/");
   }
    return (
        <div className="header">
            <div >
                <img onClick={() => handleProductosClick()} className="logo-imagen-header" src={SunsetLogo} />
            </div>
            <div className="componente-header">
                <a onClick={() => handleProductosClick()}>Productos</a>
            </div>
            <div className="componente-header">
                <a href="">Ofertas</a>
            </div>
            <div className="componente-header" >
                <a href="">Nosotros</a>
            </div>
            <div className="buscador">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                />
            </div>

            <button className="bolsa-btn">
                <img src={Compra} alt="Carrito" width="24" />
            </button>

        </div>
    );
}