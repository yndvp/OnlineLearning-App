import axios from 'axios';
import { useState } from 'react';

const AddRequestedCourse = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

  const onChangeTitle = (e) => {
    setEnteredTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setEnteredDescription(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const requestedcourse = {
      title: enteredTitle,
      description: enteredDescription,
    };

    console.log(requestedcourse);

    axios
      .post('http://localhost:5000/requestedcourses/add', requestedcourse)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = '/requestedcourses';

    setEnteredTitle('');
    setEnteredDescription('');
  };

  return (
    <div className='container'>
      <h3>Request a Course</h3>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Title</label>
          <input
            type='text'
            placeholder='Add Title'
            value={enteredTitle}
            onChange={onChangeTitle}
          />
        </div>
        <div className='form-control'>
          <label>Description</label>
          <input
            type='text'
            placeholder='Add Description'
            value={enteredDescription}
            onChange={onChangeDescription}
          />
        </div>
        <input type='submit' value='Make a Request' className='btn btn-block' />
      </form>
    </div>
  );
};

export default AddRequestedCourse;
