import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useLayoutEffect } from 'react';

const RequestedCourse = (props) => (
  <tr>
    <td>{props.requestedcourse._id}</td>
    <td>{props.requestedcourse.title}</td>
    <td>{props.requestedcourse.description}</td>
    <td>{props.requestedcourse.createdAt}</td>
    <td>{props.requestedcourse.updatedAt}</td>
    <td>
      <Link to={'/requestedcourse/edit/' + props.requestedcourse._id}>
        edit
      </Link>{' '}
      |{' '}
      <a
        href='#'
        onClick={() => {
          props.deleteRequestedCourse(props.requestedcourse._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

const RequestedCourses = () => {
  const [requestedcourses, setRequestedcourses] = useState([]);

  useLayoutEffect(() => {
    axios
      .get('http://localhost:5000/requestedcourses/')
      .then((response) => {
        setRequestedcourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteRequestedCourse = (id) => {
    axios
      .delete('http://localhost:5000/requestedcourses/' + id)
      .then((response) => {
        console.log(response.data);
      });

    setRequestedcourses(requestedcourses.filter((el) => el._id !== id));
  };

  const requestedcourseList = () => {
    return requestedcourses.map((currentRequestedCourse) => {
      return (
        <RequestedCourse
          requestedcourse={currentRequestedCourse}
          deleteRequestedCourse={deleteRequestedCourse}
          key={currentRequestedCourse._id}
        />
      );
    });
  };

  return (
    <div className='container'>
      <h3>Requested Courses</h3>
      <table className='tables'>
        <thead className='thead-light'>
          <tr>
            <th>Requested Course ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>{requestedcourseList()}</tbody>
      </table>
    </div>
  );
};

export default RequestedCourses;
