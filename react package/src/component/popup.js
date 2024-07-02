import { useEffect, useState } from 'react';
import {EmailField,validation} from './emailField.js';
import {SignupForm,datax,emailx,errorx,isvalidx} from './signUp.js';
import {  PswdField,validationPswd} from './pswdField.js';
import {  VerificationCodeInput,codex,verifCode} from './emailVerification.js';
import { StateCard } from './stateCard.js';
import {UserInfo} from './userInfo.js';
import Swal from 'sweetalert2';
import { createNotif } from "./notif.js";
import { data } from 'jquery';
import {Account} from "./account"
import { useNavigate } from 'react-router-dom';


var ok=false
var port="http://localhost:8083"
var portx="http://localhost:8080"
var f=null
let pubEmail=""
const Popup = () => {
const history = useNavigate();
const [user,setUser]=useState(null)
const [userS,setUserS]=useState(null)
const [isLoading, setIsLoading] = useState(true);
const [field,setField] = useState(null)
 
 
 useEffect(()=>{
// fetch(port)
//     .then(res => res.json()) // Convert response to JSON
//     .then(data => {
// 		setUser(data)
// 		setIsLoading(false)

//     });
    fetch(portx+"/userCredential")
    .then(res => res.json()) // Convert response to JSON
    .then(data => {
		setUserS(data)
 setIsLoading(false)

    });
 },[]) 
const left=()=>{
  // setField(<EmailField>)
  // history("/popup")
}
    const handlebtn = (p) => {

      if(f==null && f!='pswd' && f!='up'){
           for (const item of userS) {
          if(item.email==validation){
            setField(<PswdField></PswdField>)
            pubEmail=validation
            f="pswd"
            return true
          }
          
        }
        if(p){
                		            Swal.fire({
						icon:"info",
  text: "You don't have any account yet. Would you like to create one ?",
  title:"Account not found",
   confirmButtonText: "<span id='i'>Confirm</span>",
  showCancelButton: true,
  
 cancelButtonText:"<span id='c'>Cancel</span>",
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {

setField(<SignupForm></SignupForm>)
f="up"
  } 
       
    })
        }else {setField(<SignupForm></SignupForm>);f="up"}
      }else if(f==='pswd'){ 
             for (const item of userS) {
          if(item.pswd==validationPswd){//tafiditra
              setField(<VerificationCodeInput email={pubEmail}></VerificationCodeInput>)
           f="verif"
           return;
          }else{
//                            		            Swal.fire({
// 						icon:"error",
//   text: "Please retype your password",
//   title:"The password is incorrect",
//    confirmButtonText: "<span id='i'>OK</span>",

  
// })
          }
          
        }
      }else if(f=="up"){
         if (!isvalidx || errorx!="") {
           
                           		            Swal.fire({
						icon:"error",
  text: "Please fill the form correctly",
  title:"A form is incomplete or invalid",
   confirmButtonText: "<span id='i'>OK</span>",

  
})
          
         }else {//tafiditra 
         
            setField(<VerificationCodeInput email={emailx}></VerificationCodeInput>)
            f="verif"
         }
          
      }else if(f=="verif"){
            if (codex==verifCode) {
                Swal.fire({
              icon: "success",
              title: "Request sent",
              text: "Your request has been sent successfully to the manager, an email will be sent to you when your request is approved",
              confirmButtonText: "<span id='i'>OK</span>",
             showCancelButton: false,

               cancelButtonText: "<span id='c'>Cancel</span>",
            });
        
    history( "/account"); // Redirection
closeModal(); // Close the modal after redirection


              }else{
                             
                           		            Swal.fire({
						icon:"error",
  title: "Wrong Code",
  text:"There appears to be a mismatch between the code you entered and the one sent to your email. Would you like to try again or have us resend the code?",
   confirmButtonText: "<span id='i'>OK</span>",

  
})
              }
      }
       
  
    }
    function closeModal() {
  const modalButton = document.getElementById('bn');
  modalButton.click(); // Simulate clicking the close button
}

if (!isLoading){
    return ( 
        <div >
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
  Launch demo modal
</button> */}

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
         <img id="logost" src="logo.svg" alt="" srcset="" />
         <h5 class="modal-title ms-auto  " id="exampleModalLongTitle"><i class="fa fa-user-circle" aria-hidden="true"></i><span className='text-decoration-underline'>Account access</span> </h5> 
        
        <button id="bn"type="button" class="close ms-auto" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {(!field && <EmailField handlebtn={handlebtn}></EmailField>) || field}
      </div>
      <div class="modal-footer">
        <button onClick={()=>left()} type="button" class="  rounded-circle" ><i class="fas fa-arrow-left    "></i> </button>
                <button  type="button" onClick={()=>handlebtn(true)} class={"  rounded-circle "} ><i class="fas fa-arrow-right    "></i> </button>

      </div>
    </div>
  </div>
</div>

        </div>
       
     );
}
    
}
 
export  {Popup,pubEmail,emailx,ok};