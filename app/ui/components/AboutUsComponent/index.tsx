import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { AboutUsIcon, BlueLine, SpecialCircle } from '@/public'
import './styles.scss'
import { detailedItemText } from '@/app/constants';
import { animation } from '@/app/lib/animations';

const AboutUsComponent = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      className="about-us" 
      id='about-us'
    >
      <div className="general-info">
        <div className="general-info__content">
          <motion.div custom={1} variants={animation} className="general-info__title">NAMAT Global Trade</motion.div>
          <motion.div custom={2} variants={animation} className="general-info__text">collaborate with leading manufacturers to provide our clients with the best innovative solutions that contribute to expanding their businesses</motion.div>
        </div>
        <Image src={BlueLine} alt='blue line' className="about-us_blue-line" />
      </div>
      <ul className="detailed-info">
        {detailedItemText.map((text, index) => (
          <motion.li custom={index + 1} variants={animation} key={index} className="detailed-info__item">
            <div className="detailed-info__item-number">0{index + 1}</div>
            <div className="detailed-info__item-text">{text}</div>
          </motion.li>
        ))}
      </ul>
      <Image src={SpecialCircle} alt='special circle icon' className="special-circle" />
      <Image src={AboutUsIcon} alt='about us icon' className="about-us-icon" />
    </motion.section>
  )
}

export default AboutUsComponent