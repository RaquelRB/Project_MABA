
import React from 'react'

import { Container, CardDeck, Card, Col, Row } from 'react-bootstrap';

import '../styles/queOfrecemos.css';

const QueOfrecemos = () => {
    return (
        <div className="QueOfrecemos">
<Container>
  <Row>
    <Col xs={1} lg={3} className="borderLeft" ></Col>
    <Col xs={10} lg={6}><h4 className="section-title">QUÉ OFRECEMOS</h4></Col>
    <Col xs={1} lg={3} className="borderRight" ></Col>
  </Row>


<CardDeck className="card-deck" className="margin-top" >
<Col xs={12} lg={4}>
  <Card className="card-shadow">
    <Card.Img variant="top" src="images/interiorismologo.png"/>
    <Card.Body>
    <hr/>
      <Card.Title><h5>INTERIORISMO</h5></Card.Title>
      <hr/>
      <Card.Text>
      <p className="initial-text">Creemos que un proyecto empieza desde su visualización y queremos ayudarte a dar este primer paso.Interpretamos el interiorismo como una mejora de la calidad de vida plasmada en un espacio y se trata de dar con la solución más adecuada en cada uno de ellos.</p>
            <p>Te ofrecemos un proyecto completo en el que incluimos un moodboard o collage de inspiración inicial, un plano de distribución, las vistas en 3D de tu espacio y un último collage donde te asesoramos sobre qué productos comprar y dónde conseguirlos.</p>
            <hr/>
            <div className="presupuesto">
              <p>Particulares 8€/m2 (Cocinas 10€/m2)</p>
              <p>Locales comerciales 12€/m2</p>
            </div>
            <hr/>
      </Card.Text>
    </Card.Body>

  </Card>
</Col>
<Col xs={12} lg={4}>
  <Card className="card-shadow">
    <Card.Img variant="top" src="images/visuallogo.png" />
    <Card.Body>
    <hr/>
      <Card.Title><h5>VISUAL MERCHANDISING</h5></Card.Title>
      <hr/>
      <Card.Text>
      <p className="initial-text">Queremos ayudarte a obtener la máxima rentabilidad de tu negocio.</p>
            <p className="initial-text">¿Cómo lo conseguimos? Mediante el posicionamiento del producto, la mejora del layout, de la iluminación comercial y potenciando al máximo tu marca; todo ello con un único objetivo: Hacer que el cliente tenga una experiencia de compra inolvidable.</p>
            <p>Te ofrecemos asesoramiento, analizamos tu espacio comercial para mejorar los procesos de compra. Incluimos: estudio del espacio, mejora del layout, agrupación del producto según su tipología, planos de distribución del espacio y pautas de implementación.</p>
            <hr/>
            <p className="presupuesto">Asesoramiento + plan de acción a partir de 100€2</p>
            <hr/>
      </Card.Text>
    </Card.Body>
  </Card>
</Col>
<Col xs={12} lg={4}>
  <Card className="card-shadow">
    <Card.Img variant="top" src="images/IVlogo.png" />
    <Card.Body>
    <hr/>
      <Card.Title><h5>IMPLEMENTACIÓN</h5></Card.Title>
      <hr/>
      <Card.Text>
      <p className="initial-text">¿Empiezas un nuevo negocio y no sabes cómo enfocarlo? ¿quieres renovar tu espacio o hacer un restyling de tu marca?</p>
            <p className="initial-text">Desde MABA te ofrecemos un asesoramiento completo, desde el borrador inicial al resultado final.</p>
            <span>Restauración, retail, stands. Tu marca es quien habla de ti, nos comprometemos a conseguir espacios funcionales y acordes a tu filosofía, queremos plasmar y darle forma a tus ideas para así crear un espacio único.</span>
            <p>Si tu negocio va enfocado a las ventas, trazaremos una estrategia comercial, haremos un estudio de mercado y analizaremos a tu competencia, para diferenciarnos de ella.</p>
            <hr/>
            <p className="presupuesto">Pídenos presupuesto</p>
            <hr/>
      </Card.Text>
    </Card.Body>

  </Card>
</Col>
</CardDeck>
</Container>
        </div>
    )
}

export default QueOfrecemos