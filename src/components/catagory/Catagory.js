import React from 'react';
import './catagory.css';
const Catagory = ({catagory,filterbtn}) => {
    return (
        <div className='filter-container m-4 pt-20 lg:p-2'>
             {
            catagory.map((cat,index) =><button class="m-4  items-center h-12 px-4 py-2 text-sm text-center text-white border border-b-0 border-accent sm:text-base dark:border-gray-500 rounded-t-md  whitespace-nowrap focus:outline-none" type="button"  key={index} onClick={()=>filterbtn(cat)}>{cat}</button>)
        }
        </div>
    );
};

export default Catagory;