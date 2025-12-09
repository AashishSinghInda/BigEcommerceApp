"use client";


import "flowbite";
import Link from "next/link";
import { act, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoChevronUp } from "react-icons/io5";
import loginAndRegister from '../loginAndRegister/page'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slice/userSlice";
import { fetchCart } from "../slice/cartSlice";


export default function Header() {
  useEffect(() => {
    import("flowbite"); // Flowbite JS load
  }, []);

  let user = useSelector((store)=> store.login.user)
  let cart = useSelector((store)=> store.cart.cart)

//  console.log(">>>>>>>>>>>>>cartData",cart)

  let dispatch = useDispatch();

  //reduxtoolkit me cartSlice.js file me thunk ka use kiya hai use ak baar call karna important hai use header file per call kar rahe hai

  useEffect(()=>{
   dispatch(fetchCart())
  },[user])

 // console.log('>>>>>>>>>>>>>>>>1',user)

{/*  let [open,setopen] = useState(false)
  let [open2,setopen2] = useState(false)
  let [open3,setopen3] = useState(false)  */}

  let [activeMenu,setactiveMenu] = useState(null)
  let [activeSubMenu,setActiveSubMenu] = useState(null)

  const toggleMenu = (menuName) => {
    setactiveMenu(activeMenu === menuName ? null : menuName)
  }

  const toggleSubMenu = (submenu) => {
    setActiveSubMenu(activeSubMenu === submenu ? null : submenu)
  }
  



  return (
    <>
      {/* top header section */}
      <section>
        <div className="border-b-1 border-gray-300">
          <div className=" hidden  max-w-[100%] md:flex flex-wrap items-center justify-between  max-sm:p-4 sm:p-4 lg:px-[100px] text-[13px]">
            <div>Contact us 24/7 : +91-98745612330 / furnitureinfo@gmail.com</div>
            {user ?
             <button onClick={()=> dispatch(logout())} className="cursor-pointer">Logout</button>
            :
            <div><Link href={'/loginAndRegister'}>Login / Register </Link></div>
            }
            
          </div>
        </div>
      </section>

      {/* middle header section */}
      <nav className="bg-white border-gray-200  lg:justify-between border-b ">
        <div className="max-w-[100%] flex flex-wrap items-center justify-between  max-sm:p-4 sm:p-4 lg:px-[100px]">
          {/* Logo */}
          <p
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
           <Link href={'/'}>  <img
              src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png"
              className="h-8 bg-white"
              alt=""
            /> </Link>
          </p>

          {/* Right side buttons */}
          <div className="flex md:order-2">
            {/* Search bar (desktop) */}
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300"
                placeholder="Search products..."
              />
            </div>

            {/* heart */}
            <div className="flex items-center lg:p-2 max-sm:p-[4px] sm:p-[4px] max-sm:mr-[5px] sm:mx-[20px]  border border-gray-300  rounded-[2px] cursor-pointer hover:text-[#b38a87] duration-75">
              <FaHeart />
            </div>

            {/* cart */}
            <div className="text-center">
              <button
                type="button"
                data-drawer-target="drawer-right-example"
                data-drawer-show="drawer-right-example"
                data-drawer-placement="right"
                aria-controls="drawer-right-example"
              >
                <div className="flex items-center border border-gray-300 lg:py-[2px]  gap-3 lg:px-[12px] font-bold hover:text-[#b38a87] duration-75  cursor-pointer max-sm:mr-[5px] sm:mr-[10px] relative">
                  <div className="lg:border-r border-gray-300 pr-4 lg:mx-[10px] max-sm:p-[10px] sm:p-[8px]  flex items-center">
                    <FaCartShopping />
                  </div>
                  <div className="hidden lg:block">Rs.00</div>
              
                </div>
              </button>
            </div>

            {/* cart drawer */}
            <div
              id="drawer-right-example"
              className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full 
              bg-white "
              tabIndex="-1"
            >
              <h5 className="inline-flex items-center mb-4  font-semibold text-gray-500 dark:text-gray-600 text-2xl">
                Cart
              </h5>
              <div className="border-b  border-gray-500 mb-5">
                <button
                  type="button"
                  data-drawer-hide="drawer-right-example"
                  className="text-gray-400 bg-transparent rounded-lg  w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center cursor-pointer text-2xl dark:text-gray-600 "
                >
                  <svg
                    className="w-3 h-3 text-2xl"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>

              <img
                src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/my-Order.jpg"
                alt=""
              />
              <p className="text-center border border-gray-400 rounded-[4px] p-2 my-5">
                Your shopping cart is empty!
              </p>
            </div>

            {/* Hamburger button (left drawer open karega) */}
            <button
              data-drawer-target="drawer-left-menu"
              data-drawer-show="drawer-left-menu"
              data-drawer-placement="left"
              aria-controls="drawer-left-menu"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
                       rounded-lg md:hidden hover:bg-gray-100 focus:outline-none 
                       focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Left Drawer Menu (mobile) */}
      <div
        id="drawer-left-menu"
        className="fixed top-0 left-0 z-40 h-screen w-64 p-4 overflow-y-auto transition-transform -translate-x-full bg-white"
        tabIndex="-1"
      >
        <h5 className="text-[12px] font-semibold mb-4 text-center"></h5><br />
        <h5 className="text-[12px] font-semibold mb-4 text-center">Contact us 24/7 : +91-98745612330  </h5>
        <p className="text-[12px] font-semibold py-[3px] text-center"> furnitureinfo@gmail.com</p>
        <button
          type="button"
          data-drawer-hide="drawer-left-menu"
          className="absolute top-2.5 right-2.5 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <ul className="space-y-4">
          <li>
            <Link href="/" className="block py-[5px] border-b border-gray-300 text-[#b38a87]">
              Home
            </Link>
          </li>


         
          <li><div className="flex justify-between items-center border-b border-gray-300 w-[100%]"><button onClick={()=> toggleMenu("living")} className="block text-gray-700 hover:text-[#b38a87] pb-[5px]  text-left">living</button>
          <p onClick={()=> toggleMenu("living")} className="cursor-pointer">
           {activeMenu === "living" ?  <IoChevronUp /> :<IoIosArrowDown />}
          </p></div>  
             
              <ul  className={`transition-all duration-1000 overflow-hidden ${
            activeMenu === "living" ? "max-h-100" : "max-h-0"
          }`}>
        <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px] border-b  border-gray-300  w-[100%] text-left"><div className="flex justify-between items-center  w-[100%]">
                <button onClick={()=> toggleSubMenu("Tables") } className="block text-gray-700 hover:text-[#b38a87] py-[5px] text-left"
               >Tables </button> 
                <p onClick={()=> toggleSubMenu("Tables")} className="cursor-pointer">
                {activeSubMenu === "Tables" ? <IoChevronUp /> :<IoIosArrowDown />}</p> 
              </div>
              <ul className={`transition-all duration-1000 overflow-hidden ${
            activeSubMenu === "Tables" ? "max-h-100" : "max-h-0"
          }`}>
                  <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  border-b  border-gray-300 w-[100%] text-left">Side And End Tables</li>
                  <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  border-b  border-gray-300 w-[100%] text-left">Nest of Tables</li>
                  <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  border-b  border-gray-300 w-[100%] text-left">Coffee Table sets</li>
                  <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]   w-[100%] text-left">Coffee Tables</li>
                  </ul>  
          </li>
           
                <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px] border-b  border-gray-300  w-[100%] text-left"><div className="flex justify-between items-center  w-[100%]">
                  <button onClick={()=> toggleSubMenu("Living Storage")} className="block text-gray-700 hover:text-[#b38a87] py-[5px] text-left">Living Storage</button>
                   <p onClick={()=> toggleSubMenu("Living Storage")} className="cursor-pointer">
                {activeSubMenu === "Living Storage" ? <IoChevronUp /> :<IoIosArrowDown />}</p> 
                  </div>
                  <ul className={`transition-all duration-1000 overflow-hidden ${
            activeSubMenu === "Living Storage" ? "max-h-100" : "max-h-0"
          }`}>
                  <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  border-b  border-gray-300 w-[100%] text-left">Prayer Units</li>
                  <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  border-b  border-gray-300 w-[100%] text-left">Display Unit</li>
                  <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  border-b  border-gray-300 w-[100%] text-left">Shoe Racks</li>
                  <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  border-b  border-gray-300 w-[100%] text-left">Chest of Drawers</li>
                    <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  border-b  border-gray-300 w-[100%] text-left">Cabinets And Sideboard</li>
                      <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  border-b  border-gray-300 w-[100%] text-left">Bookshelves</li>
                        <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  w-[100%] text-left">Tv Units</li>
                  </ul> 
                </li>
               
               
               
               
               
               
               
                <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  border-b  border-gray-300 w-[100%] text-left">
                  <div className="flex justify-between items-center  w-[100%]">
                  <button onClick={()=> toggleSubMenu("Mirror")} className="block text-gray-700 hover:text-[#b38a87] py-[5px] text-left">Mirror</button>
                   <p onClick={()=> toggleSubMenu("Mirror")} className="cursor-pointer">
                {activeSubMenu === "Mirror" ? <IoChevronUp /> :<IoIosArrowDown />}</p> 
                  </div>
                      <ul className={`transition-all duration-1000 overflow-hidden ${
            activeSubMenu === "Mirror" ? "max-h-100" : "max-h-0"
                    }`}>
                      
                      <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  w-[100%] text-left">Wooden Mirrors</li>
                    </ul>
                </li>
              </ul>
              </li>
                    
         





        <li><div className="flex justify-between items-center border-b border-gray-300 w-[100%]"><button onClick={()=> toggleMenu("Sofa")} className="block text-gray-700 hover:text-[#b38a87] pb-[5px]  text-left">Sofa</button>
          <p onClick={()=> toggleMenu("Sofa")} className="cursor-pointer">
            {activeMenu === "Sofa" ?  <IoChevronUp /> :<IoIosArrowDown />}
          </p></div>
             
              <ul className={`transition-all duration-1000 overflow-hidden ${
            activeMenu === "Sofa" ? "max-h-[500px]" : "max-h-0"
          }`}>
                <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px] w-[100%] text-left">
                   <div className="flex justify-between items-center  w-[100%]">
                  <button onClick={()=> toggleSubMenu("Sofa Cum Bed")} className="block text-gray-700 border-b border-gray-300 w-[100%] hover:text-[#b38a87] py-[5px] text-left">Sofa Cum Bed</button>
                   <p onClick={()=> toggleSubMenu("Sofa Cum Bed")} className="cursor-pointer">
                {activeSubMenu === "Sofa Cum Bed" ? <IoChevronUp /> :<IoIosArrowDown />}</p> 
                  </div>
                     <ul className={`transition-all duration-500 overflow-hidden ${
            activeSubMenu === "Sofa Cum Bed" ? "max-h-100" : "max-h-0"
                    }`}>
                      
                      <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  w-[100%] text-left">Wooden Sofa Cum Bed</li>
                    </ul>
                </li>




                <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]   w-[100%] text-left">
                     <div className="flex justify-between items-center  w-[100%]">
                  <button onClick={()=> toggleSubMenu("Sofa Sets")} className="block text-gray-700 border-b border-gray-300 w-[100%] hover:text-[#b38a87] py-[5px] text-left">Sofa Sets</button>
                   <p onClick={()=> toggleSubMenu("Sofa Sets")} className="cursor-pointer">
                {activeSubMenu === "Sofa Sets" ? <IoChevronUp /> :<IoIosArrowDown />}</p> 
                  </div>
                   <ul className={`transition-all duration-1000 overflow-hidden ${
            activeSubMenu === "Sofa Sets" ? "max-h-[500px]" : "max-h-0"
                    }`}>
                      
                      <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px] border-b border-gray-200  w-[100%] text-left">L Shape Sofa</li>
                       <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px] border-b border-gray-200  w-[100%] text-left">1 Seater Sofa</li>
                        <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px] border-b border-gray-200  w-[100%] text-left">2 Shape Sofa</li>
                       <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px] border-b border-gray-200  w-[100%] text-left">3 Shape Sofa</li>
                        <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px] border-b border-gray-200  w-[100%] text-left">Wooden Sofa Sets</li>
                        <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px] border-b border-gray-200  w-[100%] text-left">Normal</li>
                        
                    </ul>
                </li>
               
               
               
               
               
               
               
                <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  border-b  border-gray-300 w-[100%] text-left">
                    <div className="flex justify-between items-center  w-[100%]">
                  <button onClick={()=> toggleSubMenu("Swing Jhula")} className="block text-gray-700  w-[100%] hover:text-[#b38a87] py-[5px] text-left">Swing Jhula</button>
                   <p onClick={()=> toggleSubMenu("Swing Jhula")} className="cursor-pointer"> 
                {activeSubMenu === "Swing Jhula" ? <IoChevronUp /> :<IoIosArrowDown />}</p> 
                  </div>
                  <ul className={`transition-all duration-500 overflow-hidden ${
            activeSubMenu === "Swing Jhula" ? "max-h-[500px]" : "max-h-0"
                    }`}>  

                      <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  border-t border-gray-300  w-[100%] text-left">Wooden Jhula</li> 
                    </ul>
                </li>
              </ul>
                   
          </li>


             <li><div className="flex justify-between items-center border-b border-gray-300 w-[100%]"><button onClick={()=> toggleMenu("Pages")} className="block text-gray-700 hover:text-[#b38a87] pb-[5px]  text-left">Pages</button>
          <p onClick={()=> toggleMenu("Pages")} className="cursor-pointer">
         {activeMenu === "Pages" ?  <IoChevronUp /> : <IoIosArrowDown />}
          </p></div>
             
              <ul className={`transition-all duration-1000 overflow-hidden ${
            activeMenu === "Pages" ? "max-h-40" : "max-h-0"
          }`}>
                <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  border-b  border-gray-300 w-[100%] text-left"><Link href={'/about-us'}>About Us </Link></li>
                <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px] border-b  border-gray-300  w-[100%] text-left">   <Link href={'/cart'}> Cart  </Link></li>
                <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  border-b  border-gray-300 w-[100%] text-left"> <Link href={'/checkout'}> CheckOut </Link></li>
                <li className="block text-gray-700 hover:text-[#b38a87] py-[5px] ps-[20px]  border-b  border-gray-300 w-[100%] text-left">   <Link href={'/frequently'}>Frequently Questions </Link></li>
              </ul>        
          </li> 
          
         <li>
  {user ? (
    <button
      onClick={() => dispatch(logout())}
      className="block w-full text-left py-[5px] border-b border-gray-300 text-gray-700 hover:text-[#b38a87]"
    >
      Logout
    </button>
  ) : (
    <Link
      href="/loginAndRegister"
      className="block py-[5px] border-b border-gray-300 text-gray-700 hover:text-[#b38a87]"
    >
      Login/Register
    </Link>
  )}
