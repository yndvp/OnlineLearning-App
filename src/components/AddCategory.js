import axios from 'axios';
import { useState } from 'react';

const AddCategory = () => {
  const [enteredCategory, setEnteredCategory] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');

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
      .post('http://localhost:5000/categories/add', category)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setEnteredCategory('');
    setEnteredDescription('');
  };

  return (
    <div className='container'>
      <h3>Add Category</h3>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Category</label>
          <input
            type='text'
            placeholder='Add Category'
            value={enteredCategory}
            onChange={onChangeCategory}
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
        <input type='submit' value='Save Category' className='btn btn-block' />
      </form>
    </div>
  );
};

export default AddCategory;
