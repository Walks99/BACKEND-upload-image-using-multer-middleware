# send-text-receive-message-via-http

Table of Contents

- [Overview](#overview)

- [How it works](#how-it-works)

- Dependencies
    - [Frontend](#frontend-dependencies)
    - [Backend](#backend-dependencies)

- Implementation
    - [Frontend](#frontend-implementation)
    - [Backend](#backend-implementation)

- [How to run](#how-to-run)

## Overview

This web application exemplifies a simple full-stack interaction, allowing users to submit text through a user-friendly frontend built with React. The backend, powered by Node.js and Express, processes the user input and provides feedback to the user. The purpose of this application is to demonstrate the integration of a frontend and backend, showcasing how they collaborate to handle HTTP requests and responses.

<p align="right">(<a href="#send-text-receive-message-via-http">back to top</a>)</p>

## How it works

1. **Text Submission:**
    - Users input text in the frontend form and click "send."
2. **HTTP POST Request:**
    - The frontend uses the Fetch API to make a POST request to the "/httpprotocolexample" endpoint on the server.
    - The request includes the user's input, converted to JSON.
3. **Server-Side Processing:**
    - The backend, implemented with Node.js and Express, listens for POST requests on port 4000.
    - Upon receiving the request, the server logs the received data and checks if the submitted text is present and not empty.
4. **Dynamic Responses:**
    - If the conditions are met, a success message is returned.
    - If the submitted text is missing or empty, a 400 Bad Request response is sent from the server with an appropriate error message.
5. **Display on Frontend:**
    - The frontend dynamically displays the server's response on the webpage.
    - Users see either a success message or an error message based on the server's response.

<p align="right">(<a href="#send-text-receive-message-via-http">back to top</a>)</p>

## Dependencies

### *Frontend Dependencies*

#### React:

- A JavaScript library for building user interfaces.
- Allows developers to create reusable UI components.
- Manages the state of components and efficiently updates the DOM.

#### Fetch API:

- A modern browser feature that provides a simple interface for making HTTP requests.
- Used in the frontend to send HTTP requests to the backend server.

### *Backend Dependencies*

#### Node.js:

- A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Allows running JavaScript code on the server-side.
- Powers the backend server.

#### Express:

- A minimal and flexible Node.js web application framework.
- Simplifies the process of building robust and scalable web applications.
- Handles routing, middleware, and HTTP request/response processing.

#### Cors Middleware:

- The cors middleware is used to enable Cross-Origin Resource Sharing.
- Allows the backend to respond to requests from a different origin (in this case, the frontend).
- Configured with options specifying the allowed origin and credentials.

#### Body-Parser Middleware:

- The body-parser middleware is used to parse incoming JSON requests.
- Extracts the body of an incoming request and makes it available in req.body for easy access.
- Essential for handling JSON data sent from the frontend in HTTP requests.

<p align="right">(<a href="#send-text-receive-message-via-http">back to top</a>)</p>

## Implementation

### *Frontend Implementation*

#### React in the Frontend:

- The frontend is built using React, allowing the creation of components that manage their state.
- Components are responsible for rendering UI elements and managing user interactions.

#### Fetch API Usage:

- The `makeHttpRequest` function in `App.js` uses the Fetch API to make an HTTP POST request to the backend server.
- The request includes user input data in JSON format.

#### Dynamic Content Rendering:

- Depending on the server's response, the frontend dynamically displays either a success message or an error message on the webpage.
- Utilizes React state management to update the UI based on the server's response.

### *Backend Implementation*

#### Node.js Server:

- The backend server is implemented using Node.js, providing a runtime for executing JavaScript on the server.
- The `server.js` file contains the server implementation.

#### Express Middleware:

- Express middleware is used, including `cors` for Cross-Origin Resource Sharing and `body-parser` for handling JSON requests.

#### Handling HTTP POST Requests:

- The backend listens for HTTP POST requests on the `/httpprotocolexample` endpoint.
- The `app.post` method in `server.js` handles these requests.

#### Server-Side Processing:

- Upon receiving a request, the server logs the received data and checks if the submitted text is present and not empty.
- Responds with a success message if conditions are met; otherwise, sends a 400 Bad Request response with an error message.

#### Port Configuration:

- The server listens on port 4000, as specified in the `PORT` variable in `server.js`.
- You can modify the port based on your configuration.

<p align="right">(<a href="#send-text-receive-message-via-http">back to top</a>)</p>

## How to Run

1. **Clone the Repository:**
   ```
   git clone https://github.com/Walks99/http-protocol-example.git
   ```

2. **Switch into backend directory:**
    ```
    cd backend
    ```

3. **Install backend dependencies**
    ```
    npm install
    ```

4. **Start the backend server**
    ```
    npm run node
    ```

5. **Switch into frontend directory**
    ```
    cd ..
    cd frontend
    ```

6. **Install frontend dependencies**
    ```
    npm install
    ```

7. **start frontend server**
    ```
    npm start
    ```

8. **Access the application at**
    ```
    http://localhost:3000
    ```

<p align="right">(<a href="#send-text-receive-message-via-http">back to top</a>)</p>