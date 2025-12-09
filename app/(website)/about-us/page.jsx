import Link from 'next/link'
import React from 'react'
import OurCustuomers from  '../common/OurCustuomers'
import Footer from '../common/Footer'

export default function AboutUsPage() {
  return (
 <>
   <div className='max-w-[1320px] mx-auto'>
    <div className='text-center lg:py-[30px] py-[20px]'>
        <h1 className=' font-bold text-3xl'>About Us</h1>
             <p className='py-[5px]'> <Link href={'/'}>Home </Link> <span className='text-[#b38a87]'>/ About Us</span></p>               
    </div>

    <div>
        <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg" alt="" className='h-[80%] w-[80%] mx-auto' />
    </div>

    <div>
        <h1 className='text-center py-[15px] font-semibold text-2xl'>Welcome To Monsta!</h1>
        <p className='text-gray-700 lg:text-[15px] text-[10px] text-center px-[5px]'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.</p>
        <p className='py-[10px] text-[#b38a87] text-center text-[10px] lg:text-[15px]'>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”</p>
    </div>



    <div className='lg:py-[50px] py-[30px]'>
         <h1 className='text-center  lg:text-2xl font-semibold'>Why chose us?</h1>
         <div className='grid md:grid-cols-3 gap-[20px] grid-cols-1'>
             <div>
                <div><img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/89df96b6-b70d-463b-affb-58a74d49ed6b-1670161065.jpg" alt="" className='mx-auto' /></div>
                <div><h1 className='text-center font-semibold '>100% Money Back Guarantee</h1></div>
                <div><p className='text-center text-[12px] py-[5px] text-gray-500 px-[5px]'>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p></div>
            </div>  



             <div>
                <div><img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/eb6a7519-f0f9-469f-af25-4ba0536060fd-1670161090.jpg" alt="" className='mx-auto' /></div>
                <div><h1 className='text-center font-semibold '>Online Support 24/7</h1></div>
                <div><p className='text-center text-[12px] py-[5px] text-gray-500 px-[5px]'>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p></div>
            </div>
            <div>
                <div>
                    <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/d86a55b7-bbd1-4565-86ad-b3463e728fdc-1760712425.jpg" alt="" /></div>
                    <div><h1 className='text-center font-semibold '>Creative Design</h1></div>
                     <div><p className='text-center text-[15px] py-[5px] text-gray-500 px-[5px]'>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim God has created everything like air,water,tree and metal</p></div>
            </div>
         </div>
    </div>

    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-9 md:gap-5 lg:my-[30px] my-[15px]'>
        <div>
            <div><img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/dbfbc372-1550-40ef-a372-19566e1776b2-1671213170.jpg" alt="" /></div>
            <div className='text-center'>
            <h1 className='text-[14px] lg:py-[8px] py-[4px] font-semibold'>What Do We Do?</h1>
            <p className=' text-[13px] py-[5px] text-gray-500 '>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
            </div>
        </div>

        <div>
            <div><img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0eb1dffc-23c4-4a66-bb02-f5028e3658d3-1671213170.jpg" alt="" /></div>
            <div className='text-center'>
            <h1 className='text-[14px] lg:py-[8px] py-[4px] font-semibold'>Our Mission</h1>
            <p className=' text-[13px] py-[5px] text-gray-500  '>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
            </div>
        </div>

        <div>
            <div><img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/028a3c98-0fb9-4fc0-8e7c-0076d254de41-1671213170.jpg" alt="" /></div>
            <div className='text-center'>
            <h1 className='text-[14px] lg:py-[8px] py-[4px] font-semibold'>History Of Us</h1>
            <p className=' text-[13px] py-[5px] text-gray-500 '>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
            </div>
        </div>

    </div>

    <OurCustuomers/>
    
    <Footer/>

   </div>
 </>
  )
}
