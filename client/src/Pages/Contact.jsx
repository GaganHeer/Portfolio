import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../Components/Navbar';
import '../Stylesheets/Contact.css'

const variants = {
  labelInit: {
    opacity: 0,
  },
  
  inputInit: {
    opacity: 0,
    rotate: 90,
    x: -216,
    y: 216,
  },

  textboxInit: {
    opacity: 0,
    y: 40,
  },

  nameLabelAnim:{
    opacity: 1,
    transition: {duration: '0.5'},
  },

  nameInputAnim: {
    opacity: 1,
    rotate: 0,
    x: 0,
    y: 0,
    transition: {duration: '0.5'},
  },

  emailLabelAnim:{
    opacity: 1,
    transition: {duration: '0.5', delay: '0.5'},
  },

  emailInputAnim: {
    opacity: 1,
    rotate: 0,
    x: 0,
    y: 0,
    transition: {duration: '0.5', delay: '0.5'},
  },

  textboxLabelAnim:{
    opacity: 1,
    transition: {duration: '0.5', delay: '1'},
  },

  textboxAnim: {
    opacity: 1,
    rotate: 0,
    x: 0,
    y: 0,
    transition: {duration: '0.5', delay: '1'},
  },

  btnAnim:{
    opacity: 1,
    transition: {duration: '0.5', delay: '1.5'},
  },

  exit: {
    opacity: 0,
    transition:{duration: '0.5'},
  }
}

const Contact = () => {

  const handleSubmit = async (formEvent) => {
    formEvent.preventDefault();
    const { name, email, message } = formEvent.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch('http://www.gaganheer.com:2929/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className='contactContainer'>
      <Navbar/>
      <motion.div className='contactMain'>
        <form onSubmit={handleSubmit}>
          <motion.label initial={'labelInit'} animate={'nameLabelAnim'} exit={'exit'} variants={variants} htmlFor='name'>Name </motion.label>
          <motion.input initial={'inputInit'} animate={'nameInputAnim'} exit={'exit'} variants={variants} type='text' id='name' placeholder='Enter your name' required />

          <motion.label initial={'labelInit'} animate={'emailLabelAnim'} exit={'exit'} variants={variants} htmlFor='email'>Email </motion.label>
          <motion.input initial={'inputInit'} animate={'emailInputAnim'} exit={'exit'} variants={variants} type='email' id='email' placeholder='Enter your email' required />

          <motion.label initial={'labelInit'} animate={'textboxLabelAnim'} exit={'exit'} variants={variants} htmlFor='message'>Message </motion.label>
          <motion.textarea initial={'textboxInit'} animate={'textboxAnim'} exit={'exit'} variants={variants} id='message' placeholder='Enter your message' required />
          
          <motion.div initial={'labelInit'} animate={'btnAnim'} exit={'exit'} variants={variants} className='sendBtn'><input type='submit' value="Send"/></motion.div>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;