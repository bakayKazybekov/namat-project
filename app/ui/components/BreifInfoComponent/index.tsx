import React from 'react'
import { briefInfo } from '@/app/constants'
import './styles.scss'

const BriefInfoComponent = () => {
  return (
    <section className="brief-info">
      <div className="brief-info__wrapper">
        <div className="brief-info__list">
          {briefInfo.map((item) => (
            <div key={item.title} className="brief-info__item">
              <div className="brief-info__item-title">{item.title}</div>
              <div className="brief-info__item-text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BriefInfoComponent