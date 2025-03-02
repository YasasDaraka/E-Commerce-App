import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductView from './pages/ProductView'
import Cart from './pages/Cart'

import { AppContextProvider } from './context/AppContext';
import UserView from './pages/UserDashboard'
import About from './pages/About'
import Contact from './pages/Contact'
import Auth from './pages/auth'

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
            <Route path='/account' element={<UserView/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/auth' element={<Auth/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App
