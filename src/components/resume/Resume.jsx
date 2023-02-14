import React from 'react';
import Unav from '../unavbar/Unavbar.js';
const Resume = () => {
    return (
        <>
        <Unav></Unav>
        <div className='flex justify-center content-center mt-20'>
            <div className='border border-yellow-500 rounded-sm shadow-lg py-10 px-10 w-4/5 mt-10 mb-10'>
            <header className='text-white'>
                <p className='text-center text-2xl'>Abu Shadat Shaikat</p>
                <p className='text-sm text-center'>Rangpur, Bangladesh | https://shaikat.netlify.app/ | 01773433173</p>
                <p className='text-sm  text-center'>asmshaikat1952@gmail.com</p>
            </header>
            
            <main className='text-white mt-10'>
                <project className="">
                    <p className='mt-4 box-border h-8 w-full  text-left rounded border-b-2 text-xl text-yellow-400'>Projects</p>
                    <div className='pt-2'>
                        <div className='flex'><input type="radio" name="radio-5" className="mr-2 radio radio-success" checked /><p className='text-cyan-300'>BAUST EMS CONNECT (Team Project)</p></div>
                        <div className='ml-8'>
                            <p className='font-extralight'>Team Leader</p>  
                            <p>Having multiple user profile following MVC pattern is an education management system.</p>
                            <p>Tools & Language: Laravel (PHP FRAMEWORK), MySQL, JavaScript, TailwindCSS, CSS, HTML</p>
                            <p>GitHub Link: <a href='https://github.com/asm-shaikat/baust-ems-lite'>Github</a></p>
                        </div>
                    </div>

                    <div className=' pt-2'>
                        <div className='flex'><input type="radio" name="radio-5" className="mr-2 radio radio-success" checked /><p className='text-cyan-300'>E-commerce Web Application (Team Project)</p></div>
                        <div className='ml-8'>
                            <p className='font-extralight'>Team Leader</p>  
                            <p>Admin & user have separated profile. Admin can add, edit, update or delete product. Purchase product option will available by login as a user.</p>
                            <p>Tools & Language: Laravel (PHP FRAMEWORK), MySQL, JavaScript, Bootstrap, CSS, HTML</p>
                            <p>GitHub Link: <a href='https://github.com/asm-shaikat/EcommerceApp'>Github</a></p>
                        </div>
                    </div>

                    <div className=' pt-2'>
                        <div className='flex'><input type="radio" name="radio-5" className="mr-2 radio radio-success" checked /><p className='text-cyan-300'>Dynamic Portfolio</p></div>
                        <div className='ml-8'>
                            <p>Admin can dynamically change his/her skill and project by authentication.</p>
                            <p>Tool & Language: Laravel (PHP FRAMEWORK), MySQL, JavaScript, Bootstrap, CSS, HTML</p>
                            <p>GitHub Link: <a href='https://github.com/asm-shaikat/MyDynamicPortfolio'>Github</a></p>
                        </div>
                    </div>

                    <div className=' pt-2'>
                        <div className='flex'><input type="radio" name="radio-5" className="mr-2 radio radio-success" checked /><p className='text-cyan-300'>Static Portfolio</p></div>
                        <div className='ml-8'>
                            <p>All of my latest projects live links, GitHub links are available here.</p>
                            <p>Tools & Language: React, JavaScript, TailwindCSS, CSS, HTML</p>
                            <p>GitHub Link: <a href='https://github.com/asm-shaikat/Portfolio-1.0'>Github</a></p>
                            <a href='https://shaikat.netlify.app/'>Live Link</a>
                        </div>
                    </div>

                    <div className=' pt-2'>
                        <div className='flex'><input type="radio" name="radio-5" className="mr-2 radio radio-success" checked /><p className='text-cyan-300'>Hospital Management System (Team Project)</p></div>
                        <div className='ml-8'>
                        <p className='font-extralight'>Team Leader</p>  

                            <p>Admin based application. Admin can admit patient, monitoring patient, release patient and scheduling doctor’s duty.</p>
                            <p>Tools & Language: PHP, MySQL, JavaScript, CSS, HTML</p>
                            <p>GitHub Link: <a href='https://github.com/asm-shaikat/Hospital-Management-System'>Github</a></p>
                        </div>
                    </div>

                </project>

                <skill>
                     <p className='mt-4 box-border h-8 w-full  text-left rounded border-b-2 text-xl text-yellow-400'>SKILLS & INTERESTS</p>
                     <div className='flex text-sm lg:text-base'>
                        <p className='font-bold mr-2'>Programming Language:</p><p> C/C++, Python, JavaScript, PHP</p>
                     </div>
                     <div className='flex text-sm lg:text-base'>
                        <p className='font-bold mr-2'>Front End:</p><p> HTML, CSS, JavaScript, JQuery</p>
                     </div>
                     <div className='flex text-sm lg:text-base'>
                        <p className='font-bold mr-2'>Back End & Database:</p><p>PHP, MySQL</p>
                     </div>
                     <div className='flex text-sm lg:text-base'>
                        <p className='font-bold mr-2'>FRAMEWORKS, PLATFORMS & LIBRARIES:</p><p>Laravel, React, TailwindCSS, Bootstrap</p>
                     </div>

                     <div className='flex text-sm lg:text-base'>
                        <p className='font-bold mr-2'>Others:</p><p>Git & GitHub, Adobe Illustrator, Adobe XD</p>
                     </div>

                     <div className='flex text-sm lg:text-base'>
                        <p className='font-bold mr-2'>Operating System:</p><p>Linux (Ubuntu, Elementary OS), windows</p>
                     </div>

                     <div className='flex text-sm lg:text-base'>
                        <p className='font-bold mr-2'>Interests:</p><p>Web3.0, Machine learning, AI</p>
                     </div>
                      
                </skill>

                <eduacation>
                    <p className='mt-4 box-border h-8 w-full  text-left rounded border-b-2 text-xl text-yellow-400'>Education</p>
                    <div>
                        <div className='grid grid-cols-2'>
                            <p>University</p><p>Saidpur, Nilphamary</p>
                            <p className='font-extralight'>Computer Science & Engineering/Degree</p>
                        </div>
                            <p>Bangladesh Army University of Science and Technology (BAUST), Saidpur</p>
                    </div>
                    <div className='mt-2'>
                        <div className='grid grid-cols-2'>
                            <p>College</p><p>Nilphamary</p>
                            <p className='font-extralight'>Group-Science</p>
                        </div>
                            <p>Collectorate Public School & College, Nilphamary</p>
                    </div>

                    <div className='mt-2'>
                        <div className='grid grid-cols-2'>
                            <p>School</p><p>Nilphamary</p>
                            <p className='font-extralight'>Group-Science</p>
                        </div>
                            <p>Dimla RaniBrinda Rani Government School, Dimla, Nilphamary</p>
                    </div>
                </eduacation>

                <activities>
                    <p className='mt-4 box-border h-8 w-full  text-left rounded border-b-2 text-xl text-yellow-400'>Problem Solving</p>
                    <div className='flex'>
                        <p className='underline mr-2'><a href='https://www.beecrowd.com.br/judge/en/profile/417124'>Beecrowd</a></p>
                        <p className='underline mr-2'><a href='https://www.hackerrank.com/Shaikat?hr_r=1'>Hackerrank</a></p>
                        
                        <p className='underline mr-2'><a href='https://leetcode.com/Shaikat1952/'>Leetcode</a></p>

                    </div>
                </activities>

                <leadership>
                    <p className='mt-4 box-border h-8 w-full  text-left rounded border-b-2 text-xl text-yellow-400'>LEADERSHIP EXPERIENCE</p>
                    <p>Treasurer at BAUST CSE SOCIETY</p>
                    <p>General Secretary at Work for Children</p>
                    <p>Campus Ambassador at ICT OLYMPIAD BANGLADESH</p>
                </leadership>
            </main>

            <button className='btn-accent'><a href='https://drive.google.com/file/d/1fUM1A_5rc-dczQoCeRPcdnTWudAcJX05/view?usp=share_link'>Download Resume</a></button>
            </div>
        </div>
       </>
    );
};

export default Resume;