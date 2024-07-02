/** change at module is perfectly working
 * @module emailField
 * @description This module provides the user interface for entering an email address
 *  and handles initial account verification.
 * This module will return  the user's information if the email provided is valid otherwise
 * it will return a logic false
 */

// todo add an image to the right side of the fields

import { useEffect,useState } from 'react';
import '../My styles/emailField.css'

var validation="x"


const EmailField = ({handlebtn}) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const [users, setUsers] = useState([]); // Array to store user information
var port="http://localhost:8080"

        

//   useEffect(() => {

//   // ... fetch data from database
//   fetch(port+"/userCredential")
//     .then(res => {res.json();alert("fdf")}) // Convert response to JSON
//     .then(data => {
// 		setUsers(data)
//     })
//     .catch()

// },[])
useEffect((
  
) => {
     if (email!=="" && isValid) {
      validation=email
    }else validation=""
},[email])

  const handleChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validated = re.test(String(newEmail).toLowerCase());
    setIsValid(validated);
 
  };
 

  return (
    <div className="container-sm pt-3 border ">

      <form className='d-flex flex-column ' id="">
       
        <h4 className=''>  <img id='enter' src="enter.png" alt="" /> Sign in</h4>
        <div className="form-floating d-flex flex-column align-self-center">

           <input
              type="email"
              id="emailInput"
              className={`form-control  ${email ? (isValid ? 'is-valid' : 'is-invalid') : ''}`} // Only apply classes when email is entered
              placeholder=""
              required
              value={email}
              onChange={handleChange}
           />
          {/* <div className="">Please enter a valid email address.</div> */}
          <label className='text-secondary' for="emailInput"><i class="fas fa-envelope   "></i> Email address</label>
  
          <div className={`${email ? (!isValid ? 'd-block' : 'd-none') : 'd-none'}  `}>

              <i className={`fas fa-exclamation-circle text-danger`}></i>
              <small className='text-danger'> The entered address is invalid </small>

          </div>

          <div className={`${email ? (isValid ? 'd-inline' : 'd-none') : 'd-none'}  `}>

              <i className={`fas fa-check-circle text-success`}></i>
              <small className='text-success'> Address looks good! </small>

          </div>


        </div><br />
        <button type="button" onClick={()=>handlebtn(false)} className={`ms-auto rounded-2 `} >Create account</button>   

      </form>

    </div>
  );
};

export { EmailField,validation };

