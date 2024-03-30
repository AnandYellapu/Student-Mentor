// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import MentorForm from './components/MentorForm';
import AssignMentorForm from './components/AssignMentorForm';
import StudentList from './components/StudentList';
import MentorList from './components/MentorList';
import ChangeMentorForm from './components/ChangeMentorForm';
import MentorForStudent from './components/MentorForStudent';
import AddStudentsToMentorForm from './components/AddStudentsToMentorForm';
import StudentsOfMentor from './components/StudentsOfMentor';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/students">Student List</NavLink>
            </li>
            <li>
              <NavLink to="/mentors">Mentor List</NavLink>
            </li>
            <li>
              <NavLink to="/create-student">Create Student</NavLink>
            </li>
            <li>
              <NavLink to="/create-mentor">Create Mentor</NavLink>
            </li>
            <li>
              <NavLink to="/assign-mentor">Assign Mentor</NavLink>
            </li>
            <li>
              <NavLink to="/change-mentor">Change Mentor</NavLink>
            </li>
            <li>
              <NavLink to="/mentor-for-student">Mentor for Student</NavLink>
            </li>
            <li>
            <NavLink to="/students-of-mentor/:mentorId">Students of Mentor</NavLink>  
          </li>
            <li>
              <NavLink to="/add-students-to-mentor">Add Students to Mentor</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/students" element={<StudentList  />} />
          <Route path="/mentors" element={<MentorList />} />
          <Route path="/create-student" element={<StudentForm />} />
          <Route path="/create-mentor" element={<MentorForm />} />
          <Route path="/assign-mentor" element={<AssignMentorForm />} />
          <Route path="/change-mentor" element={<ChangeMentorForm />} />
          <Route path="/mentor-for-student" element={<MentorForStudent />} />
          <Route path="/add-students-to-mentor" element={<AddStudentsToMentorForm />} />
          <Route path="/students-of-mentor/:mentorId" element={<StudentsOfMentor />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
