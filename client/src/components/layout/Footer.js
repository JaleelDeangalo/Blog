import React, {useState, useEffect} from "react";
import {Link, Switch, withRouter} from "react-router-dom";


const Footer = () => {
     
    return (
        <>
            <footer>
            <div class="container">
            <div class="row">
            <div class="col-lg-12">
            <ul class="social-icons">
            <li><Link to="#">Facebook</Link></li>
            <li><Link to="#">Twitter</Link></li>
            <li><Link to="#">Behance</Link></li>
            <li><Link to="#">Linkedin</Link></li>
            <li><Link to="#">Dribbble</Link></li>
            </ul>
            </div>
            <div class="col-lg-12">
            <div class="copyright-text">
            <p>Copyright 2020 Stand Blog Co.
                            
            | Design: <Link to="https://templatemo.com" target="_parent">TemplateMo</Link></p>
            </div>
            </div>
            </div>
            </div>
            </footer>
    </>
    )
};


export default Footer;