import React from 'react'
import Image from 'next/image';
import * as logo from '/public/logo.svg'
import './styles.scss'

const LogoBanner = () => (
  <div className="logo-banner">
    <Image src={logo} alt="logo" className='namat-logo'/>
    <div className="logo-banner-text">Namat <span>Global Trade</span></div>
  </div>
)

export default LogoBanner;