"use client";

import Link from "next/link";
import React, { useState } from "react";
import Footer from "../common/Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRazorpay } from "react-razorpay";
import { fetchCart } from "../slice/cartSlice";

export default function CheckOut() {


  let dispatch = useDispatch()

   const {  Razorpay } = useRazorpay();

  const cart = useSelector((store) => store.cart.cart);
  const imagePath = useSelector((store) => store.cart.imagePath);

  const orderAmount = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  let orderQty = cart.reduce(
    (total,obj)=> total+obj.qty,0)

     let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;

       const token = useSelector((store)=> store.login.token);
  


  
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    mobile: "",
    billingName: "",
    billingEmail: "",
    billingMobile: "",
    address: "",
    country: "",
    state: "",
    city: "",
    notes: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("1");

  
  const handleInput = (e) => {
  setShippingAddress((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};
  
  const orderPlace = (event) => {
    event.preventDefault();

 //   console.log('>>>>>>>>>>>>>>order',paymentMethod)

     let orderItems = cart.map((items)=>{
        return {
          title : items.title,
          price : items.price,
          qty : items.qty,
          colorName : items.color.colorName,
          imagePath
        }
    })


    let obj = {
        paymentMethod,
        shippingAddress,
        orderItems,
        orderAmount,
        orderQty
    }

    axios.post(`${apiBaseUrl}order/order-save`,obj,{
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
     .then((res)=> res.data)
     .then((res)=> {
          if(res.paymentMethod == "1"){
            //Create a thank you page
            
            // fetchCart ko yaha per isliye call kiya hai ki payment  hone ke baad backend se data delete hua hai us ke baad fetchCart ko call kiya hai ki cart empty ho gaya hai ok   thank you page hame create karna hai ok
            dispatch(fetchCart())
          }

          else{
            // online payment system

      const  RazorpayOrderOptions = {
      key: "rzp_test_WAft3lA6ly3OBc",
      amount: res.ordersRes.amount, // Amount in paise
      currency: "INR",
      name: "Test Company",
      description: "Test Transaction",
      order_id: res.ordersRes.id, // Generate order_id on server
      handler: (response) => {
     //   console.log(response);

        axios.post(`${apiBaseUrl}order/verify-order`, response, {
          headers : {
            Authorization : `Bearer ${token}`
          }
        })
        .then((res)=> res.data)
        .then((res)=> {
            dispatch(fetchCart())
        } )
        
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

          const razorpayInstance = new Razorpay(RazorpayOrderOptions);
    razorpayInstance.open();
            

          }
     })
    
  };




  return (
    <>
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="text-center lg:py-[30px] py-[20px]">
          <h1 className="font-bold text-3xl">Checkout</h1>
          <p className="py-[5px]">
            <Link href={"/"}>Home </Link>
            <span className="text-[#b38a87]"> / Checkout</span>
          </p>
        </div>

        <form onSubmit={orderPlace}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* ---------------- BILLING DETAILS ---------------- */}
            <div className="border rounded shadow">
              <div className="bg-black text-white p-3 rounded-t font-bold">
                Billing Details
              </div>

              <div className="p-5 space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full border p-2 rounded"
                  onChange={handleInput}
                  value = {shippingAddress.name}
                />

                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="w-full border p-2 rounded"
                  onChange={handleInput}
                   value = {shippingAddress.mobile}
                />

                <input
                  type="text"
                  name="billingName"
                  placeholder="Billing Name"
                  className="w-full border p-2 rounded"
                  onChange={handleInput}
                   value = {shippingAddress.billingName}
                />

                <input
                  type="email"
                  name="billingEmail"
                  placeholder="Billing Email"
                  className="w-full border p-2 rounded"
                  onChange={handleInput}
                   value = {shippingAddress.billingEmail}
                />

                <input
                  type="text"
                  name="billingMobile"
                  placeholder="Billing Mobile Number"
                  className="w-full border p-2 rounded"
                  onChange={handleInput}
                   value = {shippingAddress.billingMobile}
                />

                <textarea
                  name="address"
                  placeholder="Billing Address"
                  className="w-full border p-2 rounded h-24"
                  onChange={handleInput}
                   value = {shippingAddress.address}
                ></textarea>

                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  className="w-full border p-2 rounded"
                  onChange={handleInput}
                   value = {shippingAddress.country}
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  className="w-full border p-2 rounded"
                  onChange={handleInput}
                   value = {shippingAddress.state}
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="w-full border p-2 rounded"
                  onChange={handleInput}
                   value = {shippingAddress.city}
                />

                <textarea
                  name="notes"
                  placeholder="Order Notes"
                  className="w-full border p-2 rounded h-24"
                  onChange={handleInput}
                   value = {shippingAddress.notes}
                ></textarea>
              </div>
            </div>

            {/* ---------------- YOUR ORDER ---------------- */}
            <div className="border rounded shadow">
              <div className="bg-black text-white p-3 rounded-t font-bold">
                Your Order
              </div>

              <div className="p-5">
                {/* Desktop Table */}
                <table className="w-full border hidden md:table">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="p-2 border">Product</th>
                      <th className="p-2 border">Qty</th>
                      <th className="p-2 border">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map((item) => (
                      <tr key={item._id}>
                        <td className="p-2 border">{item.title}</td>
                        <td className="p-2 border">{item.qty}</td>
                        <td className="p-2 border">₹{item.qty * item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Mobile UL View */}
                <div className="md:hidden">
                  {cart.map((item) => (
                    <ul
                      key={item._id}
                      className="border p-3 rounded mb-3 bg-white shadow-sm"
                    >
                      <li className="flex justify-between">
                        <strong>Product:</strong> {item.title}
                      </li>
                      <li className="flex justify-between mt-2">
                        <strong>Qty:</strong> {item.qty}
                      </li>
                      <li className="flex justify-between mt-2">
                        <strong>Total:</strong> ₹{item.qty * item.price}
                      </li>
                    </ul>
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-5 space-y-2">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Cart Subtotal:</span>
                    <span>₹{orderAmount}</span>
                  </div>

                  

                  <div className="flex justify-between font-bold text-lg">
                    <span>Order Total:</span>
                    <span>₹{orderAmount}</span>
                  </div>

                  {/* ---------------- PAYMENT METHODS ---------------- */}
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id="cod"
                        name="payment"
                        value="1"
                        checked={paymentMethod === "1"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <label htmlFor="cod" className="text-lg">
                        Cash on Delivery
                      </label>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id="online"
                        name="payment"
                        value="2"
                        checked={paymentMethod === "2"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <label htmlFor="online" className="text-lg">
                        Online Payment
                      </label>
                    </div>

                    {/* PLACE ORDER BUTTON */}
                    <button className="bg-[#b38a87] text-white w-full py-3 rounded text-lg">
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <Footer />
      </div>
    </>
  );
}



