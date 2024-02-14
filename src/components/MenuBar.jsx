import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/MenuBar.css"

function MenuBar() {
  const navigate=useNavigate();
  const [currentPage,setCurrentPage]=useState(1);
  function switchPage(page){
      switch(page) {
        case 1:
          navigate("/");
          setCurrentPage(1);
          break;
        case 2:
          navigate("/form");
          setCurrentPage(2);
      }
  }

  return (

    <>
        <div className="menu-container">
          <div onClick={()=>switchPage(1)} className={`${currentPage==1?`active`:``}`}><span className="material-symbols-outlined">home</span></div>
          <div onClick={()=>switchPage(2)} className={`${currentPage==2?`active`:``}`}><span className="material-symbols-outlined">add</span></div>
        </div>
    </>
  )
}

export default MenuBar