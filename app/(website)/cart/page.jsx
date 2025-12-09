
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import fetchCart from "../slice/cartSlice";

export default function Cart() {
  const cart = useSelector((store) => store.cart.cart);
  const imagePath = useSelector((store) => store.cart.imagePath);
  const apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;

  const dispatch = useDispatch();

 
  const [quantities, setQuantities] = useState({});

  
  useEffect(() => {
    const qtyObj = {};
    cart.forEach((item) => {
      qtyObj[item._id] = Number(item.qty) || 1; 
    });
    setQuantities(qtyObj);
  }, [cart]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

 
  const handleQtyChange = (id, value) => {
    let qty = parseInt(value);

    if (!qty || qty < 1) qty = 1; 

    setQuantities({
      ...quantities,
      [id]: qty,
    });
  };

  
  const removeItem = (id) => {
    if (confirm("Are you sure want to delete")) {
      axios.delete(`${apiBaseUrl}cart/delete-cart/${id}`).then(() => {
        dispatch(fetchCart());
      });
    }
  };

  
  const updateCart = () => {
    let updates = [];

    cart.forEach((item) => {
      updates.push(
        axios.put(`${apiBaseUrl}cart/update-cart/${item._id}`, {
          qty: Number(quantities[item._id]) || 1,
        })
      );
    });

    Promise.all(updates).then(() => {
      dispatch(fetchCart());
      alert("Cart Updated Successfully!");
    });
  };

  // Apply Coupon
  const applyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(10);
      alert("Coupon Applied Successfully!");
    } else {
      alert("Invalid Coupon");
      setDiscount(0);
    }
  };


  const subtotal = cart.reduce((acc, item) => {
    const qty = quantities[item._id] || 1;
    return acc + item.price * qty;
  }, 0);

  const total = subtotal - discount;

  return (
    <>
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center lg:py-[30px] py-[20px]">
          <h1 className="font-bold text-3xl">Shopping Cart</h1>
          <p className="py-[5px]">
            <Link href="/">Home</Link>{" "}
            <span className="text-[#b38a87]">/ Shopping Cart</span>
          </p>
        </div>

        {/* EMPTY CART */}
        {cart.length === 0 ? (
          <div>
            <img
              src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/my-Order.jpg"
              className="mx-auto"
              alt="empty-cart"
            />
          </div>
        ) : (
          <>
            {/* TABLE VIEW */}
            <div className="overflow-x-auto my-10 hidden md:block">
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-3 border">Delete</th>
                    <th className="p-3 border">Image</th>
                    <th className="p-3 border">Product</th>
                    <th className="p-3 border">Price</th>
                    <th className="p-3 border">Qty</th>
                    <th className="p-3 border">Total</th>
                  </tr>
                </thead>

                <tbody>
                  {cart.map((item) => {
                    const qty = quantities[item._id] || 1; 
                    return (
                      <tr key={item._id} className="border-b">
                        <td className="p-3 border text-center">
                          <button
                            className="text-red-500 font-bold"
                            onClick={() => removeItem(item._id)}
                          >
                            Delete
                          </button>
                        </td>

                        <td className="p-3 border">
                          <img
                            src={imagePath + item.image}
                            className="w-20 h-20 object-cover"
                          />
                        </td>

                        <td className="p-3 border font-semibold">
                          {item.title}
                        </td>

                        <td className="p-3 border">₹{item.price}</td>

                       
                        <td className="p-3 border">
                          <input
                            type="number"
                            min="1"
                            value={qty}
                            onChange={(e) =>
                              handleQtyChange(item._id, e.target.value)
                            }
                            className="w-16 border px-2 py-1"
                          />
                        </td>

                     
                        <td className="p-3 border font-bold">
                          ₹{item.price * qty}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* MOBILE VIEW */}
            <div className="md:hidden">
              {cart.map((item) => {
                const qty = quantities[item._id] || 1;

                return (
                  <ul
                    key={item._id}
                    className="border p-4 mb-4 shadow-sm rounded bg-white"
                  >
                    <li className="flex justify-between">
                      <strong>Product:</strong> {item.title}
                    </li>
                    <li className="flex justify-between mt-2">
                      <strong>Price:</strong> ₹{item.price}
                    </li>

                    <li className="flex justify-between mt-2 items-center">
                      <strong>Qty:</strong>
                      <input
                        type="number"
                        min="1"
                        value={qty}
                        onChange={(e) =>
                          handleQtyChange(item._id, e.target.value)
                        }
                        className="w-16 border px-2 py-1"
                      />
                    </li>

                    <li className="flex justify-between mt-2 font-bold">
                      <strong>Total:</strong> ₹{item.price * qty}
                    </li>

                    <li className="mt-3 text-right">
                      <button
                        onClick={() => removeItem(item._id)}
                        className="text-red-500"
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                );
              })}
            </div>

            {/* UPDATE BUTTON */}
            <div className="flex justify-end mb-6">
              <button
                onClick={updateCart}
                className="bg-black text-white px-5 py-3 rounded"
              >
                Update Cart
              </button>
            </div>

            {/* COUPON + TOTAL SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <div className="border p-5 rounded shadow-sm">
                <h2 className="font-bold text-xl mb-3">Apply Coupon</h2>

                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter Coupon Code"
                  className="border p-2 w-full mb-3 rounded"
                />

                <button
                  onClick={applyCoupon}
                  className="bg-gray-800 text-white px-4 py-2 rounded"
                >
                  Apply Coupon
                </button>
              </div>

              <div className="border p-5 rounded shadow-sm">
                <h2 className="font-bold text-xl mb-4">Cart Total</h2>

                <div className="flex justify-between mb-2">
                  <span>Subtotal:</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between mb-2">
                  <span>Discount:</span>
                  <span>₹{discount}</span>
                </div>

                <div className="flex justify-between font-bold text-lg mt-3">
                  <span>Total:</span>
                  <span>₹{total}</span>
                </div>

              <Link href={'/checkout'}> <button className="bg-[#b38a87] text-white px-6 py-3 w-full mt-4 rounded cursor-pointer">
                  Proceed to Checkout
                </button> </Link> 
              </div>
            </div>
          </>
        )}

        <Footer />
      </div>
    </>
  );
}





























