import '../My styles/userInfo.css';
import React, { useState } from 'react';
import { createNotif } from "./notif.js";


const UserInfo = ({filteredData}) => {
   const [email, setEmail] = useState('');
   const [pswd, setPassword] = useState('12345678');
   const [confPswd,setConf]=useState('12345678')
   const [cin, setCin] = useState(filteredData[0].cin);
  const[name,setName] = useState(filteredData[0].name)
  const [lastName,setLastName] = useState(filteredData[0].lastName)
  const [isValid, setIsValid] = useState(false);
  const [x,setx]=useState(filteredData[0].cin)
 const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    identificationNbr: '',
    phone: '',
    password: '',
    pswdConfirmation: '',
  });
    const validateForm = () => {
    const errors = {};
    for (const field in formData) {
      errors[field] = validateField(field, formData[field]);
    }
    return errors;
  };
  const [validationErrors, setValidationErrors] = useState({}); // Object to store validation errors

  const handleChange = (event) => {
    const { name, value } = event.target;
     switch (name) {
      case 'name':
    setName(value)
      
        break;
      // Add validation rules for other fields here
      case 'lastName':
    setLastName(value)
   
        break;
      case 'identificationNbr':
    setCin(value)
      
        break;
      case 'phone':
      
        break;
      case 'password':
    setPassword(value)
        
        break;
      case 'pswdConfirmation':
    setConf(value)
        
        break;
      default:
        break;
    }

    // Update form data and validation errors
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value), // Update error for the changed field
    }));
  };
  const handleChangex = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validated = re.test(String(newEmail).toLowerCase());
    setIsValid(validated);
  };
  const validateField = (fieldName, fieldValue) => {
    let error = '';

    switch (fieldName) {
      case 'name':
        if (!fieldValue) {
              
          error = 'Please enter your name.';
        } else if (fieldValue.length < 2) {
          error = 'Name must be at least 2 characters long.';
        }
        break;
      // Add validation rules for other fields here
      case 'lastName':
        // Similar validation as name
        if (!fieldValue) {
          error = 'Please enter your last name.';
        } else if (fieldValue.length < 2) {
          error = 'Last name must be at least 2 characters long.';
        }
        break;
      case 'identificationNbr':
        // Replace with your specific logic
        if (!fieldValue) {
          error = 'Please enter your identification number.';
        } else if (fieldValue.length !== 12) { // Assuming 12 digits for ID
          error = 'Identification number must be 12 digits long.';
        }
        break;
      case 'phone':
        // Replace with your specific logic
         if (!fieldValue) {
              
          error = 'Please enter your phone number.';
        } else if (fieldValue.length!==10) {
          error = 'Phone must be at least 10 numbers long.';
        }
        // Add phone number format validation
        break;
      case 'password':
        if (!fieldValue) {
          error = 'Please enter a password.';
        } else if (fieldValue.length < 8) {
          error = 'Password must be at least 8 characters long.';
        }
        break;
      case 'pswdConfirmation':
        if (!fieldValue) {
          error = 'Please confirm your password.';
        } else if (fieldValue !== formData.password) {
          error = 'Passwords do not match.';
        }
        break;
      default:
        break;
    }

    return error;
  };
function edit() {
  // Enable the input field
  document.getElementById('name').disabled = false;
  document.getElementById('name1').disabled = false;
  document.getElementById('name2').disabled = false;
  document.getElementById('name3').disabled = false;

  document.getElementById('name4').disabled = false;

  // Optionally, adjust button styles for visual feedback (e.g., toggle disabled class on 'Edit' button)
}

