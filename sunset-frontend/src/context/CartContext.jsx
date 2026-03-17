import { createContext, useContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

// estado inicial, primero se fija en el storage
const productosIniciales = JSON.parse(localStorage.getItem("carrito")) || [];

const initialState = {
  productos: productosIniciales,
  total: calcularTotal(productosIniciales)
};

function calcularTotal(productos) {
  return productos.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
}

function carritoReducer(state, action) {

  switch (action.type) {

    case "AGREGAR_PRODUCTO": {

      const existe = state.productos.find(p =>
        p.id === action.payload.id &&
        p.talle === action.payload.talle
      );

      let productosActualizados;

      if (existe) {

        productosActualizados = state.productos.map(p =>
          p.id === action.payload.id && p.talle === action.payload.talle
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );

      } else {

        productosActualizados = [
          ...state.productos,
          { ...action.payload, cantidad: 1 }
        ];

      }

      return {
        ...state,
        productos: productosActualizados,
        total: calcularTotal(productosActualizados)
      };
    }

    case "ELIMINAR_PRODUCTO": {

      const producto = state.productos.find(p =>
        p.id === action.payload.id && p.talle === action.payload.talle
      );

      let productosActualizados;

      if (producto.cantidad > 1) {

        productosActualizados = state.productos.map(p =>
          p.id === action.payload.id && p.talle === action.payload.talle
            ? { ...p, cantidad: p.cantidad - 1 }
            : p
        );

      } else {

        productosActualizados = state.productos.filter(p =>
          !(p.id === action.payload.id && p.talle === action.payload.talle)
        );

      }

      return {
        ...state,
        productos: productosActualizados,
        total: calcularTotal(productosActualizados)
      };
    }

    case "RESET":

      return {
        productos: [],
        total: 0
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {

  const [state, dispatch] = useReducer(carritoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(state.productos));
  }, [state.productos]);

  const agregarProducto = producto =>
    dispatch({ type: "AGREGAR_PRODUCTO", payload: producto });

  const eliminarProducto = (id, talle) =>
    dispatch({ type: "ELIMINAR_PRODUCTO", payload: { id, talle } });

  const resetearCarrito = () =>
    dispatch({ type: "RESET" });

  return (
    <CartContext.Provider
      value={{
        productos: state.productos,
        total: state.total,
        agregarProducto,
        eliminarProducto,
        resetearCarrito
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}