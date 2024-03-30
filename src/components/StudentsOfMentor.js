// StudentsOfMentor.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const StudentsOfMentor = () => {
  const [mentors, setMentors] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get('http://localhost:2000/api/mentors');
        setMentors(response.data);
      } catch (error) {
        console.error('Error fetching mentors:', error.message);
      }
    };

    fetchMentors();
  }, []);

  const handleMentorChange = async (e) => {
    const mentorId = e.target.value;

    try {
      const response = await axios.get(`http://localhost:2000/api/mentors/${mentorId}/students-of-mentor`);
      setStudents(response.data);
      setSelectedMentor(mentorId);
    } catch (error) {
      console.error('Error fetching students:', error.message);
      setStudents([]);
      setSelectedMentor('');
    }
  };

  return (
    <div className="container">
      <h2>Students of Mentor</h2>
      <label>Select Mentor:</label>
      <select value={selectedMentor} onChange={handleMentorChange}>
        <option value="" disabled>Select a mentor</option>
        {mentors.map(mentor => (
          <option key={mentor._id} value={mentor._id}>{mentor.name}</option>
        ))}
      </select>

      <ul>
        {students.map(student => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsOfMentor;
