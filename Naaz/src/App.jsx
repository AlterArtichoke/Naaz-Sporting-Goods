import { Routes, Route } from 'react-router-dom'
import { About, Cart, Collections, Contact, Home, Login, Orders, PlaceOrder, Product } from './templates'
import { Navbar, Footer } from './components'

const App = () => {
  return (
    <div className='px-4 sm:px[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collections' element={<Collections/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
        
      </Routes>
      <Footer></Footer>
      
    </div>
  )
}

export default App
