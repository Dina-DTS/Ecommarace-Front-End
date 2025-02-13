import React, { useEffect } from 'react';
import { useState } from 'react';
import Style from "./MainSlider.module.css/";

import fixed_1 from "../../assets/fixed-1.jpeg"
import fixed_2 from "../../assets/fixed-2.png"
import slider_1 from "../../assets/slider-1.jpeg"
import  slider_2 from "../../assets/slider-2.jpeg"
import Slider from 'react-slick';

export default  function MainSlider () {
    
    return (
       <>
       <div className="grid grid-cols-12 mt-9 ">
        <div className=" col-span-12 sm:col-span-8 ">
            <Slider dots={true} autoplay={true} arrows={false}>
            <img className='h-[300px] object-cover' src={slider_1} alt="image" />
            <img  className='h-[300px] object-cover' src={slider_2} alt="image" />

            </Slider>
        </div>
        <div className=" col-span-12 sm:col-span-4">
            <img className='  w-full  h-[150px] object-cover' src={fixed_1} alt="image" />
            <img className='  w-full h-[150px] object-cover' src={fixed_2} alt="image" />
        </div>
       </div>
       </>
    )
}

