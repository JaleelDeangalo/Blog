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
           <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
           <div className = "container">
           <Link className="navbar-brand" to = "/" >Home</Link>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
           </button>

           <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav m-auto">
           <li className="nav-item active">
           <Link className="nav-link"  to="#">About <span className="sr-only">(current)</span></Link>
           </li>
           <li className="nav-item active">
           <Link className="nav-link"  to="#">Contact</Link>
           </li>
           <li className="nav-item active">
           <Link className="nav-link"  to="#">Shop</Link>
           </li>
           <li className="nav-item dropdown">
           <Link className="nav-link dropdown-toggle"  to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Categories
           </Link>
           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
           <Link className="dropdown-item" to="#">Shirts</Link>
           <Link className="dropdown-item" to="#">Shoes</Link>
           <Link className="dropdown-item" to="#">Pants</Link>
           </div>
           </li>
           </ul>
           <ul className="navbar-nav m-auto">
           <li className="nav-item active">
           <Link className="nav-link"  to="/signup">Sign Up <span className="sr-only">(current)</span></Link>
           </li>
           <li className="nav-item active">
           <Link className="nav-link"  to="/signin">Sign In</Link>
           </li>
           </ul>
           <form onSubmit = {submit} className = "form-inline my-2 my-lg-0">
           <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
           <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
           </form>
           </div>
           </div>
           </nav>
    </>
)
};


export default withRouter(Navbar);