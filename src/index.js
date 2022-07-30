import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StudentsList from './components/StudentsList';
import InstructorsList from './components/InstructorsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='StudentsList' element={<StudentsList />} />
      <Route path='InstructorsList' element={<InstructorsList />} />
    </Routes>
  </BrowserRouter>
);
