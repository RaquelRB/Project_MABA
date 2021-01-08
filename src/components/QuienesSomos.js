
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
            <p>El interiorismo es una herramienta que te ayuda a definir tu estilo de vida, confortable, funcional y personal.</p>
            <p>El interiorismo es el reflejo de tu personalidad. El hogar es sinónimo de descanso, reunión.</p>
        </Col>
         
<Col>
<Image src="./images/marc.jpg" roundedCircle />
<h5>MARC BRUGUES</h5>
<p><i><b>Visual Merchandiser y diseñador gráfico</b></i></p>
            <p>El mundo del retail cambia a pasos agigantados seguramente al ritmo que cambia la sociedad. Los clientes son cada vez más exigentes, somos nosotros (los especialistas en ventas) quienes nos debemos adaptar a ellos.</p>
            <p>Más de 10 años de experiencia como visual merchandiser, he trabajado para marcas como Mazda, Yundai, IKEA.</p>
</Col>
            
    </Row>
           

</Container>

        </div>
    )
}

export default QuienesSomos