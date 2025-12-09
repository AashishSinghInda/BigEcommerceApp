
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../common/Footer"
import { useSelector } from "react-redux";
import axios from "axios";
import cookies from "js-cookie";
import { useRouter } from "next/navigation";


export default function MyDashboard() {

    let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;

  const router = useRouter()
  const token = useSelector((store)=> store.login.token);
  const cookiesToken = cookies.get('TOKEN');

  useEffect(()=>{
    if(!token && !cookiesToken){
      router.push('/loginAndRegister')
    }
  }, [token, cookiesToken])

  const [activeTab, setActiveTab] = useState("dashboard");

  const menuItems = [
    { key: "dashboard", label: "My Dashboard" },
    { key: "order", label: "Orders" },
    { key: "address", label: "Addresses" },
    { key: "profile", label: "My Profile" },
    { key: "password", label: "Change Password" },
    { key: "logout", label: "Logout" },
  ];


  let getOrders = ()=>{
    axios.post(`${apiBaseUrl}order/view-order`,{},{
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    .then((res)=>{
    //  console.log(">>>>>>>>>>>>vieworderdata",res.data)
    })

  }

  useEffect(()=>{
    getOrders();
  },[])

  return (
    <div className="max-w-[1320px] mx-auto p-4 md:p-6">
      {/* Page Header */}
      <div className="text-center lg:py-6 py-4">
        <h1 className="font-bold text-3xl mb-2">My Dashboard</h1>
        <p className="text-gray-600">
          <Link href="/" className="hover:text-[#b38a87]">
            Home
          </Link>{" "}
          <span className="text-[#b38a87]">/ My Dashboard</span>
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Sidebar */}
        <div className="w-full lg:w-1/5 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`w-full text-left p-3 rounded border transition ${
                activeTab === item.key
                  ? "bg-[#b38a87] text-white"
                  : "bg-black text-white hover:bg-[#b38a87]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-4/5 bg-white rounded-lg shadow-sm p-4">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "order" && <Orders />}
          {activeTab === "address" && <Addresses />}
          {activeTab === "profile" && <Profile />}
          {activeTab === "password" && <Password />}
        </div>
      </div>
      <Footer/>
    </div>

    
  );
}


function Dashboard() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-3">My Dashboard</h1>
      <p className="text-gray-600">
        From your account dashboard, you can easily check & view your recent
        orders, manage your shipping and billing addresses, and edit your
        password and account details.
      </p>
    </div>
  );
}


