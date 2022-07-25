import React from 'react';
import './catagory.css';
const Catagory = ({catagory,filterbtn}) => {
    return (
        <div className='filter-container'>
             {
            catagory.map((cat,index) =><button type="button"  key={index} onClick={()=>filterbtn(cat)}>{cat}</button>)
        }
        </div>
    );
};

export default Catagory;