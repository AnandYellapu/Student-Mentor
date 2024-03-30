// MentorForm.js
import React, { useState } from 'react';
import axios from 'axios';


const MentorForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://stu-men-be.onrender.com/api/mentors/create-mentor', { name });
      alert('Mentor created successfully!');
      console.log(response.data);
      // Handle success, update state, or navigate to another page as needed
    } catch (error) {
      console.error('Error creating mentor:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="form-button">Create Mentor</button>
      </form>
    </div>
  );
};

export default MentorForm;
