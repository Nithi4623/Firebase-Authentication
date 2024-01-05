import React from 'react'
import './newsletter.css'

export const Newsletter = () => {
  return (
    <div className='newsletter'>

        <h1>
            GET EXCLUSIVE OFFERS ON YOUR EMAIL
        </h1>
        
           <p> Subscribe to our BERZLEY and Stay Updated ..!</p>
        

      <div>
        <input type="email" placeholder='Your Email Id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}
