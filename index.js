const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable provided by Heroku, or default to 3000

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to out Survey'); // Message to display at the root URL
});

// Define other routes
app.get('/about', (req, res) => {
  res.send('About our Survey!');
});

app.get('/survey', (req, res) => {
  res.send('Fill out our survey below to participate. Your feedback would be greatly appreciated!');
});

app.get('/contactus', (req, res) => {
  res.send('If you have any questions, do not hesitate. Send us a message down below or contact us by email.');
});

// Start the server
app.listen(port, () => {
  console.log(`Successfully listening on port:${port}`);
});