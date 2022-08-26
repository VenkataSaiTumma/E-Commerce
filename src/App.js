import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, AboutPage, AuthWrapper, CartPage, ErrorPage, SingleProductPage } from './pages/Index'
import Navbar from './Navbar/Navbar'
import Sidebar from './Navbar/Sidebar'
import Footer from './Navbar/Footer'
import ProductsPage from './Products/ProductsPage'


function App() {
  return (
   <AuthWrapper>
     <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route exact path='/products/:id' element={<SingleProductPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
   </AuthWrapper>
  )
}

export default App
