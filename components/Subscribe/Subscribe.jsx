import React from 'react'
import pattern from "../../assets/pattern.jpeg";

const BannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundPosition: "center",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
    height:"100%",
    width:"100%",
}
const Subscribe = () => {
  return (
    <div data-aos="zoom-in"
    className='mb-20 bg-gray-100 dark:bg-gray-800 text-white'
    style={BannerImg}>
        <div className='container backdrop-blur-sm py-10'>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1>Get Notified About New Products</h1>
                <input
                data-aos="fade-up"
                type="text"
                placeholder='Enter your email'
                className='w-full p-3' />
            </div>
        </div>
    </div>
  )
}

export default Subscribe