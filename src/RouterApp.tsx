import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/landing-page/Home'
import E404 from './pages/error/E404'

function RouterApp() {
    console.log("zeru website. created by Justine, © 2023-2024 all rights reserved.");
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/auth/login" element={<Home />} />
        <Route path="/auth/register" element={<Home />} />
        <Route path="*" element={<E404 />} />
      </Routes>
     </Router>
    )
}

export default RouterApp
