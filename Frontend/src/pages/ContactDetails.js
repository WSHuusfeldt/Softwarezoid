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
        ApiFacade.resolveContact(match.params.id);

    }



    return (
        <div>
            <ul>
                <li>h</li>
                <li>{data.fullName}</li>
                <li>{data.email}</li>
                <li>{data.phone}</li>
                <li>{data.subject}</li>
                <li>{data.message}</li>
            </ul>
            <button onClick={handleResolve}>Resolved</button>
            <Link to={Settings.getURL("Contacts")}>Back to All Contacts</Link>
        </div>
    );
}