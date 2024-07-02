/** change at module is perfectly working
 * @module  signupForm
 * @description place where the user will enter his credential as a signing up action
 * This module will return  the user's information if all the required fields are filled without errors
 * otherwise it will return false
 */

// todo add an image to the right side of the fields

import React, { useEffect, useState } from 'react';
import '../My styles/signUp.css';
let emailx=""
let datax=""
let errorx=""
let isvalidx=false
const SignupForm = () => {
     const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
 const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    identificationNbr: '',
    phone: '',
    password: '',
    pswdConfirmation: '',
  });
   useEffect(()=>{
    emailx=email
    datax=formData
   },[email,formData])
    const validateForm = () => {
    const errors = {};
    for (const field in formData) {
      errors[field] = validateField(field, formData[field]);
    }
    return errors;
  };
  const [validationErrors, setValidationErrors] = useState({}); // Object to store validation errors
const handleChangex = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validated = re.test(String(newEmail).toLowerCase());
    setIsValid(validated);
 
  };
  useEffect(() => {
      isvalidx=isValid
      
  },[isValid])
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update form data and validation errors
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value), // Update error for the changed field
    }));
    // console.log(formData);
   
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
        } else if (fieldValue.length < 8 ) {
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
  errorx=error
    return error;
  };

  return (
// todo the success valid-feedbacks should not show at the very first load
  <div className="container-sm pt-3 border">
    <form className="d-flex flex-column" id="signupForm" onSubmit="handleFormSubmit()">
      <img id='codei' src="sigup.png" alt="" />
      <h4>  Sign Up</h4>
      <div className='input-container'>
       <i class="fas fa-user    "></i> 
        <input
          type="text"
          id="name"
          className={`form-control ${
            formData.name ? (validationErrors.name ? 'is-invalid' : 'is-valid') : ""
          }`} // Apply error class
          placeholder="Name"
          name="name"
          required
          onChange={handleChange}
        />
        
  
    <div className='invalid-feedback  '>
          <div className='d-flex ms-3'>
               <i className={`fas fa-exclamation-circle text-danger  align-self-center `}></i> 
<span className='align-self-start'>
{validationErrors.name}
</span>
        
          </div>
         
        
        </div>
        
        <div className='valid-feedback  '>  
        <div className='d-flex ms-3'>
 <i className={`fas fa-check-circle text-success align-self-center me-1 `}></i>
<span className='text-success '> Name looks good! </span>
        </div>
       
        </div>
 
       

      </div>
      
      <div className='input-container '>
        <i class="fas fa-user"></i> 
        <input
          type="text"
          id="name1"
          className={`form-control ${
           formData.lastName ? (validationErrors.lastName ? 'is-invalid' : 'is-valid'):""
          }`} // Apply error class
          placeholder=" Last name"
          name="lastName"
          required
          onChange={handleChange}
        />
        {/* <label className='text-secondary' htmlFor="lastName">Last Name</label> */}

        <div className='invalid-feedback  '>
          <div className='d-flex ms-3'>
               <i className={`fas fa-exclamation-circle text-danger  align-self-center me-1 `}></i> 

        {validationErrors.lastName}
          </div>
         
        
        </div>
        
        <div className='valid-feedback  '>  
        <div className='d-flex ms-3'>
 <i className={`fas fa-check-circle text-success align-self-center me-1 `}></i>
<span className='text-success '>  Last Name looks good! </span>
        </div>
       
        </div>
      </div>
      <div className='input-container'>
        <i class="fas fa-id-card    "></i>
        <input
          type="number"
          inputmode="numeric"
          id="name"
          className={`form-control ${
            formData.identificationNbr?(validationErrors.identificationNbr ? 'is-invalid' : 'is-valid') :""
          }`} // Apply error class
          placeholder="CIN"
          name="identificationNbr"
          required
          onChange={handleChange}
        />
        {/* <label className='text-secondary' htmlFor="identificationNbr"> CIN</label> */}

    <div className='invalid-feedback  '>
          <div className='d-flex ms-3'>
               <i className={`fas fa-exclamation-circle text-danger  align-self-center `}></i> 
<span className='align-self-start'>
{validationErrors.identificationNbr}
</span>
        
          </div>
         
        
        </div>
        
        <div className='valid-feedback  '>  
        <div className='d-flex ms-3'>
 <i className={`fas fa-check-circle text-success align-self-center me-1 `}></i>
<span className='text-success '> CIN looks good! </span>
        </div>
       
        </div>
      </div>
      <div className='input-container'>
         <i class="fas fa-phone    "></i>
        <input
         type="number"
          inputmode="numeric"
          id="name"
          className={`form-control ${
            formData.phone?(validationErrors.phone ? 'is-invalid' : 'is-valid'):""
          }`} // Apply error class
          placeholder="Phone"
          name="phone"
          required
          onChange={handleChange}
        />
        {/* <label className='text-secondary' htmlFor="phone"> Phone Number</label> */}

      
    <div className='invalid-feedback  '>
          <div className='d-flex ms-3'>
               <i className={`fas fa-exclamation-circle text-danger  align-self-center `}></i> 
<span className='align-self-start'>
{validationErrors.phone}
</span>
        
          </div>
         
        
        </div>
        
        <div className='valid-feedback  '>  
        <div className='d-flex ms-3'>
 <i className={`fas fa-check-circle text-success align-self-center me-1 `}></i>
<span className='text-success '> Phone number looks good! </span>
        </div>
       
        </div>
      </div>
       <div className="input-container">
        
<i class="fas fa-envelope   "></i>
           <input
              type="email"
              id="name"
              className={`form-control  ${email ? (isValid ? 'is-valid' : 'is-invalid') : ''}`} // Only apply classes when email is entered
              placeholder="Email"
              required
              value={email}
              onChange={handleChangex}
           />
       

          {/* <div className="">Please enter a valid email address.</div> */}
          {/* <label className='text-secondary' for="emailInput"> Email address</label> */}
   {/* ${email ? (!isValid ? 'd-flex' : 'd-none') : 'd-none'} */}
          <div id='blo' className={` invalid-feedback  `}>

<div className='d-flex ms-3 '>
 <i className={`fas fa-exclamation-circle text-danger  align-self-center`}></i>
              <span className='text-danger align-self-start'> The entered address is invalid </span>

</div>
             
          </div>
 {/* ${email ? (isValid ? 'd-inline' : 'd-none') : 'd-none'} */}
          <div id='blo2' className={` valid-feedback `}>
<div className='d-flex ms-3 '>
 <i className={`fas fa-check-circle text-success align-self-center me-1`}></i>
              <span className='text-success'> Address looks good! </span>
</div>
             

          </div>


        </div>
      <div className='input-container'>
        <i class="fas fa-lock    "></i>
        <input
          type="password"
          id="name"
          className={`form-control ${
            formData.password?(validationErrors.password ? 'is-invalid' : 'is-valid'):""
          }`} // Apply error class
          placeholder="Password"
          name="password"
          required
          minLength="8" // Set minimum password length
          onChange={handleChange}
        />
        {/* <label className='text-secondary' htmlFor="password"> Password</label> */}
        
        
    <div className='invalid-feedback  '>
          <div className='d-flex ms-3'>
               <i className={`fas fa-exclamation-circle text-danger  align-self-center `}></i> 
<span className='align-self-start'>
{validationErrors.password}
</span>
        
          </div>
         
        
        </div>
        
        <div className='valid-feedback  '>  
        <div className='d-flex ms-3'>
 <i className={`fas fa-check-circle text-success align-self-center me-1 `}></i>
<span className='text-success '> Password looks good! </span>
        </div>
       
        </div>
      </div>
      <div className='input-container'>
        <i class="fas fa-lock    "></i>
       <input
          type="password"
          id="name"
          className={`form-control ${
   formData.pswdConfirmation?(validationErrors.pswdConfirmation ? 'is-invalid' : 'is-valid'):""
  }`} // Apply error class with ternary operator
          placeholder="Password confirmation"
          name="pswdConfirmation"
          required
          onChange={handleChange}
        />
        {/* <label className='text-secondary' htmlFor="pswdConfirmation"> Confirm Password</label> */}
  
       
    <div className='invalid-feedback  '>
          <div className='d-flex ms-3'>
               <i className={`fas fa-exclamation-circle text-danger  align-self-center me-1`}></i> 
<span className='align-self-start'>
{validationErrors.pswdConfirmation}
</span>
        
          </div>
         
        
        </div>
        
        <div className='valid-feedback  '>  
        <div className='d-flex ms-3'>
 <i className={`fas fa-check-circle text-success align-self-center me-1 `}></i>
<span className='text-success '> Confirmation looks good! </span>
        </div>
       
        </div>
      </div>
      {/* <button type="submit" className="ms-auto rounded-2">Create Account</button> */}
    </form>
  </div>

  )
}
            

export {SignupForm,emailx,datax,errorx,isvalidx}