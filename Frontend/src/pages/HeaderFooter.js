import React from 'react';
import { NavLink, Link, useRouteMatch } from "react-router-dom";

// Managers
import URLSettings from '../settings'

// Animations
import { FadeInLeft } from '../style/animations'

export default () => {
    let match = useRouteMatch();
    let bg = match.url === "/" ? "" : "bg-dark";

    return (
        <nav className={`navbar fixed-top navbar-expand-lg navbar-dark ${bg}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to={URLSettings.getURL("Home")}>
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
                            <Link className="nav-link" to={URLSettings.getURL("Basket")}>
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

export const Footer = () => {
    return (
        <div>
            <div id="footer">
                <div className="container">
                    <div className="row text-center  text-left">
                        <div className="col-xs-12 col-sm-4 col-md-4 text-left">
                            <FadeInLeft><h3>Software <span className="color1">Zoid</span></h3></FadeInLeft>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ducimus quos magni, maiores odio,</p>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 text-left">
                            <h5 className='font-weight-bold'>Quick Linke</h5>
                            <ul className="list-unstyled quick-links">
                                <li><Link to={URLSettings.getURL("Home")}>Home</Link></li>
                                <li><Link to={URLSettings.getURL("Products")}>Products</Link></li>
                                <li><Link to={URLSettings.getURL("FAQ")}>FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4 text-left">
                            <h5 className='font-weight-bold'>Contact</h5>
                            <p>lorem text</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-3 text-center">
                            <FadeInLeft><Link to={URLSettings.getURL("Home")}><h3>Copyright 2019 <sup>&#9400;	</sup> Software <span className="color1">Zoid</span></h3></Link></FadeInLeft>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}