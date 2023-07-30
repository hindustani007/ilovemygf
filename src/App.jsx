import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Confessions from './pages/home/confessions/Confessions';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/confessions' element={<Confessions />} />
    </Routes>
  )
}

export default App
