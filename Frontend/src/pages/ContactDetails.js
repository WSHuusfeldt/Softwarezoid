import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import ApiFacade from '../login/ApiFacade';
import Settings from '../settings';

export default function ContactDetails() {
    let match = useRouteMatch();
    const [data, setData] = useState([]);

    useEffect(() => {
        ApiFacade.fetchSingleContact(match.params.id).then(res => { setData(res) });
    }, [match.params.id])

    const handleResolve = () => {
        const confirm = window.confirm("Are you sure this issue is resolved?\nThis action cannot be undone ")

        if (confirm == true) {
            ApiFacade.resolveContact(match.params.id)

        }
    }





    return (
        <div className="text-center">
            <br /><br />
            <h2>Contact from {data.fullName}</h2>
            <br />
            <ul>
                <h4>Email</h4>
                <li>{data.email}</li>
                <hr />
                <h4>Phone</h4>
                <li>{data.phone}</li>
                <hr />
                <h4>Subject</h4>
                <li>{data.subject}</li>
                <hr />
                <h4>Message</h4>
                <li>{data.message}</li>
            </ul>
            <button className="btn btn-outline-danger mt-3" onClick={handleResolve}>Resolved</button> <br /> <br />

            <Link className="btn btn-zoid" to={Settings.getURL("Inquiry")}>Back to All Contacts</Link>
            <br /> <br />
        </div >
    );
}