import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../Components/Navbar';
import Slideshow from '../Components/Slideshow';
import '../Stylesheets/About.css'

const variants = {
  init: {
    opacity: 0
  },

  anim: {
    opacity: 1,
    transition: {duration: '1', delay:'1'},
  },

  picAnim: {
    opacity: 1,
    transition: {ease: 'easeIn', duration: '1'},
  },

  titleInit: {
    opacity: 0,
    x:-100
  },

  titleAnim: {
    opacity: 1,
    x: 0,
    transition:{duration: '1'},
  },

  exit: {
    opacity: 0,
    transition:{duration: '0.5'},
  }
};

const About = () => {
  const[buttonText, setButtonText] = useState('Stop')
  const[isPlaying, setIsPlaying] = useState(true)

  const updateSlides = ((event) => {
    event.preventDefault();
    isPlaying === true ? setButtonText('Play') : setButtonText('Stop');
    setIsPlaying(!isPlaying);
  })

  return (
    <div className='aboutContainer'>
      <Navbar/>
      <div className='contentContainer'>
        <motion.div className='slides' initial={'init'} animate={'picAnim'} exit={'exit'} variants={variants}>
          <Slideshow slideName={'About'} autoPlay={isPlaying} initial={'init'} animate={'picAnim'} exit={'exit'} variants={variants}/>
          <div className='buttonContainer'>
            <button className='slideButtons' onClick={updateSlides}>{buttonText}</button>
          </div>
        </motion.div>

        <div className='info'>
          <div className='textCol'>
            <motion.h3 className='textHeader' initial={'titleInit'} animate={'titleAnim'} exit={'exit'} variants={variants}>Who Am I?</motion.h3>
            <motion.p initial={'init'} animate={'anim'} exit={'exit'} variants={variants}>I'm a junior software developer from Vancouver, BC. I attended the British Columbia Institute of Technology where I recieved my Bachelor's Degree in Computer Systems after studying software development, web design, software engineering and advanced algorithms.</motion.p>
            <motion.p initial={'init'} animate={'anim'} exit={'exit'} variants={variants}>I have a passion for creating software and love to learn about new technologies and programming languages. I'm always working towards a goal. Whether that's adding a new skill to my toolbox or developing an interesting project, there's always something going on.</motion.p>
          </div>

          <div className='skillCol'>
            <motion.h3 className='skillHeader' initial={'titleInit'} animate={'titleAnim'} exit={'exit'} variants={variants}>What Can I Do?</motion.h3>
              <motion.div className='listContainer' initial={'init'} animate={'anim'} exit={'exit'} variants={variants}>
                <ul>
                  <li>Java</li>
                  <li>Python</li>
                  <li>C#</li>
                  <li>C++</li>
                  <li>HTML</li>
                  <li>NodeJS</li>
                  <li>React</li>
                  <li>SQL</li>
                  <li>AWS</li>
                </ul>

                <ul>
                  <li>Object Oriented Programming</li>
                  <li>Agile Development Methodology</li>
                  <li>Entity Component System</li>
                  <li>Machine Learning</li>
                  <li>Cloud Computing</li>
                  <li>API Integration</li>                      
                  <li>Data Structures</li>
                  <li>Algorithms</li>
                  <li>Gitflow</li>
                </ul>
              </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;