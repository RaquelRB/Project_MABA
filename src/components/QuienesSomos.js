
import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

import '../styles/quienesSomos.css';

const QuienesSomos = () => {
    return (
        <div className="QuienesSomos">

            <Container>
                <Row>
                    <Col xs={1} lg={3} className="borderLeft" ></Col>
                    <Col xs={10} lg={6}><h4 className="section-title">QUIÉNES SOMOS</h4></Col>
                    <Col xs={1} lg={3} className="borderRight" ></Col>
                </Row>

                <Row className="margin-top quienes-container">
                    <Col xs={12} md={6} className="persona">
                        <Image src="./images/estefi.jpg" roundedCircle />

                        <h5>ESTEFANIA ROBLES</h5>
                        
                        <h6><i><b>Arquitecta técnica e interiorista</b></i></h6>
                        <p>El interiorismo es una herramienta que te ayuda a definir tu estilo de vida, confortable, funcional y personal.</p>
                        <p>El interiorismo es el reflejo de tu personalidad. El hogar es sinónimo de descanso, reunión.</p>
                    </Col>


                    <Col xs={12} md={6}>
                        <Image src="./images/marc.jpg" roundedCircle />
                        <h5>MARC BRUGUES</h5>
                        
                        <h6><i><b>Visual Merchandiser y diseñador gráfico</b></i></h6>
                        <p>El mundo del retail cambia a pasos agigantados seguramente al ritmo que cambia la sociedad. Los clientes son cada vez más exigentes, somos nosotros (los especialistas en ventas) quienes nos debemos adaptar a ellos.</p>
                        <p>Más de 10 años de experiencia como visual merchandiser, he trabajado para marcas como Mazda, Yundai, IKEA.</p>
                    </Col>

                </Row>


            </Container>

        </div>
    )
}

export default QuienesSomos