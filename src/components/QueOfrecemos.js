
import React from 'react'

import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap';

import '../styles/queOfrecemos.css';

const QueOfrecemos = () => {
    return (
        <div className="QueOfrecemos">
<Container>
<h2>Qué ofrecemos</h2>
<CardDeck className="card-deck">
  <Card>
    <Card.Img variant="top" src="images/logo.png"/>
    <Card.Body>
      <Card.Title>INTERIORISMO</Card.Title>
      <Card.Text>
      <p>Creemos que un proyecto empieza desde su visualización y queremos ayudarte a dar este primer paso.</p>
            <p>Interpretamos el interiorismo como una mejora de la calidad de vida plasmada en un espacio y se trata de dar con la solución más adecuada en cada uno de ellos.</p>
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src="images/logo.png" />
    <Card.Body>
      <Card.Title>VISUAL MERCHANDISING</Card.Title>
      <Card.Text>
      <p>Creemos que un proyecto empieza desde su visualización y queremos ayudarte a dar este primer paso.</p>
            <p>Interpretamos el interiorismo como una mejora de la calidad de vida plasmada en un espacio y se trata de dar con la solución más adecuada en cada uno de ellos.</p>
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src="images/logo.png" />
    <Card.Body>
      <Card.Title>IMPLEMENTACIÓN</Card.Title>
      <Card.Text>
      <p>Creemos que un proyecto empieza desde su visualización y queremos ayudarte a dar este primer paso.</p>
            <p>Interpretamos el interiorismo como una mejora de la calidad de vida plasmada en un espacio y se trata de dar con la solución más adecuada en cada uno de ellos.</p>
      </Card.Text>
    </Card.Body>

  </Card>
</CardDeck>
</Container>
        </div>
    )
}

export default QueOfrecemos