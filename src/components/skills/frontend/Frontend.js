import React from 'react';
import Skills from '../Skills';
import Navbar from '../../navbar/Navbar';
const Frontend = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Skills></Skills>
            <div className='xl:ml-56 xl:relative'>
                <div className='frontend-element font-bold text-center w-32 ml-32 mt-5 xl:absolute xl:ml-32 xl:flex'>
                    <p className='bg-purple-800 text-white m-2 p-2'>React</p>
                    <p className='bg-purple-800 text-white m-2 p-2'>JavaScript</p>
                    <p className='bg-purple-800 text-white m-2 p-2'>Tailwindcss</p>
                    <p className='bg-purple-800 text-white m-2 p-2'>BootStrap</p>
                    <p className='bg-purple-800 text-white m-2 p-2'>CSS</p>
                    <p className='bg-purple-800 text-white m-2 p-2'>HTML</p>
                </div>
            </div>
        </div>
    );
};

export default Frontend;