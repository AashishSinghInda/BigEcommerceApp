import Link from 'next/link'
import React from 'react'
import FaqSection from '../common/FaqSection'
import Footer from '../common/Footer'

export default function  Frequently() {
  return (
    <div>
       <div className='max-w-[1320px] mx-auto'>
            <div className='text-center lg:py-[30px] py-[20px]'>
        <h1 className=' font-bold text-3xl'>Frequently Questions</h1>
             <p className='py-[5px]'> <Link href={'/'}>Home </Link> <span className='text-[#b38a87]'>/ Frequently Questions</span></p>               
    </div>

            
      
      <FaqSection/>
    
    <Footer/>


       </div>
    </div>
  )
}
