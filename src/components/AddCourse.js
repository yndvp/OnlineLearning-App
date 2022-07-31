import { useState } from "react"

const AddCourse = ( ) => {
    const [courseName, setCourseName] = useState('')
    const [instructor, setInstructor] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!courseName){
            alert('Please add a course')
            return
        }
        
        //add course
          const courseID = Math.floor(Math.random() * 10000) + 1;
          const newCourse = { courseID, courseName, instructor, category, price };
          // setCourses([...courses, newCourse]);
          console.log(newCourse)
          // console.log(courseName, instructor, category, price)

        setCourseName('')
        setInstructor('')
        setCategory('')
        setPrice('')
    }

  return (
    <div className='container'>
      <h3>Add Course</h3>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Course</label>
          <input type='text' placeholder='Add Course' value={courseName} onChange={(e) => setCourseName(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label>Instructor</label>
          <input type='text' placeholder='Add Instructor' value={instructor} onChange={(e) => setInstructor(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label>Category</label>
          <input type='text' placeholder='Add Category' value={category} onChange={(e) => setCategory(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label>Price</label>
          <input type='number' placeholder='Add Price' value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>

        <input type='submit' value='Save Course' className='btn btn-block'/>
      </form>
    </div>
  )
}

export default AddCourse
