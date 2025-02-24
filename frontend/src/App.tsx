import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductView from './pages/ProductView'
import Cart from './pages/Cart'

import { AppContextProvider } from './context/AppContext';

function App() {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}> 
            <Route index element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/products/:id' element={<ProductView/>} />
            <Route path='/cart' element={<Cart/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App
