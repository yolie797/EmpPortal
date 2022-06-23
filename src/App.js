import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from './components/home';
import Employees from './components/employee';
import Navbar from './components/layout/navbar';


function App() {
  return (
    <div  className="container">
      <Navbar/>
    <Home/>
    </div>
  );
}

export default App;
