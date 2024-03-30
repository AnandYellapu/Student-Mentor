// StudentForm.js
import React, { useState } from 'react';
import axios from 'axios';


const StudentForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://stu-men-be.onrender.com/api/students/create', { name });
      alert('Student created successfully!');
      setName('');
    } catch (error) {
      console.error('Error creating student:', error.message);
      alert('Error creating student. Please try again.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
        <button type="submit" className="form-button">Create Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
