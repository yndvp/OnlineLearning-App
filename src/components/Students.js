import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useLayoutEffect } from 'react';

const Student = (props) => (
  <tr>
    <td>{props.student._id}</td>
    <td>{props.student.firstName}</td>
    <td>{props.student.lastName}</td>
    <td>{props.student.email}</td>
    <td>{props.student.courses.join('\r\n')}</td>
    <td>
      <Link to={'/student/edit/' + props.student._id}>edit</Link> |{' '}
      <a
        href='#'
        onClick={() => {
          props.deleteStudent(props.student._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

const Students = () => {
  const [students, setStudents] = useState([]);

  useLayoutEffect(() => {
    axios
      .get('http://localhost:5000/students/')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteStudent = (id) => {
    axios.delete('http://localhost:5000/students/' + id).then((response) => {
      console.log(response.data);
    });

    setStudents(students.filter((el) => el._id !== id));
  };

  const studentList = () => {
    return students.map((currentStudent) => {
      return (
        <Student
          student={currentStudent}
          deleteStudent={deleteStudent}
          key={currentStudent._id}
        />
      );
    });
  };

  return (
    <div className='container'>
      <h3>Students</h3>
      <table className='tables'>
        <thead className='thead-light'>
          <tr>
            <th>Student ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Courses</th>
          </tr>
        </thead>
        <tbody>{studentList()}</tbody>
      </table>
    </div>
  );
};

export default Students;
