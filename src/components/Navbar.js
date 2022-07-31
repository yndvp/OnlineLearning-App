import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to='/AddStudent'>Are you a student?</Link>
        </li>
        <li>
          <Link to='/AddInstructor'>Are you a instructor?</Link>
        </li>
        <li>
          <Link to='/AddCourse'>Create a Course</Link>
        </li>
        <li>
          <Link to='/Students'>Students List</Link>
        </li>
        <li>
          <Link to='/Instructors'>Instructors List</Link>
        </li>
        <li>
          <Link to='/Courses'>Courses List</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};

export default Navbar;
