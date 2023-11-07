export const BASE_URL = 'http://localhost:3000'; // Replace with your back-end URL

export const getJobListings = () => {
  return fetch(`${BASE_URL}/api/job-listings`)
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error fetching job listings:', error);
    });
};

export const postJobListing = (data) => {
  return fetch(`${BASE_URL}/api/job-listings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error posting job listing:', error);
    });
};
