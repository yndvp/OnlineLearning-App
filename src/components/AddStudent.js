import { useState } from "react"

const AddStudent = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [courses, setCourses] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!firstName){
        alert('Please add a student')
        return
    }
    
    //add Student
      const studentID = Math.floor(Math.random() * 10000) + 1;
      const newStudent = { studentID, firstName, lastName, email, courses };
      console.log(newStudent)


      setFirstName('')
      setLastName('')
      setEmail('')
      setCourses('')
  }
  return (
    <div className='container'>
      <h3>Add Student</h3>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
          <label>First Name</label>
          <input type='text' placeholder='Add First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label>Last Name</label>
          <input type='text' placeholder='Add Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label>Email</label>
          <input type='email' placeholder='Add Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label>Courses</label>
          <input type='text' placeholder='Add Courses' value={courses} onChange={(e) => setCourses(e.target.value)}/>
        </div>

        <input type='submit' value='Save Course' className='btn btn-block'/>
      </form>
    </div>
  )
}

export default AddStudent
