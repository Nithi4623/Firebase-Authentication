import React, { useState } from 'react'
import './css/loginsignup.css';
import {BrowserRouter,Routes,Route, Link, useNavigate} from 'react-router-dom';
import { auth } from '../components/firebase';


export const Loginsignup = ({user,setuser}) => {
   const [email, setemail] = useState('');
   const [password , setpassword] = useState('');
   const[name, setname] = useState('')
   const navigate = useNavigate();



     const handlesubmit = async (e)=>{
      e.preventDefault();

     
       try {
       await  auth.signInWithEmailAndPassword(email,password,name)
        
        navigate('/');

        setuser(name);
       }

       catch(error){
        console.log(error);
        alert(error)
       }



     }




  return (

    <form onSubmit={handlesubmit}>
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Login In</h1>
        <div className="loginsignup-fields">



          <input type='text'  placeholder='Name' value={name} onChange={(e)=>{setname (e.target.value.toLocaleLowerCase().trim())}}  />
          
          <input type="email"  placeholder='Email address' value={email} onChange={(e)=>{setemail(e.target.value)}}/>

          <input type="password"  placeholder=' Password'  value={password} onChange={(e)=> setpassword(e.target.value)}/>
        </div>

        <button>Continue</button>
        <p className='loginsignup-login'>
          NewUser Registeration  <Link to='/sighup'><button> Register Here</button></Link>
        </p>
        
        
      </div>

        
    </div>
    </form>
  )
}
