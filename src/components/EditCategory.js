import axios from 'axios';
import { useState, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditCategory = () => {
  const [categoryId, setCategoryId] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');

  const [enteredCategory, setEnteredCategory] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

  const { id } = useParams();

  useLayoutEffect(() => {
    axios
      .get('http://localhost:5000/categories/' + id)
      .then((response) => {
        setEnteredCategory(response.data.category);
        setEnteredDescription(response.data.description);
        setCategoryId(response.data._id);
        setCreatedAt(response.data.createdAt);
        setUpdatedAt(response.data.updatedAt);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onChangeCategory = (e) => {
    setEnteredCategory(e.target.value);
  };

  const onChangeDescription = (e) => {
    setEnteredDescription(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const category = {
      category: enteredCategory,
      description: enteredDescription,
    };

    console.log(category);

    axios
      .post('http://localhost:5000/categories/update/' + id, category)
      .then((res) => console.log(res.data));

    window.location = '/categories';
  };

  return (
    <div className='container'>
      <h3>Edit Category</h3>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Category ID</label>
          <input type='text' value={categoryId} readOnly />
        </div>
        <div className='form-control'>
          <label>Category</label>
          <input
            type='text'
            value={enteredCategory}
            onChange={onChangeCategory}
          />
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
          <input type='text' value={createdAt} readOnly />
        </div>
        <div className='form-control'>
          <label>Updated At</label>
          <input type='text' value={updatedAt} readOnly />
        </div>
        <input type='submit' value='Edit Category' className='btn btn-block' />
      </form>
    </div>
  );
};

export default EditCategory;
