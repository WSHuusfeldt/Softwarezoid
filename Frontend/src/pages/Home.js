import React from 'react';

// Images
import Martin from '../images/Martin.jpg'
import Asger from '../images/Asger.jpg'
import William from '../images/William.jpg'
import Emil from '../images/Emil.png'

// Animations
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
    return (
      <div>
        <section className="bestSeller-wrap" id="bestSeller">
          <div className="container-fluid">
            <ScrollAnimation animateIn="fadeInUp">
              <h2 className="title-bestSeller"> best seller</h2>
              <p className="subtitle-bestSeller">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leoleo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceInUp"><div className="row">
              <div className="col-md-3">
                <div className="card">
                  <figure className="text-center">
                    <img src="https://images.pexels.com/photos/1432942/pexels-photo-1432942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      className="img-fluid" alt="p" />
                  </figure>
                  <div className="card-body">
                    <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo
                                          leo ornare nec vulputate tempus.</p>
                    <a href="product-details.html" className="btn-zoid">Show Details</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <figure className="text-center">
                    <img src="https://images.pexels.com/photos/929831/pexels-photo-929831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      className="img-fluid" alt="p" />
                  </figure>
                  <div className="card-body">
                    <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo
                                          leo ornare nec vulputate tempus.</p>
                    <a href="product-details.html" className="btn-zoid">Show Details</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <figure className="text-center">
                    <img src="https://images.pexels.com/photos/929831/pexels-photo-929831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      className="img-fluid" alt="p" />
                  </figure>
                  <div className="card-body">
                    <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo
                                              leo ornare nec vulputate tempus.</p>
                    <a href="product-details.html" className="btn-zoid">Show Details</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <figure className="text-center">
                    <img src="https://images.pexels.com/photos/938965/pexels-photo-938965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                      className="img-fluid" alt="p" />
                  </figure>
                  <div className="card-body">
                    <h5 className="card-title">Lorem ipsum dolor sit amet</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo
                                          leo ornare nec vulputate tempus.</p>
                    <a href="product-details.html" className="btn-zoid">Show Details</a>
                  </div>
                </div>
              </div>
            </div></ScrollAnimation>
          </div>
        </section>
  
        <section className="testimonials-wrap" id="testimonials">
          <div className="sesgoarriba"></div>
          <div className="container">
            <div className="contenedor">
  
              <ScrollAnimation animateIn="fadeInUp">
                <h2 className="title-testimonials">Happy Clients</h2>
                <h3 className="subtitle-testimonials">Lorem ipsum dolor sit amet consectetur adipiscing
                  elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus</h3>
              </ScrollAnimation>
  
              <div className="slide-one">
                <div id="demo" className="carousel slide" data-ride="carousel">
  
                  <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                  </ul>
  
                  <div className="carousel-inner">
                    <div className="carousel-item active animated zoomIn">
                      <div className="row">
                        <div className="banner-slide col-md-3">
                          <h3 >
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </h3>
                          <h5>Title</h5>
                          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                              nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                              </p>
                          <h4 className="h6 font-weight-bold color1">
                            Mr.Anderas
                              </h4>
                        </div>
                        <div className="banner-slide col-md-3">
                          <h3 >
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </h3>
                          <h5>Title</h5>
                          <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                              nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                  </p>
                          <h4 className="h6 font-weight-bold color1">
                            Mr.John
                                      </h4>
                        </div>
                        <div className="banner-slide col-md-3">
                          <h3 >
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                          </h3>
                          <h5>Title</h5>
                          <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                              nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                      </p>
                          <h4 className="h6 font-weight-bold color1">
                            Mr.Ahmed
                                          </h4>
                        </div>
                        <div className="banner-slide col-md-3">
                          <h3 >
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                          </h3>
                          <h5>Title</h5>
                          <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                              nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                          </p>
                          <h4 className="h6 font-weight-bold color1">
                            Mr.Anderas
                                              </h4>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="banner-slide col-md-3">
                          <h3 >
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </h3>
                          <h5>Title</h5>
                          <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                              nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                              </p>
                          <h4 className="h6 font-weight-bold color1">
                            Mr.Anderas
                                  </h4>
                        </div>
                        <div className="banner-slide col-md-3">
                          <h3 >
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </h3>
                          <h5>Title</h5>
                          <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                              nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                  </p>
                          <h4 className="h6 font-weight-bold color1">
                            Mr.Anderas
                                      </h4>
                        </div>
                        <div className="banner-slide col-md-3">
  
                          <h3 >
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </h3>
                          <h5>Title</h5>
                          <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                              nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                      </p>
                          <h4 className="h6 font-weight-bold color1">
                            Mr.Anderas
                                          </h4>
                        </div>
                        <div className="banner-slide col-md-3">
                          <h3 >
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </h3>
                          <h5>Title</h5>
                          <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                              nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                          </p>
                          <h4 className="h6 font-weight-bold color1">
                            Mr.Anderas
                                              </h4>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="banner-slide col-md-3">
                          <h3 >
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </h3>
                          <h5>Title</h5>
                          <p>Lorem3 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                                  nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.</p>
                        </div>
                        <div className="banner-slide col-md-3">
                          <h3 >
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </h3>
                          <h5>Title</h5>
                          <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                              nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                  </p>
                          <h4 className="h6 font-weight-bold color1">
                            Mr.Anderas
                                      </h4>
                        </div>
                        <div className="banner-slide col-md-3">
                          <h3 >
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </h3>
                          <h5>Title</h5>
                          <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                              nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                      </p>
                        </div>
                        <div className="banner-slide col-md-3">
                          <h3 >
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </h3>
                          <h5>Title</h5>
                          <p>Lorem2 ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare
                              nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.
                                          </p>
                          <h4 className="h6 font-weight-bold color1">
                            Mr.Anderas
                                              </h4>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <a className="carousel-control-prev " href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                  </a>
  
                </div>
              </div>
  
            </div>
          </div>
          <div className="sesgoabajo"></div>
        </section>
  
        <section className="our-team" id="team">
          <div className="container">
            <ScrollAnimation animateIn="fadeInUp">
              <h2 className="title-our-team">Our Team</h2>
              <p className="subtitle-our-team">Lorem ipsum dolor sit amet consectetur adipiscing elit proin
                          leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus</p>
            </ScrollAnimation>
  
            <ScrollAnimation animateIn="fadeInLeft">
              <ul className="row">
                <li className="col-12 col-md-6 col-lg-3">
                  <div className="mycard-block equal-hight">
                    <figure><img
                      src={Martin}
                      className="img-fluid" alt="" /></figure>
                    <h3>Martin Eli Frederiksen</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    <ul className="follow-us clearfix">
                      <li><a href="https://github.com/MartinFrederiksen" className="btn btn-circle my-social-btn fb"><i
                        className="fa fa-github"></i></a></li>
                      <li><a href="https://melif.dk/" className="btn btn-circle my-social-btn twitter"><i
                        className="fa fa-globe"></i></a></li>
                    </ul>
                  </div>
                </li>
                <li className="col-12 col-md-6 col-lg-3">
                  <div className="mycard-block equal-hight">
                    <figure><img
                      src={Asger}
                      className="img-fluid" alt="" /></figure>
                    <h3>Asger Hermind Sørensen</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    <ul className="follow-us clearfix">
                      <li><a href="https://github.com/asgerhs" className="btn btn-circle my-social-btn fb"><i
                        className="fa fa-github"></i></a></li>
                      <li><a href="https://asgerhs.dk/" className="btn btn-circle my-social-btn twitter"><i
                        className="fa fa-globe"></i></a></li>
                    </ul>
                  </div>
                </li>
                <li className="col-12 col-md-6 col-lg-3">
                  <div className="mycard-block equal-hight">
                    <figure><img
                      src={William}
                      className="img-fluid" alt="" /></figure>
                    <h3>William Huusfeldt</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    <ul className="follow-us clearfix">
                      <li><a href="https://github.com/WSHuusfeldt" className="btn btn-circle my-social-btn fb"><i
                        className="fa fa-github"></i></a></li>
                      <li><a href="https://williamhuusfeldt.dk/" className="btn btn-circle my-social-btn twitter"><i
                        className="fa fa-globe"></i></a></li>
                    </ul>
                  </div>
                </li>
                <li className="col-12 col-md-6 col-lg-3">
                  <div className="mycard-block equal-hight">
                    <figure><img
                      src={Emil}
                      className="img-fluid" alt="" /></figure>
                    <h3>Emil Svensmark</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    <ul className="follow-us clearfix">
                      <li><a href="https://github.com/Svensmark" className="btn btn-circle my-social-btn fb"><i
                        className="fa fa-github"></i></a></li>
                      <li><a href="https://svense.dk/" className="btn btn-circle my-social-btn twitter"><i
                        className="fa fa-globe"></i></a></li>
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

  export default Home;