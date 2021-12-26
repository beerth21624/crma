import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Boss from './pages/Boss';
import History from './pages/History';
import Contact from './pages/Contact';
import Document from './pages/Document';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/boss" element={<Boss />} />{' '}
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/document" element={<Document />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/admin/:id" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
