import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { partners } from '@/app/constants'
import { SpecialCircle } from '@/public'
import './styles.scss'
import { verticalAnimation } from '@/app/lib/animations'

const PartnersComponent = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="partners" 
      id='partners'
    >
      <div className="partners-wrapper">
        <div className="partners-info">
          <motion.div custom={1} variants={verticalAnimation} className="partners-info__title">50+ partners</motion.div>
          <motion.div custom={2} variants={verticalAnimation} className="partners-info__text">We specialize in innovative solutions, adapting them to the needs of each market.</motion.div>
        </div>
        <div className="partners-icons">
          {partners.map((partner, index) => (
            <motion.div custom={(index + 1) / 4} variants={verticalAnimation} key={index} className="partners-icons__item">
              <Image src={partner} width={100} height={36} alt='partner icon' />
            </motion.div>
          ))}
        </div>
      </div>
      <Image src={SpecialCircle} width={400} height={400} alt='special circle icon' className="left-special-circle" />
      <Image src={SpecialCircle} width={400} height={400} alt='special circle icon' className="right-special-circle" />
    </motion.section>
  )
}

export default PartnersComponent