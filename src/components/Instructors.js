import React from 'react';
import { useState } from 'react';

const Instructors = () => {
  const [instructors, setInstructors] = useState([
    {
      instructorID: 1,
      firstName: 'Alvira',
      lastName: 'Narshidani',
      email: 'alviranarshidani@gmail.com',
      courses: ['Javascript','Python'],
    },
    {
      instructorID: 2,
      firstName: 'Vivek',
      lastName: 'Ahuja',
      email: 'vivekahuja@gmail.com',
      courses: ['Linux System Administration'],
    },
    {
      instructorID: 3,
      firstName: 'Linda',
      lastName: 'Kettle',
      email: 'lindakettle@gmail.com',
      courses: ['React','Spanish','Japanese','Java'],
    },
    {
      instructorID: 4,
      firstName: 'Test',
      lastName: 'Test',
      email: 'Test@gmail.com',
      courses: ['Test','Test2'],
    },
  ]);

  //delete Instructor
  const deleteInstructors = (instructorID) => {
    setInstructors(instructors.filter((instructor) => instructor.instructorID !== instructorID));
  };


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
      {instructors.map((instructor) => (
        
        <tbody>
          <tr>
            <td>{instructor.firstName}</td>
            <td>{instructor.lastName}</td>
            <td>{instructor.email}</td>
            <td>{instructor.courses.join('\r\n')}</td>              
            <td><a href="#" >edit</a> | <a href="#" onClick={() => deleteInstructors(instructor.instructorID)}>delete</a></td>
          </tr>
        </tbody>         
      ))}
    </table>
  </>
  </div>
  );
};

export default Instructors;
