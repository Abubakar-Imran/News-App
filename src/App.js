import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

const App = () => {
  const pageSize = 15;
  const country = 'us';
  const apiKey = "f9550944f7ad49fab0952841400a129c";
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News key="general" pageSize={pageSize} apiKey={apiKey} country={country} category="sports" />} />
          <Route exact path='/general' element={<News key="general" pageSize={pageSize} apiKey={apiKey} country={country} category="general" />} />
          <Route exact path='/business' element={<News key="business" pageSize={pageSize} apiKey={apiKey} country={country} category="business" />} />
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={pageSize} apiKey={apiKey} country={country} category="entertainment" />} />
          <Route exact path='/health' element={<News key="health" pageSize={pageSize} apiKey={apiKey} country={country} category="health" />} />
          <Route exact path='/science' element={<News key="science" pageSize={pageSize} apiKey={apiKey} country={country} category="science" />} />
          <Route exact path='/sports' element={<News key="sports" pageSize={pageSize} apiKey={apiKey} country={country} category="sports" />} />
          <Route exact path='/technology' element={<News key="technology" pageSize={pageSize} apiKey={apiKey} country={country} category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;