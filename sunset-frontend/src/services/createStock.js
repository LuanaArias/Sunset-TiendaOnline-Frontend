const API = "http://localhost:5146/api/productos/stock";

export async function crearStock(data) {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
}