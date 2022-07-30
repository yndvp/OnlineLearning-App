import Button from './Button'
import EditCourse from './EditCourse'

const Course = ( {course, onDelete, onEdit}) => {
  return (
    
      <tbody>
        <tr>
          <td>{course.courseName}</td>
          <td>{course.instructor}</td>
          <td>{course.category}</td>
          <td>{course.price}</td>
          <td><a href="#" onClick={() => onEdit(course)}>edit</a> | <a href="#" onClick={() => onDelete(course.courseID)}>delete</a></td>
        </tr>
      </tbody>
    

  )
}

export default Course
