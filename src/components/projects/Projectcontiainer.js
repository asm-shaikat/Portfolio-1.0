import React from 'react';
import './projects.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./projects.css";

// import required modules
import { Pagination, Navigation } from "swiper";


const Projectcontiainer = (req) => {
    const { title, technology, image, altName, description,link,live } = req.data;
    return (
        <div className='project-card grid place-items-center mb-4'>
            <div className="child flex">
                <p className='text-sm lg:p-2 p-1 m-1 lg:m-2 border-b-2 lg:border-b-2 border-b-yellow-600  lg:text-xl'>{title}</p>
                <p className='p-1 m-1 border-b-2 border-b-yellow-600 text-sm lg:text-xl'>{technology}</p>
                <p className='p-4 text-red-900 underline cursor-pointer'><a href={`${link}`} target="_">Show code</a></p>
            </div>
            <p className='p-4 text-sm text-red-900'><a href={`${live}`} target="_">Watch Live</a></p>
            <small className='hidden lg:block'>Put cursor on image to see details</small>
            <div className="child-1 w-3/5">
                <img src={`project-img/${image}`} alt={altName} />
            </div>
            <div className="child-2 w-3/5 backdrop-blur-lg  p-20 lg:-mt-96 text-white  bg-blue-500 bg-opacity-50 text-center">
                <p>{description}</p>
            </div>
        </div> 
    );
};

export default Projectcontiainer;