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
          <Link to='/add-requestedcourse'>Request a Course</Link>
        </li>
        <br />
        <li>
          <Link to='/students'>Students</Link>
        </li>
        <li>
          <Link to='/instructors'>Instructors</Link>
        </li>
        <li>
          <Link to='/courses'>Courses</Link>
        </li>
        <li>
          <Link to='/categories'>Categories</Link>
        </li>
        <li>
          <Link to='/requestedcourses'>Requested Courses</Link>
        </li>
        <li>
          <Link to='/buy-course'>Buy a Course</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
