
import React, { useState } from 'react'
import { Container, Row, Col, Image, Button, Modal, Carousel } from 'react-bootstrap';


import '../styles/portfolio.css';


const Portfolio = () => {

    function Animation() {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <div className="modalDiv">

                <Image src="images/homeImage.png" className="project-img" rounded />

                <div className="hover-content">
                    <div className="hover-text">
                        <p>Te ofrecemos un proyecto completo en el que incluimos un moodboard o collage de inspiración inicial, un plano de distribución, las vistas en 3D de tu espacio y un último collage donde te</p>
                        <Button variant="light" onClick={handleShow}>
                            +
                        </Button>

                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Project 1</Modal.Title>
                    </Modal.Header>
                    <ControlledCarousel />
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }


    function ControlledCarousel() {
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

        return (
            <Carousel activeIndex={index} onSelect={handleSelect} className="img-carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/logo.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/logoMABA.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/pinteresticon.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }


    //   render();

    return (
        <div className="Portfolio">
            <Container>
                <h2>Proyectos</h2>
                <Row>

                    <Col xs={12} md={4} className="project-div">
                        <Animation />
                    </Col>

                    <Col xs={12} md={4} className="project-div">
                        <Animation />
                    </Col>

                    <Col xs={12} md={4} className="project-div">
                        <Animation />
                    </Col>

                    <Col xs={12} md={4} className="project-div">
                        <Animation />
                    </Col>

                    <Col xs={12} md={4} className="project-div">
                        <Animation />
                    </Col>

                    <Col xs={12} md={4} className="project-div">
                        <Animation />
                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default Portfolio