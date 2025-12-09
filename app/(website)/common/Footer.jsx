import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  return (
   <>
   {/* first footer design*/}
   <div className='grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 max-w-[1320px] mx-auto py-[50px] max-sm:px-[20px] sm:px-[20px]'>
    <div>
        <ul>
            <li className='py-[20px] text-2xl font-semibold'>Contact Us</li>
            <li className='text-gray-600 py-[5px]'>Address: Claritas est etiam processus dynamicus</li>
            <li className='text-gray-600 py-[5px]'>Phone: 98745612330</li>
            <li className='text-gray-600 py-[5px]'>Email: furnitureinfo@gmail.com</li>
        </ul>
         <div className='flex gap-[10px] group text-gray-500'>
            <div className='my-[10px] w-[30px] h-[30px] rounded-4xl p-[2px] border-2 flex justify-center items-center text-2xl group-hover:text-[#b38a87]'><TiSocialFacebook /></div>
             <div className='my-[10px] w-[30px] h-[30px] rounded-4xl p-[5px] border-2 flex justify-center items-center text-2xl group-hover:text-[#b38a87]'><FaInstagram /></div>
               <div className='my-[10px] w-[30px] h-[30px] rounded-4xl p-[5px] border-2 flex justify-center items-center text-2xl group-hover:text-[#b38a87]'><FaTwitter /></div>
                <div className='my-[10px] w-[30px] h-[30px] rounded-4xl p-[5px] border-2 flex justify-center items-center text-2xl group-hover:text-[#b38a87]'><TiSocialLinkedin /></div>
                  <div className='my-[10px] w-[30px] h-[30px] rounded-4xl p-[5px] border-2 flex justify-center items-center text-2xl group-hover:text-[#b38a87]'><FaYoutube /></div>
                   
         </div>
    </div>


    <div>
        <ul>
            <li className='py-[20px] text-2xl font-semibold'>Information</li>
            <li className='text-gray-600 py-[5px]'>About Us</li>
            <li className='text-gray-600 py-[5px]'>Contact Us</li>
            <li className='text-gray-600 py-[5px]'>Frequently Questions</li>
        </ul>
    </div>


    <div>
        <ul>
            <li className='py-[20px] text-2xl font-semibold'>My Account</li>
            <li className='text-gray-600 py-[5px]'> <Link href={'/my-dashboard'}> My Dashboard </Link> </li>
            <li className='text-gray-600 py-[5px]'>Wishlist</li>
            <li className='text-gray-600 py-[5px]'>Cart</li>
             <li className='text-gray-600 py-[5px]'>Checkout</li>
        </ul>
       
    </div>


   <div>
        <ul>
            <li className='py-[20px] text-2xl font-semibold'>Top Rated Products</li>
            <li className='text-gray-600 py-[5px]'>
                <div className='flex gap-[20px] border-b border-gray-600'>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617981904164Hrithvik%20Stool__.jpg" alt="" className='w-[100px] h-[100px] object-contain' />
                    <div>
                    <p className='text-[12px]'>Side and End Tables</p>
                    <h1 className='text-blue-600 py-[10px]'>Hrithvik Stool</h1>
                    <p>Rs. 7,000 <span className='text-[#b38a87]'>Rs. 6,000</span></p>
                    </div>
                </div>
            </li>

             <li className='text-gray-600 py-[5px]'>
                <div className='flex gap-[20px] '>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617981904164Hrithvik%20Stool__.jpg" alt="" className='w-[100px] h-[100px] object-contain' />
                    <div>
                    <p className='text-[12px]'>1 Seater Sofa</p>
                    <h1 className='text-blue-600 py-[10px]'>Yuvi Sheesham wood sofa set</h1>
                    <p>Rs. 10,000 <span className='text-[#b38a87]'>Rs. 7,600</span></p>
                    </div>
                </div>
            </li>   
          
        </ul>
    </div>

   </div>


   {/* second footer design*/}

   <div className='py-[10px] border-y border-gray-400 max-w-[1320px] mx-auto'>
    <ul className='flex items-center justify-center lg:gap-[50px] md:gap-[30px] sm:gap-[20px] max-sm:gap-[10px]'>
        <li className='hover:text-[#b38a87]'>Home</li>
        <li className='hover:text-[#b38a87]'>Online Store</li>
        <li className='hover:text-[#b38a87]'>Privacy Policy</li>
        <li className='hover:text-[#b38a87]'>Terms Of Use</li>
    </ul>
   </div>


   {/* third footer design*/}

   <div className='my-[40px]'>
    <div>
        <p className='text-center text-gray-700'>All Rights Reserved By Furniture | © 2025 </p>
    </div>
    <div className='flex justify-center py-[20px]'>
        <img src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/papyel2.png" alt="" />
    </div>
   </div>
   </>
  )
}
