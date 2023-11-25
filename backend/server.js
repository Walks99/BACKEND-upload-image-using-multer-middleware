// --- The below code returns a success message when submits text via a text-box from the frontend ------

// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors module
require("dotenv").config();

const app = express(); // Create an express app
app.use(bodyParser.json()); // Middleware to parse JSON requests
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // Use the cors middleware to allow requests from a specific origin

// ----------------- POST REQUEST - PREDICT CAR MODEL ENDPOINT --------------------
app.post("/httpprotocolexample", async (req, res) => {
  console.log("Recieved data", req.body);

  if (!req.body || !req.body.textcontent || req.body.textcontent.trim() === "") {
    return res.status(400).json({
      message: "Please enter text",
    });
  }

  res.status(200).json({
    message: "Thank you for submitting text"
});
});
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

// ------------------ PORT ---------------------------------------

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});