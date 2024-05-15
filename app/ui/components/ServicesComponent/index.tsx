"use client"
import React, { FC, useState } from 'react'
import Image from 'next/image';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { SliderLeft, SliderRight } from '@/public';
import { SliderSettings } from '@/app/types';
import CustomSlider from '@/app/lib/components/Slider';
import './styles.scss'
import { animation } from '@/app/lib/animations';

type Props = {
  next: () => void;
  prev: () => void;
  settings: SliderSettings;
  setSliderRef: (state: Slider) => void;
}

const ServicesComponent: FC<Props> = ({ next, prev, settings, setSliderRef }) => {

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="services" 
      id='services'
    >
      <div className="services-header">
        <div className="services-title">
          <motion.span custom={1} variants={animation}>Our Services</motion.span>
          <motion.div custom={2} variants={animation} className="services-subtitle">In our company, there are four main directions.</motion.div>
        </div>
        <motion.div custom={1} variants={animation} className="services__slider-buttons">
          <button onClick={prev} className="services-button">
            <Image src={SliderLeft} width={48} height={48} alt='slider left button' />
          </button>
          <button onClick={next} className="services-button">
            <Image src={SliderRight} width={48} height={48} alt='slider right button' />
          </button>
        </motion.div>
      </div>
      <CustomSlider settings={settings} setSliderRef={setSliderRef} />
    </motion.section>
  )
}

export default ServicesComponent;