import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Routes from "./routes"
import { BrowserRouter as Router, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import {Dashboard } from "./pages/Dashboard";
import Homepage from "./pages/Homepage";

const App = () => {
   return(
       <Router>
           <Route exact path={Routes.Homepage} component={Homepage}/>
           <Route exact path={Routes.Login} component={Login}/>
           <Route exact path={Routes.Register} component={Register}/>
           <Route exact path={Routes.Dashboard} component={Dashboard}/>
           
       </Router>
   )
};


export default App

