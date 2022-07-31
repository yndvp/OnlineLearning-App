import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='container'>
      <Header /> 
      <Navbar />
      
      {/* {showAddCourse && <AddCourse onAdd={addCourse} />} */}
      {/* {courses.length > 0 ? (
        <Courses
          courses={courses}
          onDelete={deleteCourse}
          onEdit={editCourse}
        />
      ) : (
        'No courses to show'
      )} */}
    </div>
  );
}

export default App;
