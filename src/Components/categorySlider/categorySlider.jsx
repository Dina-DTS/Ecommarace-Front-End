import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

export default function CategorySlider() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
    setCategories(data.data);
  }

  useEffect(() => {
    getCategories();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,  // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,  
        settings: {
          slidesToShow: 4,  
        }
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 2,  
        }
      }
    ]
  };

  return (
    <>
      <Slider {...settings} className='mt-11'>
        {categories.map((c) => (
          <div key={c._id}>
            <img className='w-full h-44 object-cover' src={c.image} alt="category" />
            <h2 className='font-normal text-lg text-center'>{c.name}</h2>
          </div>
        ))}
      </Slider>
    </>
  );
}
