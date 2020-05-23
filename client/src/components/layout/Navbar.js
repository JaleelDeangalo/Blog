import React, {useState, useEffect} from "react";
import {Link, withRouter} from "react-router-dom"


const Navbar = () => {
    

    const [ search, setSearch ] = useState({});
const submit = (e) => {
    e.preventDefault();
};

const change = () => {

}

return (
    <>
        <nav className="navbar navbar-expand-lg">
        <div className="container">
        <Link className="navbar-brand" to="#"><h2>Blog<em>.</em></h2></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
        <Link className="nav-link" to="#">Home
        <span className="sr-only">(current)</span>
        </Link>
        </li> 
        <li className="nav-item">
        <Link className="nav-link" to="#">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="#">Blog Entries</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="#">Post Details</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="#">Contact</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="#">Sign Up</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="#">Sign In</Link>
        </li>
        </ul>
        </div>
        </div>
        </nav>
    </>
)
};


export default withRouter(Navbar);