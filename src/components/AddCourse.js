import { useState, useLayoutEffect } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredInstructor, setEnteredInstructor] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('Web Development');
  const [enteredLevel, setEnteredLevel] = useState('Beginner');
  const [enteredPrice, setEnteredPrice] = useState('');

  const [instructors, setInstructors] = useState([]);
  const [categories, setCategories] = useState([]);

  useLayoutEffect(() => {
    axios
      .get('http://localhost:5000/instructors/')
      .then((response) => {
        if (response.data.length > 0) {
          setInstructors(response.data);
          setEnteredInstructor(response.data[0].firstName);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('http://localhost:5000/categories/')
      .then((response) => {
        if (response.data.length > 0) {
          setCategories(response.data.map((category) => category.category));
          setEnteredCategory(response.data[0].category);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onChangeTitle = (e) => {
    setEnteredTitle(e.target.value);
  };
  const onChangeInstructor = (e) => {
    setEnteredInstructor(e.target.value);
  };
  const onChangeCategory = (e) => {
    setEnteredCategory(e.target.value);
  };
  const onChangeLevel = (e) => {
    setEnteredLevel(e.target.value);
  };
  const onChangePrice = (e) => {
    setEnteredPrice(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const index = instructors.findIndex(
      (instructor) => instructor.firstName === enteredInstructor
    );
    const retrievedInstructor = instructors[index];
    retrievedInstructor.courses.push(enteredTitle);
    const id = retrievedInstructor._id;

    const instructor = {
      firstName: retrievedInstructor.firstName,
      lastName: retrievedInstructor.lastName,
      email: retrievedInstructor.email,
      courses: retrievedInstructor.courses,
    };

    const course = {
      title: enteredTitle,
      instructor: enteredInstructor,
      category: enteredCategory,
      level: enteredLevel,
      price: enteredPrice,
    };

    console.log(course);

    axios
      .post('http://localhost:5000/courses/add', course)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    axios
      .post('http://localhost:5000/instructors/update/' + id, instructor)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = '/courses';

    setEnteredTitle('');
    setEnteredPrice('');
  };

  return (
    <div className='container'>
      <h3>Add Course</h3>
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
          <label>Instructor</label>
          <select
            required
            value={enteredInstructor}
            onChange={onChangeInstructor}
          >
            {instructors.map((instructor) => {
              return (
                <option key={instructor.firstName} value={instructor.firstName}>
                  {instructor.firstName}
                </option>
              );
            })}
          </select>
        </div>
        <div className='form-control'>
          <label>Category</label>
          <select required value={enteredCategory} onChange={onChangeCategory}>
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div className='form-control'>
          <label>Level</label>
          <select required value={enteredLevel} onChange={onChangeLevel}>
            <option value='Beginner'>Beginner</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Expert'>Expert</option>
          </select>
        </div>
        <div className='form-control'>
          <label>Price</label>
          <input
            type='number'
            placeholder='Add Price'
            value={enteredPrice}
            onChange={onChangePrice}
          />
        </div>

        <input type='submit' value='Save Course' className='btn btn-block' />
      </form>
    </div>
  );
};

export default AddCourse;
