import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { BrequestserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import {createNotif} from "./notif.js";
import { useNavigate  } from 'react-router-dom';
// const {ObjectId} = require("mongodb")



var portMongo="http://localhost:8083"
var sj=""
function Request({request}) {

	const history = useNavigate ();

const enginDetail=request.enginDetails
 const [formData, setFormData] = useState({})
 const [isDataReady, setIsDataReady] = useState(false);
 var htmlcontent={}
       



// useEffect(() => {

//   // ... fetch data from database
//   fetch(portMongo)
//     .then(res => res.json()) // Convert response to JSON
//     .then(data => {
// 		setFetchedList(data)
// 		setIsLoading(false)
//     });

// },[isLoading])

function handleAccept(event) {
 event.preventDefault();
  Swal.fire({
						icon:"question",
  title: "Approval confirmation",
  text:"Are you certain to approve the client's request ? A receipt will be sent to them",
   confirmButtonText: "<span  id='i'>Confirm</span>",
  showCancelButton: true,
  
 cancelButtonText:"<span id='c'>Cancel</span>",
}).then((result) => {
  
    if (result.isConfirmed) {
		 const updatedState={
        state:"Accepted"
    }
  
    

  fetch(`${portMongo}/update/${request._id}`, {
    method: 'PATCH', // Use PUT for updating data
    headers: {
      'Content-Type': 'application/json', // Specify JSON data format
    },
    body: JSON.stringify(updatedState), // Send the updated data as a JSON object
  })
    .then(response => {
      if (response.ok) {
        console.log('Item updated successfully!');
htmlcontent={
            to: request.mail,
    subject: "Payment receipt",
    htmlContent: "<h1>"+"Your payment has credited our account successfuly. We invite you to come to the provider establishement to fullfil a contract"+"</h1>"
    + "<p>Name : "+request.name+"</p>"
    + "<p>Last Name :"+request.lastName+"</p>"
    + "<p>CIN : "+request.cin+"</p>"
    + "<p>Email : "+request.mail+"</p>"
    +"<p>Request date :"+request.requestDate+"</p>"
    + "<p>Payment method :"+request.payment+"</p>"
    +"<p>Phone :"+request.phone+"</p>"
    +"<p>Payment date: "+request.datePayment+"</p>"
    +"<p>Payment hour :"+request.hourPayment+"</p>"
    +"<p>Total fee :"+request.totalPrice+"</p>"


       }
        const response = axios.post(`${portMongo}/email`, htmlcontent);
      console.log('Email sent successfully:', response.data);
      // Handle success (e.g., clear form, show success message)
  history('/manager')
        setIsDataReady(true);
 
 //email
   

    //     fetch(`${portMongo}/email`,{
    //         method: 'POST', // Use PUT for updating data
    
    // body: "contentHtml",
    //     })
    //     .then(res=>{
    //         if(res.ok)console.log("email sent successfully")
    //     })
    
        // setRegistered(!registered)
        // handleSuccessAction("mise à jour réussie")
        // Update UI accordingly
      } else {
        console.error('Error updating item:', response.statusText);
        // Display error message to the user
      }
    })
    .catch(error => {
      console.error('Network or other error:', error);
      // Display network error message
    });
	     Swal.fire({
						icon:"success",
  title: "Request stamped 'Paid'",
  text: "The client has been sent a receipt",
   confirmButtonText: "<span id='i'>OK</span>",
  showCancelButton: false,
  
 cancelButtonText:"<span id='c'>Cancel</span>",
})
    }



})
   
}
function handleRefuse(event) {
	
	 event.preventDefault();
   Swal.fire({
						icon:"question",
  text: "Are you certain to refuse the client's request? A notification will be sent to them",
  title:"Expiration stamping confirmation",
   confirmButtonText: "<span id='i'>Confirm</span>",
  showCancelButton: true,
  
 cancelButtonText:"<span id='c'>Cancel</span>",
}).then((result) => {
  
    if (result.isConfirmed) {
		     const updatedState={
        state:"Refused"
    }
    
  fetch(`${portMongo}/update/${request._id}`, {
    method: 'PATCH', // Use PUT for updating data
    headers: {
      'Content-Type': 'application/json', // Specify JSON data format
    },
    body: JSON.stringify(updatedState), // Send the updated data as a JSON object
  })
    .then(response => {
      if (response.ok) {
        console.log('Item updated successfully!');
        htmlcontent={
            to: request.mail,
    subject: "Payment date expiration",
    htmlContent: "<h1>We kindly inform you that your payment is now overdue in accordance with the date and time you specified</h1>"
    + "<p>Name : "+request.name+"</p>"
    + "<p>Last Name :"+request.lastName+"</p>"
    + "<p>CIN : "+request.cin+"</p>"
    + "<p>Email : "+request.mail+"</p>"
    +"<p>Request date :"+request.requestDate+"</p>"
    + "<p>Payment method :"+request.payment+"</p>"
    +"<p>Phone :"+request.phone+"</p>"
    +"<p>Payment date: "+request.datePayment+"</p>"
    +"<p>Payment hour :"+request.hourPayment+"</p>"
    +"<p>Total fee :"+request.totalPrice+"</p>"


        }
         const response = axios.post(`${portMongo}/email`, htmlcontent);
      console.log('Email sent successfully:', response.data);
      history('/manager')
      setIsDataReady(true);
    
       
   
 //email
  

        // setRegistered(!registered)
        // handleSuccessAction("mise à jour réussie")
        // Update UI accordingly
      } else {
        console.error('Error updating item:', response.statusText);
        // Display error message to the user
      }
    })
    .catch(error => {
      console.error('Network or other error:', error);
      // Display network error message
    });
     
      Swal.fire({
						icon:"success",
  title: "Request stamped 'Expired'",
  text: "The client has been notified about the expiration of his payment",
   confirmButtonText: "<span id='i'>OK</span>",
  showCancelButton: false,
  
 cancelButtonText:"<span id='c'>Cancel</span>",
})
    }



})


}
	  return (
    <div className="main row">

									{/* <header class="major">
										<h2>{request.name}</h2>
									</header> */}
									
									
										
											
										
<div id="scvr" class=" col scrollable-column">
				{enginDetail.map((row)=>(<article class=" ms-2 card bg-white mb-3 px-2 pt-2 thicker-shadow rounded-4 col" key={row.enginDetails.codeEngin}>
												{/* <h3>{row.type}</h3> */}
                                                	
                                                            	<div class="">
                                                                    <h3>{row.enginDetails.nomEngin}</h3>
                                                                   
                                                            <img src={row.enginDetails.photoEngin} alt="" srcset="" />	
                                                            <div class="table-wrapper">
														<table>
														
															<tbody>
																<tr>
																	<td><strong>Width</strong></td>
																	<td>Width of the engin</td>
																	<td>{row.enginDetails.largeurMax} m</td>
																</tr>
																<tr>
																	<td><strong>Height</strong></td>
																	<td>Height of the engin</td>
																	<td>{row.enginDetails.hauteurMax} m</td>
																</tr>
																<tr>
																	<td><strong>Length</strong></td>
																	<td> Length of the engin</td>
																	<td>{row.enginDetails.longueurMax} m</td>
																</tr>
																<tr>
																	<td><strong>Weight</strong></td>
																	<td>Weight of the engin</td>
																	<td>{row.enginDetails.poids} t</td>
																</tr>
																<tr>
																	<td><strong>Capacity</strong></td>
																	<td>Reservoir capacity</td>
																	<td>{row.enginDetails.capacite}</td>
																</tr>
															</tbody>
															<tfoot>
																{/* <tr>
																	<td colspan="2"></td>
																	<td>100.00</td>
																</tr> */}
															</tfoot>
														</table>
													</div>

                                            </div>
                                                    

                                                   

                                                                <div class="d-flex ms-2 flex-column">
                                                                    <span className=" align-self-start "><i class="fas fa-circle text-warning"></i><b> Duration :</b> </span>{row.dates[0]} to {row.dates[1]} <br /><br />
                                                                    <span className=" align-self-start"><i class="fas fa-circle text-warning"></i><b> Number of Engin requested :</b> {row.nbrEngins}</span> <br />
                                                                    <span className=" align-self-start"><i class="fas fa-circle text-warning"></i><b> Construction site:</b> </span>{row.address}<br /><br />
                                                                    <span className=" align-self-start"><i class="fas fa-circle text-warning"></i><b> Distance:</b> {row.distance} km </span><br />
                                                                    <span className=" align-self-start"><i class="fas fa-circle text-warning"></i><b> Total fee :</b> {row.fee} Ar </span> <br />

                                                                </div>
                                                
                                                            	
										
                                                
									
                                            
										{/* <Link to="/requests" onClick={()=>handleDetail(row)} type="button">Details</Link> */}
										</article>))}				
		</div>							
       

		 <div id='container2' class=" ms-2 card bg-white mb-3  thicker-shadow rounded-4 col">
												<div class="card-body d-flex flex-column ">
<p className="  align-self-start"><strong><i class="fa fa-user" aria-hidden="true"></i> Name</strong> : {request.name}</p>
                                            <p className="  align-self-start"><strong><i class="fa fa-user" aria-hidden="true"></i> Last Name :</strong> {request.lastName}</p>
                                            <p className="  align-self-start"><strong><i class="fas fa-id-card    "></i> CIN :</strong> {request.cin}</p>
                                            <p className="  align-self-start"><strong><i class="fas fa-envelope   "></i> Mail :</strong> {request.mail}</p>
                                            <p className="  align-self-start"><strong><i class="fas fa-calendar    "></i> Request Date :</strong> {request.requestDate}</p>
                                            <p className="  align-self-start"><strong><i class="fas fa-phone-square    "></i> Payment method :</strong> {request.payment}</p>
                                            <p className="  align-self-start"><strong><i class="fa fa-phone" aria-hidden="true"></i> Phone :</strong> {request.phone}</p>
                                            <p className="  align-self-start"><strong><i class="fas fa-calendar    "></i> Payment date:</strong> {request.datePayment}</p>
                                            <p className="  align-self-start"><strong><i class="fas fa-clock    "></i> Payment hour :</strong>  {request.hourPayment}</p>
                                            <p className="  align-self-start"><strong><i class="fas fa-money-bill-wave    "></i> Total fee :</strong> {request.totalPrice}</p>
										<div>
 <button  className="w-10 ms-auto me-3 text-bg-primary" onClick={handleAccept}>Confirm</button>
                                        <button className="w-10 ms-auto text-bg-danger" onClick={handleRefuse}>Expired</button>
										</div>
                                       
												</div>

										 </div> 

 



	{/* <head>
		<title>Editorial by HTML5 UP</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
	</head> */}




	
					
					

							

{/* 	
								<section id="banner">
									<div class="content">
										<header>
											<h1>Welcome<br />
											to EnginTrac</h1>
											<p>Your construction Engin Rental Marketplace</p>
										</header>
										<p>EnginTrac is your premier online platform for construction equipment rentals, designed to empower contractors of all sizes to tackle any project with confidence. We understand the critical role that having the right equipment at the right time plays in ensuring project success. That's why we offer a comprehensive selection of top-quality construction machinery, meticulously maintained and readily available to meet your specific needs.</p>
										<ul class="actions">
											<li><a href="#" class="button big">Learn More</a></li>
										</ul>
									</div>
									<span class="image object">
										<img id="firstImg" src="demolition/bulldozer.png " alt="" />
									</span>
								</section>

				
								<section>
									<header class="major">
										<h2>Why Choose EnginTrac?</h2>
									</header>
									<div class="features">
										<article>
											<span class="icon fa-gem"></span>
											<div class="content">
												<h3>Extensive Inventory to Equip Your Success</h3>
												<p>EnginTrac boasts a comprehensive inventory encompassing a vast
                                                     array of construction equipment. We have the right equipment to bring your vision to life.  Our extensive selection ensures you can find the perfect solution for any construction job, eliminating the need to search through multiple vendors.</p>
											</div>
										</article>
										<article>
											<span class="icon solid fa-paper-plane"></span>
											<div class="content">
												<h3>Seamless Rentals: Streamline Your Project Workflow</h3>
												<p>EnginTrac is committed to streamlining your construction project workflow. Our user-friendly online platform allows you to brequestse our extensive equipment catalog, compare specifications, and secure your rental reservation in a matter of minutes. Your satisfaction is our top priority </p>
											</div>
										</article>
										<article>
											<span class="icon solid fa-rocket"></span>
											<div class="content">
												<h3>Confidence in Every Rental: Top-Tier Equipment, Maintained for Performance</h3>
												<p>At EnginTrac, your project's success and operator safety are our top priorities.  Our commitment to quality is reflected in our meticulously maintained fleet of equipment. Each machine undergoes rigorous inspections and maintenance schedules to guarantee optimal performance and reliability on your project site. </p>
											</div>
										</article>
										<article>
											<span class="icon solid fa-signal"></span>
											<div class="content">
												<h3>Expert Support: Your Partner in Every Project</h3>
												<p>EnginTrac doesn't simply offer equipment rentals; we provide a comprehensive support system to ensure your project runs smoothly. Our dedicated customer service team is comprised of construction industry experts readily available to answer your questions and guide you through the rental process.  </p>
											</div>
										</article>
									</div>
								</section> */}

						 
								

				
				
{/* 
		
					<div id="sidebar">
						<div class="inner">

				
								<section id="search" class="alt">
									<form method="post" action="#">
										<input type="text" name="query" id="query" placeholder="Search" />
									</form>
								</section>

			
								<nav id="menu">
									<header class="major">
										<h2>Menu</h2>
									</header>
									<ul>
										<li><a href="index.html">Homepage</a></li>
										<li><a href="generic.html">Generic</a></li>
										<li><a href="elements.html">Elements</a></li>
										<li>
											<span class="opener">Submenu</span>
											<ul>
												<li><a href="#">Lorem Dolor</a></li>
												<li><a href="#">Ipsum Adipiscing</a></li>
												<li><a href="#">Tempus Magna</a></li>
												<li><a href="#">Feugiat Veroeros</a></li>
											</ul>
										</li>
										<li><a href="#">Etiam Dolore</a></li>
										<li><a href="#">Adipiscing</a></li>
										<li>
											<span class="opener">Another Submenu</span>
											<ul>
												<li><a href="#">Lorem Dolor</a></li>
												<li><a href="#">Ipsum Adipiscing</a></li>
												<li><a href="#">Tempus Magna</a></li>
												<li><a href="#">Feugiat Veroeros</a></li>
											</ul>
										</li>
										<li><a href="#">Maximus Erat</a></li>
										<li><a href="#">Sapien Mauris</a></li>
										<li><a href="#">Amet Lacinia</a></li>
									</ul>
								</nav>

			
								<section>
									<header class="major">
										<h2>Ante interdum</h2>
									</header>
									<div class="mini-posts">
										<article>
											<a href="#" class="image"><img src="images/pic07.jpg" alt="" /></a>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
										</article>
										<article>
											<a href="#" class="image"><img src="images/pic08.jpg" alt="" /></a>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
										</article>
										<article>
											<a href="#" class="image"><img src="images/pic09.jpg" alt="" /></a>
											<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
										</article>
									</div>
									<ul class="actions">
										<li><a href="#" class="button">More</a></li>
									</ul>
								</section>

								<section>
									<header class="major">
										<h2>Get in touch</h2>
									</header>
									<p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
									<ul class="contact">
										<li class="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
										<li class="icon solid fa-phone">(000) 000-0000</li>
										<li class="icon solid fa-home">1234 Somewhere Road #8254<br />
										Nashville, TN 00000-0000</li>
									</ul>
								</section>

		
								<footer id="footer">
									<p class="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
								</footer>

						</div>
					</div> */}

			









    </div>
  );
}



export default Request;
