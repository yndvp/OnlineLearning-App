import Course from "./Course"

const Courses = ({courses, onDelete}) => {

  return (
    <>
      {courses.map((course) => (
        // <h3 key={course.courseID}>{course.courseName}</h3>
        <Course key={course.courseID} course={course} onDelete={onDelete}/>
      ))}
    </>
  )
}

export default Courses
