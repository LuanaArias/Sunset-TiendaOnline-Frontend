import SunsetLogo from "../../assets/SunsetLogo.png";
import "./Nav.css";
import Compra from "../../assets/iconCompra.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CarritoDeCompras from "../CarritoDeCompras/CarritoDeCompras.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";

export default function Nav() {

    const navigate = useNavigate();

    const [mostrarModalCarrito, setMostrarCarrito] = useState(false);
    const { carrito, cantidad } = useContext(CartContext);

    function handleProductosClick() {
        navigate("/");
    }

    useEffect(() => {
        document.body.style.overflow = mostrarModalCarrito ? "hidden" : "auto";
    }, [mostrarModalCarrito]);

    return (
        <div className="nav">
            <div >
                <img onClick={() => handleProductosClick()} className="logo-imagen-nav" src={SunsetLogo} />
            </div>
            <div className="componente-nav">
                <a className="link-nav" onClick={() => handleProductosClick()}>Productos</a>
            </div>
            <div className="componente-nav">
                <a className="link-nav" href="">Ofertas</a>
            </div>
            <div className="componente-nav" >
                <a className="link-nav" href="">Nosotros</a>
            </div>
            <div className="buscador">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                />
            </div>

            <button className="carrito-btn" onClick={() => setMostrarCarrito(true)}>
                <img src={Compra} alt="Carrito" width="24" />
            </button>
            <span>{cantidad}</span>
            {mostrarModalCarrito && (
                <CarritoDeCompras cerrar={() => setMostrarCarrito(false)} />
            )}
        </div>
    );
}