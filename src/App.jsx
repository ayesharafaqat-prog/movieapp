import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/favourit';
import NavBar from './components/NavBar';
import { MovieProvider } from './components/MovieContext';
import './App.css';

export default function App() {
  return (
    <MovieProvider>
      <div className="main-content">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </MovieProvider>
  );
}
