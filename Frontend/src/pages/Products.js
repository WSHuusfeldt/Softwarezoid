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
        {data.map(software =>
          <div key={software.id} className="col-md-3">
            <div className="card">
              <figure className="text-center">
                <img src={software.thumbnail} className="img-fluid" alt={software.title} />
              </figure>
              <div className="card-body">
                <h5 className="card-title">{software.title}</h5>
                <Link to={settings.getURL("ProductId") + "/" + (software.id)} className="btn-zoid">Show details</Link>
                <span className="price"><b>{(software.price / 100).toLocaleString(navigator.language, { minimumFractionDigits: 2 })},-</b></span>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="container-fluid text-center">
        <button className="btn-zoid">Add new product</button>
      </div>
    </div >
  )
}