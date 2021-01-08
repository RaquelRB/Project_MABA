
import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";

class NavbarFix extends React.Component {
    render() {
        return (
            <Navbar  bg="light" expand="lg" className="nav-bar" fixed="top">
            <Navbar.Brand href="/" >
              LOGO
              {/* <Image src="./images/logoMABA.png"/> */}
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">

                <Nav.Link>  
                    <Link
                      activeClass="active"
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                  >HOME</Link>
                </Nav.Link>

                <Nav.Link>  
                    <Link
                      activeClass="active"
                      to="queOfrecemos"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                  >QUÉ OFRECEMOS</Link>
                </Nav.Link>

                <Nav.Link>  
                    <Link
                      activeClass="active"
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                  >PORTFOLIO</Link>
                </Nav.Link>

                <Nav.Link>  
                    <Link
                      activeClass="active"
                      to="quienesSomos"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                  >QUIENES SOMOS</Link>
                </Nav.Link>

                <Nav.Link>  
                    <Link
                      activeClass="active"
                      to="contacto"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                  >CONTACTO</Link>
                </Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>


    )
}
}

export default NavbarFix