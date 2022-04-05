import React from 'react';
import Feature from './screens/feature';
import Chart from './screens/chart';
import './App.css';
import { BrowserRouter as Router,Route, Routes, } from "react-router-dom";


function App() {
  return (
    < >
    <Router>
    <Routes>
      <Route path="/" element={<Feature/>} />
      <Route path="/chart" element={<Chart/>} />
     
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
