import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Curriculum from '../pages/Curriculum'
import Vlogs from '../pages/Vlogs'
import CurrentProjects from '../pages/CurrentProjects'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

const AppRouter = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cv" element={<Curriculum />} />
            <Route path="/vlog" element={<Vlogs />} />
            <Route path="/Proyectos-en-desarrollo" element={<CurrentProjects />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default AppRouter
