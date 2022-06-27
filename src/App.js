import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/pages/home';
import Employees from './components/pages/employee';
import Navbar from './components/layout/navbar';
import PageNotFound from './components/pages/pagenotfound';
import AddEmp from './components/users/addEmp';
import EditEmp from './components/users/editEmp';
import User from './components/users/user';
import Emp from './components/users/user';



function App(props) {
  
  return (
 <Router>
  <div className="App">
  <Navbar/>
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route path="/employee" component={Employees}></Route>
    <Route path="/users/add" component={AddEmp}></Route>
    <Route path="/users/edit/:id" component={EditEmp}></Route>
    <Route path="/users/:id" component={Emp}></Route>
    <Route path="*" component={PageNotFound}></Route>
    
  </Switch>
  </div>
 </Router>
  );
}

export default App;
