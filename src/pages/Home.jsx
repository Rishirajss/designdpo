import React from 'react'
import Header from '../comman/Header'
import Sliderpart from '../Home Component/Sliderpart'
import Benifitespart from '../Home Component/Benifitespart'
import Designhome from '../Home Component/Designhome'
import Explorecatgory from '../Home Component/Explorecatgory'
import Trending from '../Home Component/Trending'
import Footer from '../comman/Footer'

export default function Home() {
  return (
    <>
        <Header/>
           <Sliderpart/>
           <Benifitespart/>
           <Designhome/>
           <Explorecatgory/>
           <Trending/>
        <Footer/>      
    </>
  )
}
