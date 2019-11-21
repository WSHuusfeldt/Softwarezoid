import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ApiFacade from '../login/ApiFacade';

var baseurl = "http://localhost:8080/softwarezoid/api/review/add"

export default function ProductDetails() {
    let match = useRouteMatch();
    const [data, setData] = useState([]);

    useEffect(() => {
        ApiFacade.fetchSingleProduct(match.params.id).then(res => setData(res));
    }, [])


    const initialValue = {
        description: "",
        name: "",
        url: "",
        rating: 0
    };

    const [review, setReview] = useState(initialValue);

    const handleSubmit = event => {
        createReview();
        window.alert(JSON.stringify(review));
    }

    const handleChange = event => {
        setReview({ ...review, [event.target.name]: event.target.value });
    };

    function createReview() {
        fetch(baseurl, makeOptions("POST", {
            name: review.name,
            imgUrl: review.url,
            date: "2019-11-21T18:39:08.608Z",
            rating: review.rating,
            description: review.description,
            softwareId: match.params.id
        }));
    }


    return (

        < main className="mt-5 mb-5 pt-5" >
            <div className="container">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="product-content product-wrap clearfix product-deatil">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12 ">
                                <div className="product-image">
                                    <div id="demo" className="carousel slide" data-ride="carousel">

                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={data.thumbnail} alt="Los Angeles" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12">

                                <h2 className="name pt-3">
                                    {data.title}</h2>
                                <hr />
                                <p className="desc">
                                    {data.description}
                                </p>
                                <div className="row">
                                    <div className="col-md-6 price">
                                        <h2 className="font-weight-bold">{data.price} $</h2>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <button className="btn btn-zoid">
                                            Add to Cart
                                </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-xs-12 mt-5">
                                <div className="description description-tabs">
                                    <ul id="myTab" className="nav nav-tabs">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#more-information" data-toggle="tab">Description </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#specifications" data-toggle="tab">Specifications</a></li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#reviews" data-toggle="tab">Reviews</a></li>
                                    </ul>
                                    <div id="myTabContent" className="tab-content">
                                        <div className="tab-pane container active in" id="more-information">
                                            <br />
                                            <strong>Description Title</strong>
                                            <p>Integer egestas, orci id condimentum eleifend, nibh nisi pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet lectus sed odio eleifend, at iaculis dolor egestas. Nunc elementum pellentesque augue sodales porta. Etiam aliquet rutrum turpis, feugiat sodales ipsum consectetur nec. </p>
                                        </div>
                                        <div className="tab-pane container fade" id="specifications">
                                            <br />
                                            <dl className="">
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
                                        <div className="tab-pane container fade" id="reviews">
                                            <br />

                                            <form onSubmit={handleSubmit} className="well padding-bottom-10">
                                                <textarea rows="2" className="form-control" placeholder="Write a review" name="description" value={review.description} onChange={handleChange} />
                                                <div className="container mt-2 row">
                                                    <div className="col">

                                                        <div className="mt-2 row fluid">
                                                            <input type="text" name="fname" placeholder="Name" name="name" value={review.name} onChange={handleChange}/>
                                                        </div>

                                                        <div className="mt-2 row" >
                                                            <input type="text" name="fname" placeholder="Image URL" name="url" value={review.url} onChange={handleChange}/>
                                                        </div>

                                                        <div className="mt-2 row">
                                                            <select name="rating" value={review.rating} onChange={handleChange}>
                                                                <option default selected disabled>Rating</option>
                                                                <option value="0">0</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div className="col">
                                                        <button type="submit" className="btn btn-sm btn-primary pull-right">
                                                            Submit Review
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>

                                            <hr />
                                            <div className="chat-body no-padding profile-message">
                                                <ul>
                                                    <li className="message mt-2">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="online" alt="tt" />
                                                        <span className="message-text">
                                                            <a className="username" href="xx">
                                                                <span className="font-weight-bold">Andreas  </span>
                                                                <span className="badge">Purchase Verified</span>
                                                                <span className="pull-right">
                                                                    <i className="fa fa-star fa-1x text-primary"></i>
                                                                    <i className="fa fa-star fa-1x text-primary"></i>
                                                                    <i className="fa fa-star fa-1x text-primary"></i>
                                                                    <i className="fa fa-star fa-1x text-primary"></i>
                                                                    <i className="fa fa-star fa-1x text-muted"></i>
                                                                </span>
                                                            </a>
                                                            Can't divide were divide fish forth fish to. Was can't form the, living life grass darkness
                                                        </span>

                                                    </li>
                                                    <li className="message mt-2">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="online" alt="tt" />
                                                        <span className="message-text">
                                                            <a className="username" href="xx">
                                                                <span className="font-weight-bold">Aragon Zarko </span>
                                                                <span className="badge">Purchase Verified</span>
                                                                <span className="pull-right">
                                                                    <i className="fa fa-star fa-1x text-primary"></i>
                                                                    <i className="fa fa-star fa-1x text-primary"></i>
                                                                    <i className="fa fa-star fa-1x text-primary"></i>
                                                                    <i className="fa fa-star fa-1x text-primary"></i>
                                                                    <i className="fa fa-star fa-1x text-primary"></i>
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

function makeOptions(method, body) {
    var opts =  {
        method: method,
        headers: {
        'Accept': 'application/json',
        "Content-type": "application/json"
        }
    }
    if(body){
        opts.body = JSON.stringify(body);
    }
    return opts;
}