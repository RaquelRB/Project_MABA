
import React from 'react'
import { Container, Image, Card } from 'react-bootstrap'
import '../styles/home.css';

const Home = () => {
    return (

        <Container className="home-container">
            <Image src="./images/homeImage.png" id="home-background-image"/>

            <div className="homeText">
                <Card className="home-card">
                    <Card.Body>
                        <Card.Title><i><strong>"Menos es siempre más"</strong></i></Card.Title>
                        <Card.Text>
                            <p><i>Somos un estudio de interiorismo y visual merchandisign especializado en crear espacios únicos y funcionales ajustados a cada presupuesto.</i>
                        </p>
                            <p><i>
                                Nos adaptamos a tus gustos y necesidades, sin olvidar que en los pequeños cambios está la diferencia.
                            </i></p>


                        </Card.Text>
                        
                        <Card.Link href="#">
<Image src="./images/pinteresticon.png"/>
                        </Card.Link>

                        <Card.Link href="#">
<Image src="./images/instaicon.png"/>
                        </Card.Link>

                        <Card.Link href="#">
<Image src="./images/fbicon.png"/>
                        </Card.Link>

                    </Card.Body>
                </Card>

            </div>


        </Container>


    )
}

export default Home
