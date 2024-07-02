import {StateCard} from './stateCard';
import {  UserInfo} from './userInfo';
import {Popup,pubEmail,emailx} from './popup';
import { useEffect, useState } from 'react';
import '../My styles/account.css';

var portm="http://localhost:8083"
var filteredData=""
var togp="block"
var togpN="none"
var p=-675+"px"
const Account = () => {
    const emailV=emailx || pubEmail ||"calwg28@gmail.com"
    const [isLoading, setIsLoading] = useState(true);
const [user,setUser]=useState(null)
     useEffect(()=>{
 fetch(portm)
     .then(res => res.json()) // Convert response to JSON
    .then(data => {
		setUser(data)	
      
        	setIsLoading(false)


 

    });
 },[isLoading]) 
 if(!isLoading) {
      filteredData = emailV
    ? user.filter((row) => row.mail === emailV)
    : user; // Filter only if emailV is provided, otherwise display all

      const waitingData = filteredData.filter((row) => row.state === 'waiting');
  const acceptedData = filteredData.filter((row) => row.state === 'Accepted');
  const refusedData = filteredData.filter((row) => row.state === 'Refused');
  const tog=()=>{
    const element = document.getElementById("uc");
    const btn=document.getElementById("mbtn")
     btn.style.right=p
    if(p=="-675px")p="-930px"
    else p="-675px"
   
    
    element.style.display=togp;
    document.getElementById("refused").style.display=togpN;
    if(togp=="none"){togp="block";togpN="none"}
    else {togp="none";togpN="block"}
  }
return ( 
        <div className="container">
 <h3 id='mbtn' onClick={()=>{tog()}}><i class="fa fa-list" aria-hidden="true"></i></h3>
                		{/* {user
                                        .filter((rowx) => rowx.mail === {emailV})
                                        .map((rowx)=>(<div key={rowx._id}>
													
                                            <StateCard row={rowx}></StateCard>
                                            
										
										</div>))} */}
                                         <div  className=" row d-flex">
       <div id='ct' className="col scrollable-column">
        <h2></h2>
        {acceptedData.length > 0 ? (
          acceptedData.map((row) => (
            <div className='c' key={row._id}>
              <StateCard row={row} />
            
            </div>
          ))
          
        ) : (
          <p>No accepted items.</p>
        )}
      </div>
      <div id='ct1' className="col  scrollable-column">
        <h2></h2>
        {waitingData.length > 0 ? (
          waitingData.map((row) => (
            <div key={row._id}>
              <StateCard row={row} />
            </div>
          ))
        ) : (
          <p>No waiting items.</p>
        )}
      </div>
    
       <div id='refused' className="  col scrollable-column">
        <h2></h2>
        {refusedData.length > 0 ? (
          refusedData.map((row) => (
            <div key={row._id}>
              <StateCard row={row} />
            </div>
          ))
        ) : (
          <p>No refused items.</p>
        )}
       
      </div> 
  
 
    <div id='uc' className="col  " >
   
          <div id='userinfo'>

      <UserInfo filteredData={filteredData}></UserInfo>
         
    </div>  
      </div>
  
       
      
    </div>
  
        </div>
     );
 }
    
}
 
export  {Account};