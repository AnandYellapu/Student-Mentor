// AssignedMentor.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const AssignedMentor = ({ studentId }) => {
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    const fetchAssignedMentor = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/api/students/${studentId}/mentor`);
        setMentor(response.data);
      } catch (error) {
        console.error('Error fetching assigned mentor:', error);
        // Handle error, show error message, etc.
      }
    };

    fetchAssignedMentor();
  }, [studentId]);

  return (
    <div className="assigned-mentor-container">
      <h2 className="assigned-mentor-title">Assigned Mentor</h2>
      {mentor ? <p className="assigned-mentor-name">{mentor.name}</p> : <p className="no-mentor-message">No mentor assigned</p>}
    </div>
  );
};

export default AssignedMentor;
