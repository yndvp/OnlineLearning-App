import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/AddStudent.js'>Are you a student?</Link>
        </li>
        <li>
          <Link to='/AddInstructor.js'>Are you a instructor?</Link>
        </li>
        <li>
          <Link to='/AddCourse.js'>Create a Course</Link>
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
