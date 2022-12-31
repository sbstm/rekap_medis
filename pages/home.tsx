import React from 'react'
import Jumbotron from './component/jumbotron'
import Card from './component/card'
import About from './component/about'
import Help from './component/help'
import Footer from './component/footer'

export default function index() {
  return (
    <div className='bg-white'>
        <Jumbotron/>
        <Card/>
        <About/>
        <Help/>
        <Footer/>

    </div>
  )
}
