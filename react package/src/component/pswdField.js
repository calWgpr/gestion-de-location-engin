/** change at module is perfectly working
 * @module PswdField
 
 * This module will return  the user's information if the pswd provided is valid otherwise
 * it will return a logic false
 */

// todo add an image to the right side of the fields


import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

var validationPswd=""

const PswdField = () => {
   const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleToggleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
useEffect((
  
) => {validationPswd=password},[password])
  return (
    <div className="container-sm pt-3 border">
         <form className='d-flex flex-column ' id="">
         <h4 className=''><img id='enter' src="enter.png" alt="" /> Sign in</h4>
        <div className="form-floating d-flex  align-self-center">

             
      
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          id="passwordInput"
          className="form-control"
          placeholder=""
          required
          value={password}
          onChange={handleChange}
        />
        <span
          className={` position-absolute top-50 end-0 px-1  translate-middle-y ${
            isPasswordVisible ? 'text-warning' : ''
          }`}
          onClick={handleToggleVisibility}
          role="button"
          tabIndex="0" // Makes the badge focusable for keyboard users
        >
          <i className={`fas fa-eye${isPasswordVisible ? '-slash' : ''}`}></i>
        </span>
            <label htmlFor="passwordInput" className="text-secondary">
                <i class="fas fa-lock    "></i> Password
      </label>
        <div className="input-group-append">
          {/* <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleToggleVisibility}
          >
            <i
              className={`fas fa-eye${isPasswordVisible ? '-slash' : ''}`}
            ></i>
          </button> */}
        </div>
      
      </div><Link id='cursor' className=' mt-2 me-auto text-decoration-none '>> Forgot password</Link>
         </form>
     
    </div>
  );
};

export { PswdField,validationPswd };

