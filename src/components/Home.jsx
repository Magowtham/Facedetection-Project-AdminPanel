import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import "../css/Home.css"
import MenuBar from './MenuBar'
import StudentsForm from './StudentsForm'
import StudentsTable from './StudentsTable'


function Home() {
  const [toggleBtn,setToggleBtn]=useState(false);
  const [shedule,setShedule]=useState(false);

  function handleToggleBtn(){
    setToggleBtn(true);
  }

  function handleShedule(){
    setShedule(true);
  }
  return (
    <>
        <div className="home-container">
        <div className={`overlay ${toggleBtn?`active`:``}`}></div>
            <MenuBar/>
            <div className="navigation-container">
                <h1>Auto Attendence Vision</h1>
                <button onClick={handleToggleBtn}><span class={`material-symbols-outlined ${shedule?`active`:``}`}>{`${shedule?`toggle_on`:`toggle_off`}`}</span></button>
            </div>
          <div className={`popup-box ${toggleBtn?`active`:``}`}>
              <label>shedule time in minutes</label>
              <input type="text"/>
              <button onClick={handleShedule}>Shedule</button>
            </div>
            <div className="home-sub-container">
                <Routes>
                    <Route path="/" Component={StudentsTable} />
                    <Route path="/form" Component={StudentsForm}/>
                </Routes>
            </div>
        </div>
    </>
  )
}

export default Home