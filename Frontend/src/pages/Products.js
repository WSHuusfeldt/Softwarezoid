import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Facade from '../login/ApiFacade';
import settings from '../settings';


export default function Products() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() => {
    Facade.fetchCategoryAll().then(res => setCategory(res));
  }, [])

  useEffect(() => {
    let cat = [];
    Object.keys(selectedCategory).map(key => {
      if (selectedCategory[key] === true) {
        cat.push(key);
      }
      return key;
    })
    Facade.fetchSoftwareByCategory(cat.join(",")).then(res => setData(res));
  }, [selectedCategory])

  const onChange = (evt) => {
    setSelectedCategory({ ...selectedCategory, [evt.target.id]: evt.target.checked })
  }

  return (
    <div className="page-wrapper chiller-theme toggled">
      <div className="d-flex">
        <nav id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content">
            <br /><br />
            <div className="sidebar-brand">
              <p>Filter</p>
            </div>
            <div className="sidebar-search">
              <div>
                <div className="input-group">
                  <input type="text" className="form-control search-menu" placeholder="Search..." />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="sidebar-menu">
                <ul>
                  <li className="header-menu">
                    Category
                            </li>
                  {category.map((cat, index) =>
                    <li key={index}>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id={cat.id} name={cat.name} onChange={onChange} />
                        <label className="custom-control-label" htmlFor={cat.id}>{cat.name}</label>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex-grow-1">
          <br /><br />
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
            </div >
          </div>
        </div>
      </div>
    </div>
  )
}



function Products12() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() => {
    Facade.fetchCategoryAll().then(res => setCategory(res));
  }, [])

  useEffect(() => {
    let cat = [];
    Object.keys(selectedCategory).map(key => {
      if (selectedCategory[key] === true) {
        cat.push(key);
      }
      return key;
    })
    Facade.fetchSoftwareByCategory(cat.join(",")).then(res => setData(res));
  }, [selectedCategory])

  const onChange = (evt) => {
    setSelectedCategory({ ...selectedCategory, [evt.target.id]: evt.target.checked })

  }

  return (
    <div className="page-wrapper chiller-theme toggled">
      <a id="show-sidebar" className="btn btn-sm btn-dark" href="xx">
        <i className="fas fa-sliders-h"> Filter</i>
      </a>

      <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <a href="xx">Filter</a>
            <div id="close-sidebar">
              <i className="fa fa-times"></i>
            </div>
          </div>


          <div className="sidebar-search">
            <div>
              <div className="input-group">
                <input type="text" className="form-control search-menu" placeholder="Search..." />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-menu">
            <ul>
              <li className="header-menu">Category</li>
              {category.map((cat, index) =>
                <li key={index}>
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id={cat.id} name={cat.name} onChange={onChange} />
                    <label className="custom-control-label" htmlFor={cat.id}>{cat.name}</label>
                  </div>
                </li>
              )}
            </ul>
          </div>

        </div>
      </nav>

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

      </div>
    </div>
  )
}