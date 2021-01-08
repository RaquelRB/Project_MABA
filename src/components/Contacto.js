
import React from 'react'
import { Container, Form, Image, Button, Col } from 'react-bootstrap';

import '../styles/contacto.css';

const Contacto = () => {
    return (
        <div className="Contacto">
            <Container>
                <h2>Contacto</h2>

                <Form>
                <Col xs={12} md={{ span: 6, offset: 3 }}>

                
                    <Form.Group controlId="Nombre">
                        {/* <Form.Label>Example textarea</Form.Label> */}
                        <Form.Control type="text" placeholder="Nombre" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Correo electrónico" />
                    </Form.Group>


                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        {/* <Form.Label>Example textarea</Form.Label> */}
                        <Form.Control as="textarea" rows={3} placeholder="Mensaje" />
                    </Form.Group>
                    <Button variant="light" type="submit">
                        Enviar
                    </Button>
                    </Col>
                </Form>
            </Container>


        </div>
    )
}

export default Contacto