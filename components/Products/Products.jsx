import React from 'react';
import Img1 from "../../assets/women/women1.jpg";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Img5 from "../../assets/women/women5.jpg";
import { FaStar } from 'react-icons/fa';

const ProductsData = [
  {
    id: 1,
    img: Img1, // Assuming Img1 is a URL or imported image
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2, // Assuming Img2 is a URL or imported image
    title: "Women western",
    rating: 4.5,
    color: "red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3, // Assuming Img3 is a URL or imported image
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4, // Assuming Img4 is a URL or imported image
    title: "Printed T-shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
  {
    id: 5,
    img: Img5, // Assuming Img5 is a URL or imported image
    title: "Fashion T-shirt",
    rating: 5.0,
    color: "yellow",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <div>
      <div>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up"className='text-sm text-primary'>Top Selling Products for you</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
          <p data-aos="fade-up"className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nisi eaque. Voluptates sed omnis</p>
        </div>
        {/* Body section */}
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
          {/* Card section */}
          {ProductsData.map((data) => (
            <div 
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            key={data.id} 
            className='space-y-3'>
              <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
              <div>
                <h3 className='font-semibold'>{data.title}</h3>
                <p className='text-sm text-gray-600'>{data.color}</p>
                <div className='flex items-center gap-1'>
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all  button */}
        <div className='flex justify-center'>
          <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 rounded-md'>
            View All Button
          </button>

        </div>
      </div>
    </div>
  );
}

export default Products;
