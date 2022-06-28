import React from 'react'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
const Header = () => {
  return (
    <header><Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Cart"><i className='fas fa-shopping-cart'></i>cart</Nav.Link>
          <Nav.Link href="/login"><i className='fas fa-user'></i>Long in</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></header>
  )
}

export default Header