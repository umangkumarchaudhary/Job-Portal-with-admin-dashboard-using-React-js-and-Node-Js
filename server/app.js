const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// In-memory data store for job listings (replace with a database later)

app.use(cors());


const jobListings = [
  {
    id: 1,
    company: 'Google',
    datePosted: '2023-11-05',
    batch: '2022',
    link: 'https://www.google.com/careers',
  },
  // Add more job listings here
];

app.use(express.json());

// Route to fetch all job listings
app.get('/api/job-listings', (req, res) => {
  res.json({ jobListings });
});

// Route to create a new job listing
app.post('/api/job-listings', (req, res) => {
  const newJobListing = req.body;
  // In a real application, you would save the new job listing to your database.
  // For this example, we'll just push it to the in-memory store.
  jobListings.push(newJobListing);
  res.status(201).json(newJobListing);
});

// Route to update an existing job listing by ID
app.put('/api/job-listings/:id', (req, res) => {
  const jobId = req.params.id;
  const updatedJobListing = req.body;
  // In a real application, you would find and update the job listing in your database.
  // For this example, we'll just update it in the in-memory store.
  const jobListingToUpdate = jobListings.find((job) => job.id == jobId);
  if (!jobListingToUpdate) {
    return res.status(404).json({ error: 'Job listing not found' });
  }
  // Update the fields of the job listing.
  Object.assign(jobListingToUpdate, updatedJobListing);
  res.json(jobListingToUpdate);
});

// Route to delete an existing job listing by ID
app.delete('/api/job-listings/:id', (req, res) => {
  const jobId = req.params.id;
  // In a real application, you would find and delete the job listing from your database.
  // For this example, we'll remove it from the in-memory store.
  const index = jobListings.findIndex((job) => job.id == jobId);
  if (index === -1) {
    return res.status(404).json({ error: 'Job listing not found' });
  }
  jobListings.splice(index, 1);
  res.status(204).end(); // Respond with a success status (204 No Content)
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
