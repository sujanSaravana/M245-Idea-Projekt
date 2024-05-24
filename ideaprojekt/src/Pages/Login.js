import React from "react";
import "./Login.css"
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate("/home");
    };

    return(
        <Container className="login-container">
            <Row>
                <Col>
                    <div className="login-title">
                        Login
                    </div>
                    <div className="login-input">
                        <input className="login" type="username" placeholder="Enter Username" />
                        <input className="login" type="password" placeholder="Enter Password" />
                        <button className="login-btn" onClick={handleLogin}>
                            Enter
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Login