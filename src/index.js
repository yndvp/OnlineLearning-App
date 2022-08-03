import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddStudent from './components/AddStudent';
import AddInstructor from './components/AddInstructor';
import AddCourse from './components/AddCourse';
import Students from './components/Students';
import Instructors from './components/Instructors';
import Courses from './components/Courses';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
