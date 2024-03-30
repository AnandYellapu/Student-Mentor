// StudentList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const StudentList = () => {
  const [students, setStudents] = useState([]);

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

  return (
    <div className="container">
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
