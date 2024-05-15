"use client"
import React, { FC, useState } from "react";
import Slider from "react-slick";
import HomeComponent from "../ui/components/HomeComponent";
import BriefInfoComponent from "../ui/components/BreifInfoComponent";
import AboutUsComponent from "../ui/components/AboutUsComponent";
import PartnersComponent from "../ui/components/PartnersComponent";
import ServicesComponent from "../ui/components/ServicesComponent";
import ContactsComponent from "../ui/components/ContactsComponent";
import FooterComponent from "../ui/components/FooterComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.scss'

const Page: FC = () => {
  const [settings] = useState({
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerPadding: '30px',
    centerMode: true,
  })

  const [sliderRef, setSliderRef] = useState<Slider>();
  const next = () => {
    sliderRef?.slickNext();
  };
  const prev = () => {
    sliderRef?.slickPrev();
  };
  
  return (
    <>
      <HomeComponent/>
      <BriefInfoComponent/>
      <AboutUsComponent/>
      <PartnersComponent/>
      <ServicesComponent
        next={next}
        prev={prev}
        settings={settings}
        setSliderRef={setSliderRef}
      />
      <ContactsComponent/>
      <FooterComponent/>
    </>
  )
}

export default Page;