
import React from 'react'
import '../FrontPage.css'
import { Image } from 'react-bootstrap'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'


function FrontPage() {
  return (
    <div className='mid' style={{padding : '10%'}}>
     <div class="container">
      <div class="image">
      <Image src="https://purpletutor.com/wp-content/uploads/2023/03/newbannerimage.png"/>
        </div>
        <div class="text" style={{margin : '10%'}}>
        <h3>Hi there ✋ IM </h3>
        <h2>SOHEL AKHTAR</h2>
        <h4 style={{fontSize : '10px'}}>DEVELOPER🟢 </h4>
        <Button variant="contained" color="success">
        <Link to = '/about' style={{textDecoration : 'none' }} className='hvr1' >HIRE ME</Link>
        </Button>
      </div>
      </div>
    </div>
  )
}

export default FrontPage