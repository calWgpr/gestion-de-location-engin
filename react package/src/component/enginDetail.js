import { useState,useEffect } from "react";
import Calendars from "./calendar";
import MyMapComponent from "./map";
import { Link } from "react-router-dom";
import { useCart  } from './cartContext.js';
import Swal from 'sweetalert2';
import {createNotif} from "./notif.js";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

	function Engin({enginDetailx,createNotification}) {
const history = useNavigate();
		const enginDetail2 = JSON.parse(localStorage.getItem('enginDetail2'));
const enginDetail=enginDetailx || enginDetail2



		const { addToCart,getCartFromSession } = useCart();
	const [nbrEngin,setNbrEngin]=useState(1)
		const [rentType,setRentType]=useState("")
		const [rentalPrice,setRentalPrice]=useState(0)
		const [reservationFee,setReservationFee]=useState(0)
		const [date,setDate]=useState(null)
		const [location,setLocation]=useState(null)
		const [coo,getCoo]=useState(null)
		const [type,setType]=useState(null)
		const [msg,setMsg]=useState(null)
		const[closeTime,setCloseTime]=useState(null)
		const [title,setTitle]=useState(null)
		var res=0
		
		var cost=0
	
	//  createNotif("warning", 'Warning','This is an informative alert')
  


	// function handleNbrEngin() {
	// 	setNbrEngin(nbrEngin)
	// }
	function handleSend(event) {

		event.preventDefault();

		            Swal.fire({
						icon:"question",
  text: "Would you like to add this item to your cart? You can conveniently access your cart at any time to review its contents.",
  title:"Confirm Adding to Cart",
   confirmButtonText: "<span id='i'>Confirm</span>",
  showCancelButton: true,
  
 cancelButtonText:"<span id='c'>Cancel</span>",
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {


	createNotif("success","Success","Your item was added successfully to your cart")
	

	const items={
			enginDetails:enginDetail,
			fee:0,
			dates:date,
			nbrEngins:nbrEngin,
			address:coo,
			distance:location,
			type:null
		}
		if(reservationFee!=0){
		items.fee=reservationFee
		items.type="Engin reservation information"
		}
		else {items.fee=rentalPrice
		items.type="Engin rent information"
		}

		addToCart(items)
		 history('/cart')

  } 
});

		
		
	}
	function handleChange(event){
		
	    const { name, type, checked, value } = event.target;
		    switch (name) {
      case "demo-priority":
        setRentType(value);
		

        break;
		case "demo-nameX":
			setNbrEngin(value)
			return value
			break
    
      default:
        break;
    }
	
}

//calculation of total cost
useEffect(() => {
	 if (!nbrEngin || !rentType || !date || !location || !date[0] || !date[1]) return;
	
	cost=enginDetail.coutEngin

  // Code to use the updated nbrEngin value (e.g., calculations or console logs)
// nbrengin *(datprix+location)
 //calculation of nbr date
 // Calculate the difference in milliseconds between the two dates
   var numberOfDays=0

 const differenceInMs = date[1].getTime() - date[0].getTime();

  // One day in milliseconds
  const oneDayInMs = 1000 * 60 * 60 * 24;

  // Calculate the number of days (rounded down to the nearest whole day)
 numberOfDays= Math.floor(differenceInMs / oneDayInMs) + 1;

 var x=0;
if(rentType=="ReservationRadio"){
 setRentalPrice(0)

if(numberOfDays<=7 && numberOfDays>=1){
	if(location>=1 && location<=10){
		x=cost/3+cost/10
	}else if(location>=11 && location<=20) x=cost/3+cost/7
	else if(location>=21 && location<=50)x=cost/3+cost/5
	else if(location>=51 && location<=100) x=cost/3+cost/3
	else x=cost/3+cost/2
}else if(numberOfDays<=15 && numberOfDays>=8){
	if(location>=1 && location<=10){
		x=cost/2+cost/10
	}else if(location>=11 && location<=20) x=cost/2+cost/7
	else if(location>=21 && location<=50)x=cost/2+cost/5
	else if(location>=51 && location<=100) x=cost/2+cost/3
	else x=cost/2+cost/2
}



setReservationFee(Math.round(nbrEngin*x))

}else if(rentType=="RentRadio"){
	setReservationFee(0)

if(numberOfDays<=7 && numberOfDays>=1){
	if(location>=1 && location<=10){
		x=cost+cost/10
	}else if(location>=11 && location<=20) x=cost+cost/7
	else if(location>=21 && location<=50)x=cost+cost/5
	else if(location>=51 && location<=100) x=cost+cost/3
	else x=cost+cost/2
}else if(numberOfDays<=15 && numberOfDays>=8){
	if(location>=1 && location<=10){
		x=cost*2+cost/10
	}else if(location>=11 && location<=20) x=cost*2+cost/7
	else if(location>=21 && location<=50)x=cost*2+cost/5
	else if(location>=51 && location<=100) x=cost*2+cost/3
	else {
		x=2*cost+cost/2
		
	}
}else if(numberOfDays<=30 && numberOfDays>=16){
	if(location>=1 && location<=10){
		x=cost*3+cost/10
	}else if(location>=11 && location<=20) x=cost*3+cost/7
	else if(location>=21 && location<=50)x=cost*3+cost/5
	else if(location>=51 && location<=100) x=cost*3+cost/3
	else x=3*cost+cost/2
}else{
		if(location>=1 && location<=10){
		x=(numberOfDays/10)*cost+cost/10
	}else if(location>=11 && location<=20) x=cost*(numberOfDays/10)+cost/7
	else if(location>=21 && location<=50)x=cost*(numberOfDays/10)+cost/5
	else if(location>=51 && location<=100) x=cost*(numberOfDays/10)+cost/3
	else x=(numberOfDays/10)*cost+cost/2
}

setRentalPrice(Math.round(nbrEngin*x))
}
}, [nbrEngin,rentType,date,location]);

  return (

    <div className="App">
		
		
{/* <button type="button" onClick={()=>notify()}></button>	 */}
{/* <Notif type={type} msg={msg} title={title} closeTime={closeTime} ></Notif> */}

{/* <button onClick={handleSuccessClick}>Success Alert</button> */}

					
							

								<section>
									<header class="main">
										<h2 id="elements">{enginDetail.nomEngin}</h2>
									</header>

							
										{/* <h2 id="content">Sample Content</h2> */}
										{/* <p>Praesent ac adipiscing ullamcorper semper ut amet ac risus. Lorem sapien ut odio odio nunc. Ac adipiscing nibh porttitor erat risus justo adipiscing adipiscing amet placerat accumsan. Vis. Faucibus odio magna tempus adipiscing a non. In mi primis arcu ut non accumsan vivamus ac blandit adipiscing adipiscing arcu metus praesent turpis eu ac lacinia nunc ac commodo gravida adipiscing eget accumsan ac nunc adipiscing adipiscing lorem ipsum dolor sit amet nullam veroeros adipiscing.</p> */}
										{/* <div class="row">
											<div class="col-6 col-12-small">
												<h3>Sem turpis amet semper</h3>
												<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
											</div>
											<div class="col-6 col-12-small">
												<h3>Magna odio tempus commodo</h3>
												<p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. Ante commodo blandit adipiscing integer semper orci eget. Faucibus commodo adipiscing mi eu nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi accumsan vis mi accumsan.</p>
											</div>
										
											<div class="col-4 col-12-medium">
												<h3>Interdum sapien gravida</h3>
												<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>
											</div>
											<div class="col-4 col-12-medium">
												<h3>Faucibus consequat lorem</h3>
												<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>
											</div>
											<div class="col-4 col-12-medium">
												<h3>Accumsan montes viverra</h3>
												<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>
											</div>
										</div> */}

									<hr class="major" />

								
										
										<div class="row gtr-200">
											<div class="col-6 col-12-medium">

											
													{/* <h3>Text</h3> */}
													{/* <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
													This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
													This is <u>underlined</u> and this is code: <code>for</code>.
													Finally, this is a <a href="#">link</a>.</p>
													<hr />
													<h2>Heading Level 2</h2>
													<h3>Heading Level 3</h3>
													<h4>Heading Level 4</h4>
													<hr />
													<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>

												 */}
                                                 <img src={enginDetail.photoEngin} alt="" srcset="" />
													<h3>Characteristics</h3>
													{/* <div class="row">
														<div class="col-6 col-12-small">

															<h4>Unordered</h4>
															<ul>
																<li>Dolor etiam magna etiam.</li>
																<li>Sagittis lorem eleifend.</li>
																<li>Felis dolore viverra.</li>
															</ul>

															<h4>Alternate</h4>
															<ul class="alt">
																<li>Dolor etiam magna etiam.</li>
																<li>Sagittis lorem eleifend.</li>
																<li>Felis feugiat viverra.</li>
															</ul>

														</div>
														<div class="col-6 col-12-small">

															<h4>Ordered</h4>
															<ol>
																<li>Dolor etiam magna etiam.</li>
																<li>Etiam vel lorem sed viverra.</li>
																<li>Felis dolore viverra.</li>
																<li>Dolor etiam magna etiam.</li>
																<li>Etiam vel lorem sed viverra.</li>
																<li>Felis dolore viverra.</li>
															</ol>

															<h4>Icons</h4>
															<ul class="icons">
																<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
																<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
																<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
																<li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
																<li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
																<li><a href="#" class="icon brands fa-tumblr"><span class="label">Tumblr</span></a></li>
															</ul>

														</div>
													</div> */}
													{/* <h4>Definition</h4>
													<dl>
														<dt>Item1</dt>
														<dd>
															<p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
														</dd>
														<dt>Item2</dt>
														<dd>
															<p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
														</dd>
														<dt>Item3</dt>
														<dd>
															<p>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor.</p>
														</dd>
													</dl>

													<h4>Actions</h4>
													<ul class="actions">
														<li><a href="#" class="button primary">Default</a></li>
														<li><a href="#" class="button">Default</a></li>
													</ul>
													<ul class="actions small">
														<li><a href="#" class="button primary small">Small</a></li>
														<li><a href="#" class="button small">Small</a></li>
													</ul>
													<div class="row">
														<div class="col-6 col-12-small">
															<ul class="actions stacked">
																<li><a href="#" class="button primary">Default</a></li>
																<li><a href="#" class="button">Default</a></li>
															</ul>
														</div>
														<div class="col-6 col-12-small">
															<ul class="actions stacked">
																<li><a href="#" class="button primary small">Small</a></li>
																<li><a href="#" class="button small">Small</a></li>
															</ul>
														</div>
														<div class="col-6 col-12-small">
															<ul class="actions stacked">
																<li><a href="#" class="button primary fit">Default</a></li>
																<li><a href="#" class="button fit">Default</a></li>
															</ul>
														</div>
														<div class="col-6 col-12-small">
															<ul class="actions stacked">
																<li><a href="#" class="button primary small fit">Small</a></li>
																<li><a href="#" class="button small fit">Small</a></li>
															</ul>
														</div>
													</div>

													<h4>Pagination</h4>
													<ul class="pagination">
														<li><span class="button disabled">Prev</span></li>
														<li><a href="#" class="page active">1</a></li>
														<li><a href="#" class="page">2</a></li>
														<li><a href="#" class="page">3</a></li>
														<li><span>&hellip;</span></li>
														<li><a href="#" class="page">8</a></li>
														<li><a href="#" class="page">9</a></li>
														<li><a href="#" class="page">10</a></li>
														<li><a href="#" class="button">Next</a></li>
													</ul>

											
													<h3>Blockquote</h3>
													<blockquote>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Lorem ipsum dolor. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.</blockquote> */}

											
													

												
													<div class="table-wrapper">
														<table>
															<thead>
																{/* <tr>
																	<th></th>
																	<th>Description</th>
																	<th>Price</th>
																</tr> */}
															</thead>
															<tbody>
																<tr>
																	<td><strong>Width</strong></td>
																	<td>Width of the engin</td>
																	<td>{enginDetail.largeurMax} m</td>
																</tr>
																<tr>
																	<td><strong>Height</strong></td>
																	<td>Height of the engin</td>
																	<td>{enginDetail.hauteurMax} m</td>
																</tr>
																<tr>
																	<td><strong>Length</strong></td>
																	<td> Length of the engin</td>
																	<td>{enginDetail.longueurMax} m</td>
																</tr>
																<tr>
																	<td><strong>Weight</strong></td>
																	<td>Weight of the engin</td>
																	<td>{enginDetail.poids} t</td>
																</tr>
																<tr>
																	<td><strong>Capacity</strong></td>
																	<td>Reservoir capacity</td>
																	<td>{enginDetail.capacite}</td>
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

                                                        <h3>Prices</h3>
                                                        <div class="table-wrapper">
														<table>
															<thead>
																 {/* <tr>
																	<th></th>
																	<th>Duration</th>
																	<th>Value</th>
																</tr>  */}
															</thead>
															<tbody>
																<tr>
																	<td><strong>Rental Prices</strong></td>
																	<td>1 to 7 days</td>
																	<td>{enginDetail.coutEngin} Ar</td>
																</tr>
																<tr>
																	<td></td>
																	<td>8 to 15 days</td>
																	<td>{Math.round(enginDetail.coutEngin *2)} Ar</td>
																</tr>
																<tr>
																	<td></td>
																	<td>16 to 30 days</td>
																	<td>{Math.round(enginDetail.coutEngin *3)} Ar</td>
																</tr>
																
																<tr>
																	<td><strong>Reservation fee</strong></td>
																	<td>1 to 7 days</td>
																	<td>{Math.round(enginDetail.coutEngin /3)} Ar</td>
																</tr>
																<tr>
																	<td></td>
																	<td>8 to 15 days</td>
																	<td>{Math.round(enginDetail.coutEngin /2)} Ar</td>
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
													<div class="table-wrapper">
															<h3>Transportation costs</h3>
															<table>
															<thead>
																 {/* <tr>
																	<th></th>
																	<th>Duration</th>
																	<th>Value</th>
																</tr>  */}
															</thead>
															<tbody>
																<tr>
																	<td><strong>1 to 10 km</strong></td>
																	<td></td>
																	<td>{enginDetail.coutEngin /10} Ar</td>
																</tr>
																<tr>
																	<td><strong>11 to 20 km</strong></td>
																	<td></td>
																	<td>{Math.round(enginDetail.coutEngin /7)} Ar</td>
																</tr>
																<tr>
																	<td><strong>21 to 50 km</strong></td>
																	<td></td>
																	<td>{Math.round(enginDetail.coutEngin /5)} Ar</td>
																</tr>
																<tr>
																	<td><strong>50 to 100 km</strong></td>
																	<td></td>
																	<td>{Math.round(enginDetail.coutEngin /3)} Ar</td>
																</tr>
																<tr>
																	<td><strong>> 100 km</strong></td>
																	<td></td>
																	<td>{Math.round(enginDetail.coutEngin /2)} Ar</td>
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
													{/* <h4>Alternate</h4>
													<div class="table-wrapper">
														<table class="alt">
															<thead>
																<tr>
																	<th>Name</th>
																	<th>Description</th>
																	<th>Price</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>Item1</td>
																	<td>Ante turpis integer aliquet porttitor.</td>
																	<td>29.99</td>
																</tr>
																<tr>
																	<td>Item2</td>
																	<td>Vis ac commodo adipiscing arcu aliquet.</td>
																	<td>19.99</td>
																</tr>
																<tr>
																	<td>Item3</td>
																	<td> Morbi faucibus arcu accumsan lorem.</td>
																	<td>29.99</td>
																</tr>
																<tr>
																	<td>Item4</td>
																	<td>Vitae integer tempus condimentum.</td>
																	<td>19.99</td>
																</tr>
																<tr>
																	<td>Item5</td>
																	<td>Ante turpis integer aliquet porttitor.</td>
																	<td>29.99</td>
																</tr>
															</tbody>
															<tfoot>
																<tr>
																	<td colspan="2"></td>
																	<td>100.00</td>
																</tr>
															</tfoot>
														</table>
													</div> */}

											</div>
											<div class="col-6 col-12-medium">

												<form  className=" d-flex flex-column " method="post" action="#">
														<div class="row gtr-uniform">
															{/* <div class="col-6 col-12-xsmall">
																<input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
															</div>
															<div class="col-6 col-12-xsmall">
																<input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
															</div> */}
														
															{/* <div class="col-12">
																<select name="demo-category" id="demo-category">
																	<option value="">- Category -</option>
																	<option value="1">Manufacturing</option>
																	<option value="1">Shipping</option>
																	<option value="1">Administration</option>
																	<option value="1">Human Resources</option>
																</select>
															</div> */}
													
															<div class="col-4 col-12-small">
																<input onChange={handleChange} value="RentRadio" type="radio" id="demo-priority-low" name="demo-priority" />
																<label for="demo-priority-low">Rent</label>
															</div>
																{/* <div class="col-4 col-12-small">
																	<input type="radio" id="demo-priority-normal" name="demo-priority"/>
																	<label for="demo-priority-normal">Normal</label>
																</div> */}
															<div class="col-4 col-12-small">
																<input onChange={handleChange} value="ReservationRadio" type="radio" id="demo-priority-high" name="demo-priority"/>
																<label for="demo-priority-high">Resevation</label>
															</div>
{/* 														
															<div class="col-6 col-12-small">
																<input type="checkbox" id="demo-copy" name="demo-copy"/>
																<label for="demo-copy">Email me a copy</label>
															</div>
															<div class="col-6 col-12-small">
																<input type="checkbox" id="demo-human" name="demo-human" checked/>
																<label for="demo-human">I am a human</label>
															</div> */}
														
															{/* <div class="col-12">
																<textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
															</div> */}
																<Calendars setDatex={setDate} rentType={rentType}></Calendars>
															<MyMapComponent getCoo={getCoo} setLocationx={setLocation}></MyMapComponent>			
															<div class="row gtr-uniform">

  <div className="d-flex flex-column ">
	<h6><i class="fa fa-circle" aria-hidden="true"></i> Engin number</h6>															
  <select className=" w-50 m-auto " onChange={handleChange}  name="demo-nameX" id="demo-namexx">
    {Array.from({ length: 5 }, (_, i) => (
      <option  key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ))}
  </select>
  
</div><br />
															{/* <div class="col-6 col-12-xsmall">
																<input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
															</div>  */}
																</div>	
																<div>
																		<h6><i class="fa fa-circle" aria-hidden="true"></i> Rental price</h6>
													<pre><code>{rentalPrice} Ar
														</code></pre>
														<h6><i class="fa fa-circle" aria-hidden="true"></i> Reservation fee</h6>
													<pre><code>{reservationFee} Ar
														</code></pre>
																	</div>			
												
															<div class="col-12">
																
																<button id="addToCartBn" type="button" onClick={handleSend} value="To my cart" >To my cart</button>
																	{/* <li><input type="reset" value="Reset" /></li> */}
																
															</div>
														</div>
													</form>

										
													
													{/* <ul class="actions">
														<li><a href="#" class="button primary">Primary</a></li>
														<li><a href="#" class="button">Default</a></li>
													</ul> */}
													{/* <ul class="actions">
														<li><a href="#" class="button large">Large</a></li>
														<li><a href="#" class="button">Default</a></li>
														<li><a href="#" class="button small">Small</a></li>
													</ul>
													<ul class="actions">
														<li><a href="#" class="button primary large">Large</a></li>
														<li><a href="#" class="button primary">Default</a></li>
														<li><a href="#" class="button primary small">Small</a></li>
													</ul>
													<ul class="actions fit">
														<li><a href="#" class="button primary fit">Fit</a></li>
														<li><a href="#" class="button fit">Fit</a></li>
													</ul>
													<ul class="actions fit small">
														<li><a href="#" class="button primary fit small">Fit + Small</a></li>
														<li><a href="#" class="button fit small">Fit + Small</a></li>
													</ul>
													<ul class="actions">
														<li><a href="#" class="button primary icon solid fa-search">Icon</a></li>
														<li><a href="#" class="button icon solid fa-download">Icon</a></li>
													</ul>
													<ul class="actions">
														<li><span class="button primary disabled">Primary</span></li>
														<li><span class="button disabled">Default</span></li>
													</ul> */}

												

													

											
												

												

		

											</div>
										</div>

								</section>

					
				

		
					

	

	
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	
  </div>
  );
}
// /compact
// /demol
// /lift
// /earth
// /tranport
export default Engin;


