import React, { useState, useEffect } from 'react';
import Facade from '../login/ApiFacade';

export default function Products() {
    const [data, setData] = useState([]);

    useEffect(() => {
      Facade.fetchData().then(res => setData(res));
    },[])
    
    return (
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Thumbnail</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((software, index)=> <tr key={index}><td><img src={software.thumbnail} width="50" height="50"/></td><td>{software.title}</td><td>{software.price},-</td></tr> )}
          </tbody>
        </table>
      </div>
    )
  }