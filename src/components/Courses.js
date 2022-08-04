import { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Course = (props) => (
  <tr>
    <td>{props.course._id}</td>
    <td>{props.course.title}</td>
    <td>{props.course.instructor}</td>
    <td>{props.course.category}</td>
    <td>{props.course.level}</td>
    <td>{props.course.price}</td>
    <td>
      <Link to={'/course/edit/' + props.course._id}>edit</Link> |{' '}
      <a
        href='#'
        onClick={() => {
          props.deleteCourse(props.course._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useLayoutEffect(() => {
    axios
      .get('http://localhost:5000/courses/')
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteCoures = (id) => {
    axios.delete('http://localhost:5000/courses/' + id).then((response) => {
      console.log(response.data);
    });

    setCourses(courses.filter((el) => el._id !== id));
  };

  const courseList = () => {
    return courses.map((currentCourse) => {
      return (
        <Course
          course={currentCourse}
          deleteCourse={deleteCoures}
          key={currentCourse._id}
        />
      );
    });
  };

  return (
    <div className='container'>
      <h3>Courses</h3>
      <table className='tables'>
        <thead className='thead-light'>
          <tr>
            <th>Course ID</th>
            <th>Title</th>
            <th>Instructor</th>
            <th>Category</th>
            <th>Level</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{courseList()}</tbody>
      </table>
    </div>
  );
};

export default Courses;
