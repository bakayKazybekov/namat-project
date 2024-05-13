import React from 'react'
import Image from 'next/image'
import { AboutUsIcon, BlueLine, SpecialCircle } from '@/public'
import './styles.scss'

const AboutUsComponent = () => {
  return (
    <section className="about-us">
      <div className="general-info">
        <div className="general-info__content">
          <div className="general-info__title">NAMAT Global Trade</div>
          <div className="general-info__text">collaborate with leading manufacturers to provide our clients with the best innovative solutions that contribute to expanding their businesses</div>
        </div>
        <Image src={BlueLine} alt='blue line' className="about-us_blue-line" />
      </div>
      <ul className="detailed-info">
        <li className="detailed-info__item">
          <div className="detailed-info__item-number">01</div>
          <div className="detailed-info__item-text">We prioritize close collaboration with our suppliers. We become their trusted representatives, advisors, ready to solve any problems together or utilize new technologies and opportunities.</div>
        </li>
        <li className="detailed-info__item">
          <div className="detailed-info__item-number">02</div>
          <div className="detailed-info__item-text">We combine expert technical and market knowledge with a progressive partner support program. By closely collaborating with our dealers, we aim to ensure their dynamic growth and development, achieving results together.</div>
        </li>
        <li className="detailed-info__item">
          <div className="detailed-info__item-number">03</div>
          <div className="detailed-info__item-text">Working on projects worldwide, we tailor solutions to the specifics of each market.</div>
        </li>
      </ul>
      <Image src={SpecialCircle} alt='special circle icon' className="special-circle" />
      <Image src={AboutUsIcon} alt='about us icon' className="about-us-icon" />
    </section>
  )
}

export default AboutUsComponent