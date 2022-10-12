import React from 'react';
import './projects.css';
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./projects.css";

// import required modules


const Projectcontiainer = (req) => {
    const { title, technology, image, altName, description,link,live } = req.data;
    return (
        <div className='project-card grid place-items-center mb-4 bg-gradient-to-r from-slate-700 to-slate-900'>
            <div className="child flex text-white">
                <p className='text-sm lg:p-2 p-1 m-1 lg:m-2 border-b-2 lg:border-b-2 border-b-yellow-600  lg:text-xl'>{title}</p>
                <p className='p-1 m-1 border-b-2 border-b-yellow-600 text-sm lg:text-xl'>{technology}</p>
                <p className='p-4 text-white underline cursor-pointer'><a href={`${link}`} target="_">Show code</a></p>
            </div>
            <p className='p-4 text-sm text-white underline'><a href={`${live}`} target="_">Watch Live</a></p>
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