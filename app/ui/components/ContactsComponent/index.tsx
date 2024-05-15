import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageIcon, PhoneIcon, TriangleWaves } from '@/public'
import SocialLinks from '@/app/lib/components/SocialLinks'
import './styles.scss'
import { animation } from '@/app/lib/animations'

const ContactsComponent = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="contacts" 
      id='contacts'
    >
      <div className="contacts-wrapper">
        <motion.div custom={1} variants={animation} className="contacts-title">Contact us</motion.div>
        <div className="contacts-content">
          <motion.div custom={2} variants={animation} className="contacts-info">
            <div className="contacts-communications">
              <div className="contacts-communication">
                <Image src={PhoneIcon} width={18} height={18} alt='phone icon' />
                <div className="contacts-communication__text">MD@namatgt.com</div>
              </div>
              <div className="contacts-communication">
                <Image src={MessageIcon} width={18} height={18} alt='message icon' />
                <div className="contacts-communication__text">+996 772 545 556</div>
              </div>
            </div>
            <div className="contacts-text">IFZA Property FZCO, Dubai Silicon Oasis, DDP, Building A1, Dubai, United Arab Emirates</div>
            <SocialLinks />
          </motion.div>
          <motion.form custom={2} variants={animation} className="contacts-form">
            <div className="contacts-fields">
              <input className="contacts-input" placeholder="Your name" />
              <input className="contacts-input" placeholder="Email" />
              <input className="contacts-input" placeholder="Message" />
            </div>
            <button className="contacts-button">Send message</button>
          </motion.form>
        </div>
        <Image className="contacts__right-waves" src={TriangleWaves} width={609} height={104} alt='right waves' />
        <Image className="contacts__left-waves" src={TriangleWaves} width={609} height={104} alt='left waves' />
      </div>
    </motion.section>
  )
}

export default ContactsComponent