
import { Avatar } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContactlessIcon from '@mui/icons-material/Contactless';
import { Mail } from '@mui/icons-material'
import ContactMailIcon from '@mui/icons-material/ContactMail';

function Navbarr() {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home"><Avatar sx={{ bgcolor: deepPurple[500] }}>
        <Link to = '/front' style={{textDecoration : 'none' }} className='hvr1' >SA</Link>
        </Avatar></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#features" style={{color : '#989D9E'}} className='hvr'>
              <Link to = '/about' style={{textDecoration : 'none' }} className='hvr' >ABOUT</Link>
            </Nav.Link>
            <Nav.Link href="#pricing" className='hvr' >
            <Link to = '/skills' style={{textDecoration : 'none' }} className='hvr' >SKILLS</Link>
            </Nav.Link>
            <Nav.Link href="#portfolio" className='hvr'>
            <Link to = '/portfolio' style={{textDecoration : 'none' }} className='hvr' >PORTFOLIO</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"> <ContactlessIcon/> +91-7894199496</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
           <ContactMailIcon/> sohelakhtar679@gmail.com
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr