import React, { useState } from 'react'

import axios from 'axios'

import { Container, Form, Button, Col, Row } from 'react-bootstrap';

import '../styles/contacto.css';

const Contacto = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [result, setResult] = useState(null);

    const sendEmail = event => {
        event.preventDefault();
        axios
            .post('/send', { ...state })
            .then(response => {
                setResult(response.data);
                setState({ name: '', email: '', subject: '', message: '' });
            })
            .catch(() => {
                setResult({ success: false, message: 'Algo salió mal. Vuelve a intentarlo más tarde.' });
            });
    }

    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        });
    };


    return (
        <Container>
        <div className='Contacto'>
        <Row>
    <Col xs={1} lg={3} className="borderLeft" ></Col>
    <Col xs={10} lg={6}><h4 className="section-title">CONTACTA CON NOSOTROS</h4></Col>
    <Col xs={1} lg={3} className="borderRight" ></Col>
  </Row>
            <form onSubmit={sendEmail} className="margin-top">
                <Form.Group controlId="name">
                    {/* <Form.Label>Nombre</Form.Label> */}
                    <Form.Control
                        type="text"
                        name="name"
                        value={state.name}
                        placeholder="Nombre"
                        onChange={onInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control
                        type="text"
                        name="email"
                        value={state.email}
                        placeholder="Correo electrónico"
                        onChange={onInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="subject">
                    {/* <Form.Label>Subject</Form.Label> */}
                    <Form.Control
                        type="text"
                        name="subject"
                        value={state.subject}
                        placeholder="Asunto"
                        onChange={onInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="subject">
                    {/* <Form.Label>Message</Form.Label> */}
                    <Form.Control
                        as="textarea"
                        name="message"
                        value={state.message}
                        rows="3"
                        placeholder="Mensaje"
                        onChange={onInputChange}
                        required
                    />
                </Form.Group>
                <Button variant="light" type="submit">
                    Enviar
          </Button>
            </form>
            {result && (
                <p className={`${result.success ? 'success' : 'error'}`}>
                    {result.message}
                </p>
            )}
        </div>
        </Container>
    );
}


export default Contacto

