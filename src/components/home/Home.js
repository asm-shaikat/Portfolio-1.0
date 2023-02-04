import React from 'react';
import Navbar from '../navbar/Navbar';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faArrowUp } from '@fortawesome/free-solid-svg-icons';
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
        <div className='bg-gradient-to-r from-slate-700 to-slate-900'>
            
            <Navbar></Navbar>
            <header class="w-full  pt-10">
                <div class="container px-4 py-16 mx-auto w-full lg:w-4/5">
                    <div class="items-center lg:flex">
                        <div class="w-full lg:w-1/2">
                            <div class="lg:max-w-lg ml-12">
                                <h1 class="text-2xl font-semibold text-white  lg:text-3xl">Abu Shadat Shaikat</h1>
                                <p class="mt-4 text-white mb-2">Passionate Full Stack Web Application Developer & Competitive Programmer</p>
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
                            <img class="w-full h-full max-w-md" src="images/lets-code.png" alt="" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Myself */}
            <div className="myself w-full mt-20 mb-8" id='about'>

                <p className='text-center font-sans text-3xl font-extrabold tracking-[.25em] text-yellow-400'>
                    Myself</p>
                <div className='lg:flex lg:-ml-32 lg:relative' id='myyself'>
                    <div className=''>
                        <img src="images/shaikat.png" className="w-3/5 m-auto xl:w-2/5" alt="" />
                    </div>
                    <div className=' w-5/5 p-2 ml-4 m-auto lg:-ml-60 p-4'>
                        <p className='font-serif text-white'>Hi there, I'm Shaikat, a passionate Full Stack Web Application Developer & Competitive Programmer. I Spend most of my time coding outstanding projects or learning something new. Apart from Web Development I also love machine learning.</p>
                    </div>
                </div>

            </div>

            {/* Certificates */}
            <div className='w-full mb-16' id='certificates'>
                <div className='text-center mb-10'>
                    <p className='text-center text-yellow-400 font-sans text-3xl font-extrabold tracking-[.25em] mb-2'>
                        Certificates</p>
                    <small>Swip left to see more ! </small>
                </div>
                <Swiper
                    style={{
                        "--swiper-navigation-color": "red",
                        "--swiper-pagination-color": "black",
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
            <section class="min-h-screen  w-full" id='contact'>
                <div class="container px-6 py-10 mx-auto lg:w-4/5">
                    <div class="lg:flex lg:items-center lg:-mx-10">
                        <div class="lg:w-1/2 lg:mx-10">
                            <div className='p-2'>
                                <p className='text-center text-yellow-400 font-sans text-3xl font-extrabold tracking-[.25em] mb-2'>
                                    Let’s talk</p>

                                <p class="mt-4 text-gray-500 dark:text-gray-200 text-center">
                                    Ask me everything and i would love
                                    to hear from you
                                </p>
                            </div>




                            <form className="px-8 pt-6 pb-8 mb-4 ">
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-white dark:text-white" for="firstName">
                                            Full Name
                                        </label>
                                        <input
                                            className="bg-slate-700 w-full px-3 py-2 text-sm leading-tight text-white   border rounded input-accent shadow appearance-none focus:outline-none focus:shadow-outline dark:input input-bordered dark:input-accent dark:w-full dark:max-w-xs dark:text-white"
                                            type="text"
                                            placeholder="Type Here..."
                                        />
                                    </div>
                                    <div className="md:ml-2">
                                        <label className=" block mb-2 text-sm font-bold text-white dark:text-white" for="lastName">
                                            Email
                                        </label>
                                        <input
                                            className="bg-slate-700 w-full px-3 py-2 text-sm leading-tight input-accent text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:input input-bordered dark:input-accent dark:w-full dark:max-w-xs dark:text-white"
                                            type="text"
                                            placeholder="shaikat@gmail.com"
                                        />
                                    </div>
                                </div>

                                <div className='mb-4'>
                                    <label className="block mb-2 text-sm font-bold text-white dark:text-white" for="email">
                                        Message
                                    </label>

                                    <textarea className="bg-slate-700 w-full text-white textarea border-accent" placeholder="Enter message"></textarea>
                                </div>
                                <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    <FontAwesomeIcon className='text-yellow-500 fa-2x' icon={faPaperPlane} />
                                </button>
                            </form>
                        </div>

                        <div class="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
                            <img class="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96" src="images/shaikat.png" alt="" />

                            <div class="mt-6 space-y-8 md:mt-8">
                                <p class="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                    <span class="mx-2 text-white truncate w-72">
                                        Rangpur,Bangladesh
                                    </span>
                                </p>


                                <p class="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>

                                    <span class="mx-2 text-white truncate w-72">cse.200101057@gmail.com</span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <a href="#" className="float animate-bounce">
                {/* <i class="fa fa-plus my-float"></i> */}
                <FontAwesomeIcon icon={faArrowUp} className="fa-2x text-white p-2" />
            </a>       

        </div>
    );
};

export default Home;