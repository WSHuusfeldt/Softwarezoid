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
    <div className="mt-5  pt-5">
        <h1 className="font-weight-bold h2 color1 text-uppercase">Inquiries</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Subject</th>
            <th scope="col">Date submitted</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
            {data.map(inquiry =>
                <tr key={inquiry.id}>
                    <th scope="row">{inquiry.id}</th>
                    <td>{inquiry.fullName}</td>
                    <td>{inquiry.subject}</td>
                    <td>{inquiry.date.substring(0, 10)}</td>
                    <td><Link to={settings.getURL("Inquiry") + "/" + (inquiry.id)} className="btn-zoid">Show details</Link></td>
                </tr>
                )}
        </tbody>
      </table>
    </div>
  );
}
