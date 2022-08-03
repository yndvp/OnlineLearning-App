import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to='/add-student'>Are you a student?</Link>
        </li>
        <li>
          <Link to='/add-instructor'>Are you a instructor?</Link>
        </li>
        <li>
          <Link to='/add-course'>Create a Course</Link>
        </li>
        <li>
          <Link to='/add-category'>Create a Category</Link>
        </li>
        <li>
          <Link to='/students'>Students List</Link>
        </li>
        <li>
          <Link to='/instructors'>Instructors List</Link>
        </li>
        <li>
          <Link to='/courses'>Courses List</Link>
        </li>
        <li>
          <Link to='/categories'>Categories List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
