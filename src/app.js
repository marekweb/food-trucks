import React from 'react';
import Event from './event';

export default class App extends React.Component {
  render() {
    const events = this.props.events.map(event => {
      return <Event {...event} />;
    });

    return (
      <div className="App">
        <h1>Food Truck Events</h1>
        {events}
      </div>
    );
  }
}
