import React from 'react';
import { Link } from 'react-router-dom';
import URLSettings from '../settings'

var products = [
    {
        thumbnail: 'http://placehold.it/120x80',
        title: 'Product Name',
        discreption: 'Product description'
    }, {
        thumbnail: 'http://placehold.it/120x80',
        title: 'Product Name',
        discreption: 'Product description'
    }];

const Basket = () => {
    return (
        <div>
            <div class="card shopping-cart">
                <div class="card-header bg-dark text-light">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    Shopping cart
                <Link to={URLSettings.getURL("Products")} class="btn btn-outline-info btn-sm pull-right">Continiue shopping</Link>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-4 col-sm-4 col-md-2 col-xs-4 ">
                        <img class="img-responsive" src="http://placehold.it/120x80" alt="prewiew" width="100%" height="80" />
                    </div>
                    <div class="col-8  col-sm-8 text-md-left col-md-4 col-xs-8">
                        <h5 class="product-name"><strong>Product Name</strong></h5>
                        <p>
                            <small>Product description</small>
                        </p>
                    </div>
                    <div class="col-12 pt-2 col-sm-12 text-sm-center col-md-6 text-md-right row">
                        <div class="col-4 col-sm-3 col-md-6 text-md-right">
                            <h6>Quantity</h6>
                        </div>
                        <div class="col-3 col-sm-4 col-md-2">
                            <div class="quantity">
                                <input type="number" min="1" max="9" step="1" value="1" />
                            </div>
                        </div>
                        <div class="col-3 col-md-2">
                            <h6><strong><span class="text-muted">x</span>25.00 </strong></h6>
                        </div>
                        <div class="col-2 col-sm-2 col-md-2 text-right">
                            <button type="button" class="btn btn-outline-danger btn-xs">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}

export default Basket;