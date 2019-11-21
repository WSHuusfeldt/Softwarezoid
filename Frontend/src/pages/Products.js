import React, { useState, useEffect } from 'react';
import Facade from '../login/ApiFacade';

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Facade.fetchData().then(res => setData(res));
  }, [])

  return (
    <div className="container products">
    <div className="row">
          {data.map((software, index) => 
          <div key={index} className="col-md-3">
            <div className="card">
              <figure className="text-center">
                <img src={software.thumbnail} className="img-fluid" alt={software.title}/>
              </figure>
              <div className="card-body">
                <h5 className="card-title">{software.title}</h5>
                <a href="product-details.html" className="btn-zoid">Show Details</a>
                <span className="price"><b>{software.price/100},-</b></span>
              </div>
            </div>
          </div>
          )}
          </div>
    </div>
  )
}