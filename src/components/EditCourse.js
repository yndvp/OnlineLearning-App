import axios from 'axios';
import { useState, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditCourse = () => {
  // const [categoryId, setCategoryId] = useState('');
  // const [createdAt, setCreatedAt] = useState('');
  // const [updatedAt, setUpdatedAt] = useState('');

  // const [enteredCategory, setEnteredCategory] = useState('');
  // const [enteredDescription, setEnteredDescription] = useState('');
  const [course, setCourse] = useState({});
  const [instructors, setInstructors] = useState([]);
  const [categories, setCategories] = useState([]);

  const { id: courseId } = useParams();

  let originalTitle;

  useLayoutEffect(() => {
    axios
      .get('http://localhost:5000/instructors/')
      .then((response) => {
        if (response.data.length > 0) {
          setInstructors(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('http://localhost:5000/categories/')
      .then((response) => {
        if (response.data.length > 0) {
          setCategories(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('http://localhost:5000/courses/' + courseId)
      .then((response) => {
        setCourse(response.data);
        originalTitle = response.data.title;
        // setEnteredCategory(response.data.category);
        // setEnteredDescription(response.data.description);
        // setCategoryId(response.data._id);
        // setCreatedAt(response.data.createdAt);
        // setUpdatedAt(response.data.updatedAt);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onChangeTitle = (e) => {
    setCourse({ ...course, title: e.target.value });
  };
  const onChangeCategory = (e) => {
    setCourse({ ...course, category: e.target.value });
  };
  const onChangeLevel = (e) => {
    setCourse({ ...course, level: e.target.value });
  };
  const onChangePrice = (e) => {
    setCourse({ ...course, price: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const instructorIndex = instructors.findIndex(
      (i) => i.firstName === course.instructor
    );
    const retrievedInstructor = instructors[instructorIndex];
    const courseIndex = retrievedInstructor.courses.findIndex(
      (c) => c === originalTitle
    );
    console.log(courseIndex);
    retrievedInstructor.courses[courseIndex] = course.title;
    const id = retrievedInstructor._id;
    console.log(retrievedInstructor.courses[courseIndex], course.title);
    console.log(retrievedInstructor.courses);

    const instructor = {
      firstName: retrievedInstructor.firstName,
      lastName: retrievedInstructor.lastName,
      email: retrievedInstructor.email,
      courses: retrievedInstructor.courses,
    };

    const newCourse = {
      title: course.title,
      instructor: course.instructor,
      category: course.category,
      level: course.level,
      price: course.price,
    };

    console.log(newCourse);

    axios
      .post('http://localhost:5000/courses/update/' + courseId, newCourse)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    axios
      .post('http://localhost:5000/instructors/update/' + id, instructor)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = '/courses';
  };

  return (
    <div className='container'>
      <h3>Edit Course</h3>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Course ID</label>
          <input
            type='text'
            value={course._id}
            readOnly
            style={{ color: 'gray', outline: 'none' }}
          />
        </div>
        <div className='form-control'>
          <label>Title</label>
          <input type='text' value={course.title} onChange={onChangeTitle} />
        </div>
        <div className='form-control'>
          <label>Instructor</label>
          <input
            type='text'
            value={course.instructor}
            readOnly
            style={{ color: 'gray', outline: 'none' }}
          />
        </div>
        <div className='form-control'>
          <label>Category</label>
          <select required value={course.category} onChange={onChangeCategory}>
            {categories.map((category) => {
              return (
                <option key={category.category} value={category.category}>
                  {category.category}
                </option>
              );
            })}
          </select>
        </div>
        <div className='form-control'>
          <label>Level</label>
          <select required value={course.level} onChange={onChangeLevel}>
            <option value='Beginner'>Beginner</option>
            <option value='Intermediate'>Intermediate</option>
            <option value='Expert'>Expert</option>
          </select>
        </div>
        <div className='form-control'>
          <label>Price</label>
          <input type='number' value={course.price} onChange={onChangePrice} />
        </div>
        <input type='submit' value='Edit Category' className='btn btn-block' />
      </form>
    </div>
  );
};

export default EditCourse;
