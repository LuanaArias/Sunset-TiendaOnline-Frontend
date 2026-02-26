import './App.css'
import CrearProducto from './components/CrearProducto/CrearProducto'
import CrearStockForm from './components/CrearStock/CrearStock'
import EliminarProducto from './components/EliminarProducto/EliminarProducto'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MostrarProductos from './components/MostraProductos/MostrarProductos'
import MostrarUnProducto from './components/MostrarUnProductoPorID/MostrarUnProductoPorID'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      {/*  <Header />
      <CrearProducto />
      <CrearStockForm />
      <EliminarProducto />
      <MostrarProductos />
      <MostrarUnProducto />
      <Footer /> */}

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MostrarProductos />} />
          <Route path="/producto/:id" element={<MostrarUnProducto />} />
        </Routes>

        <Footer />
      </Router>

    </>
  )
}

export default App
