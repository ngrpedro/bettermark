import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import Services from './pages/Services'
import Results from './pages/Results';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Results" element={<Results />} />
        </Routes>
    )
}

export default Router
