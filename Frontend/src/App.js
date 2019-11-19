import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Link, useRouteMatch } from "react-router-dom";
import './style/App.css';
import LoginForm from './login/LoginForm';
import URLSettings from './settings'
import Data from './Data';
import ProductDetails from "./ProductDetails";

import { fadeInLeft, bounce, fadeInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const FadeInLeft = styled.div`animation: 1.5s ${keyframes`${fadeInLeft}`}`;
const FadeInUp = styled.div`animation: 1.1s ${keyframes`${fadeInUp}`}`;
const Bounce = styled.div`animation: 3s ${keyframes`${bounce}`} infinite`;


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={URLSettings.getURL("Home")}> <Welcome /> </Route>
          <Route path={URLSettings.getURL("ProductId")}> <ProductDetails /> </Route>
          <Route path={URLSettings.getURL("NoMatch")}> <HeaderNav /> </Route>
        </Switch>
        <main>
        <div className="container-fluid py-3 mt-5 pt-5 pb-5">
          <Switch>
            <Route path={URLSettings.getURL("Login")}> <LoginForm /> </Route>
            <Route path={URLSettings.getURL("Data")}> <Data /> </Route>
            <Route path={URLSettings.getURL("About")}> <About /> </Route>
            <Route path={URLSettings.getURL("NoMatch")}> <NoMatch /> </Route>
          </Switch>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

const HeaderNav = () => {
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

const Footer = () => {
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

const About = () => <div>About</div>

const NoMatch = () => <div>No match!</div>

//If Welcome function reaches about 10 lines of code place the function in separate file.
function Welcome() {
  return (
    <header id="home">
      <div className="overlay"></div>

      <HeaderNav />

      <div className="tophead">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <FadeInLeft><h1 className="title-main">Software <span>Zoid</span></h1></FadeInLeft>

              <FadeInUp><h3 className="subtitle-main">Lorem ipsum dolor sit amet
                            consectetur adipiscing elit <br /> proin leo leo ornare nec vulputate tempus velit nam id purus
                            tellus hendrerit mi dapibus.</h3></FadeInUp>

              <a href="#bestSeller" className="arrowDown">
                <Bounce><i className="fa fa-angle-down  slideInAnimate justify-content-center"></i></Bounce>
              </a>
            </div>

          </div>
        </div>
      </div>
      <div className="sesgoabajo"></div>
    </header>
  )
}

export default App;