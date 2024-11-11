const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable provided by Heroku, or default to 3000

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to our Survey site'); // Message to display at the root URL
});

// Define other routes
app.get('/about', (req, res) => {
  res.send('This is what our site is about');
});

app.get('/survey', (req, res) => {
  res.send('Participate in our surveys. Your feedback is always appreciated!');
});

app.get('/contact', (req, res) => {
  res.send('If you have any questions, do not hesitate. Send us a message down below or contact us on our email.');
});

// Start the server
app.listen(port, () => {
  console.log(`Successfully listening on port ${port}`);
});