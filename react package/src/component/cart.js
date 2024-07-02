import { useCart } from "./cartContext.js";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { createNotif } from "./notif.js";
import { Link } from "react-router-dom";
import '../My styles/cart.css';
import {Popup,pubEmail,emailx} from './popup.js';
import { useNavigate } from 'react-router-dom';
var mongoport = "http://localhost:8083";
var ok=false
function MyCart() {
  const history = useNavigate();
  useEffect(()=>{
    history("/cart")
  },[])
  const { addToCart, getCartFromSession, removeFromCart, clearCart } =
    useCart();
  const [isCanceled, setIsCanceled] = useState(false);
  const [cin, setCin] = useState("123456789123");
  const [name, setName] = useState("Randria");
  const [lastName, setLastName] = useState("Andry");
  const [mail, setMail] = useState("calwg28@gmail.com");
  const [bancaire, setBancaire] = useState("");
  const [phone, setPhone] = useState("0346672552");
  const [payment, setPayment] = useState("");
  const [datePayment, setDatePayment] = useState("");
  const [hourPayment, setHourPayment] = useState("");
  const [allData, setAllData] = useState("");
  var allMyData = 0;

  var portMongo = "http://localhost:8083";
  var item = null;
  var totalPrice = 0;

  function sendRequest() {
    // Swal.fire({
    //   icon: "question",
    //   title: "Order confirmation",
    //   text: "To confirm, are you ready to submit your order for review? An email notification will be sent to the manager for their approval. You will also receive a confirmation email for your records",
    //   confirmButtonText: "<span id='i'>Confirm</span>",
    //   showCancelButton: true,

    //   cancelButtonText: "<span id='c'>Cancel</span>",
    // }).then((result) => {
 
        setAllData({
          enginDetails: allMyData,
          cin: cin,
          mail: mail,
          payment: payment,
          phone: phone,
          datePayment: datePayment,
          hourPayment: hourPayment,
          name: name,
          lastName: lastName,
          requestDate: new Date(),
          totalPrice: totalPrice,
          state: "waiting",
         
        });

       
       ok=true
  
  }
useEffect(()=>{
  if(ok){

fetch(mongoport, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(allData),
        }).then(()=>console.log("updated"))
  }
},[allData])
  const handleChangex = (event) => {
    const { name, type, checked, value } = event.target;
    switch (name) {
      case "cin":
        setCin(value);
        break;
      case "name":
        setName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "mail":
        setMail(value);
        break;
      case "payment":
        setPayment(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "datePayment":
        setDatePayment(value);
        break;
      case "hourPayment":
        setHourPayment(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // This effect runs whenever handleDeleteArticle is called (or on initial render)
    // Optional for verification

    // You can add code here to update the UI or perform actions,
    // even if handleDeleteArticle doesn't directly change state.
    if (isCanceled) setIsCanceled(!isCanceled);
  }, [isCanceled]);

  function getRownbr(price) {
    totalPrice = price + totalPrice;
  }

  function handleDeleteArticle(item) {
    Swal.fire({
      icon: "question",
      title: "Cancelling item confirmation",
      text: "Are you sure you want to remove this item from your cart? You can easily add it back again later if needed.",
      confirmButtonText: "<span id='i'>Confirm</span>",
      showCancelButton: true,

      cancelButtonText: "<span id='c'>Cancel</span>",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(item);
        setIsCanceled(true);
        createNotif(
          "info",
          "Change in cart",
          "The item has been removed from your cart"
        );
      }
    });
  }
  if (getCartFromSession()) {
    item = getCartFromSession();
    allMyData = getCartFromSession();
    if (item.length > 0) {
      return (
        <div className="container">
          <Popup></Popup>
          <div className="row">
  
          <div id="scr" class="col scrollable-column">
            {item.map((row) => (
              <article className="articleCart" key={row.enginDetails.codeEngin}>
                {getRownbr(row.fee)}

                <div className="card bg-white mb-3 pt-4 thicker-shadow rounded-4">
                    <div class="card-body d-flex flex-column ">
 <h3>{row.type}</h3>
                <div className="leftDiv">
                  <h4>{row.enginDetails.nomEngin}</h4>
                  <img src={row.enginDetails.photoEngin} alt="" />
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
                          <td>
                            <strong>Width</strong>
                          </td>
                          <td>Width of the engin</td>
                          <td>{row.enginDetails.largeurMax} m</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Height</strong>
                          </td>
                          <td>Height of the engin</td>
                          <td>{row.enginDetails.hauteurMax} m</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Length</strong>
                          </td>
                          <td> Length of the engin</td>
                          <td>{row.enginDetails.longueurMax} m</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Weight</strong>
                          </td>
                          <td>Weight of the engin</td>
                          <td>{row.enginDetails.poids} t</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Capacity</strong>
                          </td>
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
                <div className="rightDiv">
                  {/* <h3>Address : {row.address}</h3>
                  <h3>
                    Distance between the provider and construction site :
                    {row.distance}
                  </h3> */}
                  {/* <h3>
                    Period: {row.dates[0]} to {row.dates[1]}
                  </h3> */}
                  <label className="w-25 me-5"><i class="fa fa-circle" aria-hidden="true"></i> Number  
                   <pre>
                    <code>{row.nbrEngins}</code>
                  </pre>
                  </label>{" "}
                 
                  <label className="w-25 "><i class="fa fa-circle" aria-hidden="true"></i> Price  
                   <pre>
                    <code>{row.fee} Ar</code>
                  </pre>
                  </label><br />
                 
                  <button
                    type="button"
                    onClick={() => handleDeleteArticle(row)}
                  >
                    Cancel
                  </button>
                </div>
                    </div>
                </div>
               
              </article>
            ))}
            
          </div>
          <div id='container2' class="card col bg-white mb-3 pt-4 thicker-shadow rounded-4 ">
										  {/* <div className=' card-header bg-warning'>
                       
                        
                						</div>  */}
										  <div class="card-body d-flex flex-column ">
              {/* <label htmlFor="cin">
                CIN{" "}
                <input
                  name="cin"
                  type="number"
                  onChange={handleChangex}
                  value={cin}
                />
              </label>
              <label htmlFor="name">
                Name
                <input
                  name="name"
                  type="text"
                  onChange={handleChangex}
                  value={name}
                />
              </label>
              <label htmlFor="lastName">
                Last Name{" "}
                <input
                  name="lastName"
                  type="text"
                  onChange={handleChangex}
                  value={lastName}
                />
              </label>
              <label htmlFor="mail">
                Mail{" "}
                <input
                  name="mail"
                  type="email"
                  onChange={handleChangex}
                  value={mail}
                />
              </label> */}
              <label className="d-flex flex-column" htmlFor=""><span className="  align-self-md-start "><i class="fas fa-phone-square    "></i> Payment method</span> 
              <select  className=" form-control" name="payment" onChange={handleChangex} value={payment}>
                <option value="mvola">Mvola</option>
                <option value="airtelmoney">AirtelMoney</option>
                <option value="orangemoney">Orange Money</option>
              </select>
              </label>
              
              {/* <label htmlFor="">
                Phone number :{" "}
                <input
                  name="phone"
                  type="tel"
                  onChange={handleChangex}
                  value={phone}
                />
              </label> */}
              <label className="d-flex flex-column" htmlFor="">
              <span className="  align-self-md-start "><i class="fas fa-calendar    "></i> Payment date </span> 
                <input
                className=" form-control"
                  name="datePayment"
                  type="date"
                  onChange={handleChangex}
                  value={datePayment}
                />
              </label>
              <label className="d-flex flex-column" htmlFor="">
             <span className="  align-self-md-start "><i class="fas fa-clock    "></i>  Payment hour </span> 
                <input
                 className=" form-control"
                  name="hourPayment"
                  type="time"
                  onChange={handleChangex}
                  value={hourPayment}
                />
              </label>

              <label className="d-flex flex-column"><span className="  align-self-start ">
                <i class="fas fa-money-bill-wave    "></i> Total Price</span> <pre>
                <code>{totalPrice} Ar</code>
              </pre></label>
              
              <button  data-bs-toggle="modal" data-bs-target="#exampleModalCenter" className=" " id="sne" onClick={() => sendRequest()} type="button">
                Send
              </button>
            </div> 
            </div>
          </div>
       
        </div>
      );
    } else {
      return (
        <div className="MyCart">
          {/* <div id="navigationLink">
            <Link to="/">Homepage</Link> {">"}{" "}
            <Link to={window.location.href}>Cart</Link>
          </div> */}
        
        </div>
      );
    }
  }
}
export default MyCart;
