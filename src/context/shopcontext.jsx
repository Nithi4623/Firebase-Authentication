import React  from "react";
import { createContext } from "react";
import  all_product from  '../components/Assets/allproduct' ;

 export const Shopcontext = createContext(null);

   const Shopcontextprovider = (props)=>{


    const contextvalue = {all_product}

     return (
      <Shopcontext.Provider value={contextvalue}>

        {props.children}
        
      </Shopcontext.Provider>
     )
 
       
   }
   export default Shopcontextprovider;

