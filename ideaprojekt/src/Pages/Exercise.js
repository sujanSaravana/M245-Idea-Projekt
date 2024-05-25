import React from "react";
import "./Exercise.css";
import { Container, Row, Col } from "react-bootstrap";
import exercise1 from "../Images/exercise-1.png";

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
                            <div className="exercise1">
                                <h2 className="exercise-title">Aufgabe 1</h2>
                                <img src={exercise1} className="exercise-1" alt="exercise-1" />
                            </div>
                        </Col>
                        <Col>
                            <div className="exercise2">
                                <h2 className="exercise-title">Aufgabe 2</h2>
                                <img src={exercise1} className="exercise-2" alt="exercise-2" />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="button-container">
                <button className="exercise-btn" >Weitere Aufgaben generieren</button>
            </div>
            </div>
        </div>
    )
}

export default Exercise;