function save() {
  // Perform your save logic (e.g., submit form, update data)
  // After saving, disable the input field again
  document.getElementById('name').disabled = true;
  document.getElementById('name1').disabled = true;
  document.getElementById('name2').disabled = true;
  document.getElementById('name3').disabled = true;

  document.getElementById('name4').disabled = true;
     createNotif(
          "success",
          "User info updated",
          "Your information has been updated"
        );

  // Optionally, adjust button styles for visual feedback (e.g., enable 'Save' button)
}
  return (
// todo the success valid-feedbacks should not show at the very first load
  <div  className="container-sm pt-3  bg-white mb-3  thicker-shadow rounded-4 ">
    <form className="d-flex flex-column" id="signupForm" onSubmit="handleFormSubmit()">
     <img id='imgh' className='img-fluid' src="userIcon.png" alt="" />
   <div className='input-container'>
<i class="fas fa-user"></i> 
 <input
          type="text"
          id="name"
          className={`form-control ${
            validationErrors.name ? 'is-invalid' : 'is-valid'
          }`} // Apply error class
          
          name="name"
          required
          onChange={handleChange}
           value={name}
           disabled
        />
    
   </div>
    

    
        {/* <label className='text-secondary' htmlFor="name"><i class="fas fa-user    "></i> Name</label>

        <div className='invalid-feedback'> <i className={`fas fa-exclamation-circle text-danger`}></i> {validationErrors.name}</div>
        <div className='valid-feedback'>  <i className={`fas fa-check-circle text-success`}></i>
              <span className='text-success'> Name looks good! </span>
        </div> */}

   
     <div className='input-container'>
      <i class="fas fa-user"></i> 
 <input
  type="text"
           id="name1"
           disabled

  className={`form-control ${
    validationErrors.lastName ? 'is-invalid' : 'is-valid'
  }`}
 value={lastName}

  name="lastName"
  required
  onChange={handleChange}
  style={{ outline: "none"}} // Custom styles
/>


     </div>
      
        {/* <label className='text-secondary' htmlFor="lastName"><i class="fas fa-user"></i> Last Name</label>

        <div className='invalid-feedback  me-auto'><i className={`fas fa-exclamation-circle text-danger`}></i> {validationErrors.lastName}</div>
        <div className='valid-feedback'>  <i className={`fas fa-check-circle text-success`}></i>
              <span className='text-success'> Last Name looks good! </span>
        </div> */}
      
  <div className='input-container'>
        <i class="fas fa-id-card    "></i>

   <input
          type="number"
          inputmode="numeric"
           disabled

          id="name2"
          className={`form-control ${
            validationErrors.identificationNbr ? 'is-invalid' : 'is-valid'
          }`} // Apply error class
          value={cin}
          name="identificationNbr"
          required
          onChange={handleChange}
         
        /> 
  </div>
     
        {/* <label className='text-secondary' htmlFor="identificationNbr"><i class="fas fa-id-card    "></i> CIN</label>

        <div className='invalid-feedback  me-auto'><i className={`fas fa-exclamation-circle text-danger`}></i> {validationErrors.identificationNbr}</div>
        <div className='valid-feedback'>  <i className={`fas fa-check-circle text-success`}></i>
              <span className='text-success'> CIN looks good! </span>
        </div> */}
    

    {/* <input
              type="email"
              id="emailInput"
              className={`form-control  ${email ? (isValid ? 'is-valid' : 'is-invalid') : ''}`} // Only apply classes when email is entered
              placeholder=""
              required
              value={email}
              onChange={handleChangex}
           /> */}
          {/* <div className="">Please enter a valid email address.</div> */}
          {/* <label className='text-secondary' for="emailInput"><i class="fas fa-envelope   "></i> Email address</label>
  
          <div className={`${email ? (!isValid ? 'd-block' : 'd-none') : 'd-none'}  `}>

              <i className={`fas fa-exclamation-circle text-danger`}></i>
              <small className='text-danger'> The entered address is invalid </small>

          </div>

          <div className={`${email ? (isValid ? 'd-inline' : 'd-none') : 'd-none'}  `}>

              <i className={`fas fa-check-circle text-success`}></i>
              <small className='text-success'> Address looks good! </small>

          </div> */}

      
        {/* <input
         type="number"
          inputmode="numeric"
          id="phone"
          className={`form-control  ${
            validationErrors.phone ? 'is-invalid' : 'is-valid'
          }`} // Apply error class
          placeholder=""
          name="phone"
          required
          onChange={handleChange}
        /> */}
        {/* <label className='text-secondary' htmlFor="phone"> <i class="fas fa-phone    "></i> Phone Number</label>

        <div className='invalid-feedback  me-auto'><i className={`fas fa-exclamation-circle text-danger`}></i> {validationErrors.phone}</div>
        <div className='valid-feedback'>  <i className={`fas fa-check-circle text-success`}></i>
              <span className='text-success'> Phone number looks good! </span>
        </div> */}
    <div className='input-container'>
       <i class="fas fa-lock    "></i>
     <input
          type="password"
           disabled

                  id="name3"

          className={`form-control ${
            validationErrors.password ? 'is-invalid' : 'is-valid'
          }`} // Apply error class
          value={pswd}
          name="password"
          required
          minLength="8" // Set minimum password length
          onChange={handleChange}
        />
    </div>
   
        {/* <label className='text-secondary' htmlFor="password"><i class="fas fa-lock    "></i> Password</label>
        
        <div className='invalid-feedback  me-auto'><i className={`fas fa-exclamation-circle text-danger`}></i> {validationErrors.password}</div>
        <div className='valid-feedback'>  <i className={`fas fa-check-circle text-success`}></i>
              <span className='text-success'> Password looks good! </span>
     
        </div> */}
        <div className='input-container'>
             <i class="fas fa-lock    "></i>
 <input
           disabled

          type="password"
                  id="name4"

          className={`form-control ${
            validationErrors.pswdConfirmation ?
                  'is-invalid' : 'is-valid'
          }`} // Apply error class
         value={confPswd}
          name="pswdConfirmation"
          required
          onChange={handleChange}
        />
        </div>
      
        {/* <label className='text-secondary' htmlFor="pswdConfirmation"><i class="fas fa-lock    "></i> Confirm Password</label>
  
        <div className='invalid-feedback  me-auto'><i className={`fas fa-exclamation-circle text-danger`}></i> {validationErrors.pswdConfirmation}</div>
        <div className='valid-feedback'>  <i className={`fas fa-check-circle text-success`}></i>
              <span className='text-success'> Password looks good! </span>
        </div> */}
      {/* <button type="submit" className="ms-auto rounded-2">Create Account</button> */}
      <div>
       <button type='button' id='edit' onClick={()=>{edit()}} class="text-bg-primary ">Edit</button>
<button onClick={()=>{save()}}id='save' type='button' class=" text-bg-success">Save</button>

        </div>
    </form>
  </div>

  )
}
 
export  {UserInfo};