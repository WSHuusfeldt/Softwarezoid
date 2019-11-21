import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import ApiFacade from '../login/ApiFacade';
import Settings from '../settings';



export default function ProductDetails() {
    let match = useRouteMatch();
    const [data, setData] = useState([]);

    useEffect(() => {
        ApiFacade.fetchSingleProduct(match.params.id).then(res => setData(res));
    }, [])

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
                                        <button className="btn btn-outline-danger mt-3">
                                            <Link to={Settings.getURL("Products")}> Back to products </Link>
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
                                            <strong>{data.title}</strong>
                                            <p>{data.description} </p>
                                        </div>
                                        <div className="tab-pane container fade" id="specifications">
                                            <br />
                                            <dl className="">
                                                <dt>Titel</dt>
                                                <dd>{data.specifications}</dd>
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
                                            <form method="post" className="well padding-bottom-10">
                                                <textarea rows="2" className="form-control" placeholder="Write a review"></textarea>
                                                <div className="mt-2">
                                                    <button type="submit" className="btn btn-sm btn-primary pull-right">
                                                        Submit Review
                                                    </button>
                                                    <a href="xx" className="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add Location"><i className="fa fa-location-arrow"></i></a>
                                                    <a href="xx" className="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add Voice"><i className="fa fa-microphone"></i></a>
                                                    <a href="xx" className="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add Photo"><i className="fa fa-camera"></i></a>
                                                    <a href="xx" className="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add File"><i className="fa fa-file"></i></a>
                                                </div>
                                            </form>

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