import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Login from '../Pages/Login';
import Lernportal from '../Pages/Lernportal';

test('führt Login aus', () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
  
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
  
  fireEvent.change(screen.getByPlaceholderText(/Enter Username/i), { target: { value: 'testuser' } });
  fireEvent.change(screen.getByPlaceholderText(/Enter Password/i), { target: { value: 'testpassword' } });
  fireEvent.click(screen.getByText(/Enter/i));
  
});

test('selektiert Fach und Klasse aus dem Lernportal Komponent', () => {
  render(
    <Router>
      <Routes>
        <Route path="/Lernportal" element={<Lernportal />} />
      </Routes>
    </Router>
  );
  
  expect(screen.getByText(/Fach auswählen/i)).toBeInTheDocument();
  expect(screen.getByText(/Lernstufe auswählen/i)).toBeInTheDocument();
  
  fireEvent.click(screen.getByLabelText(/Mathe/i));
  fireEvent.click(screen.getByLabelText(/10. Klasse/i));
  
  fireEvent.click(screen.getByText(/Lernset generieren/i));

});





