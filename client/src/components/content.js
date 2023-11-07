import React, { useEffect, useState } from 'react';
import { getJobListings } from './apiService';

function Content() {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    // Fetch job listings when the component mounts
    getJobListings()
      .then((data) => setJobListings(data.jobListings))
      .catch((error) => console.error('Error fetching job listings:', error));
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobListings.map((listing) => (
          <li key={listing.id}>
            <h3>{listing.company}</h3>
            <p>Date Posted: {listing.datePosted}</p>
            <p>Batch: {listing.batch}</p>
            <a href={listing.link} target="_blank" rel="noopener noreferrer">
              Apply
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
