import React from 'react';
import Navbar from '../navbar/Navbar';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./home.css";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <header className='xl:ml-80'>
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
                    <div className="github m-auto"><AiFillGithub className='text-3xl' /></div>
                    <div className="linkedin m-auto"><AiFillLinkedin className='text-3xl' /></div>
                    <div className="stackoverflow m-auto"><BsStackOverflow className='text-3xl' /></div>
                </div>
            </header> */}
            <header class="bg-white w-full">

                <div class="container px-4 py-16 mx-auto w-full lg:w-4/5">
                    <div class="items-center lg:flex">
                        <div class="w-full lg:w-1/2">
                            <div class="lg:max-w-lg ml-12">
                                <h1 class="text-2xl font-semibold text-gray-800  lg:text-3xl">Abu Shadat Shaikat</h1>
                                <p class="mt-4 text-gray-600 dark:text-gray-400 mb-2">Passionate Full Stack Web Application Developer & Competitive Programmer</p>
                                <button class="flex items-center justify-center px-2 hide-mobile  py-1 text-white transition-colors duration-300 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40" >
                                    <a href="#myyself">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                                        </svg>
                                        <span class="mx-1">
                                            Explore
                                        </span>
                                    </a>
                                </button> 
                            </div>
                        </div>

                        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img class="w-full h-full max-w-md" src="images/lets-code.gif" alt="" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Myself */}
            <div className="myself w-full mt-20 mb-8">
                
                <p className='text-center font-sans text-3xl font-extrabold tracking-[.25em] text-yellow-900'>
                    Myself</p>
                <div className='lg:flex lg:-ml-32 lg:relative' id='myyself'>
                    <div className=''>
                        <img src="images/shaikat.png" className="w-3/5 m-auto xl:w-2/5" alt="" />
                    </div>
                    <div className=' w-5/5 p-2 ml-4 m-auto lg:-ml-60 p-4'>
                        <p className='font-serif'>Hi there, I'm Shaikat, a passionate Full Stack Web Application Developer & Competitive Programmer. I Spend most of my time coding outstanding projects or learning something new. Apart from Web Development I also love machine learning.</p>
                    </div>
                </div>

            </div>

            {/* Certificates */}
            <div className='w-full mb-16'>
                <div className='text-center mb-10'>
                    <p className='text-center text-yellow-900 font-sans text-3xl font-extrabold tracking-[.25em] mb-2'>
                        Certificates</p>
                    <small>Swip left to see more ! </small>
                </div>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    zoom={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Zoom, Navigation, Pagination]}
                    className="mySwiper w-5/5 lg:w-3/5"
                >
                    <SwiperSlide>
                        <div className="swiper-zoom-container">
                            <img src="cetificates-img/icpc-certificate.png" alt='' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-zoom-container">
                            <img src="cetificates-img/laravel.png" alt='' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-zoom-container">
                            <img src="cetificates-img/Team Management.png" alt='' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="swiper-zoom-container">
                            <img src="cetificates-img/icpc-team-certificate.png" alt='' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Contact */}
            <section class="min-h-screen bg-white w-full">
                <div class="container px-6 py-10 mx-auto lg:w-4/5">
                    <div class="lg:flex lg:items-center lg:-mx-10">
                        <div class="lg:w-1/2 lg:mx-10">
                            <div className='p-2'>
                                <p className='text-center text-yellow-900 font-sans text-3xl font-extrabold tracking-[.25em] mb-2'>
                                    Let’s talk</p>

                                <p class="mt-4 text-gray-500 dark:text-gray-600 text-center">
                                    Ask me everything and i would love
                                    to hear from you
                                </p>
                            </div>

                            <form class="mt-12">
                                <div class="-mx-2 md:items-center md:flex">
                                    <div class="flex-1 px-2">
                                        <label class="block mb-2 text-sm text-gray-600">Full Name</label>
                                        <input type="text" placeholder="Mohammad Shaikat" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-900 rounded-md  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div class="flex-1 px-2 mt-4 md:mt-0">
                                        <label class="block mb-2 text-sm text-gray-600">Email</label>
                                        <input type="email" placeholder="cse.200101057@gmail.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-900 rounded-md  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                </div>

                                <div class="w-full mt-4">
                                    <label class="block mb-2 text-sm text-gray-600">Message</label>
                                    <textarea class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-900 rounded-md md:h-56 dark:placeholder-gray-600  focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                </div>

                                <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    get in touch
                                </button>
                            </form>
                        </div>

                        <div class="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                            <img class="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96" src="images/shaikat.png" alt="" />

                            <div class="mt-6 space-y-8 md:mt-8">
                                <p class="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                    <span class="mx-2 text-gray-700 truncate w-72">
                                        Rangpur,Bangladesh
                                    </span>
                                </p>

                                {/* <p class="flex items-start -mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>

                        <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">(257) 563-7401</span>
                    </p> */}

                                <p class="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>

                                    <span class="mx-2 text-gray-700 truncate w-72">cse.200101057@gmail.com</span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;