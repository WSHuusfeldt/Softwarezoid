import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Facade from '../login/ApiFacade';
import settings from '../settings';

export default function Inquiries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Facade.fetchContacts().then(res => setData(res));
  }, []);

  return (
    <div>
        <h1>These are all the inquiries still open.</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Subject</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
            {data.map(inquiry =>
                <tr key={inquiry.id}>
                    <th scope="row">{inquiry.id}</th>
                    <td>{inquiry.fullName}</td>
                    <td>{inquiry.subject}</td>
                    <td>{inquiry.email}</td>
                    <td><Link to={settings.getURL("Inquiry") + "/" + (inquiry.id)} className="btn-zoid">Show details</Link></td>
                </tr>
                )}
        </tbody>
      </table>
    </div>
  );
}
