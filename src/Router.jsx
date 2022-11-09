import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
    )
}

export default Router
