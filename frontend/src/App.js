import "./App.css";
import { useState } from "react";

function App() {
  const [successMessage, setSuccessMessage] = useState(null);

  const makeHttpRequest = async (e) => {
    e.preventDefault();

    const inputElement = document.getElementById("textcontent");

    if (inputElement) {
      const inputData = {
        textcontent: inputElement.value,
      };

      const jsonInputData = JSON.stringify(inputData);

      try {
        const response = await fetch(
          "http://localhost:4000/httpprotocolexample",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: jsonInputData,
          }
        );

        // Check if the response is successful (status code in the range 200-299)
        if (response.ok) {
          const data = await response.json();
          setSuccessMessage(data.message); // Assuming the server sends a 'message' property
        } else if (response.status === 400) {
          const data = await response.json();
          setSuccessMessage(data.message);
        } else {
          console.error("Frontend:", response.statusText);
        }
      } catch (error) {
        console.error("Frontend Error:", error.message);
      }
    }
  };

  return (
    <>
      <h1>Send some text to the server dawg</h1>
      <form onSubmit={makeHttpRequest}>
        <label htmlFor="imageUpload">Enter wisdom here </label>
        <input type="text" id="textcontent" name="textcontent" />
        <button type="submit">send</button>
      </form>
      {successMessage && <p>{successMessage}</p>}

      <div>
        <p>
          This web application allows users to submit text through an input form
          on the frontend. When users enter text and click "send," the
          application makes a POST request to the "/httpprotocolexample"
          endpoint on the server using the Fetch API. On the server side,
          implemented with Node.js and Express, the received data is logged, and
          the server checks if the submitted text is present and not empty. If
          the conditions are met, a success message is returned; otherwise, a
          400 Bad Request response is sent with an error message. The frontend
          then dynamically displays either the success message or the error
          message on the web page, providing users with a clear overview of the
          program's functionality. The entire application is designed to run
          locally, with the frontend seamlessly interacting with the backend
          through the specified endpoint.
        </p>
      </div>
    </>
  );
}

export default App;
