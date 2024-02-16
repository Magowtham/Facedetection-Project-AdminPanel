import React, { useEffect, useState } from 'react'
import "../css/StudentsTable.css"

function StudentsTable() {
  const [users,setUsers]=useState([]);
  async function fetchUsersData(){
    try{
      const response=await fetch("http://localhost:5000/users");
      const result=await response.json();
      setUsers(result.students);
    }catch(error){
      console.log(error);
    }
   
  }
  useEffect(()=>{
    fetchUsersData()
  },[])
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
            {
              users.map((user,index)=>(
                <tr>
                  <td>{index+1}</td>
                  <td style={{textTransform:"uppercase"}}>{user.usn}</td>
                  <td style={{textTransform:"capitalize"}}>{user.name}</td> 
                  <td>{user.attended_class}</td>
                  <td>{user.percent}</td>
                  <td><button><span className="material-symbols-outlined">history</span></button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default StudentsTable