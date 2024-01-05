import React, { useContext } from "react";
import './css/shopcategory.css'
import { Shopcontext } from "../context/shopcontext";
import { IoIosArrowDropdownCircle } from "react-icons/io";


 let Shopcategory=(props)=>{
  const {all_product} = useContext(Shopcontext)
    return(

      <div className="shop-category">

        <img src={props.banner} alt="" />

        <div className="shopcategory-indexsort">
          <p>
            <span> Showing 1-12</span> out of36 products
          </p>

          <div className="shopcategory-sort">
            sort by <IoIosArrowDropdownCircle />
          </div>

        </div>



         
      </div>
    );

 }
 export default Shopcategory;
