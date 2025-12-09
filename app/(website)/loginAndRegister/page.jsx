
"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Footer from '../common/Footer'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { redirect } from 'next/navigation'
import { userData } from '../slice/userSlice'
import cookies from 'js-cookie'

// firebase
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from '../config/firebaseConfig'

export default function LoginAndRegister() {

  let baseUrl = process.env.NEXT_PUBLIC_APIBASEURL

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app)

  let dispetch = useDispatch();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('')

  let savedEmail = cookies.get("LOGIN_EMAIL") || "";
  let savedPass = cookies.get("LOGIN_PASS") || "";

  let userRegister = (event)=>{
    event.preventDefault()
    let formValue = new FormData(event.target)
    axios.post(`${baseUrl}user/register`,formValue)
    .then((res)=> res.data)
    .then((finalRes)=>{
      if(finalRes.status){
        toast.success(finalRes.mgs)
        event.target.reset();
      }
    })
}

let login = (e)=>{
  e.preventDefault();
  let formvalue = new FormData(e.target)
  axios.post(`${baseUrl}user/login`,formvalue)
  .then((res)=> res.data)
  .then((finalRes)=> {
   if(finalRes.status){
          dispetch(userData({user:finalRes.user, token:finalRes.token}))
          cookies.set("LOGIN_EMAIL", formvalue.get('userEmail'), {expires : 7});
          cookies.set("LOGIN_PASS", formvalue.get('userPassword'), {expires : 7})
          redirect('/my-dashboard')
   }
   else{
        alert(finalRes.mgs)
   }
   })}
  

let googleLogin = ()=>{
  signInWithPopup(auth, provider)
.then((result) => {
  
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;

  const user = result.user;

  let insertObj = {
    displayName : user.displayName,
    email : user.email,
  }

  axios.post(`${baseUrl}user/create-user-google-login`,insertObj)
  .then((res)=> {
    if(res.data.status){
      dispetch(userData({user : res.data.user, token : res.data.token}))
      redirect('/my-dashboard')
    }
  })

}).catch((error) => {
 // console.log(error.message)
});
}


return (
<>
<ToastContainer/>


<div className='max-w-[1320px] mx-auto px-4'>

  
  <div className='text-center py-6 sm:py-10'>
    <h1 className='font-bold text-3xl sm:text-4xl'>My Account</h1>
    <p className='py-2 text-sm sm:text-base'>
      <Link href={'/'}>Home </Link>
      <span className='text-[#b38a87]'>/ MyAccount</span>
    </p>
  </div>

 
  <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10'>

    
    <div>
      <h1 className='text-2xl sm:text-3xl py-4 px-2 lg:px-0'>Login</h1>

      <form 
        className='border border-gray-300 p-4 sm:p-6 mx-2 lg:mx-0 rounded'
        onSubmit={login}
      >
        <div>
          <label>Email*</label><br />
          <input 
            type="email"
            name="userEmail"
            placeholder='Email Address'
            autoComplete="email"
            className='my-2 w-full border border-gray-300 bg-white p-2 rounded'
            onChange={(e)=> setLoginEmail(e.target.value)}
            defaultValue={savedEmail}
          />
        </div>

        <div className='pt-4'>
          <label>Password*</label><br />
          <input 
            type="password"
            name="userPassword"
            placeholder='password'
            autoComplete="current-password"
            className='my-2 w-full border border-gray-300 bg-white p-2 rounded' 
            defaultValue={savedPass}
            onChange={(e)=> setLoginPassword(e.target.value)}
          />
        </div>

        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 gap-4'>
          <p className='text-[#b38a87] cursor-pointer'>Lost your password?</p>

          <div className='flex flex-col xs:flex-row gap-3'>
            <button className='bg-[#b38a87] text-white font-semibold px-6 py-2 rounded-full cursor-pointer text-sm'>
              LOGIN
            </button>

            <button 
              onClick={googleLogin}
              type='button'
              className='bg-[#b38a87] text-white font-semibold px-6 py-2 rounded-full cursor-pointer text-sm'
            >
              Login with Google
            </button>
          </div>
        </div>
      </form>
    </div>


    {/* Register Section */}
    <div>
      <h1 className='text-2xl sm:text-3xl py-4 px-2 lg:px-0'>Register</h1>

      <form 
        onSubmit={userRegister}
        className='border border-gray-300 p-4 sm:p-6 mx-2 lg:mx-0 rounded'
      >
        <div>
          <label>Name*</label><br/>
          <input 
            type="text"
            name="userName"
            placeholder='Enter your name'
            className='my-2 w-full border border-gray-300 bg-white p-2 rounded'
          />
        </div>

        <div>
          <label>Number*</label><br />
          <input 
            type="number"
            name="userPhone"
            placeholder='Enter phone number'
            className='my-2 w-full border border-gray-300 bg-white p-2 rounded'
          />
        </div>

        <div>
          <label>Email*</label><br />
          <input 
            type="email"
            name="userEmail"
            placeholder='Email Address'
            className='my-2 w-full border border-gray-300 bg-white p-2 rounded'
          />
        </div>

        <div className='pt-4'>
          <label>Password*</label><br />
          <input 
            type="password"
            name="userPassword"
            placeholder='password'
            className='my-2 w-full border border-gray-300 bg-white p-2 rounded'
          />
        </div>

        <div className='pt-4 text-right'>
          <button className='bg-[#b38a87] text-white font-semibold px-6 py-2 rounded-full cursor-pointer text-sm'>
            REGISTER
          </button>
        </div>
      </form>
    </div>

  </div>

</div>

<Footer/>
</>
)
}
















