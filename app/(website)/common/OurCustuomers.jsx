import React from 'react'
import { MdOutlineStar } from "react-icons/md";

export default function OurCustuomers() {

   

  return (
    <>
    <div className='my-[30px] max-w-[1320px] mx-auto'>
       <h1 className='lg:text-2xl md:text-xl text-[20px] lg:py-[15px]  py-[10px]  font-semibold text-center'>What Our Custumers Say ?</h1>

       

<div id="indicators-carousel" className="relative w-full" data-carousel="static">
  {/* <!-- Carousel wrapper -->  */} 
    <div className="relative max-sm:h-85 sm:h-70  overflow-hidden rounded-lg md:h-90">
      {/*   <!-- Item 1 -->  */} 
        <div className="hidden duration-500 ease-linear" data-carousel-item="active">
          <div className='max-w-[1000px] mx-auto text-center'>
            <p className='text-gray-500 sm:text-center px-[5px] lg:text-[15px] text-[10px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis cupiditate debitis maiores, beatae vitae corporis consectetur harum aspernatur voluptatibus accusamus corrupti nobis magnam. Ipsam, aspernatur! Ad nostrum suscipit voluptates.</p>
            <div className='flex justify-center lg:pt-[20px] pt-[15px]'><img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/35b5a0a0-e80f-4038-a75a-2811de92118b-1670161614.png" alt="" className='' /></div>
            <div>
                <h1 className='md:text-[15px] font-semibold lg:py-[10px] py-[5px] '>KATHY YOUNG</h1>
                <p className='text-gray-500 lg:pb-[20px] pb-[5px]'>CEO Of SunPark</p>
                <h2 className='flex justify-center text-[#b38a87] '><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></h2>

            </div>
          </div>
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className='max-w-[1000px] mx-auto text-center'>
            <p className='text-gray-500 sm:text-center px-[5px] lg:text-[15px] text-[10px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis cupiditate debitis maiores, beatae vitae corporis consectetur harum aspernatur voluptatibus accusamus corrupti nobis magnam. Ipsam, aspernatur! Ad nostrum suscipit voluptates.</p>
            <div className='flex justify-center lg:pt-[20px] pt-[15px]'><img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/c6381687-5a5e-4914-9373-9cbec4937be6-1670161604.jpg" alt="" className='' /></div>
            <div>
                <h1 className='md:text-[15px] font-semibold lg:py-[10px] py-[5px] '>KATHY YOUNG</h1>
                <p className='text-gray-500 lg:pb-[20px] pb-[5px]'>CEO Of SunPark</p>
                <h2 className='flex justify-center text-[#b38a87] '><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></h2>

            </div>
          </div>
        </div>
       
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
           <div className='max-w-[1000px] mx-auto text-center'>
            <p className='text-gray-500 sm:text-center px-[5px] lg:text-[15px] text-[10px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis cupiditate debitis maiores, beatae vitae corporis consectetur harum aspernatur voluptatibus accusamus corrupti nobis magnam. Ipsam, aspernatur! Ad nostrum suscipit voluptates.</p>
            <div className='flex justify-center lg:pt-[20px] pt-[15px]'><img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/testimonial/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.jpg" alt="" className='' /></div>
            <div>
                <h1 className='md:text-[15px] font-semibold lg:py-[10px] py-[5px] '>KATHY YOUNG</h1>
                <p className='text-gray-500 lg:pb-[20px] pb-[5px]'>CEO Of SunPark</p>
                <h2 className='flex justify-center text-[#b38a87] '><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></h2>

            </div>
          </div>
        </div>
       </div>

       
 {/*    <!-- Slider indicators -->  */}
    <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
     
    </div>
{/*     <!-- Slider controls -->  */}
    
 
</div>

    </div>
    </>
  )
}
