import './App.css'
import CrearProducto from './components/CrearProducto/CrearProducto'
import CrearStockForm from './components/CrearStock/CrearStock'
import EliminarProducto from './components/EliminarProducto/EliminarProducto'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import MostrarProductos from './components/MostraProductos/MostrarProductos'
import MostrarUnProducto from './components/MostrarUnProductoPorID/MostrarUnProductoPorID'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {

  return (
    <CartProvider>

      {/*  <Header />
      <CrearProducto />
      <CrearStockForm />
      <EliminarProducto />
      <MostrarProductos />
      <MostrarUnProducto />
      <Footer /> */}

      <Router>
        <Nav  />
        <Routes>
          <Route path="/" element={<MostrarProductos />} />
          <Route
            path="/producto/:id"
            element={
              <MostrarUnProducto
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  )
}

export default App
