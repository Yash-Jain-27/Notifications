import React, { useState, useEffect } from 'react';
import Logout from '../logout/logout';
import useToken from '../../utils/token';
import './event_page.css';

const events = require('../../data/invitations.json');
const newEvents = require('../../data/invitations_update.json');

export default function EventPage() {
    const { token } = useToken();
    const [data, setData] = useState(events);

    function renderEvents() {
        const filteredEvents = data.invites.filter((event) => {
            return token.includes(event.receiver_id)
        })

        const invites = filteredEvents.map((event) => {
            return <div className="invites" key={event.invite_id}>
                <h3>{event.receiver_id}</h3>
                <p>{event.invite}</p>
                <span> <strong>Status</strong> {event.status}</span>
            </div>
        })

        return invites
    }

    useEffect(() => {
        let timer = setTimeout(() => setData(newEvents), 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [])

    return (
        <>
            <h2>Event Page</h2>
            <div className="event-wrapper">
                {renderEvents()}
            </div>
            <Logout />
        </>
    );
}