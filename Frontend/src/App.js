import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

// Managers
import URLSettings from './settings'

// Pages Import
import Header, { HomeHeader, Footer } from './pages/HeaderFooter'
import LoginForm from './login/LoginForm';
import Data from './pages/Data';
import ProductDetails from "./pages/ProductDetails";
import FAQ from './pages/FAQ';
import Basket from './pages/Basket'
import Contact from "./pages/Contact";

// Images
import Martin from './images/Martin.jpg'
import Asger from './images/Asger.jpg'
import William from './images/William.jpg'
import Emil from './images/Emil.png'

// Animations
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


function App() {
  return (
    <div className="App">
      <Switch>
        {/* NO MORE ROUTES HERE!!!!  */}
        <Route exact path={URLSettings.getURL("Home")}> <HomeHeader /> </Route>
        <Route path={URLSettings.getURL("NoMatch")}> <Header /> </Route>
      </Switch>
      <main>
        <div className="container-fluid py-3 mt-5 pt-5 pb-5">
          <Switch>
            {/* NEW ROUTES GOES HERE!  */}
            <Route exact path={URLSettings.getURL("Home")}> <Home /> </Route>
            <Route path={URLSettings.getURL("Login")}> <LoginForm /> </Route>
            <Route path={URLSettings.getURL("Data")}> <Data /> </Route>
            <Route path={URLSettings.getURL("FAQ")}> <FAQ /> </Route>
            <Route path={URLSettings.getURL("Basket")}> <Basket /> </Route>
            <Route path={URLSettings.getURL("ProductId", "id")}> <ProductDetails /> </Route>
            <Route path={URLSettings.getURL("Contact")}> <Contact /> </Route>
            <Route path={URLSettings.getURL("NoMatch")}> <NoMatch /> </Route>
          </Switch>
        </div>
      </main>
      <Footer />
    </div>
  )
}

const NoMatch = () => <div>No match!</div>

