import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useLayoutEffect } from 'react';

const Category = (props) => (
  <tr>
    <td>{props.category._id}</td>
    <td>{props.category.category}</td>
    <td>{props.category.description}</td>
    <td>{props.category.createdAt}</td>
    <td>{props.category.updatedAt}</td>
    <td>
      <Link to={'/category/edit/' + props.category._id}>edit</Link> |{' '}
      <a
        href='#'
        onClick={() => {
          props.deleteExercise(props.category._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useLayoutEffect(() => {
    axios
      .get('http://localhost:5000/categories/')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteCategory = (id) => {
    axios.delete('http://localhost:5000/categories/' + id).then((response) => {
      console.log(response.data);
    });

    setCategories(categories.filter((el) => el._id !== id));
  };

  const categoryList = () => {
    return categories.map((currentCategory) => {
      return (
        <Category
          category={currentCategory}
          deleteCategory={deleteCategory}
          key={currentCategory._id}
        />
      );
    });
  };

  return (
    <div className='container'>
      <table className='tables'>
        <thead className='thead-light'>
          <tr>
            <th>Category ID</th>
            <th>Category</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>{categoryList()}</tbody>
      </table>
    </div>
  );
};

export default Categories;
