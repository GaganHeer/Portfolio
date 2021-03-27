import React, { useState, useEffect } from 'react';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';
import '../Stylesheets/Slideshow.css'
import jpb1 from '../Images/JackPotBot/jpb1.png'
import jpb2 from '../Images/JackPotBot/jpb2.png'
import rr1 from '../Images/RockRyder/rr1.png'
import rr2 from '../Images/RockRyder/rr2.png'
import rr3 from '../Images/RockRyder/rr3.png'
import rr4 from '../Images/RockRyder/rr4.png'
import ta1 from '../Images/TaskAsk/ta1.jpg'
import ta2 from '../Images/TaskAsk/ta2.jpg'
import be1 from '../Images/BonesEngine/be1.png'
import be2 from '../Images/BonesEngine/be2.png'
import js1 from '../Images/JavaShark/js1.png'
import js2 from '../Images/JavaShark/js2.png'
import prfl1 from '../Images/Portfolio/prfl1.png'
import prfl2 from '../Images/Portfolio/prfl2.png'
import js3 from '../Images/JavaShark/js3.png'
import gh1 from '../Images/General/gh1.jpg'
import gh2 from '../Images/General/gh2.jpg'
import gh3 from '../Images/General/gh3.jpg'

const jpbSlides = [
  {image: jpb1},
  {image: jpb2}
];

const rrSlides = [
  {image: rr1},
  {image: rr2},
  {image: rr3},
  {image: rr4}
];

const taSlides = [
  {image: ta1},
  {image: ta2}
];

const beSlides = [
  {image: be1},
  {image: be2}
];

const jsSlides = [
  {image: js1},
  {image: js2},
  {image: js3}
];

const prflSlides = [
  {image: prfl1},
  {image: prfl2}
];

const aboutSlides = [
  {image: gh1},
  {image: gh2},
  {image: gh3}
];

const Slideshow = ({ slideName, autoPlay }) => {

  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(0);
  const [slideInfo, setSlideInfo] = useState([{}]);

  useEffect(() => {
    if (slideName === 'JackPotBot'){
      setSlideInfo(jpbSlides);
    }else if(slideName === 'Rock Ryder'){
      setSlideInfo(rrSlides);
    }else if(slideName === 'TaskAsk'){
      setSlideInfo(taSlides);
    }else if(slideName === 'Bones Engine'){
      setSlideInfo(beSlides);
    }else if(slideName === 'JavaShark'){
      setSlideInfo(jsSlides);
    }else if(slideName === 'Portfolio'){
      setSlideInfo(prflSlides);
    }else if(slideName === 'About'){
      setSlideInfo(aboutSlides);
    }
    setLength(slideInfo.length);
  }, [slideInfo.length, slideName])

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    if(autoPlay){
      const interval = setInterval(() => {
        nextSlide();
      },5000);

      return() => clearInterval(interval);
    }
  })

  if (!Array.isArray(slideInfo) || length <= 0) {
    return null;
  }

  return (
    <div className='slideContainer'>
      {slideName !== 'About' &&
      <IoIosArrowDropleftCircle className='leftArrow' onClick={prevSlide} />}
      {slideName !== 'About' &&
      <IoIosArrowDroprightCircle className='rightArrow' onClick={nextSlide} />}
      {slideInfo.map((slide, index) => {
        return (
          <div className={index === current ? 'active' : 'hidden'} key={index}>
            {index === current && (<img src={slide.image} alt='project' className={slideName === 'About' ? 'aboutImg' : 'projectImg'} />)}
          </div>
        );
      })}
    </div>
  );
};

export default Slideshow;