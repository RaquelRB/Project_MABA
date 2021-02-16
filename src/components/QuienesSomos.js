
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ante metus, vel luctus urna posuere eu. Suspendisse gravida non tortor eu maximus. Maecenas gravida mi odio, eu rutrum massa viverra ut.</p>

                        <p>Donec elementum laoreet lacinia. Morbi a consequat diam. In hac habitasse platea dictumst. Quisque varius neque tellus, et lacinia purus consectetur ac. Phasellus tempus molestie posuere.</p>
                    </Col>


                    <Col xs={12} md={6}>
                        <Image src="./images/marc.jpg" roundedCircle />
                        <h5>MARC BRUGUES</h5>
                        
                        <h6><i><b>Visual Merchandiser y diseñador gráfico</b></i></h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam ante metus, vel luctus urna posuere eu. Suspendisse gravida non tortor eu maximus. Maecenas gravida mi odio, eu rutrum massa viverra ut.</p>
                        
                        <p>Donec elementum laoreet lacinia. Morbi a consequat diam. In hac habitasse platea dictumst. Quisque varius neque tellus, et lacinia purus consectetur ac. Phasellus tempus molestie posuere.</p>
                    </Col>

                </Row>


            </Container>

        </div>
    )
}

export default QuienesSomos