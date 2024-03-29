import React from 'react';
import './skills.css';
import Unavbar from '../unavbar/Unavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact,faHtml5,faCss3,faJs,faPython,faPhp,faLaravel,faUbuntu,faLinux,faWindows } from '@fortawesome/free-brands-svg-icons' ;

const Skills = () => {
    window.addEventListener('scroll',reveal);
    function reveal() {
        var reveals = document.querySelectorAll('.reveal');
        for(var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;
            if(revealTop < windowHeight - revealpoint){
                reveals[i].classList.add('active');
            }
            else{
                reveals[i].classList.remove('active');
            }

        }
    }
    return (
        <div className='bg-gradient-to-r from-slate-700 to-slate-900'>
            <Unavbar></Unavbar>
                <div className="text-center skill-title border-2 border-purple-800 w-4/5 rounded-md ml-10 mb-5 mt-5 lg:ml-28">
                    <p className='text-white'>SKILLS</p>
                </div>
            <div>
                <div className='p-4'><p className='text-white ml-10  border-b-2 w-20 border-cyan-300 lg:text-2xl'>Frontend</p></div>
                <div className='w-full'>
                    <div className='grid grid-cols-3 grid-row-3 lg:grid-row-2  lg:grid-cols-4  w-4/5 lg:w-3/5 ml-10 lg:ml-52'>
                        <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-yellow-500 fa-5x' icon={faJs} /><p className='text-white'>JavaScript</p></div>
                        <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-cyan-600  fa-5x' icon={faReact} /><p className='text-white'>React</p></div>
                        <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><img className='w-14 ml-4 pb-6  lg:pb-6 lg:ml-20' src="skill-img/tailwind.png" alt="" /><p className='text-white'>Tailwind</p></div>
                        <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><img className='lg:ml-16  pb-4 w-20' src="skill-img/bootstrap.png" alt="" /><p className='text-white'>BootStrap</p></div>
                        <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-blue-600  fa-5x' icon={faCss3} /><p className='text-white'>CSS</p></div>
                        <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-green-600  fa-5x' icon={faHtml5} /><p className='text-white'>HTML</p></div>
                    </div>
                </div>
            </div>

            <div>
                <div className='p-4'><p className='text-white ml-10  border-b-2 w-20 border-cyan-300 lg:text-2xl'>Backend</p></div>
                <div className='w-full '>
                    <div className='grid grid-cols-3 grid-row-3 lg:grid-row-2  lg:grid-cols-4  w-4/5 lg:w-3/5 ml-10 lg:ml-52'>
                        <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><img className='ml-4 lg:ml-20 w-50 pt-2 mb-6' src="skill-img/cpp.svg" alt="" /><p className='text-white'>CPP</p></div>
                        <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-green-600 fa-5x' icon={faPython} /><p className='text-white'>Python</p></div>
                        <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='mt-4 text-blue-600  fa-3x lg:fa-5x' icon={faPhp} /><p className='mt-4 text-white'>PHP</p></div>
                        <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-orange-600  fa-5x' icon={faLaravel} /><p className='text-white'>Laravel</p></div>
                        <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><img className='lg:ml-10 w-38 pt-2 mb-6' src="skill-img/mysql.svg" alt="" /><p className='text-white'>MySQL</p></div>
                    </div>
                </div>
            </div>

            <div>
                <div className='p-4'><p className='text-white ml-10  border-b-2 w-10 border-cyan-300 lg:text-2xl'>OS</p></div>
                <div className='w-full'>
                    <div className='grid grid-cols-3 grid-row-3 lg:grid-row-2  lg:grid-cols-4  w-4/5 lg:w-3/5 ml-10 pb-10 lg:ml-52'>
                        <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-orange-600 fa-5x' icon={faUbuntu} /><p className='text-white'>Ubuntu</p></div>
                        <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-white  fa-5x' icon={faLinux} /><p className='text-white'>elementary os</p></div>
                        <div className='bg-slate-800 text-center p-2 border  border-yellow-700'><FontAwesomeIcon className='text-blue-400  fa-5x' icon={faWindows} /><p className='text-white'>Windows</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;