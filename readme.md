# Food Truck Events

What is a **Food Truck Event**? It's an event that food trucks attend, and where you can go discover food trucks.

Each food truck event has a location, a date and start/end time, and a list of food trucks that are attending.

# About this app

This project has 2 parts:

- Express app: `server.js`
- React front-end: in the `src` directory, using the `create-react-app` tool.

Here's what happens when you open the app:

- The React front-end fetches `/events` on the back-end to get a list of food truck events.
- The Express back-end handles the request to `/events` and queries an API at bestfoodtrucks.com.
- The React front-end displays a list of food truck events and their details.

## Description of the API back-end

- `/events` Returns a JSON array of food truck events.

Food Truck Event object:

- `name`: the name of the food truck event (string)
- `address`: an address (string)
- `date`: a human-readable date (string)
- `event_start_unix`: the start time of the event, in UNIX timestamp format (number)
- `attending`: an array of food trucks attending this event. Each attending food truck object is described below:

Food Truck object

- `name`: the name of the food truck (string)
- `cuisine_type`: the type of cuisine (string)

## Tasks TODO

Here are some tasks to improve this project.

- **Filter the events**. Show only events that have at least 1 attending truck (the JSON field is called `attending` and it's an array of attending trucks)
- **Show the attending trucks**. Display the `name` (and maybe `cuisine_type`) for each food truck attending the event. Render them as list items `<li>` inside of the provided `<ul>` tag.
- **Show the event start time as a relative time**. In addition to the date (which is already being shown), show the start time of event as a relative time. Example: "5 hours from now".
    - Hint: use the `moment` library and its `fromNow` method. You will need to install `moment`.
    - Hint 2: the `start_time_unix` field on each event is a UNIX timestamp, which can be parsed by the `moment` library.

## Modules used

- `axios`: make HTTP requests to APIs
- `react-scripts`: Scripts from the "Create React App project, to configure and build a React app.
- `nodemon`: Run the node.js script and automatically reload when files are changed
- `express` run the back-end

## Discussion questions

- `axios` is used to make HTTP requests. In this project, it's used both in the back-end and in the front-end.
    - What's the reason for doing each of these HTTP requests?
    - What are potential reasons why you might prefer to do some HTTP requests on the back-end vs doing them on the front-end?

- The React front-end uses `class` and extends `React.Component`.
    - Could this be rewritten as a stateless component instead?
    - What would be different?

- We get a console warning in the front-end about "key" props. Why does React need a "key" prop? What would you need to do to fix this, and where?
