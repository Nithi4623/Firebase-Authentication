
import './App.css';
import { Footer } from './components/footer/footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import  Shop  from './pages/shop';
import Shopcategory from './pages/shopcategory';
import { Loginsignup } from './pages/loginsignup';
import { Product } from './pages/Product';
import Cart from './pages/cart';
import kids from './components/Assets/kidban.PNG';
import men from './components/Assets/Banmen.PNG';
import women from './components/Assets/banwomen.PNG';
import { Signup } from './pages/sighup';
import { useState } from 'react';




function App() {

  const [user,setuser] = useState("Guest user sign in for more details");
  return (
   <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop  user={user} setuser ={setuser}/>}/>
      <Route path='/mens' element={<Shopcategory  banner={men} category="men"/>}/>
      <Route path='/womens' element={<Shopcategory   banner={women} category="women"/>}/>
      <Route path='/kids' element={<Shopcategory  banner={kids} category="kid"/>}/>
      <Route path='product' element={<Product />}/>
        <Route path=':productId' element={<Product/>}/>
     
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Loginsignup user={user} setuser ={setuser} />}/>
      <Route path='/sighup'  element={<Signup/>}/>
    </Routes>
     <Footer/>
    </BrowserRouter>
    
    
   
  






  

   </div>
       
   
  )
}

export default App;
