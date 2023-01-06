/* import logo from './logo.svg'; */
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
/* import React, { useEffect, useState, useContext } from "react"; */
import Header from './components/Header';
import Main from './components/Main';
import Home from './pages/Home';

function App() {
  return (
    <div className='body'>
      <Header />
      <Main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Main>
      <Footer />
    </ div>
  );
}

export default App;
