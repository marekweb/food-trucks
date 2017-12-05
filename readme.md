# Food Truck Events App

Tiny app using Node.js, Express, and React (with `react-scripts`).

Here's what the app does:

- Express server that fetches food truck events from an API at bestfoodtrucks.com
- The Express server provides a `/data` endpoint for the front-end to use
- The React front-end fetches `/data` and displays it to the user

## Server endpoints

- `/data` Returns a JSON array of food truck events.

The fields that we are interested in:

- `name`: the name of the food truck event
- `address`: an address string
- `date`: a human-readable date string
- `event_start_unix`: the start time of the event, in UNIX timestamp format (as a number)
- `attending`: an array of food trucks attending this event. Each attending truck object contains `name` and `cuisine_type` among other fields.

## TODO list

Here are some tasks to improve this project.

- **Filter the events**. Show only events that have at least 1 attending truck (the JSON field is called `attending` and it's an array of attending trucks)
- **Show the attending trucks**. Display the `name` (and maybe `cuisine_type`) for each food truck attending the event. Render them as list items `<li>` inside of the provided `<ul>` tag.
- **Show the event start time as a relative time**. In addition to the date (which is already being shown), show the relative time from now of the start of the event. Example: "5 hours from now".
    - Hint: use the `moment` library and its `fromNow` method.
    - Hint 2: the `start_time_unix` field on each event is a UNIX timestamp of the start time, which can be parsed by the `moment` library.

## Modules used

- `axios`: make HTTP requests to APIs
- `react-scripts`: Scripts from the "Create React App project, to configure and build a React app.
- `nodemon`: Run the node.js script and automatically reload when files are changed
- `express` to run the server

## Discussion questions

- `axios` is used to make HTTP requests. In this project, it's used both in the back-end and in the front-end.
    - What's the reason for doing each of these HTTP requests?
    - What are potential reasons why you might prefer to do some HTTP requests on the back-end vs doing them on the front-end?

- The React front-end uses `class` and extends `React.Component`.
    - Could this be rewritten as a stateless component instead?
    - What would be different?

- We get a console warning in the front-end about "key" props. Why does React need a "key" prop? What would you need to do to fix this, and where?
