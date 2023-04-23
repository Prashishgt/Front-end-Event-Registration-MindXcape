import React from 'react'
import Banner from './Banner'
import EventsList from './EventsList'
import FooterHome from './FooterHome'




const Home = () => {
  return (
    <div className="home">
        <Banner />
        <EventsList />
        <FooterHome />
    </div>
  )
}

export default Home