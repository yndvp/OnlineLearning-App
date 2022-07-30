import Course from "./Course"

const Courses = ({courses, onDelete, onEdit}) => {

  return (
    <>
      <table className="course">
        <thead className="thead-light">
          <tr>
            <th>Course</th>
            <th>Instructor</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        {courses.map((course) => (
          
          <Course key={course.courseID} course={course} onDelete={onDelete} onEdit={onEdit}/>
          
        ))}
      </table>
    </>
  )
}

export default Courses
