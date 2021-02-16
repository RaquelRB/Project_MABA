import React, { useState } from 'react'
import EmailService from '../services/emailService'

import { Container, Button, Col, Row } from 'react-bootstrap';

import '../styles/contacto.css';

function Contacto() {

    const emailService = new EmailService()

    const [inputs, setInputs] = useState({email: '', name: '', subject: '', description: ''})

    const [status, setStatus] = useState({message: ''})

    const handleChange = e => {
        const {name, value} = e.target
        setInputs(prev => ({...prev, [name]: value }))
      }

    const handleSubmit = e => {
        e.preventDefault()
        const {email,name,subject,description} = inputs

        emailService.sendEmail({email, name, subject, text: description})
        .then((result)=> {
          setStatus(prev => ({...prev, message: result}))
          setInputs(prev => ({...prev, email:'', name:'', subject:'', description:''}))
        })
        .catch(prev => ({...prev, message: 'Ha habido un error al enviar la consulta. Por favor, inténtalo de nuevo más tarde.'}))

      }

    return (
      <Container>
        <div className="Contacto">

          <Row>
        <Col xs={1} lg={3} className="borderLeft" ></Col>
        <Col xs={10} lg={6}><h4 className="section-title">CONTACTA CON NOSOTROS</h4></Col>
        <Col xs={1} lg={3} className="borderRight" ></Col>
        </Row>

      <form onSubmit={handleSubmit} className="margin-top">

        <input className="contact-inputs" type="text" placeholder="email" name="email" value={inputs.email} onChange={handleChange} required/>

        <br />

        <input className="contact-inputs" type="text" placeholder="Nombre" name="name" value={inputs.name} onChange={handleChange} required/>

        <br />

        <input className="contact-inputs" type="text" placeholder="Asunto" name="subject" value={inputs.subject} onChange={handleChange} required/>

        <br />

        <textarea className="contact-inputs" name="description" placeholder="Haz tu consulta" value={inputs.description} onChange={handleChange} cols="30" rows="7" required></textarea>
        
        <br />

        <p className="status-message">{status.message}</p>

        <Button variant="light" type="submit"> Enviar </Button>
         
      </form>

        </div>
        </Container>
    )
}

export default Contacto

