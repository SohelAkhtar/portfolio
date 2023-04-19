import { Avatar } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NB() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><Avatar sx={{ bgcolor: deepPurple[500] }}>SA</Avatar></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <Link to='/about'>ABOUT</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">SKILLS</Nav.Link>
            <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">CONTACT US</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              GMAIL
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NB