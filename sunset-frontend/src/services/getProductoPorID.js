export async function getProductoPorID(idProducto) {
const res = await fetch(`http://localhost:5146/api/productos/${idProducto}`);

  if (!res.ok) {
    throw new Error(`Error al traer el producto con id ${idProducto}`);
  }

  return await res.json();
}
