export async function deleteProducto(id) {
  const res = await fetch(`http://localhost:5146/api/productos/${id}`, {
    method: "DELETE"
  });

  if (!res.ok) {
    throw new Error("No se pudo borrar el producto");
  }
}