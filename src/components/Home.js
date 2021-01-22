
import React from 'react'
import { Container, Image, Card } from 'react-bootstrap'
import '../styles/home.css';

const Home = () => {
    return (

        <Container className="home-container">
            <Image src="./images/homeImage.png" id="home-background-image" />
            <div className="text-container">
            <div className="homeText">
                <h2><i><strong>"Menos es siempre más"</strong></i></h2>
                <p><i>Somos un estudio de interiorismo y visual merchandising especializado en crear espacios únicos y funcionales.
                    Nos adaptamos a tus gustos y necesidades, sin olvidar que en los pequeños cambios está la diferencia.
                    </i></p>

            </div>
            <div className="links-container">
               <Card.Link href="#" target="_blank">
                            <Image src="./images/pinteresticon.png" />
                        </Card.Link>

                        <Card.Link href="#" target="_blank">
                            <Image src="./images/instaicon.png" />
                        </Card.Link>

                        <Card.Link href="#" target="_blank">
                            <Image src="./images/fbicon.png" />
                        </Card.Link> 
            </div>
            
            </div>
            


        </Container>


    )
}

export default Home
