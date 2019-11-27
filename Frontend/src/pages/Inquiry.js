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
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Subject</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
            {data.map(inquiry =>
                <tr key={inquiry.id}>
                    <th scope="row">{inquiry.id}</th>
                    <td>{inquiry.fullName}</td>
                    <td>{inquiry.subject}</td>
                    <td>{inquiry.date}</td>
                </tr>
                )}
        </tbody>
      </table>
    </div>
  );
}
