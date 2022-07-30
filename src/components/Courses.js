import Course from "./Course"

const Courses = ({courses, onDelete, onEdit}) => {

  return (
    <>
      {courses.map((course) => (
        // <h3 key={course.courseID}>{course.courseName}</h3>
        <Course key={course.courseID} course={course} onDelete={onDelete} onEdit={onEdit}/>
      ))}
    </>
  )
}

export default Courses
