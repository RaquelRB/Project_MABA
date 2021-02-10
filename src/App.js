
//React
import React from 'react';
import { Container} from 'react-bootstrap';


// Styles
import './App.css';

// Components
import NavbarFix from './components/Navbar';
import Home from './components/Home';
import QueOfrecemos from './components/QueOfrecemos';
import Portfolio from './components/Portfolio';
import QuienesSomos from './components/QuienesSomos';
import Contacto from './components/Contacto';



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
          <br/>

          <div id="queOfrecemos">
          <QueOfrecemos />
          </div>
          <br/>
          <br/>

          <div id="portfolio">
          <Portfolio />
          </div>
          <br/>
          <br/>

          <div id="quienesSomos">
          <QuienesSomos />
          </div>
          <br/>
          <br/>

          <div id="contacto">
          <Contacto/>
          </div>  
        </Container>

         <footer className="footer">
         Copyright 2020 ©MABA
         </footer>   

      </div>
    );
  }
}

export default App;
