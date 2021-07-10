import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import {clearMessage} from "./actions/message";
import { history } from "./helpers/history";
import { logout } from "./actions/auth";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";



const App = () => {
    const [showUserBoard, setShowUserBoard] = useState(false);
    
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage());
        })
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            setShowUserBoard(currentUser.roles.includes("ROLE_USER"));
        }
    }, [currentUser]);

    const logOut = () => {
        dispatch(logout());
    };

    return (
        <Homepage />
    );
};


export default App;
