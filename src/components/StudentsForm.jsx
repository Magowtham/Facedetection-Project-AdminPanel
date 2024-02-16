import React,{useState,useEffect} from 'react'
import FormOverlay from './FormOverlay';
import "../css/StudentsForm.css"
function StudentsForm() {
  const [userInput, setUserInput] = useState({
    usn: "",
    firstName: "",
    lastName:"",
    email: "",
    contactNumber: "",
  });

  const [formError, setFormError] = useState({});
  const [isFormValidted, setIsFormValidated] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);

  function handleFormInput (event){
    const { name, value } = event.target;
    setUserInput((prevValues) => ({ ...prevValues, [name]: value }));
    console.log(userInput);
  };

  function formValidater (){
    if (!userInput.usn) {
      setFormError({ usnError: "USN Required" });
      return false;
    } else if (!userInput.firstName) {
      setFormError({firstNameError: "First Name Required" });
      return false;
    }else if(!userInput.lastName){
      setFormError({lastNameError: "Last Name Required" });
      return false;
    }else if(!userInput.email){
      setFormError({emailError: "Email Required" });
      return false;
    } else if(!userInput.contactNumber){
      setFormError({contactNumberError: "Contact Number Required" });
      return false;
    } else {
      setFormError({usnError: "",firstNameError: "",lastNameError: "",emailError: "",contactNumberError: ""});
      return true;
    }
  };

  async function sendFormData (){
    try {
      setIsFormLoading(true);
      const response = await fetch(`http://localhost:5000/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({usn:userInput.usn,name:userInput.firstName+" "+userInput.lastName,email:userInput.email,contact_number:userInput.contactNumber}),
      });
      const result = await response.json();
      console.log(result);
      return;
      switch (response.status) {
        case 200:
      
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
    setIsFormValidated(formValidater());
  };

  useEffect(() => {
    console.log(userInput);
    if (isFormValidted) {
      sendFormData();
      setIsFormValidated(false);
    }
  }, [isFormValidted]);

  return (
   <>
      <div className="student-form-container">
        <form onSubmit={handleFormSubmit}>
          <FormOverlay isEnable={isFormLoading} />
            <h1>Add New Student</h1>
            <div>
              <label className={formError.usnError?`error`:``}>{formError.usnError?formError.usnError:`USN`}</label>
              <input type="text" name="usn" onChange={handleFormInput} className={formError.usnError?`error`:``}/>
          </div>
          <div>
            <label className={formError.firstNameError?`error`:``}>{formError.firstNameError?formError.firstNameError:`First Name`}</label>
            <input type="text" name="firstName" onChange={handleFormInput} className={formError.firstNameError?`error`:``}/>
          </div>
          <div>
            <label className={formError.lastNameError?`error`:``}>{formError.lastNameError?formError.lastNameError:`Last Name`}</label>
            <input type="text" name="lastName" onChange={handleFormInput} className={formError.lastNameError?`error`:``}/>
          </div>
          <div>
          <label className={formError.emailError?`error`:``}>{formError.emailError?formError.emailError:`Email`}</label>  
            <input type="text" name="email" onChange={handleFormInput} className={formError.emailError?`error`:``}/>
          </div>
          <div>
          <label className={formError.contactNumberError?`error`:``}>{formError.contactNumberError?formError.contactNumberError:`Contact Number`}</label>
            <input type="text" name="contactNumber" onChange={handleFormInput} className={formError.contactNumberError?`error`:``}/>
          </div>
          <button>Register</button>
        </form>
      </div>
   </>
  )
}

export default StudentsForm