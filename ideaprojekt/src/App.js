import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Lernportal from './Pages/Lernportal';
import Exercise from "./Pages/Exercise";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/Home" />}/>
          <Route path='/Home'element={<Home />} />
          <Route path='/Login'element={<Login />} />
          <Route path='/Lernportal'element={<Lernportal />} />
          <Route path='/Exercise'element={<Exercise />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
