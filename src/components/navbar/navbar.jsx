import React, { useState } from "react";
import './Navbar.css'
import log from '../Assets/log.png';
import cart from './cart.PNG'
import { Link } from "react-router-dom";
    
function Navbar(){

    const [menu, setmenu]=useState("shop");






    return(
        <div className="navbar">

             <div className="nav-logo">
                <img src= {log} alt=" "/>
                <p>BERZLEY</p>

             </div>
            <ul className="nav-menu">
              <li onClick={()=>{setmenu("shop")}} > <Link style={{textDecoration:'none'}} to='/'>Shop</Link>  {menu=="shop"?<hr/>:<></>}</li>
              <li onClick={()=>{setmenu("Mens")}} > <Link style={{textDecoration:'none'}} to='/mens'>Mens</Link>  {menu=="Mens"? <hr/>:<></>}</li>
              <li onClick={()=>{setmenu("Womens")}}><Link style={{textDecoration:'none'}} to='/womens'>womens</Link>  {menu=="Womens"? <hr/>:<></>}</li>
              <li onClick={()=>{setmenu("Kids")}} > <Link style={{textDecoration:'none'}}  to='/kids'>Kids</Link> {menu=="Kids"?<hr/>:<></>}</li>
             
             
            </ul>

            <div className="nav-login-cart">
            <Link to='/login'> <button>Login</button></Link>  
           
                <Link to='/cart'><img src={cart}   alt=""/></Link>
                <div className="nav-cart-count">0</div>
            </div>

            

        </div>

    )
 }
 export default Navbar;