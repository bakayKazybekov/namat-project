import React from 'react'
import LogoBanner from '@/app/lib/components/LogoBanner'
import Navigation from '@/app/lib/components/Navigation'
import SocialLinks from '@/app/lib/components/SocialLinks'
import './styles.scss'

const FooterComponent = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">
        <LogoBanner />
        <Navigation className="footer-navigation" />
      </div>
      <div className="footer-ending">
        <div className="footer-text">© 2024 Namat Global Trade. All rights reserved</div>
        <div className="footer-links">
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent