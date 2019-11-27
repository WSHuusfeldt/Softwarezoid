import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import Facade from '../login/ApiFacade';
//import settings from '../settings';

export default function Inquiries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Facade.fetchContacts().then(res => setData(res));
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Subject</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
            
        </tbody>
      </table>
    </div>
  );
}
