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

import JsonData from "./data/data.json"
import SmoothScroll from "smooth-scroll"

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
})

const App = () => {
    const [landingPageData, setLandingPageData] = useState({});
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        setLandingPageData(JsonData)
    }, [])


    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage());
        })
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
        }
    }, [currentUser]);

    const logOut = () => {
        dispatch(logout());
    };

    return (
        <div>
            <Homepage />
        </div>
    );
};


export default App

