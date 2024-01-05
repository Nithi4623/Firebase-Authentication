import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { Popular } from '../components/popular/Popular'
import { Offer } from '../components/offer/Offer'
import { Newcollection } from '../components/newcollection/Newcollection'
import { Newsletter } from '../components/newsletter/Newsletter'


export default function Shop({user,setuser}) {
  return (
    <div>

      <Hero  user={user} setuser={setuser}/>
      <Popular />
    
      <Offer/>
      <Newcollection />
      <Newsletter />
      

     
    </div>
  )
}
