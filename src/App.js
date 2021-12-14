import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import FoodDetails from "./Components/FoodDetails";
import Food from "./Components/Food";
import './App.css';

function App() {
  return (
    <Router>
       <Navbar/>
      <Switch>
      <Route exact path = "/">
        <div className="login">
         
         
          {/* <FoodDetails/> */}
        </div>
          
        </Route>
      <Route  path = "/login">
        <div className="login">
         
          <Login/>
        </div>
          
        </Route>
        
        <Route exact path = "/signup">
        <div className="login">
         
          <SignUp/>
        </div>
          
        </Route>
        <Route exact path = "/food">
        <div className="login">
         {/* <FoodDetails/> */}
          <Food/>
        </div>
          
        </Route>
      </Switch>
     
    </Router>
    
  );
}

export default App;