</li>

          
          
        </ul>
      </div>


      
      {/*  only desktop Megamenu  dark:bg-gray-900*/}

      <nav className="md:block hidden relative z-50">
        <ul className="flex justify-center items-center py-[25px] border-b border-gray-300">
          <li className="px-[35px] cursor-pointer text-[#b38a87]"><Link href={'/'}>HOME  </Link>   </li>
          <li className="px-[25px] cursor-pointer hover:text-[#b38a87] flex items-center gap-[10px] group">LIVING <IoIosArrowDown />
         <div className="absolute top-[100%] scale-0 group-hover:scale-[1]  transition-top duration-500 flex gap-[70px] p-[20px]  shadow-[0px_0px_10px_0px_#ccc] bg-white border-t border-gray-300 ">
            <ul>
              <li className="py-[10px] text-bold text-[17px] text-black">TABLES</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">Side And End Tables</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">Nest Of Tables</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">Coffee Table Sets</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">Coffee Tables</li>
            </ul>
            <ul>
               <li className="py-[10px] text-bold text-[17px] text-black">TABLES</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">Prayer Units</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">Display Unit</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">Shoe Racks</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">Chest Of Drawers</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">Cabinets And Sideboard</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">Bookshelves</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">Tv Units</li>
            </ul>
             <ul>
               <li className="py-[10px] text-bold text-[17px] text-black">MIRROR</li>
               <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">Wooden Mirrors</li>
              </ul>
          </div>  
         
          </li>
          
          <li className="px-[25px] cursor-pointer hover:text-[#b38a87] flex items-center gap-[10px] group">SOFA <IoIosArrowDown />
           <div className="absolute top-[100%] scale-0  duration-500 flex gap-[70px] p-[20px]  shadow-[0px_0px_10px_0px_#ccc] bg-white border-t border-gray-300 group-hover:scale-[1]">
            <ul>
              <li className="py-[10px] text-bold text-[17px] text-black">SOFA CUM BED</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">Wooden Sofa Cum Bed</li>
              
            </ul>
            <ul>
               <li className="py-[10px] text-bold text-[17px] text-black">SOFA SETS</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">L Shape Sofa</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">1 Seater Sofa</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">2 Seater Sofa</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">3 Seater Sofa</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">Wooden Sofa Sets</li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">Normal</li>
            </ul>
             <ul>
               <li className="py-[10px] text-bold text-[17px] text-black">SWING JHULA</li>
               <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">Wooden Jhula</li>
              </ul>
          </div>  
          
          </li>



          <li className="px-[25px] cursor-pointer hover:text-[#b38a87] flex items-center gap-[10px] group">PAGES <IoIosArrowDown />
          <div className="absolute top-[100%] scale-0  duration-500 flex gap-[70px] p-[20px]  shadow-[0px_0px_10px_0px_#ccc] bg-white border-t border-gray-300 group-hover:scale-[1]">
            <ul>
             
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]"><Link href={'/about-us'}>About Us </Link></li>
              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]"><Link href={'/cart'}>   Cart </Link></li>
                      <li className="py-[5px] text-gray-400 hover:text-[#b38a87]">CheckOut</li>
                              <li className="py-[5px] text-gray-400 hover:text-[#b38a87]"><Link href={'/frequently'}> Frequently Question </Link></li>
              
            </ul>
          </div>  
          </li>
          <li className="px-[25px] cursor-pointer hover:text-[#b38a87] flex items-center gap-[10px]">CONTACT US</li> 
        </ul>
      </nav>




    </>
  );
}
