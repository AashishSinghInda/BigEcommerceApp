"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../common/Footer"


export default function ProductDetails() {

  

  return (
    <>
      {/* Title Section */}
      <div className="max-w-[1320px] mx-auto my-[30px]">
        <div className="text-center lg:py-[30px] py-[20px]">
          <h1 className="font-bold text-3xl">Caroline Study Tables</h1>
          <p className="py-[5px]">
            <Link href={"/"}>Home / Nest Of Tables / </Link>
            <span className="text-[#b38a87]">Caroline Study Tables</span>
          </p>
        </div>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT IMAGE + THUMBNAIL SLIDER */}
          <div>
            {/* BIG IMAGE */}
            <div className="w-full border rounded-lg overflow-hidden">
              <img
                src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg"
                alt="Product Image"
                width={700}
                height={500}
                className="w-full object-cover border-0"
              />
            </div>

            {/* Thumbnail Slider */}
            <div className="flex gap-3 mt-4 overflow-x-auto">
                <div className={`cursor-pointer border rounded-lg min-w-[90px]`}
                >
                  <img
                    src=''
                    alt="thumbnail"
                    width={100}
                    height={80}
                    className="rounded-md object-cover"
                  />
                </div>
              
            </div>
          </div>

          {/* RIGHT SIDE PRODUCT INFO */}
          <div className="p-3">
            <h1 className="text-3xl py-[5px]">Caroline Study Tables</h1>
            <h2 className="text-2xl font-bold text-[#b38a87] py-[10px]"><del className="text-gray-400 px-[5px] text-xl">Rs.3,000</del> Rs. 2,500</h2>
            <p className="my-3">
              The Drawer is for your storage needs and camouflages perfectly
              with the tables carved front. The use of Sheesham ensures its longevity.
            </p>

            <button className="bg-[#b38a87] text-white px-8 py-3 rounded-md text-lg hover:bg-black cursor-pointer my-3 ">
              Add To Cart
            </button>

            <div className="mt-6 space-y-1">
              <p className="py-[5px]"><strong>Code:</strong> jodST0011</p>
              <p className="py-[5px]"><strong>Dimension:</strong> 72L * 32H * 30W</p>
              <p className="py-[5px]"><strong>Delivery:</strong> 40-45 Days</p>
              <p className="py-[5px]"><strong>Category:</strong> Nest Of Tables</p>
              <p className="py-[5px]"><strong>Color:</strong> Cobalt Blue</p>
            </div>

            
          </div>
             <div>
              <h1 className="text-2xl text-[#b38a87] font-bold text-center">Description</h1>
              <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sint error libero optio, impedit dolores recusandae, eaque, nesciunt sequi quam itaque culpa doloribus nisi quo ullam at exercitationem porro repudiandae?</p>
             </div>
        </div>
        
     
      </div>

       <Footer/>
    </>
  );
}












