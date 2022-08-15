import React from 'react';
import './projects.css';
const Projectcontiainer = (req) => {
    const {title,technology,image,altName,description,type} = req.data;
    return (
        <div className='project-card grid place-items-center'>
            <div className="child flex ">
                <p className='lg:p-2 p-1 m-1 lg:m-2 border-b-2 lg:border-b-2 border-b-yellow-600 text-xs lg:text-xl'>{title}</p>
                <p className='p-1 m-1 border-b-2 border-b-yellow-600 text-sm lg:text-xl'>{technology}</p>
            </div>
            <div className="child-1 w-3/5">
                <img src={image} alt={altName} />
            </div>
            <div className="child-2 w-3/5   p-20 lg:-mt-96 text-black  bg-white bg-opacity-50 text-center">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Projectcontiainer;