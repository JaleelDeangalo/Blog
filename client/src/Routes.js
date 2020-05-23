import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignUp from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Posts from "./components/post/Posts";
import Footer from "./components/layout/Footer";

const Routes = () => {

    return(
        <Router>
            <Navbar/>
           <Home/>
           <Posts/>
           <Footer/>
            <Switch>
                <Route path = "/signin" exact component = {SignUp}/>
                <Route path = "/signup" exact component = {Login}/>
            </Switch>
        </Router>
    )
}


export default Routes;