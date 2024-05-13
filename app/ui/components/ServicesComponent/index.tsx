"use client"
import React, { FC, useState } from 'react'
import Image from 'next/image';
import Slider from 'react-slick';
import { slides } from '@/app/constants';
import { CheckCircle, SliderLeft, SliderRight } from '@/public';
import './styles.scss'
import { sliderSettings } from '@/app/types';

type Props = {
  next: () => void;
  prev: () => void;
  settings: sliderSettings;
  setSliderRef: (state: Slider) => void;
}

const ServicesComponent: FC<Props> = ({ next, prev, settings, setSliderRef }) => {

  return (
    <section className="services">
      <div className="services-header">
        <div className="services-title">
          <span>Our Services</span>
          <div className="services-subtitle">In our company, there are four main directions.</div>
        </div>
        <div className="services__slider-buttons">
          <button onClick={prev} className="services-button">
            <Image src={SliderLeft} width={48} height={48} alt='slider left button' />
          </button>
          <button onClick={next} className="services-button">
            <Image src={SliderRight} width={48} height={48} alt='slider right button' />
          </button>
        </div>
      </div>
      <div className="services-slider">
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
                  <div className="services-slide__title">{slide.title}</div>
                  <div className="services-slide__descriptions">
                    {slide.descriptions.map((description) => (
                      <div key={description} className="services-slide__description">{description}</div>
                    ))}
                    <div className="services-slide__guarantees">
                      {slide.guarantees.map((guarantee) => (
                        <div key={guarantee} className="services-slide__guarantee">
                          <Image src={CheckCircle} width={18} height={18} alt='check circle' />
                          <div className="guarantee-text">{guarantee}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default ServicesComponent;