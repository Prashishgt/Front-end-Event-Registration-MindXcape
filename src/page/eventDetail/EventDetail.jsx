import React from 'react';
import Banner from './Banner';
import Prizes from './Prizes';
import About from './About';
import Schedule from './Schedule';
import Faq from './Faq';
import Footer from './Footer';


export const EventDetail = () => {
  return (
    <>
        <Banner />
        <About />
        <Prizes />        
        <Schedule />
        <Faq />
        <Footer />

    </>

  )
}
