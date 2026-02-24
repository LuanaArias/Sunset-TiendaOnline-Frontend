import './App.css'
import CrearProducto from './components/CrearProducto/CrearProducto'
import CrearStockForm from './components/CrearStock/CrearStock'
import EliminarProducto from './components/EliminarProducto/EliminarProducto'
import MostrarProductos from './components/MostraProductos/MostrarProductos'

function App() {

  return (
    <>
      <CrearProducto />
      <CrearStockForm />
      <EliminarProducto />
      <MostrarProductos />
    </>
  )
}

export default App
