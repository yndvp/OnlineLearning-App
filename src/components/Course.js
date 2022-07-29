import { FaTimes } from 'react-icons/fa'

const Course = ( {course, onDelete}) => {
  return (
    <div className='course'>
      <h3>
        {course.courseName} 
        <FaTimes 
            style={{ color: 'red', cursor:'pointer'}} 
            onClick={() => onDelete(course.courseID)}/>
      </h3>
      <p>{course.instructor}</p>
      <p>Category: {course.category}</p>
      <p>Price: {course.price}</p>
    </div>
  )
}

export default Course
