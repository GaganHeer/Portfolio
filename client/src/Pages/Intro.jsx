import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import Typical from 'react-typical'
import { motion } from 'framer-motion'
import '../Stylesheets/Intro.css'
import Delayed from '../Components/Delayed.jsx'
import Navbar from '../Components/Navbar';

const variants = {
  navInit:{
    opacity: 0
  },

  taglineInit: {
    opacity: 0,
    y:70
  },

  turningAnim: {
    opacity: 1,
    y: 0,
    transition:{duration: '0.75', delay: '4.5'},
  },

  ideasAnim: {
    opacity: 1,
    y: 0,
    transition:{duration: '0.75', delay: '5'},
  },

  intoAnim: {
    opacity: 1,
    y: 0,
    transition:{duration: '0.75', delay: '5.5'},
  },

  realityAnim: {
    opacity: 1,
    y: 0,
    transition:{duration: '0.75', delay: '6'},
  },

  exitAnim:{
    opacity: 0,
    transition:{duration: '2', delay: '8'},
  },

  navAnim:{
    opacity: 1,
    transition:{duration: '1', delay: '10'},
  }

}
const Intro = (props) => {

  useEffect(() => {
    setTimeout(() => {
      props.history.push('/about')
    }, 11000)
  }, [props.history])

  return (
    <div className="introContainer">
      <motion.div initial={'navInit'} animate={'navAnim'} variants={variants}>
        <Navbar/>
      </motion.div>
      
      <motion.div className='colContainer' animate={'exitAnim'} variants={variants}>
        <div className='leftCol'>
          <div className='textBreakName'>
            <Typical className='name' steps={['🍁 Gagan', 50, '🍁 Gagan Heer']} wrapper='h1'/>
          </div>
        </div>

        <div className='rightCol'>
          <div className='textBreakTitle'>
            <Delayed delay={2000}>
              <Typical className='title' steps={['Software', 50, 'Software Developer 💻', 1500]} wrapper='h1'/>
            </Delayed>
          </div>
        </div>
      </motion.div>

      <motion.div className='taglineContainer' animate={'exitAnim'} variants={variants}>
        <motion.p className='taglineText' initial={'taglineInit'} animate={'turningAnim'} variants={variants}>Turning </motion.p>
        <motion.p className='ideasText' initial={'taglineInit'} animate={'ideasAnim'} variants={variants}>ideas</motion.p>
        <motion.p className='taglineText' initial={'taglineInit'} animate={'intoAnim'} variants={variants}> into </motion.p>
        <motion.p className='realityText' initial={'taglineInit'} animate={'realityAnim'} variants={variants}>REALITIES</motion.p>
      </motion.div>
      
    </div>
  );
}

export default withRouter(Intro)