import React from 'react';
import Navbar from '../navbar/Navbar';
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
const Home = () => {
    return (
        <div>
          <Navbar></Navbar>
            <header className='xl:ml-64'>
                <div className='ml-16'>
                    <img className='h-60 w-72 ml-30 xl:h-80 xl:w-80 xl:ml-80'
                        src="images/lets-code.gif" alt="" />
                </div> 
                <div className='ml-24 xl:-mt-32'>
                    <p className='font-mono font-bold text-5xl text-yellow-500' >
                    Welcome;</p>
                    <p className='font-serif font-semibold ml-10'><b>I am SHAIKAT</b></p>
                </div>
                <div>
                    <p className='text-sm ml-7'>`A passionate 
                    full stack developer 
                    from Bangladesh`</p>
                </div>
                <div className="social-media flex w-3/4 mt-10 ml-14 xl:mt-20">
                    <div className="github m-auto"><AiFillGithub className='text-3xl'/></div>
                    <div className="linkedin m-auto"><AiFillLinkedin className='text-3xl'/></div>
                    <div className="stackoverflow m-auto"><BsStackOverflow className='text-3xl'/></div>
                </div>
            </header>

            {/* Myself */}
            <div className="myself w-full mt-20 mb-8">
                <p className='text-center font-sans text-3xl font-extrabold tracking-[.25em]'>
                Myself</p>
                <div className='xl:flex xl:w-full xl:-ml-20'>
                    <div>
                        <img src="images/shaikat.png" className="w-3/5 m-auto xl:w-2/5" alt="" />
                    </div>
                    <div className='w-4/5 m-auto xl:-ml-28'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ipsam fuga ullam reprehenderit dolorum asperiores totam excepturi voluptatum soluta esse?</p>
                    </div>
                    <div className="experience flex w-full mt-10">
                        <div className=' w-1/6 m-auto text-center  border-red-900 border-b-4 '>
                            <p className='font-extrabold'>02+</p>
                            <p>years experience</p>
                        </div>
                        <div className=' w-1/6 m-auto text-center border-red-900 border-b-4'>
                            <p className='font-extrabold'>05+</p>
                            <p>complete projects</p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>

    
                
        </div>
    );
};

export default Home;