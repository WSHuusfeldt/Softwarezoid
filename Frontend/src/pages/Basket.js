import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import URLSettings from '../settings';

var products2 = [
    {
        id: 1,
        thumbnail: 'http://placehold.it/120x80',
        title: 'Product Name 1',
        description: 'Product description',
        price: 25
    }, {
        id: 2,
        thumbnail: 'http://placehold.it/120x80',
        title: 'Product Name 2',
        description: 'Product description',
        price: 35
    }, {
        id: 3,
        thumbnail: 'http://placehold.it/120x80',
        title: 'Product Name 3',
        description: 'Product description',
        price: 10
    }, {
        id: 4,
        thumbnail: 'http://placehold.it/120x80',
        title: 'Product Name 4',
        description: 'Product description',
        price: 5,
    }];

const Basket = () => {
    const [update, setUpdate] = useState(false);
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (localStorage.getItem("basket") != null) {
            const basket = JSON.parse(localStorage.getItem("basket"));
            var items = [];
            var tprice = 0;
            basket.forEach(e => {
                let product = products2.find(p => p.id === e.id);
                items.push({ product: product, qty: e.qty });
                tprice = tprice + (product.price * e.qty);
            });
            setTotalPrice(tprice);
            setProducts(items);
        }

        //localStorage.setItem("basket", JSON.stringify([{id: 1, qty: 4}, {id: 3, qty: 2}, {id: 4, qty: 7}]));
    }, [update])

    const onQuantityChange = (evt) => {
        let id = evt.target.getAttribute("product");
        let value = evt.target.value;

        changeValue(id, value);
    }

    const onBtnClick = (evt) => {
        let productId = evt.target.parentNode.getAttribute("product");
        let modi = evt.target.getAttribute("modi");

        switch (modi) {
            case "+":
                changeValue(productId, ++products.find(p => p.product.id == productId).qty);
                break;
            case "-":
                changeValue(productId, --products.find(p => p.product.id == productId).qty);
                break;
        }
    }

    const changeValue = (id, value) => {
        var basket = []
        products.forEach(e => {
            if (e.product.id == id) {
                e.qty = value;
            }
            basket.push({ id: e.product.id, qty: e.qty })
        });

        localStorage.setItem("basket", JSON.stringify(basket));
        setUpdate(!update);
    }

    const onDelete = (evt) => {
        let id = evt.target.getAttribute("product");
        console.log(id);

        var basket = []
        products.forEach(e => {
            if (e.product.id != id) {
                basket.push({ id: e.product.id, qty: e.qty })
            }
        });

        localStorage.setItem("basket", JSON.stringify(basket));
        setUpdate(!update);
    }

    return (
        <div>
            <div className="card shopping-cart">
                <div className="card-header bg-dark text-light">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    Shopping cart
                    <Link to={URLSettings.getURL("Products")} className="btn btn-outline-info btn-sm pull-right">Continue shopping</Link>
                    <div className="clearfix"></div>
                </div>

                <div className="card-body">
                    {products.map(product => (
                        <div key={product.product.id}>
                            <div className="row">
                                <div className="col-4 col-sm-4 col-md-2 col-xs-4">
                                    <Link to={`${URLSettings.getURL("ProductId")}/${product.product.id}`}>
                                        <img className="img-responsive" src={product.product.thumbnail} alt="prewiew" width="100%" height="80" />
                                    </Link>
                                </div>
                                <div className="col-8 col-sm-8 text-md-left col-md-4 col-xs-8">
                                    <Link to={`${URLSettings.getURL("ProductId")}/${product.product.id}`} key={product.product.id}>
                                        <h5 className="product-name"><strong>{product.product.title}</strong></h5>
                                    </Link>
                                    <p>
                                        <small>{product.product.description}</small>
                                    </p>
                                </div>
                                <div className="col-12 pt-2 col-sm-12 text-sm-center col-md-6 text-md-right row">
                                    <div className="col">
                                        <h6>Quantity</h6>
                                    </div>
                                    <div className="col">
                                        <div className="quantity">
                                            <input type="number" product={product.product.id} min="1" max="9" step="1" value={product.qty} onChange={onQuantityChange} />
                                            <div className="quantity-nav" product={product.product.id}><div className="quantity-button quantity-up" modi="+" onClick={onBtnClick}>+</div><div className="quantity-button quantity-down" modi="-" onClick={onBtnClick}>-</div></div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <button type="button" className="btn btn-outline-danger btn-xs" product={product.product.id} onClick={onDelete}>
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                    <div class="col">
                                        <h6><span class="text-muted">x</span><strong> {product.product.price.toLocaleString(navigator.language, { minimumFractionDigits: 2 })},-</strong></h6>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>

                <div class="card-footer">
                    <div class="coupon col-md-5 col-sm-5 no-padding-left pull-left">
                        <div class="row">
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="Cupone code" />
                            </div>
                            <div class="col-6">
                                <input type="submit" class="btn btn-default" value="Use cupone" />
                            </div>
                        </div>
                    </div>
                    <div class="pull-right" >
                        <Link className="btn btn-zoid pull-right" to={URLSettings.getURL("Checkout")}>Checkout</Link>
                        <div class="pull-right p-2">
                            Total price: <b>{totalPrice.toLocaleString(navigator.language, { minimumFractionDigits: 2 })},-</b>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Basket;