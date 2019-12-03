import React, { useState } from 'react';
import ApiFacade from '../facade/ApiFacade';

export default function Contact() {
    const initialValue = {
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    };

    const [addContact, setAddContact] = useState(initialValue);
    console.log({ addContact });
    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setAddContact({ ...addContact, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        ApiFacade.addContact(addContact.fullName, addContact.email, addContact.phone, addContact.subject, addContact.message);
        setAddContact(initialValue);
        window.alert("Submitted succesfully! We'll contact you as soon as possible.")
    };

    return (
        <main className="mt-5  pt-5">
            <div className="whoweare">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 text-center">
                            <h1 className="font-weight-bold h2 color1 text-uppercase">
                                Got a problem? Contact us!
                            </h1>
                            <p className="h4 ">We take great pride in our products, if you are having any trouble purchasing a product,
                            accessing a product or having trouble setting it up, please don't hesitate to contact us!</p>
                            <br />
                            <p className="h4 ">In the form below, you can write in your contact info, subject of matter and a message to us so we can get in touch with you
                                We'll try and reach out to you as quickly as possible!</p>
                            <br />
                            <p className="h4 ">Alternitavely, you can call or mail us on the information below, or visit us at our address!</p>


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
                                        <label className="inp col-md-6">
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={addContact.fullName}
                                                onChange={handleChange}
                                                placeholder="&nbsp;" />
                                            <span className="label">Full Name</span>
                                            <span className="border"></span>
                                        </label>
                                        <label className="inp col-md-6">
                                            <input
                                                type="text"
                                                name="email"
                                                value={addContact.email}
                                                onChange={handleChange}
                                                id="inp"
                                                placeholder="&nbsp;" />
                                            <span className="label">Email</span>
                                            <span className="border"></span>
                                        </label>
                                        <label className="inp col-md-6">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="inp"
                                                value={addContact.phone}
                                                onChange={handleChange}
                                                placeholder="&nbsp;" />
                                            <span className="label">Phone</span>
                                            <span className="border"></span>
                                        </label>
                                        <label className="inp col-md-6">
                                            <input
                                                type="text"
                                                name="subject"
                                                id="inp"
                                                value={addContact.subject}
                                                onChange={handleChange}
                                                placeholder="&nbsp;" />
                                            <span className="label">Subject</span>
                                            <span className="border"></span>
                                        </label>

                                        <label className="inp col-md-12">
                                            <textarea
                                                type="text"
                                                name="message"
                                                id="inp"
                                                value={addContact.message}
                                                onChange={handleChange}
                                                placeholder="&nbsp;"
                                                rows="4"></textarea>
                                            <span className="label">Message</span>
                                            <span className="border"></span>
                                        </label>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <input type="submit" name="submit" value="Send" onClick={handleSubmit} className="btn-zoid btn " />
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