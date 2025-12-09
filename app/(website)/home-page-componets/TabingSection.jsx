import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../slice/cartSlice";

export default function TabingSection({
  productImagepath,
  productData,
  productType,
  setProductType,
}) {

  let user = useSelector((store) => store.login.user);

   let dispatch =  useDispatch()  

  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;
  const token = useSelector((store)=> store.login.token);

  const [selectedColors, setSelectedColors] = useState({});

  let addToCart = (items) => {
    const color = selectedColors[items._id] || items.productColor[0]._id;

 //   console.log("Sale Price going to backend:", items.productSalePrice);

    if (user) {
      let obj = {
        id: items._id,
        image: items.productImage,
        price: items.productSalePrice,
        qty: 1,
        title: items.productName,
        color: color,
      };

      axios.post(`${apiBaseUrl}cart/add-to-cart`,obj,{
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      .then((res)=>{
        if(res.data.status){
            dispatch(fetchCart())
        }
        else{
          alert(res.data.mgs)
        }
      })

    } else {
      alert("Please Login");
    }
  };

  return (
    <>
      <div className="mb-4 lg:mt-[50px] mt-[20px]">
        <ul className="flex flex-wrap justify-center text-sm font-medium text-center">
          <li>
            <button
              onClick={() => setProductType(1)}
              className={`inline-block lg:p-4 p-2 border-2 
                ${productType === 1 ? "border-black" : "border-gray-300"}
              `}
            >
              Featured
            </button>
          </li>

          <li>
            <button
              onClick={() => setProductType(2)}
              className={`inline-block lg:p-4 p-2 border-2 
                ${productType === 2 ? "border-black" : "border-gray-300"}
              `}
            >
              New Arrivals
            </button>
          </li>

          <li>
            <button
              onClick={() => setProductType(3)}
              className={`inline-block lg:p-4 p-2 border-2 
                ${productType === 3 ? "border-black" : "border-gray-300"}
              `}
            >
              On Sale
            </button>
          </li>
        </ul>
      </div>

      {/* ---------- PRODUCT LIST ---------- */}
      <div className="max-w-[1320px] mx-auto">
        {(productType === 1 || productType === 2 || productType === 3) && (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">

            {productData.map((items, index) => {
              const defaultColor = items.productColor[0]._id;
              const currentColor = selectedColors[items._id] || defaultColor;

              return (
                <div
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-[0px_0px_10px_2px_#ccc]"
                  key={index}
                >
                 <Link 
  href={{
    pathname: `/product-details/${items.slug}`,
    query: { img: items.productImage }
  }}
>
  <img
    className="rounded-t-lg"
    src={productImagepath + items.productImage}
    alt=""
  />
</Link>


                  <div className="p-3">
                    <h5 className="mt-1 text-gray-700 text-center">
                      {items.subsubCategory?.categoryName}
                    </h5>

                    <p className="mb-3 py-3 text-center font-semibold">
                      {items.productName}
                    </p>

                    <div className="flex justify-center items-center">
                      <div className="p-[5px] text-gray-700">
                        <del>{items.productActualPrice} </del>
                      </div>
                      <div className="p-[5px] text-[#b38a87] font-semibold text-xl">
                        {items.productSalePrice}
                      </div>
                    </div>

                    {/* COLOR + ADD TO CART */}
                    <div className="flex justify-center items-center gap-[5px] my-[10px]">
                      <select
                        className="bg-gray-200 p-[5px]"
                        value={currentColor}
                        onChange={(e) =>
                          setSelectedColors({
                            ...selectedColors,
                            [items._id]: e.target.value,
                          })
                        }
                      >
                        {items.productColor.map((colors) => (
                          <option key={colors._id} value={colors._id}>
                            {colors.colorName}
                          </option>
                        ))}
                      </select>

                      <button
                        className="p-[10px] bg-gray-200 text-[13px] cursor-pointer"
                        onClick={() => addToCart(items)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}


















































































