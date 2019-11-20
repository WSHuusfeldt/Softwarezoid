import React from 'react';

export default function Contact() {
    return (
        <main className="mt-5  pt-5">
            <div className="whoweare">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center">
                            <h1 className="font-weight-bold h2 color1 text-uppercase">
                                Site description
                            </h1>
                            <p className="h4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus alias ut ducimus itaque sint eveniet totam tenetur recusandae
                                     quasi sapiente voluptatibus molestias facilis impedit atque, magni excepturi provident non?</p>

                            <h2 className="font-weight-bold color1 text-uppercase mt-3">
                                who we are
                        </h2>
                            <p className="h4 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius temporibus alias ut ducimus itaque sint eveniet totam tenetur recusandae
                             quasi sapiente voluptatibus molestias facilis impedit atque, magni excepturi provident non?</p>
                        </div>

                    </div>

                </div>

            </div>

            <section className="cta contact-wrap " id="contact">

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-xl-6 overviewContact mt-2">
                            <div className="row">
                                <div className="col-xs-12 col-md-6 col-lg-4" >
                                    <div className="overview-box mx-auto">
                                        <div className="features-icons-icon d-flex">
                                            <i className="fa fa-map-marker fa-3x  m-auto"></i>
                                        </div>
                                        <h5>Location</h5>
                                        <p className=" mb-0">Nørgaardsvej 30, 2800 Kongens Lyngby</p>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-6 col-lg-4" >
                                    <div className="overview-box mx-auto">
                                        <div className="features-icons-icon d-flex">
                                            <i className="fa fa-envelope fa-3x  m-auto"></i>
                                        </div>
                                        <h5>E-mail</h5>
                                        <p className=" mb-0">contact@softwarezoid.com</p>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-6 col-lg-4">
                                    <div className="overview-box mx-auto">
                                        <div className="features-icons-icon d-flex">
                                            <i className="fa fa-phone fa-3x  m-auto"></i>
                                        </div>
                                        <h5>Phone</h5>
                                        <p className=" mb-0">+45 29 41 02 61</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6  ">
                            <div className="cta-inner text-center rounded">
                                <h2 className="section-heading mb-4">
                                    <span className="section-heading-upper">Get in Touch With Us</span>
                                </h2>
                                <div className="contactForm contactPage">
                                    <form className="row">
                                        <label for="inp" className="inp col-md-6">
                                            <input type="text" id="inp" placeholder="&nbsp;" />
                                            <span className="label">Full Name</span>
                                            <span className="border"></span>
                                        </label>
                                        <label for="inp" className="inp col-md-6">
                                            <input type="email" id="inp" placeholder="&nbsp;" />
                                            <span className="label">Email</span>
                                            <span className="border"></span>
                                        </label>
                                        <label for="inp" className="inp col-md-6">
                                            <input type="tel" id="inp" placeholder="&nbsp;" />
                                            <span className="label">Phone</span>
                                            <span className="border"></span>
                                        </label>
                                        <label for="inp" className="inp col-md-6">
                                            <input type="text" id="inp" placeholder="&nbsp;" />
                                            <span className="label">Subject</span>
                                            <span className="border"></span>
                                        </label>

                                        <label for="inp" className="inp col-md-12">
                                            <textarea type="text" id="inp" placeholder="&nbsp;" rows="4"></textarea>
                                            <span className="label">Message</span>
                                            <span className="border"></span>
                                        </label>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <input type="submit" name="submit" value="Send" className="btn-zoid btn " />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>

    )
}