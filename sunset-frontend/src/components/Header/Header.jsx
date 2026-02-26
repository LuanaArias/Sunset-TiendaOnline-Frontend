import SunsetLogo from "../../assets/SunsetLogo.png";
import "./Header.css";
import Compra from "../../assets/iconCompra.png";

export default function Header() {

    return (
        <div className="header">
            <div >
                <img className="logo-imagen-header" src={SunsetLogo} />
            </div>
            <div className="componente-header">
                <a href="default.asp">Productos</a>
            </div>
            <div className="componente-header">
                <a href="default.asp">Ofertas</a>
            </div>
            <div className="componente-header" >
                <a href="default.asp">Nosotros</a>
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