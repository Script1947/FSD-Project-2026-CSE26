import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Navbar from './Component/Navbar'
import Footer from './Component/Footer'


import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Allocation from './Pages/Allocation'
import TransportRequest from './Pages/TransportRequest'
import Vehicles from './Pages/Vehicles'
import Driver from './Pages/Driver'
import About from './Pages/About'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allocation" element={<Allocation />} />
        <Route path="/request" element={<TransportRequest />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/drivers" element={<Driver />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App