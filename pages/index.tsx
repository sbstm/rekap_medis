import React from 'react'
import Card from './component/card'
import About from './component/about'
import Help from './component/help'
import Footer from './component/footer'
import Landingpage from './component/Landingpage'

export default function index() {
  return (
    <div className='bg-white'>
        <Landingpage/>
        <Card/>
        <About/>
        <Help/>
        <Footer/>
    </div>
  )
}
