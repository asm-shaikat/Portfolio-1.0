import React, { useState } from 'react';
import Unavbar from '../unavbar/Unavbar';
import projectdata from '../data/projectdata';
import Projectcontiainer from './Projectcontiainer';
import Catagory from '../catagory/Catagory';
const allcatagory = ['All',...new Set(projectdata.map((dta) => dta.type))];
const Projects = () => {
    const [projectdetails,setprojectdetails] = useState(projectdata);
    const [catagory,setcatagory] = useState(allcatagory);
    const filterbtn=(catagory)=>{
        if(catagory==='All'){
            setprojectdetails(projectdata);
            return;
        }
        else{
            const newProjectdetails = projectdata.filter((items)=>items.type===catagory);
            setprojectdetails(newProjectdetails);
        }
    }
    return (
            <>
                <Unavbar></Unavbar>
                <Catagory catagory={catagory} filterbtn={filterbtn}></Catagory>
                {
                    projectdetails.map(data =><Projectcontiainer data={data}></Projectcontiainer>)
                }
            </>
    );
};

export default Projects;