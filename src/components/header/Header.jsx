import React from 'react'
import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'
import "./header.css"
import Logo from "../../assets/logo.png"
const Header = () => {
  return (
    <Navbar expand="lg" className='main'>
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Service</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header