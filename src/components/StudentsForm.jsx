import React from 'react'
import "../css/StudentsForm.css"
function StudentsForm() {
  return (
   <>
      <div className="student-form-container">
        <form>
            <h1>Add New Student</h1>
            <div>
              <label>USN</label>
              <input type="text" />
          </div>
          <div>
            <label>First Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" />
          </div>
          <div>
            <label>Contact Number</label>
            <input type="text" />
          </div>
          <button>Register</button>
        </form>
      </div>
   </>
  )
}

export default StudentsForm