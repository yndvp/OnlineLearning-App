import { useState } from 'react';

const Courses = () => {

  const [courses, setCourses] = useState([
    {
      courseID: 1,
      courseName: 'JavaScript',
      instructor: 'Alvira Narshidani',
      category: 'Programming',
      price: 19.99,
    },
    {
      courseID: 2,
      courseName: 'Linux System Administration',
      instructor: 'Vivek Ahuja',
      category: 'Programming',
      price: 19.99,
    },
    {
      courseID: 3,
      courseName: 'Project Management for IT',
      instructor: 'Linda Kettle',
      category: 'Management',
      price: 19.99,
    },
    {
      courseID: 4,
      courseName: 'Test',
      instructor: 'Test',
      category: 'Test',
      price: 19.99,
    },
  ]);

  // //add course
  // const addCourse = (course) => {
  //   const courseID = Math.floor(Math.random() * 10000) + 1;
  //   const newCourse = { courseID, ...course };
  //   setCourses([...courses, newCourse]);
  // };

  //delete course
  const deleteCourse = (courseID) => {
    setCourses(courses.filter((course) => course.courseID !== courseID));
  };

  // //edit course
  // const editCourse = (course) => {
  //   const oldCourse = { course };
  //   console.log(oldCourse);
  // };

  return (
    <div className='container'>
      <table className="tables">
        <thead className="thead-light">
          <tr>
            <th>Course</th>
            <th>Instructor</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        {courses.map((course) => (
          
          <tbody>
        <tr>
          <td>{course.courseName}</td>
          <td>{course.instructor}</td>
          <td>{course.category}</td>
          <td>{course.price}</td>
          <td><a href="#" >edit</a> | <a href="#" onClick={() => deleteCourse(course.courseID)}>delete</a></td>
        </tr>
      </tbody>
          
        ))}
      </table>
    </div>
  )
}

export default Courses
