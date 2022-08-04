import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import AddInstructor from './components/AddInstructor';
import AddCourse from './components/AddCourse';
import AddCategory from './components/AddCategory';
import AddRequestedCourse from './components/AddRequestedCourse';
import EditStudent from './components/EditStudent';
import EditInstructor from './components/EditInstructor';
import EditCourse from './components/EditCourse';
import EditCategory from './components/EditCategory';
import EditRequestedCourse from './components/EditRequestedCourse';
import Students from './components/Students';
import Instructors from './components/Instructors';
import Courses from './components/Courses';
import Categories from './components/Categories';
import BuyCourse from './components/BuyCourse';
import RequestedCourses from './components/RequestedCourses';
import React from 'react';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Navbar />
        <Route path='/add-student' component={AddStudent} />
        <Route path='/add-instructor' component={AddInstructor} />
        <Route path='/add-course' component={AddCourse} />
        <Route path='/add-category' component={AddCategory} />
        <Route path='/add-requestedcourse' component={AddRequestedCourse} />
        <Route path='/student/edit/:id' component={EditStudent} />
        <Route path='/instructor/edit/:id' component={EditInstructor} />
        <Route path='/course/edit/:id' component={EditCourse} />
        <Route path='/category/edit/:id' component={EditCategory} />
        <Route
          path='/requestedcourse/edit/:id'
          component={EditRequestedCourse}
        />
        <Route path='/students' exact component={Students} />
        <Route path='/instructors' exact component={Instructors} />
        <Route path='/courses' exact component={Courses} />
        <Route path='/categories' exact component={Categories} />
        <Route path='/requestedcourses' exact component={RequestedCourses} />
        <Route path='/buy-course' exact component={BuyCourse} />
      </div>
    </Router>
  );
}

export default App;
