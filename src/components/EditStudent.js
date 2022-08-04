import axios from 'axios';
import { useState, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditStudent = () => {
  const [studentId, setStudentId] = useState('');
  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredCourses, setEnteredCourses] = useState([]);

  const { id } = useParams();

  useLayoutEffect(() => {
    axios
      .get('http://localhost:5000/students/' + id)
      .then((response) => {
        setStudentId(response.data._id);
        setEnteredFirstName(response.data.firstName);
        setEnteredLastName(response.data.lastName);
        setEnteredEmail(response.data.email);
        setEnteredCourses(response.data.courses);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onChangeFirstName = (e) => {
    setEnteredFirstName(e.target.value);
  };

  const onChangeLastName = (e) => {
    setEnteredLastName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEnteredEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const student = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      courses: enteredCourses,
    };

    console.log(student);

    axios
      .post('http://localhost:5000/students/update/' + id, student)
      .then((res) => console.log(res.data));

    window.location = '/students';
  };

  return (
    <div className='container'>
      <h3>Edit Student</h3>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Student ID</label>
          <input
            type='text'
            value={studentId}
            readOnly
            style={{ color: 'gray', outline: 'none' }}
          />
        </div>
        <div className='form-control'>
          <label>First Name</label>
          <input
            type='text'
            value={enteredFirstName}
            onChange={onChangeFirstName}
          />
        </div>
        <div className='form-control'>
          <label>Last Name</label>
          <input
            type='text'
            value={enteredLastName}
            onChange={onChangeLastName}
          />
        </div>
        <div className='form-control'>
          <label>Email</label>
          <input type='text' value={enteredEmail} onChange={onChangeEmail} />
        </div>
        <input type='submit' value='Edit Student' className='btn btn-block' />
      </form>
    </div>
  );
};

export default EditStudent;
