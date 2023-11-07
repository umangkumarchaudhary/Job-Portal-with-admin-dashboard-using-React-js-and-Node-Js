import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import to include Routes

import Content from './components/content';
import AdminDashboard from './components/AdminDashboard'; // Import the AdminDashboard component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Today's Job Listings</h1>
        </header>
        <main>
          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/admin" element={<AdminDashboard />} /> {/* Use the element prop to specify the component */}
            <Route path="/" element={<Content />} /> {/* Use the element prop to specify the component */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
