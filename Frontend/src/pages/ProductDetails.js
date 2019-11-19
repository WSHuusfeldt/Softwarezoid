import React from 'react';
import { NavLink, Link, useRouteMatch } from "react-router-dom";
import URLSettings from '../settings';

const HeaderNav = () => {
    let match = useRouteMatch();
    let bg = match.url == "/" ? "" : "bg-dark";

    return (
        <nav className={`navbar fixed-top navbar-expand-lg navbar-dark ${bg}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" activeClassName="active" exact to={URLSettings.getURL("Home")}>
                    <h3 className="my-heading text-uppercase">Software <span className="color1">Zoid</span></h3>
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="fa fa-bars mfa-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" exact to={URLSettings.getURL("Home")}>Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to={URLSettings.getURL("Data")}>Data</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to={URLSettings.getURL("Products")}>Products</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to={URLSettings.getURL("Contact")}>Contact</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to={URLSettings.getURL("FAQ")}>FAQ</NavLink></li>
                        <li className="nav-item">
                            <Link to={URLSettings.getURL("Basket")}>
                                <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                                <span className="badge color2 bg-white badge-pill">1</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}



export default function productDetails() {
    return (
        < main class="mt-5 mb-5 pt-5" >
            <div class="container">
                <HeaderNav />
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <div class="product-content product-wrap clearfix product-deatil">
                        <div class="row">
                            <div class="col-md-6 col-sm-12 col-xs-12 ">
                                <div class="product-image">
                                    <div id="demo" class="carousel slide" data-ride="carousel">

                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src="data:image/png;base64,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" alt="Los Angeles" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12">

                                <h2 class="name pt-3">
                                    NetBeans</h2>
                                <hr />
                                <p class="desc">
                                    NetBeans is an integrated development environment (IDE) for Java. NetBeans allows applications to be developed from a set of modular software components called modules.
                                     NetBeans runs on Windows, macOS, Linux and Solaris. In addition to Java development, it has extensions for other languages like PHP, C, C++, HTML5, and JavaScript.
                                      Applications based on NetBeans, including the NetBeans IDE, can be extended by third party developers
                                </p>
                                <div class="row">
                                    <div class="col-md-6 price">
                                        <h2 class="font-weight-bold">100,00 $</h2>
                                    </div>
                                    <div class="col-md-6 text-right">
                                        <button class="btn btn-zoid">
                                            Add to Cart
                                </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-xs-12 mt-5">
                                <div class="description description-tabs">
                                    <ul id="myTab" class="nav nav-tabs">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#more-information" data-toggle="tab" class="no-margin">Description </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#specifications" data-toggle="tab">Specifications</a></li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#reviews" data-toggle="tab">Reviews</a></li>
                                    </ul>
                                    <div id="myTabContent" class="tab-content">
                                        <div class="tab-pane container active in" id="more-information">
                                            <br />
                                            <strong>Description Title</strong>
                                            <p>Integer egestas, orci id condimentum eleifend, nibh nisi pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet lectus sed odio eleifend, at iaculis dolor egestas. Nunc elementum pellentesque augue sodales porta. Etiam aliquet rutrum turpis, feugiat sodales ipsum consectetur nec. </p>
                                        </div>
                                        <div class="tab-pane container fade" id="specifications">
                                            <br />
                                            <dl class="">
                                                <dt>Gravina</dt>
                                                <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                                                <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                                                <dd>Eget lacinia odio sem nec elit.</dd>
                                                <br />

                                                <dt>Test lists</dt>
                                                <dd>A description list is perfect for defining terms.</dd>
                                                <br />

                                                <dt>Altra porta</dt>
                                                <dd>Vestibulum id ligula porta felis euismod semper</dd>
                                            </dl>
                                        </div>
                                        <div class="tab-pane container fade" id="reviews">
                                            <br />
                                            <form method="post" class="well padding-bottom-10" onsubmit="return false;">
                                                <textarea rows="2" class="form-control" placeholder="Write a review"></textarea>
                                                <div class="mt-2">
                                                    <button type="submit" class="btn btn-sm btn-primary pull-right">
                                                        Submit Review
                                                    </button>
                                                    <a class="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add Location"><i class="fa fa-location-arrow"></i></a>
                                                    <a class="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add Voice"><i class="fa fa-microphone"></i></a>
                                                    <a class="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add Photo"><i class="fa fa-camera"></i></a>
                                                    <a class="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add File"><i class="fa fa-file"></i></a>
                                                </div>
                                            </form>

                                            <div class="chat-body no-padding profile-message">
                                                <ul>
                                                    <li class="message mt-2">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="online" />
                                                        <span class="message-text">
                                                            <a class="username">
                                                                <span class="font-weight-bold">Andreas  </span>
                                                                <span class="badge">Purchase Verified</span>
                                                                <span class="pull-right">
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                    <i class="fa fa-star fa-1x text-muted"></i>
                                                                </span>
                                                            </a>
                                                            Can't divide were divide fish forth fish to. Was can't form the, living life grass darkness
                                                        </span>

                                                    </li>
                                                    <li class="message mt-2">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="online" />
                                                        <span class="message-text">
                                                            <a class="username">
                                                                <span class="font-weight-bold">Aragon Zarko </span>
                                                                <span class="badge">Purchase Verified</span>
                                                                <span class="pull-right">
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                </span>
                                                            </a>
                                                            Excellent product, love it!
                                                        </span>

                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}