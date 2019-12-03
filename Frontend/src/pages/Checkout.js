import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import ApiFacade from '../facade/ApiFacade';
import Basket from '../pages/Basket'
import BasketFacade from '../facade/BasketFacade'

const Checkout = () => {
    return (
        <div>
            <Basket checkout={true} />
            <Payment />
        </div>
    )
}

const Payment = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderId, setOrderId] = useState(0);

    useEffect(() => {
        BasketFacade.getTotalPrice().then(res => setTotalPrice(res));
    }, []);

    const onSubmit = (evt) => {
        evt.preventDefault();
        BasketFacade.getBasket().then(res => ApiFacade.createOrder(res).then(re => setOrderId(re.msg)));
    }

    return (
        <div className="container-fluid py-3">
            {orderId !== 0 && (
                <Redirect to={`/invoice/${orderId}`} />
            )}
            <div className="row">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto">
                    <div id="pay-invoice" className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <h3 className="text-center">Pay Invoice</h3>
                            </div>
                            <hr />
                            <form onSubmit={onSubmit}>
                                <div className="form-group text-center">
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><i className="text-muted fa fa-cc-visa fa-2x"></i></li>
                                        <li className="list-inline-item"><i className="fa fa-cc-mastercard fa-2x"></i></li>
                                        <li className="list-inline-item"><i className="fa fa-cc-amex fa-2x"></i></li>
                                        <li className="list-inline-item"><i className="fa fa-cc-discover fa-2x"></i></li>
                                    </ul>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cc-payment" className="control-label mb-1">Payment amount</label>
                                    <input id="cc-payment" name="cc-payment" type="text" className="form-control" aria-required="true" aria-invalid="false" readOnly value={totalPrice} />
                                </div>
                                <div className="form-group has-success">
                                    <label htmlFor="cc-name" className="control-label mb-1">Name on card</label>
                                    <input id="cc-name" name="cc-name" type="text" className="form-control cc-name" required autoComplete="cc-name" aria-required="true" aria-invalid="false" aria-describedby="cc-name-error" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cc-number" className="control-label mb-1">Card number</label>
                                    <input id="cc-number" name="cc-number" type="tel" className="form-control cc-number identified visa" required="" pattern="[0-9]{16}" />
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="cc-exp" className="control-label mb-1">Expiration</label>
                                            <input id="cc-exp" name="cc-exp" type="tel" className="form-control cc-exp" required placeholder="MM / YY" autoComplete="cc-exp" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="x_card_code" className="control-label mb-1">Security code</label>
                                        <div className="input-group">
                                            <input id="x_card_code" name="x_card_code" type="tel" className="form-control cc-cvc" required autoComplete="off" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="x_zip" className="control-label mb-1">Postal code</label>
                                    <input id="x_zip" name="x_zip" type="text" className="form-control" data-val="true" data-val-required="Please enter the ZIP/Postal code" autoComplete="postal-code" />
                                </div>
                                <div>
                                    <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block">
                                        <i className="fa fa-lock fa-lg"></i>&nbsp;
                                        <span id="payment-button-amount">Pay {totalPrice},-</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;