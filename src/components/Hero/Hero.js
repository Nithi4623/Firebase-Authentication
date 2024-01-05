import React, { useState } from 'react'
import './hero.css'
import hand_icon from './hand.PNG';
import model from './model.png';
import arrow from '../Assets/arrow.png';



export const Hero = ({user,setuser}) => {

  
   
  return (

    <div className='hero'>
            <div className='hero-left'>

              <h1>  Hello {user}</h1>
                
                <h2>NEW ARRIVALS</h2>
                <div>
                    <div className='hand-icon'>
                        <p>New</p>
                        <img src={hand_icon} alt='' />
                    </div>
                    <p>Collections Arrival</p>
                    <p> For Every one</p>
                </div>
                <div className='hero-latest-btn'>
                    <div> LATEST ARRIVALS</div> 
                 <img src={arrow} alt='' />
              </div>
            </div>
            <div className='hero-right'>
                <img src={model} alt=''/>
             
            </div>

    </div>
  )
}
