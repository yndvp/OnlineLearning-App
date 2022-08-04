import { useState } from 'react';
import axios from 'axios';

const AddInstructor = () => {
  const [enteredFirstName, setEnteredFirstName] = useState('');
  const [enteredLastName, setEnteredLastName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredCourses, setEnteredCourses] = useState([]);

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

    const instructor = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      courses: enteredCourses,
    };

    console.log(instructor);

    axios
      .post('http://localhost:5000/instructors/add', instructor)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = '/instructors';

    setEnteredFirstName('');
    setEnteredLastName('');
    setEnteredEmail('');
  };

  return (
    <div className='container'>
      <h3>Add Instructor</h3>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>First Name</label>
          <input
            type='text'
            placeholder='Add First Name'
            value={enteredFirstName}
            onChange={onChangeFirstName}
          />
        </div>
        <div className='form-control'>
          <label>Last Name</label>
          <input
            type='text'
            placeholder='Add Last Name'
            value={enteredLastName}
            onChange={onChangeLastName}
          />
        </div>
        <div className='form-control'>
          <label>Email</label>
          <input
            type='email'
            placeholder='Add Email'
            value={enteredEmail}
            onChange={onChangeEmail}
          />
        </div>

        <input
          type='submit'
          value='Save Instructor'
          className='btn btn-block'
        />
      </form>
    </div>
  );
};

export default AddInstructor;
