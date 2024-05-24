import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Exercise () {
    return(
        <div>
            <div className="top-container">
                <div className="subject-container">
                    <h1 className="title">Aufgaben</h1>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div className="exercise">
                                
                            </div>
                        </Col>
                        <Col>
                            <div className="exercise">
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Exercise;