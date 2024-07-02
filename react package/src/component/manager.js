import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const {ObjectId} = require("mongodb")



var portMongo="http://localhost:8083"

function Manager({listEngin,setEnginDetail,setRequest}) {

const [fetchedList,setFetchedList]=useState(null)
const [isLoading, setIsLoading] = useState(true);

function handleDetail(item){
    setRequest(item)
}

useEffect(() => {

  // ... fetch data from database
  fetch(portMongo)
    .then(res => res.json()) // Convert response to JSON
    .then(data => {
		setFetchedList(data)
		setIsLoading(false)
    });

},[isLoading])

if (!isLoading){
//    console.log(fetchedList)
	  return (
    <div className="main">
		
<section>
									<header class="major">
										<h2>Waiting list</h2>
									</header>

									
									<div class="posts">
										
										{fetchedList
                                        .filter((row) => row.state === "waiting")
                                        .map((row)=>(<article className="d-flex flex-column align-item-start " key={row._id}>
													
											 <div id='container2' class="card bg-white mb-3  thicker-shadow rounded-4 ">
										  <div className=' card-header bg-warning'>
                       
                        
                						</div> 
										  <div class="card-body d-flex flex-column ">
											<p className="  align-self-start"><strong><i class="fa fa-user" aria-hidden="true"></i> Name</strong> : {row.name}</p>
                                            <p className="  align-self-start"><strong><i class="fa fa-user" aria-hidden="true"></i> Last Name :</strong> {row.lastName}</p>
                                            <p className="  align-self-start"><strong> <i class="fas fa-id-card    "></i> CIN :</strong> {row.cin}</p>
                                            <p className="  align-self-start"><strong> <i class="fas fa-phone-square    "></i> Payment method :</strong> {row.payment}</p>
                                            <p className="  align-self-start"><strong><i class="fas fa-envelope   "></i> Mail :</strong> {row.mail}</p>
                                            <p className="  align-self-start"><strong><i class="fas fa-calendar    "></i> Request Date :</strong> {row.requestDate}</p>
                                            <p className="  align-self-start"><strong><i class="fa fa-phone" aria-hidden="true"></i> Phone :</strong> {row.phone}</p>
                                            <p className="  align-self-start"><strong><i class="fas fa-calendar    "></i> Payment date:</strong> {row.datePayment}</p>
                                            <p className="  align-self-start"><strong><i class="fas fa-clock    "></i> Payment hour :</strong>  {row.hourPayment}</p>
                                            <p className="  align-self-start"><strong><i class="fas fa-money-bill-wave    "></i> Total fee :</strong> {row.totalPrice}</p>
                                            
										<Link className=" button w-50 ms-auto" to="/requests" onClick={()=>handleDetail(row)} type="button">Details</Link>
										  </div>
									 </div>
										</article>))}
										

									</div>
								</section>
       

	

 



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
												<p>EnginTrac is committed to streamlining your construction project workflow. Our user-friendly online platform allows you to browse our extensive equipment catalog, compare specifications, and secure your rental reservation in a matter of minutes. Your satisfaction is our top priority </p>
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

}

export default Manager;