function Orders() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="overflow-x-auto shadow rounded-lg">
        <table className="w-full text-sm text-left border border-gray-200">
          <thead className="bg-gray-100 text-gray-800 text-base">
            <tr>
              <th className="px-6 py-3 border-b">Order</th>
              <th className="px-6 py-3 border-b">Date</th>
              <th className="px-6 py-3 border-b">Status</th>
              <th className="px-6 py-3 border-b">Total</th>
              <th className="px-6 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 1,
                date: "May 10, 2018",
                status: "Completed",
                total: "Rs. 25.00 For 1 Item",
              },
              {
                id: 2,
                date: "May 10, 2018",
                status: "Processing",
                total: "Rs. 17.00 For 1 Item",
              },
            ].map((order) => (
              <tr
                key={order.id}
                className="bg-white border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4 font-semibold text-gray-800">
                  {order.status}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {order.total}
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="text-orange-400 font-semibold hover:underline">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


function Addresses() {
  return (
    <div>
      <p className="text-gray-500 mb-5">
        The following addresses will be used on the checkout page by default.
      </p>
      <div className="grid md:grid-cols-2 gap-5">
        {["Billing", "Shipping"].map((type) => (
          <div key={type}>
            <h1 className="text-xl font-semibold mb-2">{type} Address</h1>
            <form className="border border-gray-300 rounded p-4 space-y-3">
              <Input label={`${type} Name*`} type="text" />
              <Input label={`${type} Email*`} type="email" />
              <Input label={`${type} Mobile Number*`} type="number" />
              <TextArea label={`${type} Address*`} />
              <Input label="Country*" type="text" />
              <Input label="State*" type="text" />
              <Input label="City*" type="text" />
              <button className="bg-[#b38a87] text-white px-5 py-2 rounded-2xl">
                UPDATE
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}


function Profile() {

  let baseUrl = process.env.NEXT_PUBLIC_APIBASEURL

  let  token = useSelector((store)=> store.login.token)

  let [showData, setShowData] = useState({})
   
  // is me api url me {} ka use isliye kiya hai kiyoki req.body me kuch bhi lekar nahi jaha hai 
  let userData = ()=>{
    axios.post(`${baseUrl}user/data`,{},
      {
        headers : {
            Authorization : `Bearer ${token}`
        }
      }
    )
    .then((res)=>{
          setShowData(res.data.userData)
    })
  }

  useEffect(()=>{
       userData()
  },[])


  const handleChange = (e)=>{
    setShowData({
      ...showData,
      [e.target.name] : e.target.value
    })
  }


  const updateProfile = (e)=>{
    e.preventDefault();

    axios.post(`${baseUrl}user/update`,{
      userName : showData.userName,
      userEmail : showData.userEmail,
      userPhone : showData.userPhone,
      userAddress : showData.userAddress,
      userGender : showData.userGender
    },
   {
    headers : {
      Authorization : `Bearer ${token}`,
    },
   })
   .then((res)=>{
    alert('Profile Updated Successfully...!')
   })
  }

  

  

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">My Profile</h1>
      
        
                <form className="border border-gray-300 rounded p-5 space-y-3" onSubmit={updateProfile}>
                   <div>
          <label className="mr-4">
            <input type="radio" name="userGender"   className="mr-1" value='male' checked={showData.userGender === "male"} onChange={handleChange} /> Mr.
          </label>
          <label>
            <input type="radio" name="userGender"  value='female'  checked={showData.userGender === 'female'}  className="mr-1" onChange={handleChange} /> Mrs.
          </label>
        </div>
        <label>Name</label>
        <input type='text' name="userName" value={showData.userName || ''}   className="w-[100%] rounded" placeholder={showData.userName}  onChange={handleChange}/>
        <label>Email</label>
        <input type='email' name="userEmail" value={showData.userEmail} className="w-[100%] rounded" />
        <label>Number</label>
        <input type='number' name="userPhone" value={showData.userPhone} className="w-[100%] rounded"  />
        <label>Address</label>
        <textarea label="Address*" name="userAddress"  value={showData.userAddress || ''}  className="w-[100%]" onChange={handleChange}> </textarea>
         <button className="bg-[#b38a87] text-white px-5 py-2 rounded-2xl">
          UPDATE
        </button>
      </form> 
    </div>
  );
}


function Password() {

  let  token = useSelector((store)=> store.login.token)

  let baseUrl = process.env.NEXT_PUBLIC_APIBASEURL

  let ChangePassword = (e)=>{
    e.preventDefault();

    let currentPassword = e.target.currentPassword.value;
    let newPassword = e.target.newPassword.value;
    let confirmPassword = e.target.confirmPassword.value;

    let obj = {
      currentPassword,
      newPassword,
      confirmPassword
    }

    // token kabhi bhi req.body me nahi jata hai token hamesha api ke header me jata hai jis tarah se is post ki api me use kiya hai ak obj create kar hai {} is ke ander headers key fixed hai uske under authorization bhi fixed hai Bearer bhi fixed hai waha per token send karna hai 
    axios.post(`${baseUrl}user/changepassword`,obj ,{
      headers :{
        Authorization : `Bearer ${token}`
      }
    })
    .then((res)=>{
      if(res.data.status){

      }
      else{
          alert(res.data.mgs)
      }
    })

  }
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Change Password</h1>
      <form className="border border-gray-300 rounded p-5 space-y-3" onSubmit={ChangePassword}>
        <label>Current Password</label><br />
        <input label="Current Password" type="password" name='currentPassword' className="w-[100%] my-[10px] rounded" />
        <label>New Password</label><br />
        <input label="New Password" type="password" name='newPassword' className="w-[100%] my-[10px] rounded" />
        <label>Confirm Password</label><br />
        <input label="Confirm Password" type="password" name='confirmPassword' className="w-[100%] my-[10px] rounded" />
        <button className="bg-[#b38a87] text-white px-5 py-2 rounded-2xl">
          UPDATE
        </button>
      </form>
    </div>
  );
}


function Input({ label, type, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-1 focus:ring-[#b38a87]"
      />
    </div>
  );
}


function TextArea({ label }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea className="w-full border border-gray-300 rounded p-2 h-20 focus:outline-none focus:ring-1 focus:ring-[#b38a87]"></textarea>
    </div>
  );
}




























































/* "use client"

import Link from 'next/link'
import React, { useState } from 'react'

export default function Mydashboard() {

    let [dashboard, setDashboard] = useState(false)
    let [order, setOrder] = useState(false)
    let [address, setAddress] = useState(false)
    let [profile, setProfile] = useState(false)
    let [password, setPassword] = useState(false)
    let [logout, setLogout] = useState(false)

  return (
    <>
         <div className='max-w-[1320px] mx-auto'>

             <div className='text-center lg:py-[30px] py-[20px]'>
        <h1 className=' font-bold text-3xl'>My Dashboard</h1>
             <p className='py-[5px]'> <Link href={'/'}>Home </Link> <span className='text-[#b38a87]'>/ My Dashboard</span></p>               
    </div>

           <div className='grid grid-cols-[20%_80%] gap-5'>
                  <div>
                     <div className='my-1 bg-[#b38a87] text-white border-2 p-2 rounded ' onClick={()=> setDashboard(!dashboard)}><button className='cursor-pointer' >My Dashboard</button></div>
                     <div className='my-1 bg-black text-white border-2  p-2 rounded hover:bg-[#b38a87] ' onClick={()=> setOrder(!order)}><button className='cursor-pointer' >Order</button></div>
                     <div className='my-1 bg-black text-white border-2  p-2 rounded hover:bg-[#b38a87] ' onClick={()=> setAddress(!address)} ><button className='cursor-pointer' >Addresses</button></div>
                     <div className='my-1 bg-black text-white border-2  p-2 rounded hover:bg-[#b38a87] ' onClick={()=> setProfile(!profile)}><button className='cursor-pointer' >My Profile</button></div>
                     <div className='my-1 bg-black text-white border-2  p-2 rounded hover:bg-[#b38a87] ' onClick={()=> setPassword(!password)}><button className='cursor-pointer' >Change Password</button></div>
                     <div className='my-1 bg-black text-white border-2  p-2 rounded  hover:bg-[#b38a87]'><button className='cursor-pointer' >Logout</button></div>
                </div>


                <div className='ml-[20px] py-[10px]'>
                    <div>
                    {dashboard ? 
                    <>
                    <h1 className='text-black font-bold text-xl '>My Dashboard</h1>
                    <p className='py-[10px]'>From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and Edit your password and account details.</p>
                    </>
                      :  
                    ''
                    }
                    </div>

                    <div>
                    {order ? 
                    <>
                  <div class="max-w-5xl mx-auto ">
               <h1 class="text-2xl font-bold mb-4">Orders</h1>
           <div class="overflow-x-auto shadow rounded-lg">
         <table class="w-full text-sm text-left text-gray-600 border border-gray-200">
        <thead class="bg-gray-100 text-gray-800 text-base">
          <tr>
          <th scope="col" class="px-6 py-3 border-b">Order</th>
          <th scope="col" class="px-6 py-3 border-b">Date</th>
          <th scope="col" class="px-6 py-3 border-b">Status</th>
          <th scope="col" class="px-6 py-3 border-b">Total</th>
          <th scope="col" class="px-6 py-3 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b hover:bg-gray-50 transition">
          <td class="px-6 py-4 font-medium text-gray-900">1</td>
          <td class="px-6 py-4">May 10, 2018</td>
          <td class="px-6 py-4 font-semibold text-gray-800">Completed</td>
          <td class="px-6 py-4 font-semibold text-gray-900">Rs. 25.00 For 1 Item</td>
          <td class="px-6 py-4">
            <a href="#" class="text-orange-400 font-semibold hover:underline">View</a>
          </td>
        </tr>
        <tr class="bg-white hover:bg-gray-50 transition">
          <td class="px-6 py-4 font-medium text-gray-900">2</td>
          <td class="px-6 py-4">May 10, 2018</td>
          <td class="px-6 py-4 font-semibold text-gray-800">Processing</td>
          <td class="px-6 py-4 font-semibold text-gray-900">Rs. 17.00 For 1 Item</td>
          <td class="px-6 py-4">
            <a href="#" class="text-orange-400 font-semibold hover:underline">View</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

                    </>
                      :  
                    ''
                    }
                    </div>

                    <div>
                      {address ?
                       <>
                       <p className='text-gray-500 mb-5'>The following addresses will be used on the checkout page by default.</p>
                       <div className='grid grid-cols-2 gap-2'>
                        <div>
                          <h1 className='text-xl'>Billing Address</h1>
                          <form action="" className='border-1 border-gray-400 rounded my-2 px-5'>
                            <div className='my-[10px]'>
                              <label>Billing Name*</label><br />
                              <input type="text" value='' name='' className='w-[100%] rounded my-[5px]'/>
                            </div>
                            <div className='my-[10px]'>
                              <label>Billing Email*</label><br />
                              <input type="email" value='' name='' className='w-[100%] rounded my-[5px]'/>
                            </div>
                              <div className='my-[10px]'>
                              <label>Billing Mobile Number*</label><br />
                              <input type="number" value='' name='' className='w-[100%] rounded my-[5px]'/>
                            </div>
                            <div className='my-[10px]'>
                              <label>Billing Address*</label><br />
                              < textarea type="address" value='' name='' className='w-[100%] rounded my-[5px]'>
                              </textarea>
                            </div>
                            <div className='my-[10px]'>
                              <label>Country*</label><br />
                              <input type="text" value='' name='' className='w-[100%] rounded my-[5px]'/>
                            </div>
                            <div className='my-[10px]'>
                              <label>State*</label><br />
                              <input type="text" value='' name='' className='w-[100%] rounded my-[5px]'/>
                            </div>
                            <div className='my-[10px]'>
                              <label>City*</label><br />
                              <input type="text" value='' name='' className='w-[100%] rounded my-[5px]'/>
                            </div>
                            <div className='my-[30px]'>
                              <button className='text-white p-[5px_20px] bg-[#b38a87] rounded-2xl cursor-pointer'>UPDATE</button>
                            </div>
                          </form>
                        </div>

                         <div>
                          <h1 className='text-xl'>Shipping Address</h1>
                          <form action="" className='border-1 border-gray-400 rounded my-2 px-5'>
                            <div className='my-[10px]'>
                              <label>Shipping Name*</label><br />
                              <input type="text" value='' name='' className='w-[100%] rounded my-[5px]'/>
                            </div>
                            <div className='my-[10px]'>
                              <label>Shipping Email*</label><br />
                              <input type="email" value='' name='' className='w-[100%] rounded my-[5px]'/>
                            </div>
                              <div className='my-[10px]'>
                              <label>Shipping Mobile Number*</label><br />
                              <input type="number" value='' name='' className='w-[100%] rounded my-[5px]'/>
                            </div>
                            <div className='my-[10px]'>
                              <label>Shipping Address*</label><br />
                              < textarea type="address" value='' name='' className='w-[100%] rounded my-[5px]'>
                              </textarea>
                            </div>
                            <div className='my-[10px]'>
                              <label>Country*</label><br />
                              <input type="text" value='' name='' className='w-[100%] rounded my-[5px]'/>
                            </div>
                            <div className='my-[10px]'>
                              <label>State*</label><br />
                              <input type="text" value='' name='' className='w-[100%] rounded my-[5px]'/>
                            </div>
                            <div className='my-[10px]'>
                              <label>City*</label><br />
                              <input type="text" value='' name='' className='w-[100%] rounded my-[5px]'/>
                            </div>
                            <div className='my-[30px]'>
                              <button className='text-white p-[5px_20px] bg-[#b38a87] rounded-2xl cursor-pointer'>UPDATE</button>
                            </div>
                          </form>
                        </div>

                       </div>
                       
                       </>
                       :
                       ''
                       }
                    </div>


                    <div>
                        {profile ?
                        <>
                             <h1 className='text-black font-bold text-xl my-[10px] '>My Profile</h1>
                             <form action="" className='border-1  border-gray-400 px-[30px] py-[10px] rounded'>
                              <div>
                                <input type="radio" name='radio' value='' className='me-[5px]'/>
                                <label className='pe-[10px]'>Mr.</label>
                                <input type="radio" name='radio' value='' className='me-[5px]'/>
                                <label  className='pe-[10px]'>Mrs.</label>
                              </div>
                              <div className='my-[15px]'>
                                <label className='py-[10px]'>Name*</label><br/>
                                <input type="text" name='' value='' className='w-[100%] rounded my-[10px]' />
                              </div>
                               <div className='my-[15px]'>
                                <label className='py-[10px]'>Email*</label><br/>
                                <input type="email" name='' value='' className='w-[100%] rounded my-[10px]' placeholder='yash@gmail.com'/>
                              </div>
                              <div className='my-[15px]'>
                                <label className='py-[10px]'>Mobile Number*</label><br/>
                                <input type="number" name='' value='' className='w-[100%] rounded my-[10px]'/>
                              </div>
                              <div className='my-[15px]'>
                                <label className='py-[10px]'>Address*</label><br/>
                                <textarea type="address" name='' value='' className='w-[100%] rounded my-[10px]'>
                                </textarea>
                              </div>
                               <div className='my-[20px]'>
                              <button className='text-white p-[5px_20px] bg-[#b38a87] rounded-2xl cursor-pointer'>UPDATE</button>
                            </div>
                             </form>
                        </>
                        :
                        ''
                        }
                    </div>


                    <div>
                      {password ?
                       <>
                        <h1 className='text-black font-bold text-xl '>Change Password</h1>
                        <form className='border-1 border-gray-300 my-[30px] p-[15px]'>
                            <div>
                              <label>Current Password</label><br />
                              <input type="password" name='' value='' className='w-[100%] my-[10px] rounded' />
                            </div>
                            <div>
                              <label>New Password</label><br />
                              <input type="password" name='' value='' className='w-[100%] my-[10px] rounded' />
                            </div>
                            <div>
                              <label>Confirm Password</label><br />
                              <input type="password" name='' value='' className='w-[100%] my-[10px] rounded' />
                            </div>
                              <div className='my-[20px]'>
                              <button className='text-white p-[5px_20px] bg-[#b38a87] rounded-2xl cursor-pointer'>UPDATE</button>
                            </div>
                        </form>
                       </>
                       :
                       ''
                      }
                    </div>


                </div>

                
                </div>  



</div>

    </>
  )
}  */ 
