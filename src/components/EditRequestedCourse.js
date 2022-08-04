import axios from 'axios';
import { useState, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditRequestedCourse = () => {
  const [requestedcourseId, setRequestedcourseId] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

  const { id } = useParams();

  useLayoutEffect(() => {
    axios
      .get('http://localhost:5000/requestedcourses/' + id)
      .then((response) => {
        setEnteredTitle(response.data.title);
        setEnteredDescription(response.data.description);
        setRequestedcourseId(response.data._id);
        setCreatedAt(response.data.createdAt);
        setUpdatedAt(response.data.updatedAt);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
      .post(
        'http://localhost:5000/requestedcourses/update/' + id,
        requestedcourse
      )
      .then((res) => console.log(res.data));

    window.location = '/requestedcourses';
  };

  return (
    <div className='container'>
      <h3>Edit Requested Course</h3>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Requested Course ID</label>
          <input
            type='text'
            value={requestedcourseId}
            readOnly
            style={{ color: 'gray', outline: 'none' }}
          />
        </div>
        <div className='form-control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={onChangeTitle} />
        </div>
        <div className='form-control'>
          <label>Description</label>
          <input
            type='text'
            value={enteredDescription}
            onChange={onChangeDescription}
          />
        </div>
        <div className='form-control'>
          <label>Created At</label>
          <input
            type='text'
            value={createdAt}
            readOnly
            style={{ color: 'gray', outline: 'none' }}
          />
        </div>
        <div className='form-control'>
          <label>Updated At</label>
          <input
            type='text'
            value={updatedAt}
            readOnly
            style={{ color: 'gray', outline: 'none' }}
          />
        </div>
        <input
          type='submit'
          value='Edit Requested Course'
          className='btn btn-block'
        />
      </form>
    </div>
  );
};

export default EditRequestedCourse;
