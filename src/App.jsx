import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import './App.css'
import NavMenu from './Component/NavMenu/NavMenu.jsx';
import NewsData from './Component/NewsData/NewsData.jsx';
import Home from './pages/1.Home/Home.jsx';
import About from './pages/2.About/About.jsx';
import Contact from './pages/3.Contact/Contact.jsx';
import NewsDetail from './Component/NewsDetail/NewsDetail.jsx';

function App() {
  
  return (
   <div className="App">
      <Router>
        <NavMenu/>
          <Routes>
            <Route exact path="/" element={<NewsData/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/contact" element={<Contact/>}/> 
            <Route exact path="/news/:id" element={<NewsDetail/>}/>

          </Routes>
      </Router>
   </div>
  )
}

export default App
