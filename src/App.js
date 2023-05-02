import React from 'react';
import {BrowserRouter as  Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import"./components/navbar/Navigation.css";
import HomePage from './components/Pages/HomePage';
import AboutPage from './components/Pages/AboutPage';
import LldPage from './components/Pages/LldPage';
import TeamsPage from './components/Pages/TeamsPage';
import"./components/footer/FooterPart";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element=<HomePage /> />
          <Route path='/about' element=<AboutPage /> />
          <Route path='/lld' element=<LldPage /> />
          <Route path='team' element=<TeamsPage /> />
          <Route path='/error' errorElement=<errorElement /> />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
