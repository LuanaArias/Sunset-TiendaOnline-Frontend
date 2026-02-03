import { useState } from "react";
import { crearProducto } from "../../services/createProducto";
import './CrearProducto.css'

export default function CrearProducto() {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const producto = {
                nombre,
                descripcion,
                precio: Number(precio),
                imagen,
                categoria: Number(categoria)
            };

            const creado = await crearProducto(producto);

            alert(`Producto creado con ID ${creado.id}`);

            setNombre("");
            setDescripcion("");
            setPrecio("");
            setImagen("");
            setCategoria(0);
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="crear-producto-wrapper">
            <form onSubmit={handleSubmit} className="crear-producto-form">
            <h2>Crear producto</h2>

            <input
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <input
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />

            <input
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
            />

            <input
                placeholder="Imagen URL"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
            />

            <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}>
                <option value={0}>Bikinis</option>
                <option value={1}>Mallas enterizas</option>
                <option value={2}>Trikinis</option>
                <option value={3}>Tankinis</option>
                <option value={4}>Partes de arriba</option>
                <option value={5}>Partes de abajo</option>
                <option value={6}>Accesorios</option>
            </select>

            <button type="submit">Crear</button>
        </form>
        </div>
        
    );
}
