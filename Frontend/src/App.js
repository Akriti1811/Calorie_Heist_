import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
<<<<<<< HEAD
import Food from "./Components/Food";
import FoodDetails from "./Components/FoodDetails";
=======
import FoodDetails from "./Components/FoodDetails";

>>>>>>> b7a401b9eb49f269b90f5c0cfa648cf81a122293
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path = "/">
        <div className="login">
         
          <Navbar/>
          <FoodDetails/>
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
         <FoodDetails/>
          <Food/>
        </div>
          
        </Route>
      </Switch>
     
    </Router>
    
  );
}

export default App;
