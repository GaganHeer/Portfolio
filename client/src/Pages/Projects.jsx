import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../Components/Navbar';
import '../Stylesheets/Projects.css'
import ProjTable from '../Components/ProjTable';

const variants = {
  init: {
    y: 50,
    opacity: 0
  },

  anim: {
    opacity: 1,
    y: 0,
    transition: {duration: '0.5', delay: '0.5'},
  },

  exit: {
    opacity: 0,
    transition:{duration: '0.5'},
  }
}

const Projects = () => {
  const [projInfo, setProjInfo] = useState([{
    name: '',
    description: '',
    githubLink: '',
    otherLink: undefined,
    tech: []
  }]);

  useEffect(() => {
    fetch('/projects').then(res =>{
      if(res.ok){
        return res.json();
      }
    }).then(jsonRes => setProjInfo(jsonRes));
  }, [setProjInfo])

  return (
    <div className='projectsContainer'>
      <Navbar/>
      <motion.div className='projectsMain' initial={'init'} animate={'anim'} exit={'exit'} variants={variants}>
        <div className='projInfo'>
          <ProjTable tableInfo={projInfo}/>
        </div>
      </motion.div>        
    </div>
  )
}

export default Projects;