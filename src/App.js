import { useState } from "react";
import Header from './components/Header';
import Courses from './components/Courses';
import AddCourse from "./components/AddCourse";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StudentsList from "./components/StudentsList";
import InstructorsList from "./components/InstructorsList";

function App() {
  const [showAddCourse, setShowAddCourse] = useState(false)

  const [courses, setCourses] = useState(
    [
        {
            courseID: 1,
            courseName: "JavaScript",
            instructor: "Alvira Narshidani",
            category: "Programming",
            price: 19.99
        },
        {
            courseID: 2,
            courseName: "Linux System Administration",
            instructor: "Vivek Ahuja",
            category: "Programming",
            price: 19.99
        },
        {
            courseID: 3,
            courseName: "Project Management for IT",
            instructor: "Linda Kettle",
            category: "Management",
            price: 19.99
        },
        {
          courseID: 4,
          courseName: "Test",
          instructor: "Test",
          category: "Test",
          price: 19.99
      }
    ]
  )

  //add course
  const addCourse = (course) => {
    const courseID = Math.floor(Math.random() * 10000) + 1
    const newCourse = { courseID, ...course }
    setCourses([...courses, newCourse])
  }

  //delete course
  const deleteCourse = (courseID) => {
    setCourses(courses.filter((course) => course.courseID !== courseID))
  }

    //edit course
    const editCourse = (course) => {
      const oldCourse = {course}
      console.log(oldCourse)
    }
  

  return (
    <Router>
    <div className="container">
      <Navbar />
      <Header onAdd={() => setShowAddCourse(!showAddCourse)} showAdd={ showAddCourse }/>
      {showAddCourse && <AddCourse onAdd={addCourse} />}
      {courses.length > 0 ? <Courses courses={courses} onDelete={deleteCourse} onEdit={editCourse}/> : 'No courses to show'}
    </div>
    {/* <Route path='/StudentsList' component={StudentsList} />
    <Route path='/InstructorsList' component={InstructorsList} /> */}
    </Router>
  );
}

export default App;
