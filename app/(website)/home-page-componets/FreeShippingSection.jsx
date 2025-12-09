import React from 'react'
import { IoEarth } from "react-icons/io5";
import { GrCheckboxSelected } from "react-icons/gr";
import { GoClock } from "react-icons/go";
import OurCustuomers from "../common/OurCustuomers";
import OurNewsletters from "../common/OurNewsletters";
import Footer from "../common/Footer";

export default function FreeShippingSection() {
  return (
   <>
   <div className='bg-gray-100 lg:mb-[30px] mb-[20px]'>
   <div className=' grid md:grid-cols-3  max-sm:grid-cols-1 sm:grid-cols-1 max-w-[1320px] mx-auto lg:py-[40px] py-[20px] gap-[40px]'>
    <div className='group'>
        <div className='border-2 h-[60px] w-[60px] rounded-4xl mx-auto flex justify-center items-center group-hover:text-[#b38a87] '>
            <IoEarth  />
        </div>
        <div><h2 className='font-semibold lg:text-xl text-[20px] text-center lg:py-[10px] py-[5px]'>Free Shipping</h2></div>
        <div><p className=' text-center text-gray-700'>Free shipping on all order</p></div>
    </div>

     <div  className='group'>
        <div className='border-2 h-[60px] w-[60px] rounded-4xl mx-auto flex justify-center items-center group-hover:text-[#b38a87]'>
            <GrCheckboxSelected />
        </div>
        <div><h2 className='font-semibold lg:text-xl text-[20px]  text-center lg:py-[10px] py-[5px]'>Money Return</h2></div>
         <div><p className=' text-center text-gray-700'>Back guarantee under 7 days</p></div>
    </div>



     <div  className='group'>
        <div className='border-2 h-[60px] w-[60px] rounded-4xl mx-auto flex justify-center items-center group-hover:text-[#b38a87]'>
            <GoClock />
        </div>
        <div><h2 className='font-semibold lg:text-xl  text-[20px] text-center lg:py-[10px] py-[5px]'>Online Support</h2></div>
         <div><p className=' text-center text-gray-700'>Support online 24 hours a day</p></div>
    </div>  
   </div>
   </div>

    <OurCustuomers/>
    <OurNewsletters/>
    <Footer/>

   </>
  )
}
