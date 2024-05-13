import React from 'react'
import Image from 'next/image'
import { partners } from '@/app/constants'
import { SpecialCircle } from '@/public'
import './styles.scss'

const PartnersComponent = () => {
  return (
    <section className="partners">
      <div className="partners-info">
        <div className="partners-info__title">50+ partners</div>
        <div className="partners-info__text">We specialize in innovative solutions, adapting them to the needs of each market.</div>
      </div>
      <div className="partners-icons">
        {partners.map((partner, index) => (
          <div key={index} className="partners-icons__item">
            <Image src={partner} width={100} height={36} alt='partner icon' />
          </div>
        ))}
      </div>
      <Image src={SpecialCircle} width={400} height={400} alt='special circle icon' className="left-special-circle" />
      <Image src={SpecialCircle} width={400} height={400} alt='special circle icon' className="right-special-circle" />
    </section>
  )
}

export default PartnersComponent