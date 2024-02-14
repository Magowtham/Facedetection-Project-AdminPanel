import React from 'react'
import "../css/StudentsTable.css"

function StudentsTable() {
  return (
    <> 
    <div className="students-table-container">
      <div className="table-container">
        <table>
          <tr>
            <th>SL.NO.</th>
            <th>USN</th>
            <th>Name</th>
            <th>Attended Class</th>
            <th>Attedence Percent</th>
            <th>Manage</th>
          </tr>
          <tbody>
            <tr>
              <td>1</td>
              <td>4AL21EC029</td>
              <td>Gowtham MA</td>
              <td>10</td>
              <td>50%</td>
              <td><button><span className="material-symbols-outlined">history</span></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default StudentsTable