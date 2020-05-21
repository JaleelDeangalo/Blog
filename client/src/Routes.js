import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignUp from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";


const Routes = () => {

    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route path = "/signin" exact component = {SignUp}/>
                <Route path = "/signup" exact component = {Login}/>
                <Route path = "/" exact component = {Dashboard}/>
            </Switch>
        </Router>
    )
}


export default Routes;