import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function PageRouter() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/blog" element={<Blog />} />
        </Routes>
    )
}

export default PageRouter