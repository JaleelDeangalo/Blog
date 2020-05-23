import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";


const Home = () => {


    return( 
    <>
        <div className="main-banner header-text">
        <div className="container-fluid">
        <div className="owl-banner owl-carousel">
        <div className="item">
        <img src="" alt=""/>
        <div className="item-content">
        <div className="main-content">
        <div className="meta-category">
        <span>Fashion</span>
        </div>
        <Link to="#"><h4>Morbi dapibus condimentum</h4></Link>
        <ul className="post-info">
        <li><Link to="#">Admin</Link></li>
        <li><Link to="#">May 12, 2020</Link></li>
        <li><Link to="#">12 Comments</Link></li>
        </ul>
        </div>
        </div>
        </div>
        <div className="item">
        <img src="" alt=""/>
        <div className="item-content">
        <div className="main-content">
        <div className="meta-category">
        <span>Nature</span>
        </div>
        <Link to="#"><h4>Donec porttitor augue at velit</h4></Link>
        <ul className="post-info">
        <li><Link to="#">Admin</Link></li>
        <li><Link to="#">May 14, 2020</Link></li>
        <li><Link to="#">24 Comments</Link></li>
        </ul>
        </div>
        </div>
        </div>
        <div className="item">
        <img src="" alt=""/>
        <div className="item-content">
        <div className="main-content">
        <div className="meta-category">
        <span>Lifestyle</span>
        </div>
        <Link to="#"><h4>Best HTML Templates on TemplateMo</h4></Link>
        <ul className="post-info">
        <li><Link to="#">Admin</Link></li>
        <li><Link to="#">May 16, 2020</Link></li>
        <li><Link to="#">36 Comments</Link></li>
        </ul>
        </div>
        </div>
        </div>
        <div className="item">
        <img src="" alt=""/>
        <div className="item-content">
        <div className="main-content">
        <div className="meta-category">
        <span>Fashion</span>
        </div>
        <Link to="#"><h4>Responsive and Mobile Ready Layouts</h4></Link>
        <ul className="post-info">
                  <li><Link to="#">Admin</Link></li>
                  <li><Link to="#">May 18, 2020</Link></li>
                  <li><Link to="#">48 Comments</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="" alt=""/>
            <div className="item-content">
              <div className="main-content">
                <div className="meta-category">
                  <span>Nature</span>
                </div>
                <Link to="#"><h4>Cras congue sed augue id ullamcorper</h4></Link>
                <ul className="post-info">
                  <li><Link to="#">Admin</Link></li>
                  <li><Link to="#">May 24, 2020</Link></li>
                  <li><Link to="#">64 Comments</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="" alt=""/>
            <div className="item-content">
              <div className="main-content">
                <div className="meta-category">
                  <span>Lifestyle</span>
                </div>
                <Link to="#"><h4>Suspendisse nec aliquet ligula</h4></Link>
                <ul className="post-info">
                  <li><Link to="#">Admin</Link></li>
                  <li><Link to="#">May 26, 2020</Link></li>
                  <li><Link to="#">72 Comments</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
};


export default Home;