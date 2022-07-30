import React from 'react';
// import Header from './components/Header';
// import Navbar from './Navbar';
import { useState } from 'react';

const Students = () => {
  // const [showAddStudent, setShowAddStudent] = useState(false);

  const [students, setStudents] = useState([
    {
      studentID: 1,
      firstName: 'Yunna',
      lastName: 'Lang',
      email: 'yunnalang@gmail.com',
      courses: ['Linux System Administration','Music'],
    },
    {
      studentID: 2,
      firstName: 'Marcin',
      lastName: 'Orgacki',
      email: 'marcinorgacki@gmail.com',
      courses: ['Linux System Administration','Javascript','Spanish'],
    },
    {
      studentID: 3,
      firstName: 'Huidan',
      lastName: 'Kuang',
      email: 'huidankuang@gmail.com',
      courses: ['React','Spanish','Japanese','Java'],
    },
    {
      studentID: 4,
      firstName: 'Test',
      lastName: 'Test',
      email: 'Test@gmail.com',
      courses: ['Test','Test2'],
    },
  ]);

  //delete student
  const deleteStudent = (studentID) => {
    setStudents(students.filter((student) => student.studentID !== studentID));
  };

  //edit student
  // const editStudent = (student) => {
  //   const oldStudent = { student };
  //   console.log(oldStudent);
  // };
  
  return (
    <div className='container'>
      <>
      <table className="tables">
        <thead className="thead-light">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Courses</th>
            <th>Actions</th>
          </tr>
        </thead>
        {students.map((student) => (
          
          <tbody>
            <tr>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              {/* {student.courses.forEach((course) => (
                  <td>{course}</td>
                ))} */}
              <td>{student.courses}</td>              
              <td><a href="#" >edit</a> | <a href="#" onClick={() => deleteStudent(student.studentID)}>delete</a></td>
            </tr>
          </tbody>         
        ))}
      </table>
    </>
    </div>
  );
};

export default Students;
