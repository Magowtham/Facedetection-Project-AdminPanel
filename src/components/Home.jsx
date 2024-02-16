import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import "../css/Home.css"
import MenuBar from './MenuBar'
import StudentsForm from './StudentsForm'
import StudentsTable from './StudentsTable'

function Home() {
  const [toggleBtn,setToggleBtn]=useState(false);
  const [shedule,setShedule]=useState(false);
  const [userInput,setUserInput]=useState({time:""});
  const [formError, setFormError] = useState({});
  const [isFormValidted, setIsFormValidated] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);

  function handleFormInput (event){
    const { name, value } = event.target;
    setUserInput((prevValues) => ({ ...prevValues, [name]: value }));
  };

  
  function formValidater (){
    if (!userInput.time) {
      setFormError({ timeError: "Time required" });
      return false;
    }else if(userInput.time<1){
      setFormError({ timeError: "Time should be greaterthan 1 minute" });
      return false;
    } {
      setFormError({timeError:""});
      return true;
    }
  };


  async function startDetection(){
    try{
      const response=await fetch("http://localhost:5000/start",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInput),
      });
      const result=await response.json();
      switch(response.status){
        case 200:
          setShedule(true);
          break;
        default:
          alert(result.error);
      }
    }catch(error){
      console.log(error);
    }finally{
      setToggleBtn(false);
    }

  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsFormValidated(formValidater());
  };

  useEffect(() => {
    if (isFormValidted) {
      startDetection();
      setIsFormValidated(false);
    }
  }, [isFormValidted]);

  function handleToggleBtn(){
    setToggleBtn(true);
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
              <label>{formError.timeError?formError.timeError:`Time in minutes`}</label>
              <input type="text" name="time" onChange={handleFormInput}/>
              <button onClick={handleFormSubmit}>Shedule</button>
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