const Home = () => {
  return (
    <div>
      <section class="bestSeller-wrap" id="bestSeller">
        <div class="container-fluid">
          <ScrollAnimation animateIn="fadeInUp">
            <h2 class="title-bestSeller"> best seller</h2>
            <p class="subtitle-bestSeller">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leoleo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceInUp"><div class="row">
            <div class="col-md-3">
              <div class="card">
                <figure class="text-center">
                  <img src="https://images.pexels.com/photos/1432942/pexels-photo-1432942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    class="img-fluid" />
                </figure>
                <div class="card-body">
                  <h5 class="card-title">Lorem ipsum dolor sit amet</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo
                                        leo ornare nec vulputate tempus.</p>
                  <a href="product-details.html" class="btn-zoid">Show Details</a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <figure class="text-center">
                  <img src="https://images.pexels.com/photos/929831/pexels-photo-929831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    class="img-fluid" />
                </figure>
                <div class="card-body">
                  <h5 class="card-title">Lorem ipsum dolor sit amet</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo
                                        leo ornare nec vulputate tempus.</p>
                  <a href="product-details.html" class="btn-zoid">Show Details</a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <figure class="text-center">
                  <img src="https://images.pexels.com/photos/929831/pexels-photo-929831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    class="img-fluid" />
                </figure>
                <div class="card-body">
                  <h5 class="card-title">Lorem ipsum dolor sit amet</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo
                                            leo ornare nec vulputate tempus.</p>
                  <a href="product-details.html" class="btn-zoid">Show Details</a>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card">
                <figure class="text-center">
                  <img src="https://images.pexels.com/photos/938965/pexels-photo-938965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    class="img-fluid" />
                </figure>
                <div class="card-body">
                  <h5 class="card-title">Lorem ipsum dolor sit amet</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo
                                        leo ornare nec vulputate tempus.</p>
                  <a href="product-details.html" class="btn-zoid">Show Details</a>
                </div>
              </div>
            </div>
          </div></ScrollAnimation>
        </div>
      </section>

      <section class="testimonials-wrap" id="testimonials">
        <div class="sesgoarriba"></div>
        <div class="container">
          <div class="contenedor">

            <ScrollAnimation animateIn="fadeInUp">
              <h2 class="title-testimonials">Happy Clients</h2>
              <h3 class="subtitle-testimonials">Lorem ipsum dolor sit amet consectetur adipiscing
                elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus</h3>
            </ScrollAnimation>

            <div class="slide-one">
              <div id="demo" class="carousel slide" data-ride="carousel">

                <ul class="carousel-indicators">
                  <li data-target="#demo" data-slide-to="0" class="active"></li>
                  <li data-target="#demo" data-slide-to="1"></li>
                  <li data-target="#demo" data-slide-to="2"></li>
                </ul>

                <div class="carousel-inner">
                  <div class="carousel-item active animated zoomIn">
                    <div class="row">
                      <div class="banner-slide col-md-3">
                        <h3 >
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </h3>
                        <h5>Title</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                            nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                            </p>
                        <h4 class="h6 font-weight-bold color1">
                          Mr.Anderas
                            </h4>
                      </div>
                      <div class="banner-slide col-md-3">
                        <h3 >
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </h3>
                        <h5>Title</h5>
                        <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                            nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                </p>
                        <h4 class="h6 font-weight-bold color1">
                          Mr.John
                                    </h4>
                      </div>
                      <div class="banner-slide col-md-3">
                        <h3 >
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half-o"></i>
                        </h3>
                        <h5>Title</h5>
                        <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                            nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                    </p>
                        <h4 class="h6 font-weight-bold color1">
                          Mr.Ahmed
                                        </h4>
                      </div>
                      <div class="banner-slide col-md-3">
                        <h3 >
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half-o"></i>
                        </h3>
                        <h5>Title</h5>
                        <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                            nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                        </p>
                        <h4 class="h6 font-weight-bold color1">
                          Mr.Anderas
                                            </h4>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row">
                      <div class="banner-slide col-md-3">
                        <h3 >
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </h3>
                        <h5>Title</h5>
                        <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                            nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                            </p>
                        <h4 class="h6 font-weight-bold color1">
                          Mr.Anderas
                                </h4>
                      </div>
                      <div class="banner-slide col-md-3">
                        <h3 >
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </h3>
                        <h5>Title</h5>
                        <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                            nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                </p>
                        <h4 class="h6 font-weight-bold color1">
                          Mr.Anderas
                                    </h4>
                      </div>
                      <div class="banner-slide col-md-3">

                        <h3 >
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </h3>
                        <h5>Title</h5>
                        <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                            nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                    </p>
                        <h4 class="h6 font-weight-bold color1">
                          Mr.Anderas
                                        </h4>
                      </div>
                      <div class="banner-slide col-md-3">
                        <h3 >
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </h3>
                        <h5>Title</h5>
                        <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                            nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                        </p>
                        <h4 class="h6 font-weight-bold color1">
                          Mr.Anderas
                                            </h4>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row">
                      <div class="banner-slide col-md-3">
                        <h3 >
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </h3>
                        <h5>Title</h5>
                        <p>Lorem3 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                                nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.</p>
                      </div>
                      <div class="banner-slide col-md-3">
                        <h3 >
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </h3>
                        <h5>Title</h5>
                        <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                            nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                </p>
                        <h4 class="h6 font-weight-bold color1">
                          Mr.Anderas
                                    </h4>
                      </div>
                      <div class="banner-slide col-md-3">
                        <h3 >
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </h3>
                        <h5>Title</h5>
                        <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                            nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                    </p>
                      </div>
                      <div class="banner-slide col-md-3">
                        <h3 >
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </h3>
                        <h5>Title</h5>
                        <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                            nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                        </p>
                        <h4 class="h6 font-weight-bold color1">
                          Mr.Anderas
                                            </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <a class="carousel-control-prev " href="#demo" data-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </a>

              </div>
            </div>

          </div>
        </div>
        <div class="sesgoabajo"></div>
      </section>

      <section class="our-team" id="team">
        <div class="container">
          <ScrollAnimation animateIn="fadeInUp">
            <h2 class="title-our-team">Our Team</h2>
            <p class="subtitle-our-team">Lorem ipsum dolor sit amet consectetur adipiscing elit proin
                        leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus</p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft">
            <ul class="row">
              <li class="col-12 col-md-6 col-lg-3">
                <div class="mycard-block equal-hight">
                  <figure><img
                    src={Martin}
                    class="img-fluid" alt="" /></figure>
                  <h3><a href="javascript:void(0)">Martin Eli Frederiksen</a></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  <ul class="follow-us clearfix">
                    <li><a href="https://github.com/MartinFrederiksen" class="btn btn-circle my-social-btn fb"><i
                      class="fa fa-github"></i></a></li>
                    <li><a href="https://melif.dk/" class="btn btn-circle my-social-btn twitter"><i
                      class="fa fa-globe"></i></a></li>
                  </ul>
                </div>
              </li>
              <li class="col-12 col-md-6 col-lg-3">
                <div class="mycard-block equal-hight">
                  <figure><img
                    src={Asger}
                    class="img-fluid" alt="" /></figure>
                  <h3><a href="javascript:void(0)">Asger Hermind Sørensen</a></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  <ul class="follow-us clearfix">
                    <li><a href="https://github.com/asgerhs" class="btn btn-circle my-social-btn fb"><i
                      class="fa fa-github"></i></a></li>
                    <li><a href="https://asgerhs.dk/" class="btn btn-circle my-social-btn twitter"><i
                      class="fa fa-globe"></i></a></li>
                  </ul>
                </div>
              </li>
              <li class="col-12 col-md-6 col-lg-3">
                <div class="mycard-block equal-hight">
                  <figure><img
                    src={William}
                    class="img-fluid" alt="" /></figure>
                  <h3><a href="javascript:void(0)">William Huusfeldt</a></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  <ul class="follow-us clearfix">
                    <li><a href="https://github.com/WSHuusfeldt" class="btn btn-circle my-social-btn fb"><i
                      class="fa fa-github"></i></a></li>
                    <li><a href="https://williamhuusfeldt.dk/" class="btn btn-circle my-social-btn twitter"><i
                      class="fa fa-globe"></i></a></li>
                  </ul>
                </div>
              </li>
              <li class="col-12 col-md-6 col-lg-3">
                <div class="mycard-block equal-hight">
                  <figure><img
                    src={Emil}
                    class="img-fluid" alt="" /></figure>
                  <h3><a href="javascript:void(0)">Emil Svensmark</a></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                  <ul class="follow-us clearfix">
                    <li><a href="https://github.com/Svensmark" class="btn btn-circle my-social-btn fb"><i
                      class="fa fa-github"></i></a></li>
                    <li><a href="https://svense.dk/" class="btn btn-circle my-social-btn twitter"><i
                      class="fa fa-globe"></i></a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}

export default App;