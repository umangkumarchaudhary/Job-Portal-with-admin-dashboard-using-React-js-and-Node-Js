import React, { useState } from 'react';
import { postJobListing } from './apiService'; // Create this function to post job listings
import './AdminDashboard.css';
function AdminDashboard() {
  const [formData, setFormData] = useState({
    company: '',
    datePosted: '',
    batch: '',
    link: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    postJobListing(formData)
      .then((data) => {
        // Handle successful posting
        console.log('Job listing posted:', data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error posting job listing:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company:</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} />
        </div>
        <div>
          <label>Date Posted:</label>
          <input type="date" name="datePosted" value={formData.datePosted} onChange={handleChange} />
        </div>
        <div>
          <label>Batch:</label>
          <input type="text" name="batch" value={formData.batch} onChange={handleChange} />
        </div>
        <div>
          <label>Link:</label>
          <input type="text" name="link" value={formData.link} onChange={handleChange} />
        </div>
        <button type="submit">Post Job Listing</button>
      </form>
    </div>
  );
}

export default AdminDashboard;
