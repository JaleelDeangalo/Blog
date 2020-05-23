import React, {useState, useEffect} from "react";
import {Link, withRouter} from "react-router-dom"

const Posts = () => {

    return (
        <>

<section className="call-to-action">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-content">
              <div className="row">
                <div className="col-lg-8">
                  <span>Stand Blog HTML5 Template</span>
                  <h4>Creative HTML Template For Bloggers!</h4>
                </div>
                <div className="col-lg-4">
                  <div className="main-button">
                    <Link to="https://templatemo.com/tm-551-stand-blog" target="_parent">Download Now!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <section className="blog-posts">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="all-blog-posts">
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog-post">
                    <div className="blog-thumb">
                      <img src="" alt=""/>
                    </div>
                    <div className="down-content">
                      <span>Lifestyle</span>
                      <Link to="post-details.html"><h4>Best Template Website for HTML CSS</h4></Link>
                      <ul className="post-info">
                        <li><Link to="#">Admin</Link></li>
                        <li><Link to="#">May 31, 2020</Link></li>
                        <li><Link to="#">12 Comments</Link></li>
                      </ul>
                      <p>Stand Blog is Link free HTML CSS template for your CMS theme. You can easily adapt or customize it for any kind of CMS or website builder. You are allowed to use it for your business. You are NOT allowed to re-distribute the template ZIP file on any template collection site for the download purpose. <Link to="https://templatemo.com/contact" target="_parent">Contact TemplateMo</Link> for more info. Thank you.</p>
                      <div className="post-options">
                        <div className="row">
                          <div className="col-6">
                            <ul className="post-tags">
                              <li><i className="fa fa-tags"></i></li>
                              <li><Link to="#">Beauty</Link>,</li>
                              <li><Link to="#">Nature</Link></li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul className="post-share">
                              <li><i className="fa fa-share-alt"></i></li>
                              <li><Link to="#">Facebook</Link>,</li>
                              <li><Link to="#"> Twitter</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="blog-post">
                    <div className="blog-thumb">
                      <img src="" alt=""/>
                    </div>
                    <div className="down-content">
                      <span>Healthy</span>
                      <Link to="post-details.html"><h4>Etiam id diam vitae lorem dictum</h4></Link>
                      <ul className="post-info">
                        <li><Link to="#">Admin</Link></li>
                        <li><Link to="#">May 24, 2020</Link></li>
                        <li><Link to="#">36 Comments</Link></li>
                      </ul>
                      <p>You can support us by contributing Link little via PayPal. Please contact <Link rel="nofollow" to="https://templatemo.com/contact" target="_parent">TemplateMo</Link> via Live Chat or Email. If you have any question or feedback about this template, feel free to talk to us. Also, you may check other CSS templates such as <Link to="https://templatemo.com/tag/multi-page" target="_parent">multi-page</Link>, <Link to="https://templatemo.com/tag/resume" target="_parent">resume</Link>, <Link to="https://templatemo.com/tag/video" target="_parent">video</Link>, etc.</p>
                      <div className="post-options">
                        <div className="row">
                          <div className="col-6">
                            <ul className="post-tags">
                              <li><i className="fa fa-tags"></i></li>
                              <li><Link to="#">Best Templates</Link>,</li>
                              <li><Link to="#">TemplateMo</Link></li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul className="post-share">
                              <li><i className="fa fa-share-alt"></i></li>
                              <li><Link to="#">Facebook</Link>,</li>
                              <li><Link to="#">Twitter</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="blog-post">
                    <div className="blog-thumb">
                      <img src="" alt=""/>
                    </div>
                    <div className="down-content">
                      <span>Fashion</span>
                      <Link to="post-details.html"><h4>Donec tincidunt leo nec magna</h4></Link>
                      <ul className="post-info">
                        <li><Link to="#">Admin</Link></li>
                        <li><Link to="#">May 14, 2020</Link></li>
                        <li><Link to="#">48 Comments</Link></li>
                      </ul>
                      <p>Nullam at quam ut lacus aliquam tempor vel sed ipsum. Donec pellentesque tincidunt imperdiet. Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet, feugiat viverra leo. Phasellus interdum, diam commodo egestas rhoncus, turpis nisi consectetur nibh, in vehicula eros orci vel neque.</p>
                      <div className="post-options">
                        <div className="row">
                          <div className="col-6">
                            <ul className="post-tags">
                              <li><i className="fa fa-tags"></i></li>
                              <li><Link to="#">HTML CSS</Link>,</li>
                              <li><Link to="#">Photoshop</Link></li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul className="post-share">
                              <li><i className="fa fa-share-alt"></i></li>
                              <li><Link to="#">Facebook</Link>,</li>
                              <li><Link to="#">Twitter</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button">
                    <Link to="blog.html">View All Posts</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sidebar-item search">
                    <form id="search_form" name="gs" method="GET" action="#">
                      <input type="text" name="q" className="searchText" placeholder="type to search..." autoComplete="on"/>
                    </form>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="sidebar-item recent-posts">
                    <div className="sidebar-heading">
                      <h2>Recent Posts</h2>
                    </div>
                    <div className="content">
                      <ul>
                        <li><Link to="post-details.html">
                          <h5>Vestibulum id turpis porttitor sapien facilisis scelerisque</h5>
                          <span>May 31, 2020</span>
                        </Link></li>
                        <li><Link to="post-details.html">
                          <h5>Suspendisse et metus nec libero ultrices varius eget in risus</h5>
                          <span>May 28, 2020</span>
                        </Link></li>
                        <li><Link to="post-details.html">
                          <h5>Swag hella echo park leggings, shaman cornhole ethical coloring</h5>
                          <span>May 14, 2020</span>
                        </Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="sidebar-item categories">
                    <div className="sidebar-heading">
                      <h2>Categories</h2>
                    </div>
                    <div className="content">
                      <ul>
                        <li><Link to="#">- Nature Lifestyle</Link></li>
                        <li><Link to="#">- Awesome Layouts</Link></li>
                        <li><Link to="#">- Creative Ideas</Link></li>
                        <li><Link to="#">- Responsive Templates</Link></li>
                        <li><Link to="#">- HTML5 / CSS3 Templates</Link></li>
                        <li><Link to="#">- Creative &amp; Unique</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="sidebar-item tags">
                    <div className="sidebar-heading">
                      <h2>Tag Clouds</h2>
                    </div>
                    <div className="content">
                      <ul>
                        <li><Link to="#">Lifestyle</Link></li>
                        <li><Link to="#">Creative</Link></li>
                        <li><Link to="#">HTML5</Link></li>
                        <li><Link to="#">Inspiration</Link></li>
                        <li><Link to="#">Motivation</Link></li>
                        <li><Link to="#">PSD</Link></li>
                        <li><Link to="#">Responsive</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        </>
    )
};


export default Posts;