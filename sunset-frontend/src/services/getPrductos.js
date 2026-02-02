export async function getProductos() {
    const res = await fetch("http://localhost:5146/api/productos");

    if (!res.ok) {
        throw new Error("Error al traer productos");
    }

    return await res.json();
}
