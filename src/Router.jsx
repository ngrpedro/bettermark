import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import Services from './pages/Services'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Services" element={<Services />} />
        </Routes>
    )
}

export default Router
