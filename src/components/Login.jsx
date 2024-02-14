import React, { useState,useEffect } from 'react';
import "../css/Login.css"
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate=useNavigate();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({});
  const [isFormValidted, setIsFormValidated] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  function handleFormInput (event){
    const { name, value } = event.target;
    setUserInput((prevValues) => ({ ...prevValues, [name]: value }));
  };

  function formVaidater (){
    if (!userInput.email) {
      setFormError({ userNameError: "UserName Required" });
      return false;
    } else if (!userInput.password) {
      setFormError({ passwordError: "Password Required" });
      return false;
    } else {
      setFormError({ userNameError: "", passwordError: "" });
      return true;
    }
  };

  async function sendLoginData (){
    try {
      setIsFormLoading(true);
      const response = await fetch(`http://localhost:5000/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInput),
      });
      const result = await response.json();
      switch (response.status) {
        case 200:
          navigate("/")
          break;
        case 404:
          setFormError({ userNameError: result.error });
          break;
        case 401:
          setFormError({ passwordError: result.error });
          break;
        default:
          alert(result.error);
      }
    } catch (error) {
      alert("login failed check your internet connection!");
    } finally {
      setIsFormLoading(false);
    }
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsFormValidated(formVaidater());
  };

  useEffect(() => {
    if (isFormValidted) {
      sendLoginData();
      setIsFormValidated(false);
    }
  }, [isFormValidted]);
  return (
    <>
        <div className="login-page">
          <h1>Faculty Login</h1>
          <label>Email</label>
          <input type="text" name="email" onChange={handleFormInput}/>
          <label>Password</label>
          <input type="password" name="password" onChange={handleFormInput}/>
          <button onClick={handleFormSubmit}>Login</button>
        </div>
    </>
  )
}

export default Login;