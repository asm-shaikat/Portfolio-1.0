import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './skills.css'
import Navbar from '../navbar/Navbar';
const Skills = () => {
    return (
        <>
            <Navbar></Navbar>
                <div className="text-center skill-title border-2 border-purple-800 w-4/5 rounded-md ml-10 mb-5 mt-5 lg:ml-28">
                    <p>SKILLS</p>
                </div>
            <div className="skill-section ml-8 lg:flex lg:ml-96">
                <div className="fend-bend flex mt-10 space-x-6">
                    <div className="fend skill-container">
                        <Fade left>
                            <p className='text-black font-semibold'>Front End</p>
                        </Fade>
                        <Zoom left cascade>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </Zoom>
                    </div>
                    <div className="bend skill-container">
                        <Fade left>
                            <p className='text-black font-semibold'>Back End & Database</p>
                        </Fade>
                        <Zoom left cascade>
                            <ul>
                                <li>PHP</li>
                                <li>Laravel</li>
                                <li>MySQL</li>
                                <li>API</li>
                            </ul>
                        </Zoom>
                    </div>
                </div>
                <div className="othhers-and-os flex mt-10 space-x-6 lg:ml-4">
                    <div className="others-skill skill-container">
                        <Fade left>
                            <p className='text-black font-semibold'>Others Skill</p>
                        </Fade>
                        <Zoom left cascade>
                            <ul>
                                <li>UI Design</li>
                                <li>Adobe Illustator</li>
                                <li>Digital Marketing</li>
                            </ul>
                        </Zoom>
                    </div>

                    <div className="Operating-system skill-container">
                        <Fade left>
                            <p className='text-black font-semibold'>Operating System</p>
                        </Fade>
                        <Zoom left cascade>
                            <ul>
                                <li>Ubuntu</li>
                                <li>Windows</li>
                            </ul>
                        </Zoom>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Skills;