import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ApiFacade from '../facade/ApiFacade'
import Basket from './Basket'

function Invoice() {
    const [order, setOrder] = useState({});
    const [invoice, setInvoice] = useState([]);
    let match = useRouteMatch();

    useEffect(() => {
        ApiFacade.getOrder(match.params.id).then(res => {
            setOrder(res);
            var inv = [];
            res.orderLines.forEach(e => {
                inv.push({id: e.software.id, qty: e.qty});
            });
            setInvoice(inv);
        });
    }, [match]);

    return (
        <div className="container-fluid text-center pt-5">
            <h1>Order {order.id}</h1>
            <Basket checkout={true} invoiceData={invoice} />
        </div>
    )
}

export default Invoice;