// "use client"

// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'
// import Footer from '../common/Footer'
// import axios from 'axios'
// import { toast, ToastContainer } from 'react-toastify'
// import { useDispatch } from 'react-redux'
// import { redirect } from 'next/navigation'
// import { userData } from '../slice/userSlice'
// import cookies from 'js-cookie'

//   // ye firebase ke liye use kiya hai 
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// import { app } from '../config/firebaseConfig'

//   // ye firebase ke liye use kiya hai 



// export default function LoginAndRegister() {

//   let baseUrl = process.env.NEXT_PUBLIC_APIBASEURL

//   // ye firebase ke liye use kiya hai getAuth ke bich me config folder me firebaseConfig me jo app variable export kiya hai use call karna hai 
//   const provider = new GoogleAuthProvider();
//   const auth = getAuth(app)
//   // ye firebase ke liye use kiya hai 

//   let dispetch = useDispatch();

//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('')

//   let savedEmail = cookies.get("LOGIN_EMAIL") || "";
// let savedPass = cookies.get("LOGIN_PASS") || "";

//   let userRegister = (event)=>{
//     event.preventDefault()
//     let formValue = new FormData(event.target)
//     axios.post(`${baseUrl}user/register`,formValue)
//     .then((res)=> res.data)
//     .then((finalRes)=>{
//       if(finalRes.status){
//         toast.success(finalRes.mgs)
//         event.target.reset();
//       }
//     })
// }


//    let login = (e)=>{
//     e.preventDefault();
//     let formvalue = new FormData(e.target)
//     axios.post(`${baseUrl}user/login`,formvalue)
//     .then((res)=> res.data)
//     .then((finalRes)=> {
//      if(finalRes.status){
//             dispetch(userData({user:finalRes.user, token:finalRes.token}))
//             cookies.set("LOGIN_EMAIL", formvalue.get('userEmail'), {expires : 7});
//             cookies.set("LOGIN_PASS", formvalue.get('userPassword'), {expires : 7})
//             redirect('/my-dashboard')
//      }
//      else{
//           alert(finalRes.mgs)
//      }
//      })}



//      let googleLogin = ()=>{
//       signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//   // ye jo console hai yaha per google se login karne per google data deta hai google me userName etc...
//    // console.log(">>>>>>>>>>>>>>>>>>>>>loginwithgoogle",user)
//     let insertObj = {
//       displayName : user.displayName,
//       email : user.email,
//     }

