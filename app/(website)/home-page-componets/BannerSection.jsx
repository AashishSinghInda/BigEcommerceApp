import React from 'react'

export default function BannerSection({Slidershow,sliderStaticPath }) {
  return (
    <div>
      

<div id="default-carousel" className="relative w-full" data-carousel="slide">
            {/*     <!-- Carousel wrapper --> */  }   
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {/*  Item 1  */}     
        <div className="hidden duration-700  " data-carousel-item>
            <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.jpg " className='w-full h-full  object-cover object-center' alt="..."/>
        </div>
      
        <div className="hidden duration-700   " data-carousel-item>
            <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.jpg
" className="w-full h-full object-cover object-center "  alt="..."/>
        </div>
       
        
    </div>


  { /* Slider indicators */ }
    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse ">
        <button type="button" className="w-3 h-3 rounded-full  bg-[#b38a87]" aria-current="true"  aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-[#b38a87]" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        
    </div>
        {/*       <!-- Slider controls -->  */ }
   
    
</div>

    </div>
  )
}







