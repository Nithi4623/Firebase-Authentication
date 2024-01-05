import React from 'react'
import './offer.css'
import ex from '../Assets/exclusive.png';
export const Offer = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive </h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLING PRODUCTS....</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={ex} alt="" />


        </div>

    </div>
  )
}
