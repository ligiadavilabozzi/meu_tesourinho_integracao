import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import {clearMessage} from "./actions/message";
import { history } from "./helpers/history";
import { logout } from "./actions/auth";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";



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
        <Router history={history}>
            <div>
                <nav className="navbar navbar-expand navbar dark bg-dark">
                    <Link to={"/"} className="navbar-brand">
                        DH
                    </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/homepage"} className="nav-link">
                                Homepage
                            </Link>
                        </li>

                        {currentUser && (
                            <li className="nav-item">
                                <Link to={"/dashboard"} className="nav-link">
                                    User
                                </Link>
                            </li>
                        )}

                        {currentUser ? (
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to={"/profile"} className="nav-link">
                                        {currentUser.username}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/login" className="nav-link" onClick={logOut}>
                                        Logout
                                    </a>
                                </li>
                            </div>
                        ) : (

                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to={"/login"} className="nav-link">
                                        Login
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/register"} className="nav-link">
                                        Sign Up
                                    </Link>
                                </li>
                            </div>
                        )}
                    </div>
                </nav>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/homepage"]} component={Homepage} />
                        <Route exact path={"/login"} component={Login} />
                        <Route exact path={"/register"} component={Register} />
                        <Route exact path={"/dashboard"} component={Dashboard} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};


export default App;
