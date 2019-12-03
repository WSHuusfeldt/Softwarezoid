import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import URLSettings from '../settings';
import ApiFacade from '../login/ApiFacade';
import Basket from '../pages/Basket'

const Checkout = () => {
    return (
        <Basket checkout={true} />
    )
}

export default Checkout;