import React, { useState } from 'react'
import './css/loginsignup.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../components/firebase';







export const Signup = () => {
   const [email, setemail] = useState('');
   const [password , setpassword] = useState('');
   const [ name,setname] = useState('')
   const navigate = useNavigate();



     const handlereg = async (e)=>{
        
              e.preventDefault()

        try{
           await auth.createUserWithEmailAndPassword(email,password,name);
           alert("Registered Successfully   Login Now");
           navigate('/login');
        }



        catch(error){
          console.log(error)
          alert(error);
        }





          }
       

        

    




  return (

    <form onSubmit={handlereg}>
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>New User</h1>
        <div className="loginsignup-fields">

         <input  type='text'  placeholder='Name' value={name}    onChange={(e)=>{setname(e.target.value.toLowerCase().trim())}} />
          <input type="email"  placeholder='Email address'  value={email}    onChange={(e)=>{setemail(e.target.value)}}/>
          <input type="password"  placeholder=' Password' value={password}    onChange={(e)=>{setpassword(e.target.value)}} />
        </div>

       
        <p className='loginsignup-login'>
         <button> Sigh up</button>
        </p>
        
        
      </div>

        
    </div>
    </form>
  )
}
