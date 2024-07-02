/**
 * @module VerificationCodeInput
 * @description This module provides the user interface for entering a 6-digit verification code.
 */
import axios from "axios";

import React, { useEffect, useState, useRef } from 'react';
import Swal from "sweetalert2";
var portMongo = "http://localhost:8083";
var codex=""
var verifCode=""
const VerificationCodeInput = ({email}) => {
   const inputRefs = useRef([]);
  const [code, setCode] = useState(''); // Array to store individual digits (length: 6)
    const emailAddress=email
    const handlePaste = (event) => {
    event.preventDefault(); // Prevent default paste behavior

    const pastedText = event.clipboardData.getData('text');
    if (pastedText.length === 6 && pastedText.match(/^\d+$/)) { // Check for 6 digits
      // Split pasted text into characters
      const pastedDigits = pastedText.split('');

      // Update code state and individual input values
      code.forEach((_, index) => {
        handleChange(index, pastedDigits[index]);
        inputRefs.current[index].value = pastedDigits[index]; // Update input values
      });
    } else {
      // Handle invalid input (e.g., non-numeric characters, incorrect length)
      console.warn('Invalid verification code pasted. Please enter 6 digits.');
    }
  };
  const fct = () => {
    verifCode=Math.floor(Math.random() * 1000000)
              .toString().padStart(6, '0')
    var htmlcontent = {
              to: emailAddress,
              subject: "Email verification code",
              htmlContent:
              "ENGIN TRACK => "+
              "Your code is: "+verifCode
            };
            const responses = axios.post(`${portMongo}/email`, htmlcontent);
            
                     Swal.fire({
						icon:"info",
  text: "A new verification code has been sent to your email address",
  title:"Verification code",
   confirmButtonText: "<span id='i'>OK</span>",
  showCancelButton: false,
  
 cancelButtonText:"<span id='c'>Cancel</span>",
})
  }
    useEffect(()=>{
      verifCode=Math.floor(Math.random() * 1000000)
              .toString().padStart(6, '0')
var htmlcontent = {
              to: emailAddress,
              subject: "Email verification code",
              htmlContent:
              "ENGIN TRACK => "+
              "Your code is: "+ verifCode
            };
            const responses = axios.post(`${portMongo}/email`, htmlcontent);
            console.log("sent");
},[])
  const handleChange = (event, index) => {
    const newChar = event.target.value;
    const newCode = code.slice(0, index) + newChar + code.slice(index + 1);
    setCode(newCode);
    codex=newCode
  


    // Optional: Focus on the next input field if a number is entered
    if (newChar.length > 0 && index < 5) {
      const nextInput = document.getElementById(`codeInput-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }

    // Optional: Handle backspace/delete to move focus to previous field
    if (newChar.length === 0 && index > 0) {
      const prevInput = document.getElementById(`codeInput-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleCodeSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log('Verification code submitted:', code);
    // You can replace the console.log with your logic to handle the code submission, e.g., sending it to the server for verification
  };

  return (
    <div className="container-sm pt-3 border">

    <form className='d-flex flex-column ' onSubmit={handleCodeSubmit}>
      <img id="codei" src="codei2.png" alt="" srcset="" />
         <h4 className=''>Verification code</h4>
        <p>We have sent a code to your email : {emailAddress}.<br/> <small>Please fill the field with the provided code</small></p>
      <div className="d-flex justify-content-center">
   {Array.from({ length: 6 }, (_, index) => (
        <input
          key={index}
          id={`codeInput-${index}`}
          ref={(el) => (inputRefs.current[index] = el)} // Store reference
          className="form-control text-center mx-2"
          type="tel" // Input type for phone numbers
          maxLength="1"
          value={code[index] || ''}
          onChange={(event) => handleChange(event, index)}
          onPaste={handlePaste} // Add onPaste event handler
        />
      ))}
      </div>
            <button type="button" onClick={()=>fct()} className="ms-auto mt-4 rounded-2">Resend code</button> 

    </form>
    </div>
  );
};

export { VerificationCodeInput, codex,verifCode };
