import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Facade from '../login/ApiFacade';
import settings from '../settings';

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
                <img src={software.thumbnail} className="img-fluid" alt={software.title} />
              </figure>
              <div className="card-body">
                <h5 className="card-title">{software.title}</h5>
                <Link to={settings.getURL("ProductId") + "/" + (index + 1)} className="btn-zoid">Show details</Link>
                <span className="price"><b>{software.price / 100},-</b></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div >
  )
}