import React from 'react';

export default function Event(props) {
  return <div>
    <h3>{props.name}</h3>
    <ul>
      <li>
        <b>Date:</b> {props.date}
      </li>
      <li>
        <b>Address:</b> {props.address}
      </li>
      <li>
        <b>Start time: {/* TODO: relative time here */}</b>
      </li>
      <li>
        <b>Trucks Attending: {props.attending.length}</b>
        <ul>
          {/* TODO: attendees here */}
        </ul>
      </li>
    </ul>
  </div>
}
