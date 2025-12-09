"use client"

import Image from "next/image";
import BannerSection from "./home-page-componets/BannerSection"
import ChairSection from "./home-page-componets/ChairSection"
import TabingSection from "./home-page-componets/TabingSection"
import NewTredingSection from "./home-page-componets/NewTredingSection"
import FreeShippingSection from "./home-page-componets/FreeShippingSection"
import LoginAndRegister from "./loginAndRegister/page";
import axios from "axios";
import { useEffect, useState } from "react";



export default function Home() {

  let [showSlider, setShowSlider] = useState([])
  let [staticPath , setStaticPath] = useState('')
  let [productType , setProductType] = useState(1)
  let [productImagepath, setProductImagePath] = useState('')
  let [productData, setProductData] = useState([]);

  let apiBaseUrl = process.env.NEXT_PUBLIC_APIBASEURL;

  let getSlider = ()=>{
     axios.get(`${apiBaseUrl}home/slider`)
     .then((res)=> res.data)
     .then((finalRes)=>{
        setStaticPath(finalRes.staticPath)
        setShowSlider(finalRes.data)
     })
  }


  let getProduct = ()=>{
    axios.get(`${apiBaseUrl}home/home-product`,{
      params : {
         productType
      }
    })
    .then((res)=> res.data)
    .then((finalRes)=>{
       setProductImagePath(finalRes.staticPath)
       setProductData(finalRes.data)
    })
  }

   useEffect(()=>{
    getSlider();
    getProduct()
   },[productType])

 



  return (
   <>
    <BannerSection Slidershow={showSlider} sliderStaticPath={staticPath} />
      <ChairSection/> 
      <TabingSection productImagepath = {productImagepath} productData = {productData} productType={productType} setProductType = {setProductType}/>
      <NewTredingSection/>
      <FreeShippingSection/>
     

    
   </>
  );
}
