import React from 'react';
import { NavLink, Link, useRouteMatch } from "react-router-dom";

// Managers
import URLSettings from '../settings'

// Animations
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Bounce } from '../style/animations'

const Header = () => {
    let match = useRouteMatch();
    let bg = match.url === "/" ? "" : "bg-dark";
    let basketSize = localStorage.getItem("basket") != null ? JSON.parse(localStorage.getItem("basket")).length : "";

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
                                <span className="badge color2 bg-white badge-pill">{basketSize}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;

export const HomeHeader = () => {
    return (
      <header id="home">
        <div className="overlay"></div>
  
        <Header />
  
        <div className="tophead">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <ScrollAnimation animateIn="fadeInLeft"><h1 className="title-main">Software <span>Zoid</span></h1></ScrollAnimation>
  
                <ScrollAnimation animateIn="fadeInUp"><h3 className="subtitle-main">Lorem ipsum dolor sit amet
                              consectetur adipiscing elit <br /> proin leo leo ornare nec vulputate tempus velit nam id purus
                              tellus hendrerit mi dapibus.</h3></ScrollAnimation>
  
                <a href="#bestSeller" className="arrowDown">
                  <Bounce><i className="fa fa-angle-down justify-content-center"></i></Bounce>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sesgoabajo"></div>
      </header>
    )
  }

export const Footer = () => {
    return (
        <div>
            <div id="footer">
                <div className="container">
                    <div className="row text-center  text-left">
                        <div className="col-xs-12 col-sm-4 col-md-4 text-left">
                            <ScrollAnimation animateIn="fadeInLeft"><h3>Software <span className="color1">Zoid</span></h3></ScrollAnimation>
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
                            <Link to={URLSettings.getURL("Home")}><h3>Copyright 2019 <sup>&#9400;	</sup> Software <span className="color1">Zoid</span></h3></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}