import React from "react";
import "./Lernportal.css";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Lernportal() {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/Exercise");
    };

    return (
        <div>
            <div className="top-container">
                <div className="subject-container">
                    <h1 className="title">Fach auswählen</h1>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div className="subject">
                                <input type="checkbox" id="mathe" />
                                <label htmlFor="mathe" className="subject-title">
                                    Mathe
                                </label>
                            </div>
                        </Col>
                        <Col>
                            <div className="subject">
                                <input type="checkbox" id="deutsch" className="subject-input" />
                                <label htmlFor="deutsch" className="subject-title">
                                    Deutsch
                                </label>
                            </div>
                        </Col>
                        <Col>
                            <div className="subject">
                                <input type="checkbox" id="englisch" />
                                <label htmlFor="englisch" className="subject-title">
                                    Englisch
                                </label>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="second-container">
                <div className="subject-container">
                    <h1 className="title">Lernstufe auswählen</h1>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div className="subject">
                                <input type="checkbox" id="klasse-10" />
                                <label htmlFor="klasse-10" className="subject-title">
                                    10. Klasse
                                </label>
                            </div>
                        </Col>
                        <Col>
                            <div className="subject">
                                <input type="checkbox" id="klasse-11" className="subject-input" />
                                <label htmlFor="klasse-11" className="subject-title">
                                    11. Klasse
                                </label>
                            </div>
                        </Col>
                        <Col>
                            <div className="subject">
                                <input type="checkbox" id="klasse-12" />
                                <label htmlFor="klasse-12" className="subject-title">
                                    12. Klasse
                                </label>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="button-container">
                <button className="portal-btn" onClick={handleClick}>Lernset erstellen</button>
            </div>
        </div>
    );
}

export default Lernportal;
