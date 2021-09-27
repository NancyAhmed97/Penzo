import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RegisterationForm from './Components/RegisterationForm'

function Registeration() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <RegisterationForm />
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Registeration
