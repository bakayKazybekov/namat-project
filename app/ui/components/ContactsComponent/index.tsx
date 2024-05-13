import React from 'react'
import Image from 'next/image'
import { MessageIcon, PhoneIcon, TriangleWaves } from '@/public'
import SocialLinks from '@/app/lib/components/SocialLinks'
import './styles.scss'

const ContactsComponent = () => {
  return (
    <section className="contacts">
      <div className="contacts-wrapper">
        <div className="contacts-title">Contact us</div>
        <div className="contacts-content">
          <div className="contacts-info">
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
          </div>
          <form className="contacts-form">
            <div className="contacts-fields">
              <input className="contacts-input" placeholder="Your name" />
              <input className="contacts-input" placeholder="Email" />
              <input className="contacts-input" placeholder="Message" />
            </div>
            <button className="contacts-button">Send message</button>
          </form>
        </div>
        <Image className="contacts__right-waves" src={TriangleWaves} width={609} height={104} alt='right waves' />
        <Image className="contacts__left-waves" src={TriangleWaves} width={609} height={104} alt='left waves' />
      </div>
    </section>
  )
}

export default ContactsComponent