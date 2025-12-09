import React, { useState } from 'react';

export default function OurNewsletters() {
  const [email, setEmail] = useState("");

  return (
    <>
      <div className='w-[100%] bg-gray-200 lg:my-[20px]'>
        <div className='text-center lg:pt-[40px] pt-[20px]'>
          <h1 className='font-semibold lg:text-2xl text-xl'>Our Newsletter</h1>
          <p className='text-gray-600 lg:py-[10px] py-[5px]'>
            Get E-mail updates about our latest shop and special offers.
          </p>
        </div>

        <div className='max-w-[1000px] mx-auto lg:py-[30px] py-[20px] pb-[20px]'>

          <form>
            <input 
              type="email" 
              name="emailAddress" 
              placeholder='Email address...' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border-2 border-gray-400 bg-gray-200 lg:w-[70%] w-[50%] max-sm:ml-[10px] rounded-[3px] mx-auto'
            />

            <input 
              type="submit" 
              name="submit"  
              value='Subscribe' 
              className='bg-[#b38a87] py-[10px] lg:px-[50px] px-[20px] text-white hover:bg-black font-semibold rounded-[3px] cursor-pointer' 
            />
          </form>

        </div>
      </div>
    </>
  )
}
