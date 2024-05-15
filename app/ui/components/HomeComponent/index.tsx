"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { slide as Menu } from 'react-burger-menu'
import LogoBanner from "../../../lib/components/LogoBanner";
import Navigation from "../../../lib/components/Navigation";
import { 
  BurgerIcon, 
  Circle, 
  CloseIcon, 
  DownArrow, 
  GreenTriangle, 
  HomeDots, 
  HomeDotsMobile, 
  HomePicture,
} from "@/public";
import './styles.scss'
import Link from 'next/link';

const HomeComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>()

  return (
    <header className="home" id='home'>
      <div className="home-container">
        <div className="home__header">
          <LogoBanner />
          <Navigation />
          <div className="burger-menu-container">
            <Menu
              onStateChange={(e) => setIsOpen(e.isOpen)}
              isOpen={isOpen}
              noOverlay
              width='100%'
              right
              className="burger-menu"
              customBurgerIcon={<Image src={BurgerIcon} alt='burger icon' />}
              customCrossIcon={<Image src={CloseIcon} alt='close icon' />}
            >
              <div onClick={() => setIsOpen(false)}>
                <Navigation className="burger-menu__navigation" />
              </div>
            </Menu>
          </div>
        </div>
        <div className="home__content">
          <div className="home__content-wrapper">
            <div className="home__content-text">
              <span>Global distributor of leading global IT manufacturers</span>
              In our portfolio, we have over 50+ major global IT hardware and software manufacturers.
            </div>
            <Link href='#about-us' className="home__content-button">
              More about us
              <Image src={DownArrow} width={24} height={24} alt="down arrow" />
            </Link>
          </div>
        </div>
      </div>
      <Image src={HomePicture} alt="home picture" className="home-picture" />
      <Image src={Circle} alt="circle" className="home-circle" />
      <Image src={GreenTriangle} alt="green triangle" className="green-triangle" />
      <Image src={HomeDots} alt="dots" className="home-dots" />
      <Image src={HomeDotsMobile} alt="dots" className="home-dots-mobile" />
    </header>
  )
}

export default HomeComponent