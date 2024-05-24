import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home () {
    const navigate = useNavigate();
    
    const handleNav = () => {
        navigate("/Lernportal");
    };
    return(
        <div>
            <a href="/Login">
                <h4 className="btn1">Login</h4>
            </a>
            <h1 className="home-title">SkalhAI</h1>
            <button className="home-btn" onClick={handleNav}>Lernset erstellen</button>
        </div>
    )
}

export default Home;