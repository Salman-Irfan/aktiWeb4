import React from 'react'
import Navbar from './layouts/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AllProducts from './pages/AllProducts'
import AddProduct from './pages/AddProduct'
import ProductDetails from './pages/ProductDetails'
import UpdateProduct from './pages/UpdateProduct'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/all-products' element={<AllProducts/>} />
        <Route exact path='/product/:id' element={<ProductDetails/>} />
        <Route exact path='/update-product/:id' element={<UpdateProduct/>} />
        <Route exact path='/add-product' element={<AddProduct/>} />
      </Routes>
      
      
    </>
  )
}

export default App
