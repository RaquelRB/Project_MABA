
//React
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";

// Styles
import './App.css';

// Components
import NavbarFix from './components/Navbar';
import Home from './components/Home';
import QueOfrecemos from './components/QueOfrecemos';
import Portfolio from './components/Portfolio';
import QuienesSomos from './components/QuienesSomos';
import Contacto from './components/Contacto';

// import navbackground from './images/navbackground.png'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">

        <NavbarFix/>

        </header>

        <Container>
          <div id="home">
          <Home />
          </div>

          <div id="queOfrecemos">
          <QueOfrecemos />
          </div>
          <br/>

          <div id="portfolio">
          <Portfolio />
          </div>
          <br/>

          <div id="quienesSomos">
          <QuienesSomos />
          </div>
          <br/>

          <div id="contacto">
          <Contacto />
          </div>  
        </Container>
            

      </div>
    );
  }
}

export default App;
