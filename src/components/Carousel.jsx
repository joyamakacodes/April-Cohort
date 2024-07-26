import React from 'react';
import { CarouselData } from '../data/CarouselData';
import { useState, useEffect } from 'react';
import { PrimaryButton, SecButton } from './Button';
const Carousel = () => {
  const [carousel, setCarousel] = useState(0)
  
useEffect(()=>{
const interval= setInterval(()=>{
  console.log('Interval called')
  setCarousel(prev=> (prev + 1) % CarouselData.length)
},2000)
return (()=>clearInterval(interval))
}, [])
const HandleClick=(e)=>{
  e.preventDefault()
  console.log('clickkkkedddd')
}
const HandleClick2=(e)=>{
  e.preventDefault()
  console.log('clickkkkedddd the sec')
}
  return (
    <div>
      <img src={CarouselData[carousel].image} alt={CarouselData[carousel].desc} />
      <h2>{CarouselData[carousel].title}</h2>
      <p>{CarouselData[carousel].desc}</p>
      <PrimaryButton click={HandleClick}>Click</PrimaryButton>
      <SecButton click={HandleClick2}>This is Sec</SecButton>
    </div>
  );
}

export default Carousel;
