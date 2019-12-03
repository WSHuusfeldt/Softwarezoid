import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import ApiFacade from '../facade/ApiFacade';
import Settings from '../settings';

export default function ProductDetails() {
    const initialValue = {
        description: "",
        name: "",
        url: "",
        rating: 0
    };

    let match = useRouteMatch();
    const [data, setData] = useState([]);
    const [spec, setSpec] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [review, setReview] = useState(initialValue);

    useEffect(() => {
        ApiFacade.fetchSingleProduct(match.params.id).then(res => { setData(res); setSpec(res.specifications) });
        ApiFacade.fetchReviews(match.params.id).then(res => { setReviews(res) });
    }, [match.params.id])

    const handleSubmit = event => {
        ApiFacade.createReview(review.description, review.name, review.url, review.rating, match.params.id);
    }
    
    const handleChange = event => {
        setReview({ ...review, [event.target.name]: event.target.value });
    };

    const addToCart = () => {
        var basket = JSON.parse(localStorage.getItem("basket"));
        if (basket !== null) {
            // eslint-disable-next-line
            let found = basket.find(i => i.id == match.params.id);
            if (found !== undefined) {
                found.qty++;
            } else {
                basket.push({ id: match.params.id, qty: 1 });
            }
        } else {
            basket = [{ id: match.params.id, qty: 1 }];
        }

        localStorage.setItem("basket", JSON.stringify(basket));
    }

    return (
        <main className="mt-5 mb-5 pt-5">
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
                                        <h2 className="font-weight-bold">{(data.price / 100)},-</h2>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <button className="btn btn-zoid" onClick={addToCart}>
                                            Add to Cart
                                        </button>
                                        <Link className="btn btn-outline-danger mt-3" to={Settings.getURL("Products")}>Back to products</Link>
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

                                            {spec.map((item, index) => <dl key={index}><dd>{item}</dd></dl>)}


                                        </div>
                                        <div className="tab-pane container fade" id="reviews">
                                            <br />

                                            <form className="well padding-bottom-10">
                                                <textarea rows="2" className="form-control" placeholder="Write a review" name="description" value={review.description} onChange={handleChange} />
                                                <div className="container mt-2 row">
                                                    <div className="col">

                                                        <div className="mt-2 row fluid">
                                                            <input type="text" placeholder="Name" name="name" value={review.name} onChange={handleChange} />
                                                        </div>

                                                        <div className="mt-2 row" >
                                                            <input type="text" placeholder="Image URL" name="url" value={review.url} onChange={handleChange} />
                                                        </div>

                                                        <div className="mt-2 row">
                                                            <select name="rating" value={review.rating} onChange={handleChange}>
                                                                <option default disabled>Rating</option>
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
                                                        <button type="submit" onClick={handleSubmit} className="btn btn-sm btn-primary pull-right">
                                                            Submit Review
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>

                                            <hr />
                                            <div className="chat-body no-padding profile-message">
                                                <ul>
                                                    {reviews.map((rev, index) =>
                                                        <li key={index}>
                                                            <img src={rev.imgUrl} className="online" alt="avatar" />
                                                            <span className="message-text">
                                                                <a className="username" href="xx">
                                                                    <span className="font-weight-bold">{rev.name}</span>
                                                                    <span className="badge">Purchase Verified</span>
                                                                </a>
                                                                <span className="pull-right font-weight-bold">Rating: {rev.rating} / 5</span>
                                                                <span>{rev.description}</span>
                                                            </span>
                                                        </li>)}
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



