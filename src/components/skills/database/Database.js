import React from 'react';
import Skills from '../Skills';
import Navbar from '../../navbar/Navbar';
const Database = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Skills></Skills>
            <div className='xl:ml-56 xl:relative'>
                <div className='database-element font-bold text-center w-32 ml-32 mt-5 xl:flex xl:absolute xl:ml-32 '>
                    <p className='bg-purple-800 text-white m-2 p-2'>MySQL</p>
                </div>
            </div>
        </div>
    );
};

export default Database;