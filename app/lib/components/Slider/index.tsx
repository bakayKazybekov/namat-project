import React, { FC } from 'react'
import Image from 'next/image';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { slides } from '@/app/constants';
import { SliderSettings } from '@/app/types';
import { CheckCircle } from '@/public';
import { verticalAnimation } from '../../animations';

type Props = {
  settings: SliderSettings;
  setSliderRef: (state: Slider) => void;
}

const CustomSlider: FC<Props> = ({ settings, setSliderRef }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="services-slider"
    >
      <Slider
        ref={slider => {
          if (slider) {
            setSliderRef(slider);
          }
        }}
        {...settings}
      >
        {slides.map((slide) => (
          <div key={slide.title} className="services-slide__wrapper">
            <div className="services-slide" key={slide.title}>
              <Image src={slide.picture} alt='slide picture' className="services-slide-picture" />
              <div className="services-slide__info">
                <motion.div custom={1} variants={verticalAnimation} className="services-slide__title">{slide.title}</motion.div>
                <motion.div custom={2} variants={verticalAnimation} className="services-slide__descriptions">
                  {slide.descriptions.map((description) => (
                    <div key={description} className="services-slide__description">{description}</div>
                  ))}
                </motion.div>
                <motion.div custom={3} variants={verticalAnimation} className="services-slide__guarantees">
                  {slide.guarantees.map((guarantee) => (
                    <div key={guarantee} className="services-slide__guarantee">
                      <Image src={CheckCircle} width={18} height={18} alt='check circle' />
                      <div className="guarantee-text">{guarantee}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </motion.div>
  )
}

export default CustomSlider