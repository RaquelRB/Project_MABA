
import React, { useState } from 'react'
import { Container, Row, Col, Image, Button, Modal, Carousel } from 'react-bootstrap';


import '../styles/portfolio.css';


const Portfolio = () => {

    function LoftGalicia() {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <div className="modalDiv">

                <Image src="images/LoftGalicia/LoftGalicia03.jpg" className="project-img" rounded />

                <div className="hover-content">
                    <div className="hover-text">
                        <h5>Loft en Galicia</h5>
                        {/* <p>Propuesta de diseño de interiores y carpintería para la separación de estancias.</p> */}
                        <br/>
                        <Button variant="dark" onClick={handleShow}>
                            +
                        </Button>

                    </div>
                </div>

                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Loft Galicia</Modal.Title>
                    </Modal.Header>
                    <CarouselLoftGalicia />
                    {/* <Modal.Footer>
                    </Modal.Footer> */}
                </Modal>

            </div>
        );
    }
    function CarouselLoftGalicia() {
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

        return (
            <Carousel activeIndex={index} onSelect={handleSelect} className="img-carousel">
            <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/LoftGalicia/LoftGaliciaPlanta.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/LoftGalicia/LoftGalicia01.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/LoftGalicia/LoftGalicia02.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/LoftGalicia/LoftGalicia03.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/LoftGalicia/LoftGaliciaActual01.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/LoftGalicia/LoftGaliciaActual02.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                
            </Carousel>
        );
    }

    function ShowroomTerrassa() {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <div className="modalDiv">

                <Image src="images/ShowroomTerrassa/vista01.jpg" className="project-img" rounded />

                <div className="hover-content">
                    <div className="hover-text">
                        <h5>Showroom en Terrassa</h5>
                        {/* <p>Propuesta de layout, carpintería de expositores y zona de bar con chillout.</p> */}
                        <br/>
                        <Button variant="dark" onClick={handleShow}>
                            +
                        </Button>

                    </div>
                </div>

                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Showroom en Terrassa</Modal.Title>
                    </Modal.Header>
                    <CarouselShowroomTerrassa />
                    {/* <Modal.Footer>
                    </Modal.Footer> */}
                </Modal>

            </div>
        );
    }
    function CarouselShowroomTerrassa() {
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

        return (
            <Carousel activeIndex={index} onSelect={handleSelect} className="img-carousel">
                <Carousel.Item >
                    <p className="carousel-text">Propuesta de layout, carpintería de expositores y zona de bar con chillout.</p>
                    <img
                        className="d-block w-100"
                        src="images/ShowroomTerrassa/vista01.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/ShowroomTerrassa/vista02.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                <p className="carousel-text">Propuesta de layout, carpintería de expositores y zona de bar con chillout.</p>
                    <img
                        className="d-block w-100"
                        src="images/ShowroomTerrassa/vista04.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/ShowroomTerrassa/vista05.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/ShowroomTerrassa/vista06.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/ShowroomTerrassa/r1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/ShowroomTerrassa/r2.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/ShowroomTerrassa/r3.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/ShowroomTerrassa/r5.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }

    function FrutaVerdura() {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <div className="modalDiv">

                <Image src="images/FrutaVerdura/vista01.jpg" className="project-img" rounded />

                <div className="hover-content">
                    <div className="hover-text">
                        <h5>Tienda de fruta y verdura</h5>
                        {/* <p>Realización de moodboard con propuesta de materiales y colores. Diseño de expositores centrales y perimetrales. Planteamiento de iluminación comercial y escaparate en la entrada del local.</p> */}
                        <br/>
                        <Button variant="dark" onClick={handleShow}>
                            +
                        </Button>

                    </div>
                </div>

                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Tienda de fruta y verdura</Modal.Title>
                    </Modal.Header>
                    <CarouselFrutaVerdura />
                    {/* <Modal.Footer>
                    </Modal.Footer> */}
                </Modal>

            </div>
        );
    }
    function CarouselFrutaVerdura() {
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

        return (
            <Carousel activeIndex={index} onSelect={handleSelect} className="img-carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/FrutaVerdura/moodboard.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/FrutaVerdura/vista01.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/FrutaVerdura/vista02.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }

    function RestauranteMadrid() {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <div className="modalDiv">

                <Image src="images/RestauranteMadrid/vista02.jpg" className="project-img" rounded />

                <div className="hover-content">
                    <div className="hover-text">
                        <h5>Restaurante en Madrid</h5>
                        {/* <p>Moodboard con propuesta de materiales y colores. Distribución del espacio diferenciando zona chillout de la sala principal y diseño de la barra de bar. Propuesta de mobiliario y decoración del local.</p> */}
                        <br/>
                        <Button variant="dark" onClick={handleShow}>
                            +
                        </Button>

                    </div>
                </div>

                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Restaurante en Madrid</Modal.Title>
                    </Modal.Header>
                    <CarouselRestauranteMadrid />
                    {/* <Modal.Footer>
                    </Modal.Footer> */}
                </Modal>

            </div>
        );
    }
    function CarouselRestauranteMadrid() {
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

        return (
            <Carousel activeIndex={index} onSelect={handleSelect} className="img-carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/RestauranteMadrid/vista01.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/RestauranteMadrid/vista02.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/RestauranteMadrid/vista03.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/RestauranteMadrid/vista05.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }


    return (
        <div className="Portfolio">
            <Container>
            <Row>
    <Col xs={1} lg={3} className="borderLeft" ></Col>
    <Col xs={10} lg={6}><h3 className="section-title">PROYECTOS</h3></Col>
    <Col xs={1} lg={3} className="borderRight" ></Col>
  </Row>
                <Row className="margin-top">

                    <Col xs={12} md={6} lg={3} className="project-div">
                        <LoftGalicia />
                    </Col>

                    <Col xs={12} md={6} lg={3} className="project-div">
                        <ShowroomTerrassa />
                    </Col>

                    <Col xs={12} md={6} lg={3} className="project-div">
                        <FrutaVerdura />
                    </Col>

                    <Col xs={12} md={6} lg={3} className="project-div">
                        <RestauranteMadrid />
                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default Portfolio