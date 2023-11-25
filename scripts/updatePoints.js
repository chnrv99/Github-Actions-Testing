// updatePoints.js
const axios = require('axios');

const issueID = process.env.INPUT_ISSUE_ID || null;
const points = process.env.INPUT_POINTS || null;
const username = process.env.INPUT_USERNAME || '';

console.log(`Received inputs - Issue ID: ${issueID}, Points: ${points}, Username: ${username}`);

// Your logic for updating points can go here
// For example, you might want to make API requests, update a database, etc.

// Example: Making a POST request using axios
const apiUrl = 'https://github-actions-testing.azurewebsites.net/points'; // Replace with your actual API URL

axios.post(apiUrl, {
  issueID,
  points,
  username,
})
  .then(response => {
    console.log('POST request successful:', response.data);
  })
  .catch(error => {
    console.error('Error making POST request:', error.message);
  });