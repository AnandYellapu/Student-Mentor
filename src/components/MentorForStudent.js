// MentorForStudent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const MentorForStudent = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [assignedMentor, setAssignedMentor] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://stu-men-be.onrender.com/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error.message);
      }
    };

    fetchStudents();
  }, []);

  const handleSelectChange = async (e) => {
    const studentId = e.target.value;

    try {
      const response = await axios.get(`https://stu-men-be.onrender.com/api/students/${studentId}/mentor`);
      setAssignedMentor(response.data.name);
      setSelectedStudent(studentId);
    } catch (error) {
      console.error('Error fetching assigned mentor:', error.message);
      setAssignedMentor('');
      setSelectedStudent('');
    }
  };

  return (
    <div className="container">
      <h2>Mentor for Student</h2>
      <label>Select Student:</label>
      <select value={selectedStudent} onChange={handleSelectChange} className="form-input">
        <option value="" disabled>Select a student</option>
        {students.map(student => (
          <option key={student._id} value={student._id}>{student.name}</option>
        ))}
      </select>

      {assignedMentor && (
        <div>
          <h3>Assigned Mentor:</h3>
          <p>{assignedMentor}</p>
        </div>
      )}
    </div>
  );
};

export default MentorForStudent;
