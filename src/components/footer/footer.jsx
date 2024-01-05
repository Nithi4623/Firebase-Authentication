import React from 'react'
import './footer.css'
import foot from '../Assets/log.png';
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";





export const Footer = () => {
  return (
    <div className='footer'>

        <div className='footer-logo'>
            <img src={foot} alt="" />
             <p>BERZLEY</p>
             </div>
             <ul className='footer-links'>
                
             <li>Company</li>
             <li>Products</li>
             <li>Office</li>
             <li>About</li>
             <li>Contact</li>
             </ul>

             <div className='footer-social-icon'>
                <div className='footer-icons-container'>
                       <FaInstagram/>
                    </div>
                    <div className='footer-icons-container'>
                    <FaWhatsapp />
                    </div> 
                    <div className='footer-icons-container'>
                    <FaPinterest/>
                    </div>
                    
             </div>



      

        <div className='footer-copyright'>
            <hr />
            <p>Copyright @ 2023 - All Rights Reserved</p>
        </div>




    </div>
  )
}