//     axios.post(`${baseUrl}user/create-user-google-login`,insertObj)
//     .then((res)=> {
//       if(res.data.status){
//         dispetch(userData({user : res.data.user, token : res.data.token}))
//         redirect('/my-dashboard')
//       }
//     })
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
//      }


//   return (
//  <>
//  <ToastContainer/>
//   <div className='max-w-[1320px] mx-auto'>
//     <div className='text-center py-[30px]'>
//       <h1 className='font-bold text-4xl'>My Account</h1>
//       <p className='py-[5px]'> <Link href={'/'}>Home </Link> <span className='text-[#b38a87]'>/ MyAccount </span></p>
//     </div>
//   </div>

//   <div className='max-w-[1320px] mx-auto grid lg:grid-cols-2 gap-[30px] '>
//     <div>
//       <h1 className='text-3xl py-[20px] px-[10px] lg:px-[0px]'>Login</h1>
//       <form action="" className='border border-gray-300 p-[20px] mx-[5px] lg:mx-[0px]' onSubmit={login}>
//         <div>
//         <label>Email*</label><br />
//         <input type="email" name="userEmail" placeholder='Email Address'  autoComplete="email"  className='my-[5px] w-[100%] border border-gray-300 bg-white '
//         onChange={(e)=> setLoginEmail(e.target.value)}
//         defaultValue={savedEmail}/>
//         </div>
//         <div className='pt-[20px]'>
//         <label>Password*</label><br />
//         <input type="password"  name="userPassword" placeholder='password' autoComplete="current-password"  className='my-[5px] w-[100%] border border-gray-300 bg-white' 
//         defaultValue={savedPass}
//         onChange={(e)=> setLoginPassword(e.target.value)}
//         />
//         </div>
//         <div className='flex  justify-between items-center pt-[15px]'>
//           <p className='text-[#b38a87]'>Lost your password?</p>
//           <div>
//           <button className='bg-[#b38a87] text-white font-semibold px-[12px] text-[12px] py-[10px] rounded-3xl cursor-pointer mr-[10px]'>LOGIN</button>
//            <button onClick={googleLogin} type='button' className='bg-[#b38a87] text-white font-semibold px-[12px] text-[12px] py-[10px] rounded-3xl cursor-pointer'>Login with Google</button>
//            </div>
//         </div>
//       </form>
//     </div>

 
//     <div>
//       <h1 className='text-3xl py-[20px] px-[10px] lg:px-[0px]'>Register</h1>
//       <form action="" onSubmit={userRegister} className='border border-gray-300 p-[20px] mx-[5px] lg:mx-[0px]'>
//         <div>
//         <label>Name*</label><br/>
//         <input type="text" name="userName" placeholder='Enter your name'   className='my-[5px] w-[100%] border border-gray-300 bg-white '/>
//         </div>
//          <div>
//         <label>Number*</label><br />
//         <input type="number" name="userPhone" placeholder='Enter phone number'   className='my-[5px] w-[100%] border border-gray-300 bg-white '/>
//         </div>
//         <div>
//         <label>Email*</label><br />
//         <input type="email" name="userEmail" placeholder='Email Address'   className='my-[5px] w-[100%] border border-gray-300 bg-white '/>
//         </div>
//         <div className='pt-[20px]'>
//         <label>Password*</label><br />
//         <input type="password"  name="userPassword" placeholder='password'   className='my-[5px] w-[100%] border border-gray-300 bg-white'/>
//         </div>
//         <div className='flex  justify-between items-center pt-[15px]'>
//           <p></p>
//           <button className='bg-[#b38a87] text-white font-semibold px-[12px] text-[12px] py-[10px] rounded-3xl cursor-pointer mr-[10px]'>REGISTER</button>
          
           
//         </div>

//       </form>
//     </div>
//     </div>

//     <Footer/>
//  </>
//   )
// }
