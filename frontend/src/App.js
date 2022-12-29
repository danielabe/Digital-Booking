/* import logo from './logo.svg'; */
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
/* import React, { useEffect, useState, useContext } from "react"; */
import Header from './components/Header';
import Body from './components/Body';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Body>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Body>
      <Footer />
    </>
  );
}

export default App;
