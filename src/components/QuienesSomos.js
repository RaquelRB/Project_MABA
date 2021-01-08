
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

import '../styles/quienesSomos.css';

const QuienesSomos = () => {
    return (
        <div className="QuienesSomos">

<Container>
    <h2>Quienes somos</h2>
    <Row>
        <Col>
      <Image src="./images/estefi.jpg" roundedCircle />
    
        <h5>ESTEFANIA ROBLES</h5>
        <p><i><b>Arquitecta técnica e interiorista</b></i></p>
            <p>Creemos que un proyecto empieza desde su visualización y queremos ayudarte a dar este primer paso.</p>
            <p>Interpretamos el interiorismo como una mejora de la calidad de vida plasmada en un espacio y se trata de dar con la solución más adecuada en cada uno de ellos.</p>
        </Col>
         
<Col>
<Image src="./images/marc.jpg" roundedCircle />
<h5>MARC BRUGUES</h5>
<p><i><b>Visual Merchandiser y diseñador gráfico</b></i></p>
            <p>Creemos que un proyecto empieza desde su visualización y queremos ayudarte a dar este primer paso.</p>
            <p>Interpretamos el interiorismo como una mejora de la calidad de vida plasmada en un espacio y se trata de dar con la solución más adecuada en cada uno de ellos.</p>
</Col>
            
    </Row>
           

</Container>

        </div>
    )
}

export default QuienesSomos