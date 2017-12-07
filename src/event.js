import React from 'react';

export default function Event(props) {
  const { name, date, address, attending } = props;

  return <div>
    <h3>{name}</h3>
    <ul>
      <li>
        <b>Date:</b> {date}
      </li>
      <li>
        <b>Address:</b> {address}
      </li>
      <li>
        <b>Start time: {/* TODO: relative time here */}</b>
      </li>
      <li>
        <b>Trucks Attending: {attending.length}</b>
        <ul>
          {/* TODO: attendees here */}
        </ul>
      </li>
    </ul>
  </div>
}
