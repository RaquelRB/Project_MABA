
import React from 'react'
import { Container, Navbar, Nav, Col, Image } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";

import '../styles/navbar.css';


class NavbarFix extends React.Component {
    render() {
        return (

            <Navbar  bg="white" expand="lg" className="nav-bar" fixed="top">
              <Container>
            <Navbar.Brand href="/">
            <Nav.Link>  
                    <Link
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                  >
                  <Image src="./images/logoMABA.png" id="logo-img"/>
                  
                  </Link>
                </Nav.Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Col className="menu-column">
                <Nav.Link>  
                    <Link
                      activeClass="active"
                      to="queOfrecemos"
                      spy={true}
                      smooth={true}
                      offset={-135}
                      duration={500}
                  >01/ QUE OFRECEMOS</Link>
                </Nav.Link>

                <Nav.Link>  
                    <Link
                      activeClass="active"
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      offset={-120}
                      duration={500}
                  >02/ PROYECTOS</Link>
                </Nav.Link>

                <Nav.Link>  
                    <Link
                      activeClass="active"
                      to="quienesSomos"
                      spy={true}
                      smooth={true}
                      offset={-135}
                      duration={500}
                  >03/ QUIENES SOMOS</Link>
                </Nav.Link>

                <Nav.Link>  
                    <Link
                      activeClass="active"
                      to="contacto"
                      spy={true}
                      smooth={true}
                      offset={-135}
                      duration={500}
                  >04/ CONTACTO</Link>
                </Nav.Link>
                </Col>
                

              </Nav>
            </Navbar.Collapse> 
            </Container>
          </Navbar>
         
    )
}
}

export default NavbarFix