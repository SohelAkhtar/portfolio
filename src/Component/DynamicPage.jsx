import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Navbarr from './Navbarr'
import NB from './NB'
import Skills from './Skills'
import Portfolio from './Portfolio'
import FrontPage from './FrontPage'

function DynamicPage() {
  return (
    <div>
        <Navbarr/>
            <Routes>
                <Route path='/about' element = {<About/>} />
                {/* <Route index  element = {<About/>} /> */}
                <Route path='/skills' element = {<Skills/>} />
                <Route path='/portfolio' element = {<Portfolio/>} />
                <Route path='/front' element = {<FrontPage/>} />
                <Route index element = {<FrontPage/>} />



            </Routes>
       
    </div>
  )
}

export default DynamicPage