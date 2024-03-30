// AddStudentsToMentorForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AddStudentsToMentorForm = () => {
  const [mentors, setMentors] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get('http://localhost:2000/api/mentors');
        setMentors(response.data);
      } catch (error) {
        console.error('Error fetching mentors:', error.message);
      }
    };

    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:2000/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error.message);
      }
    };

    fetchMentors();
    fetchStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:2000/api/mentors/${selectedMentor}/add-students`, {
        studentIds: selectedStudents,
      });

      alert('Students added to mentor successfully!');
      setSelectedMentor('');
      setSelectedStudents([]);
    } catch (error) {
      console.error('Error adding students to mentor:', error.message);
      alert('Error adding students to mentor. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">Select Mentor:</label>
        <select
          value={selectedMentor}
          onChange={(e) => setSelectedMentor(e.target.value)}
          className="form-input"
        >
          <option value="" disabled>Select a mentor</option>
          {mentors.map(mentor => (
            <option key={mentor._id} value={mentor._id}>{mentor.name}</option>
          ))}
        </select>

        <label className="form-label">Select Students:</label>
        <select
          multiple
          value={selectedStudents}
          onChange={(e) => setSelectedStudents(Array.from(e.target.selectedOptions, option => option.value))}
          className="form-input"
        >
          {students.map(student => (
            <option key={student._id} value={student._id}>{student.name}</option>
          ))}
        </select>

        <button type="submit" className="form-button">Add Students to Mentor</button>
      </form>
    </div>
  );
};

export default AddStudentsToMentorForm;
