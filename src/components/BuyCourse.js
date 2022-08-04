import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BuyCourse = () => {
  const [enteredStudent, setEnteredStudent] = useState('');
  const [enteredCourse, setEnteredCourse] = useState('');
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useLayoutEffect(() => {
    axios
      .get('http://localhost:5000/students/')
      .then((response) => {
        if (response.data.length > 0) {
          setStudents(response.data);
          setEnteredStudent(response.data[0].firstName);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('http://localhost:5000/courses/')
      .then((response) => {
        if (response.data.length > 0) {
          setCourses(response.data.map((course) => course.title));
          setEnteredCourse(response.data[0].title);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onChangeStudent = (e) => {
    setEnteredStudent(e.target.value);
  };
  const onChangeCourse = (e) => {
    setEnteredCourse(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const index = students.findIndex(
      (student) => student.firstName === enteredStudent
    );
    const retrievedStudent = students[index];
    retrievedStudent.courses.push(enteredCourse);
    const id = retrievedStudent._id;

    const student = {
      firstName: retrievedStudent.firstName,
      lastName: retrievedStudent.lastName,
      email: retrievedStudent.email,
      courses: retrievedStudent.courses,
    };

    console.log(student);

    axios
      .post('http://localhost:5000/students/update/' + id, student)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = '/courses';
  };

  return (
    <div className='container'>
      <h3>Buy a Course</h3>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Select Your Name</label>
          <select required value={enteredStudent} onChange={onChangeStudent}>
            {students.map((student) => {
              return (
                <option key={student.firstName} value={student.firstName}>
                  {student.firstName}
                </option>
              );
            })}
          </select>
        </div>
        <div className='form-control'>
          <label>Select the Course</label>
          <select required value={enteredCourse} onChange={onChangeCourse}>
            {courses.map((course) => {
              return (
                <option key={course} value={course}>
                  {course}
                </option>
              );
            })}
          </select>
        </div>

        <input type='submit' value='Buy Now' className='btn btn-block' />
      </form>
    </div>
  );
};

export default BuyCourse;
