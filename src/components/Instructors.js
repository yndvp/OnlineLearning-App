import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useLayoutEffect } from 'react';

const Instructor = (props) => (
  <tr>
    <td>{props.instructor._id}</td>
    <td>{props.instructor.firstName}</td>
    <td>{props.instructor.lastName}</td>
    <td>{props.instructor.email}</td>
    <td>{props.instructor.courses.join('\r\n')}</td>
    <td>
      <Link to={'/instructor/edit/' + props.instructor._id}>edit</Link> |{' '}
      <a
        href='#'
        onClick={() => {
          props.deleteInstructor(props.instructor._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useLayoutEffect(() => {
    axios
      .get('http://localhost:5000/instructors/')
      .then((response) => {
        setInstructors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteInstructor = (id) => {
    axios.delete('http://localhost:5000/instructors/' + id).then((response) => {
      console.log(response.data);
    });

    setInstructors(instructors.filter((el) => el._id !== id));
  };

  const instructorList = () => {
    return instructors.map((currentInstructor) => {
      return (
        <Instructor
          instructor={currentInstructor}
          deleteInstructor={deleteInstructor}
          key={currentInstructor._id}
        />
      );
    });
  };

  return (
    <div className='container'>
      <h3>Instructors</h3>
      <table className='tables'>
        <thead className='thead-light'>
          <tr>
            <th>Instructor ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Courses</th>
          </tr>
        </thead>
        <tbody>{instructorList()}</tbody>
      </table>
    </div>
  );
};

export default Instructors;
