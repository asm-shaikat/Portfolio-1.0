import React from 'react';
import Pulse from 'react-reveal/Pulse';
import './skills.css';
import '../navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact,faHtml5,faCss3,faJs,faPython,faPhp,faLaravel,faUbuntu,faLinux,faWindows } from '@fortawesome/free-brands-svg-icons' 
import Navbar from '../navbar/Navbar';

const Skills = () => {
    return (
        <div className='bg-gray-900'>
            <Navbar></Navbar>
                <div className="text-center skill-title border-2 border-purple-800 w-4/5 rounded-md ml-10 mb-5 mt-5 lg:ml-28">
                    <p className='text-white'>SKILLS</p>
                </div>
           <div className='p-4'><p className='text-white ml-10  border-b-2 w-20 border-cyan-300 lg:text-2xl'>Frontend</p></div>
             <div className='w-full'>
                <div className='grid grid-cols-3 grid-row-3 lg:grid-row-2  lg:grid-cols-4  w-4/5 lg:w-3/5 ml-10 lg:ml-52'>
                    <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-yellow-500 fa-5x' icon={faJs} /><p className='text-white'>JavaScript</p></div>
                    <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-cyan-600  fa-5x' icon={faReact} /><p className='text-white'>React</p></div>
                    <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><img className='w-14 ml-4 pb-6  lg:pb-6 lg:ml-20' src="skill-img/tailwind.png" alt="" /><p className='text-white'>Tailwind</p></div>
                    <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><img className='lg:ml-16 ml-2 pb-4 w-20' src="skill-img/bootstrap.png" alt="" /><p className='text-white'>BootStrap</p></div>
                    <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-blue-600  fa-5x' icon={faCss3} /><p className='text-white'>CSS</p></div>
                    <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-green-600  fa-5x' icon={faHtml5} /><p className='text-white'>HTML</p></div>
                </div>
            </div>
            

            <div className='p-4'><p className='text-white ml-10  border-b-2 w-20 border-cyan-300 lg:text-2xl'>Backend</p></div>
            <div className='w-full '>
                <div className='grid grid-cols-3 grid-row-3 lg:grid-row-2  lg:grid-cols-4  w-4/5 lg:w-3/5 ml-10 lg:ml-52'>
                    <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><img className='ml-6 lg:ml-20 w-42 pt-2 mb-6' src="skill-img/cpp.svg" alt="" /><p className='text-white'>CPP</p></div>
                    <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-green-600 fa-5x' icon={faPython} /><p className='text-white'>Python</p></div>
                    <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-blue-600  fa-5x' icon={faPhp} /><p className='text-white'>PHP</p></div>
                    <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-orange-600  fa-5x' icon={faLaravel} /><p className='text-white'>Laravel</p></div>
                    <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><img className='lg:ml-10 w-38 pt-2 mb-6' src="skill-img/mysql.svg" alt="" /><p className='text-white'>MySQL</p></div>
                </div>
            </div>

            <div className='p-4'><p className='text-white ml-10  border-b-2 w-10 border-cyan-300 lg:text-2xl'>OS</p></div>
            <div className='w-full'>
                <div className='grid grid-cols-3 grid-row-3 lg:grid-row-2  lg:grid-cols-4  w-4/5 lg:w-3/5 ml-10 pb-10 lg:ml-52'>
                    <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-orange-600 fa-5x' icon={faUbuntu} /><p className='text-white'>Ubuntu</p></div>
                    <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-white  fa-5x' icon={faLinux} /><p className='text-white'>elementary os</p></div>
                    <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-blue-400  fa-5x' icon={faWindows} /><p className='text-white'>Windows</p></div>
                </div>
            </div>
           </div>
    );
};

export default Skills;