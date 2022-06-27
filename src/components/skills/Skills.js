import React from 'react';
import { Link } from 'react-router-dom';
const Skills = () => {
    return (
        <>
            {/* Skills */}
            <div className="skills w-full mt-20 mb-10">
                <p className='text-center font-sans text-3xl font-extrabold tracking-[.25em]'>Skills</p>
                <div className="skill-section flex w-4/6 ml-14 mt-10 xl:ml-56">
                        <div className='font-serif m-auto bg-orange-500 p-2'>
                            <button><Link to="/frontend">FrontEnd</Link></button>
                        </div>
                        <div className='font-serif m-auto bg-orange-500 p-2'>
                            <button><Link to="/backend">BackEnd</Link></button>
                        </div>
                        <div className='font-serif m-auto bg-orange-500 p-2'>
                            <button><Link to="/database">Database</Link></button>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Skills;