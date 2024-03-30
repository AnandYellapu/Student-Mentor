// MentorList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const MentorList = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get('https://stu-men-be.onrender.com/api/mentors');
        setMentors(response.data);
      } catch (error) {
        console.error('Error fetching mentors:', error);
        // Handle error, show error message, etc.
      }
    };

    fetchMentors();
  }, []);

  return (
    <div className="container">
      <h2>Mentor List</h2>
      <ul>
        {mentors.map((mentor) => (
          <li key={mentor._id}>{mentor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MentorList;
