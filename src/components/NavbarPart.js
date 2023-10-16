import logo from '../logo.png';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarPart() {
  return (
    <Navbar expand="lg">
    <Container>
    <Navbar.Brand href="/"><img className="logo-achi" src={logo} alt="logo-achi"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="d-flex flex-row m-auto">
          <NavDropdown title="Qui sommes-nous ?" id="basic-nav-dropdown" className="mx-5 fs-5" renderMenuOnMount={true}>
            <NavDropdown.Item href="/qui-sommes-nous">Notre vision</NavDropdown.Item>
            <NavDropdown.Item href="/qui-sommes-nous">Nos missions</NavDropdown.Item>
            <NavDropdown.Item href="/qui-sommes-nous">Financement</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/cards" className="mx-5 fs-5">Évènements</Nav.Link>
          <NavDropdown title="Agir" id="basic-nav-dropdown" className="mx-5 fs-5" renderMenuOnMount={true}>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Link onClick={() => {window.location.href="/cards"}}><Button className="p-3 buttonPrimary"> Faire un don !</Button></Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarPart