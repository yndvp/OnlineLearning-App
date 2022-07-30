import { FaTimes } from 'react-icons/fa'
import Button from './Button'
import EditCourse from './EditCourse'

const Course = ( {course, onDelete, onEdit}) => {
  return (
    <div className='course'>
      <h3>
        {course.courseName} 
        <div>
          <Button color={'grey'} text={'Edit Course'} onClick={() => onEdit(course)}/>
          <FaTimes 
              style={{ color: 'red', cursor:'pointer'}} 
              onClick={() => onDelete(course.courseID)}/>
        </div>
      </h3>
      <p>{course.instructor}</p>
      <p>Category: {course.category}</p>
      <p>Price: {course.price}</p>
      <EditCourse  />
    </div>
  )
}

export default Course
