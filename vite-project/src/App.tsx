import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RequestQuery from './pages/RequestQuery';
import Traditionnal from './pages/Traditionnal';
import './App.css'

const App:React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/requestquery" element={<RequestQuery />} />
        <Route path="/traditionnal" element={<Traditionnal />} />
      </Routes>
    </div>
  )
}

export default App;
