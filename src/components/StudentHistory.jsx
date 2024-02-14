import React from 'react'
import "../css/StudentHistory.css"
function StudentHistory() {
  return (
    <div className="student-history-container">
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentHistory