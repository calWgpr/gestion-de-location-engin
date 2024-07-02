import "./App.css";
import React from "react";
import Main from "./component/main";
import Categorie from "./component/categorieInside";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Engin from "./component/enginDetail.js";
import { useState, useEffect, useRef } from "react";
import Cart from "./component/cart.js";
import { CartProvider } from "./component/cartContext";
import Manager from "./component/manager.js";
import Request from "./component/request.js";
import {Account} from "./component/account"

import {EmailField} from './component/emailField.js';
import {SignupForm} from './component/signUp.js';
import {  PswdField} from './component/pswdField.js';
import {  VerificationCodeInput} from './component/emailVerification.js';
import { StateCard } from './component/stateCard.js';
import {UserInfo} from './component/userInfo.js';
import {Popup} from './component/popup.js';
// import Notif from './component/notif.js';
import { NotificationContainer } from "react-notifications";
// import { useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import 'bootstrap/dist/js/bootstrap.bundle.js';

// import './public/assets/js/breakpoints.min.js';

// import './public/assets/js/main.js';
// import './public/assets/js/util.js';

var port = "http://localhost:8080";
var setShowx = true;
function App() {
  // const location = useLocation();
  // const currentUrl = window.location.href;
  const [show, setShow] = useState(false); // Initial state when unfocused
  // alert(currentUrl)
  // const history = useNavigate ();

  const [enginDetail, setEnginDetail] = useState(null);
  const [request, setRequest] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [engins, setEngins] = useState([]);
  var enginDetail2 = null;
  // const type = "error"; // Example prop value
  //     const msg = "This is a success message";
  //     const title = "Success!";
  //     const closeTime = 3000

  // useEffect(() => {
  var currentUrl = null;
  useEffect(() => {
    currentUrl = window.location.href;
  }, []);
  //   // ... fetch data from database
  const handleSearch = (engin) => {
    setEnginDetail(engin);
    console.log(enginDetail);
  };
  useEffect(() => {
    const fetchAllEngins = async () => {
      try {
        console.log("yes");
        // ... fetch data from database
        fetch(port + "/1")
          .then((res) => res.json()) // Convert response to JSON
          .then((data) => {
            setEngins(data);
          });
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchAllEngins();
  }, []);

  const fEngins = engins.filter(
    (engin) =>
      engin.nomEngin.toLowerCase().includes(searchValue.toLowerCase()) ||
      engin.categorie.toLowerCase().includes(searchValue.toLowerCase())
  );
  // },[fetchedList,listEngin])
  const inputRef = useRef(null);
  const handleChangeValue = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    //  const isFocused = inputRef.current?.isFocused ?? false; // Check for focus
    //   console.log("Input is focused:", isFocused);

    // if(value!=""){
    // 		fetch(port+"/"+value)
    // .then(res => res.json()) // Convert response to JSON
    // .then(data => {
    // 	console.log(data)
    // })
    // .catch(err => console.log("error fetching the data"))
    // }
  };

  return (
    <div className="App">
      <NotificationContainer></NotificationContainer>
      {/* <Notif type={type} msg={msg} title={title} closeTime={closeTime} /> */}

      <body class="is-preload">
        <div id="wrapper row">
          <div className="inn col-3">
            {/* CLASSE QUI CONTIENT LA PARTIE DU NAVIGATION 30% CLASSE ROW */}
            <div id="sidebar" class="active">
              <div class="inner">
                <section id="search" class="alt">
                  <form method="post" action="#">
                    <input
                      type="text"
                      name="query"
                      id="query"
                      placeholder="Search"
                    />
                  </form>
                </section>

                <nav id="menu">
                  <header class="major">
                    <h2>Menu</h2>
                  </header>
                  <ul>
                    <li>
                      <a href="index.html"> Homepage</a>
                    </li>
                    <li>
                      <a href="generic.html">Generic</a>
                    </li>
                    <li>
                      <a href="elements.html">Elements</a>
                    </li>
                    <li>
                      <span class="opener">Submenu</span>
                      <ul>
                        <li>
                          <a href="#">Lorem Dolor</a>
                        </li>
                        <li>
                          <a href="#">Ipsum Adipiscing</a>
                        </li>
                        <li>
                          <a href="#">Tempus Magna</a>
                        </li>
                        <li>
                          <a href="#">Feugiat Veroeros</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Etiam Dolore</a>
                    </li>
                    <li>
                      <a href="#">Adipiscing</a>
                    </li>
                    <li>
                      <span class="opener">Another Submenu</span>
                      <ul>
                        <li>
                          <a href="#">Lorem Dolor</a>
                        </li>
                        <li>
                          <a href="#">Ipsum Adipiscing</a>
                        </li>
                        <li>
                          <a href="#">Tempus Magna</a>
                        </li>
                        <li>
                          <a href="#">Feugiat Veroeros</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Maximus Erat</a>
                    </li>
                    <li>
                      <a href="#">Sapien Mauris</a>
                    </li>
                    <li>
                      <a href="#">Amet Lacinia</a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <a href="#sidebar"  class="toggle">
									Toggle
								</a> */}
            </div>
          </div>
          <div class="inner col-9 container-fluid ">
            <div id="headdiv">
              <header
                className="container-fluid d-flex flex-wrap justify-content-between align-items-center py-2 px-43"
                id="header"
              >
                <a
                  className=" logo d-flex align-items-center col-md-3 col-lg-2 me-md-auto text-decoration-none"
                  href="index.html"
                >
                  <img id="logost" src="logo.svg" alt="" srcset="" />
                </a>
                {/* class="logo" */}
                <nav class="navbar navbar-expand-sm justify-content-end ">
                  <ul id="ulnav" class="  nav justify-content-end">
                    {/* class="icons" */}
                    <li className="nav-item">
                      <a className="nav-link d-flex align-items-center" href="/account">
                        <img
                          id="iconst"
                          src="accountIcon.png"
                          alt=""
                          srcset=""
                        />
                        <br />
                        <strong>My account</strong>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className=" nav-link d-flex align-items-center"
                        href="/cart"
                      >
                        {" "}
                        <img id="iconst" src="shopIcon.png" alt="" srcset="" />
                        <br />
                        <strong>My cart</strong>
                      </a>
                      {/* className="liIcons" */}
                    </li>
                    <li className="nav-item">
                      <a
                        className=" nav-link d-flex align-items-center"
                        href="/manager"
                      >
                        {" "}
                        <img id="iconst" style={{ height: "38px" }} src="managerIcon.jpg" alt="" srcset="" />
                        <br />
                        <strong>Manager</strong>
                      </a>
                      {/* className="liIcons" */}
                    </li>
                    {/* <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
										<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
										<li><a href="#" class="icon brands fa-snapchat-ghost"><span class="label">Snapchat</span></a></li>
										<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
										<li><a href="#" class="icon brands fa-medium-m"><span class="label">Medium</span></a></li> */}
                  </ul>
                </nav>
              </header>
            </div>
            <div id="mainClass" className="container-fluid">
              <Router>
                <CartProvider>
                  <Routes>
                    {/* Main component as the default route */}
                    <Route path="/" element={<Main />} />
                    <Route
                      path="/compact"
                      element={
                        <Categorie
                          setEnginDetail={setEnginDetail}
                          listEngin={"compacteur"}
                        />
                      }
                    ></Route>
                    <Route
                      path="/demol"
                      element={
                        <Categorie
                          setEnginDetail={setEnginDetail}
                          listEngin={"demolition"}
                        />
                      }
                    ></Route>
                    <Route
                      path="/lift"
                      element={
                        <Categorie
                          setEnginDetail={setEnginDetail}
                          listEngin={"elevation"}
                        />
                      }
                    ></Route>
                    <Route
                      path="/emailField"
                      element={
                        <EmailField
                          ></EmailField>
                      }
                    ></Route>
                      <Route
                      path="/popup"
                      element={
                        <Popup
                          ></Popup>
                      }
                    ></Route>
                     <Route
                      path="/userInfo"
                      element={
                        <UserInfo
                          ></UserInfo>
                      }
                    ></Route>
                       <Route
                      path="/account"
                      element={
                        <Account
                          ></Account>
                      }
                    ></Route>
                         <Route
                      path="/stateCard"
                      element={
                        <StateCard
                          ></StateCard>
                      }
                    ></Route>
                    <Route
                      path="/passwordField"
                      element={
                        <PswdField
                          ></PswdField>
                      }
                    ></Route>
                      <Route
                      path="/emailverif"
                      element={
                        <VerificationCodeInput
                          ></VerificationCodeInput>
                      }
                    ></Route>
                    <Route
                      path="/SignUpForm"
                      element={
                        <SignupForm
                          ></SignupForm>
                      }
                    ></Route>
                    <Route
                      path="/earth"
                      element={
                        <Categorie
                          setEnginDetail={setEnginDetail}
                          listEngin={"terrassement"}
                        />
                      }
                    ></Route>
                    <Route
                      path="/tranport"
                      element={
                        <Categorie
                          setEnginDetail={setEnginDetail}
                          listEngin={"transport"}
                        />
                      }
                    ></Route>
                    <Route
                      path="/enginDetails"
                      element={
                        <Engin
                          enginDetail2={enginDetail2}
                          enginDetailx={enginDetail}
                        />
                      }
                    ></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route
                      path="/requests"
                      element={<Request request={request} />}
                    ></Route>
                    <Route
                      path="/manager"
                      element={<Manager setRequest={setRequest} />}
                    ></Route>
                  </Routes>
                  <Outlet />
                </CartProvider>
              </Router>
            </div>
            <footer id="idfoot">
              <section>
                <header class="major">
                  <h2>Get in touch</h2>
                </header>
             <p>
EnginTrack empowers individuals and businesses with reliable engine solutions. We're passionate about helping you find the perfect engine for your needs, maximizing performance and efficiency.
</p>
                <ul class="contact">
                  <li class="icon solid fa-envelope">
                    <a href="#">manager@engintrack.com</a>
                  </li>
                  <li class="icon solid fa-phone">(034) 225-897</li>
                  <li class="icon solid fa-home">
                    1234 Fianaransoa Road #8254
                    <br />
                    Tanamabao, TN 02310-0890
                  </li>
                </ul>
              </section>

              <footer id="footer">
                <p class="copyright">
                  &copy; All rights reserved. Services and contributors
                </p>
              </footer>
            </footer>
            <div id="main">
              <div class="inner">
                {/* <div id='navigationLink'>
				<a href="/">Homepage</a> 
				{( currentUrl=="http://localhost:3000/earth"
				||  window.location.href=="http://localhost:3000/compact"
				||  window.location.href=="http://localhost:3000/demol"
				||  window.location.href=="http://localhost:3000/lift"
				|| window.location.href=="http://localhost:3000/tranport"
				||  window.location.href=="http://localhost:3000/enginDetails"
				
				)&&(<a href="/earth"> >  Engins</a>
				
				)}
		</div>     */}
              </div>
            </div>
          </div>

          <div id="sidebar">
            <div class="inner">
              <section id="search" class="alt">
                <form>
                  <input
                    onFocus={() => setShow(true)}
                    ref={inputRef}
                    value={searchValue}
                    onChange={handleChangeValue}
                    type="text"
                    name="query"
                    id="query"
                    placeholder="Engin,categories,...."
                  />

                  {fEngins.length > 0 && show && setShowx && (
                    <ul className="" id="ulSearch">
                      {fEngins.map((engin) => (
                        <a 
                        className=" "
                        style={{ textDecoration: "none" }}
                          id="aSearch"
                          href="/enginDetails"
                          onClick={() => {
                            setShow(false);
                            localStorage.setItem(
                              "enginDetail2",
                              JSON.stringify(engin)
                            );
                          }}
                        >
                          <li className="d-flex ms-3" id="aSearch" key={engin.id}>
                            <img
                            className="img-fluid  align-self-center"
                              id="photoSearch"
                              src={engin.photoEngin}
                              alt=""
                              srcset=""
                            />
                            <span id="spanSearch" className="   align-self-end hover-yellow" style={{ textDecoration: "none" }}>{engin.nomEngin}</span>  <i class=" ms-auto me-3 align-self-end fas fa-arrow-right" aria-hidden="true"></i>
                          </li>
                        </a>
                      ))}
                    </ul>
                  )}
                </form>
              </section>

              {/* <nav id="menu">
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
								</nav> */}

              <nav id="menu">
                <header class="major">
                  <h2>Menu</h2>
                </header>
                <ul>
                  <li>
                    <a className=" text-decoration-none " href="/"><i class="fa fa-home" aria-hidden="true"></i> Homepage</a>
                  </li>
                  <li>
                    <a className=" text-decoration-none " href="/compact"><img id="enter" src="comp.png" alt="" /> Compacting</a>
                  </li>
               
              
                  <li>
                    <a className=" text-decoration-none " href="/demol"><img id="enter" src="dem.png" alt="" /> Demolition</a>
                  </li>
                 
                
                  <li>
                    <a className=" text-decoration-none " href="/lift"><i class="fas fa-truck-loading    "></i> Lift truck</a>
                  </li>
                  <li>
                    <a className=" text-decoration-none " href="/earth"><img id="enter" src="mov.png" alt="" /> Earth moving</a>
                  </li>
                  <li>
                    <a className=" text-decoration-none " href="/tranport"><i class="fas fa-truck-pickup    "></i> Truck</a>
                  </li>
                </ul>
              </nav>
              {/* <section>
                <header class="major">
                  <h2>Ante interdum</h2>
                </header>
                <div class="mini-posts">
                  <article>
                    <a href="#" class="image">
                      <img src="images/pic07.jpg" alt="" />
                    </a>
                    <p>
                      Aenean ornare velit lacus, ac varius enim lorem
                      ullamcorper dolore aliquam.
                    </p>
                  </article>
                  <article>
                    <a href="#" class="image">
                      <img src="images/pic08.jpg" alt="" />
                    </a>

                    <p>
                      Aenean ornare velit lacus, ac varius enim lorem
                      ullamcorper dolore aliquam.
                    </p>
                  </article>
                  <article>
                    <a href="#" class="image">
                      <img src="images/pic09.jpg" alt="" />
                    </a>
                    <p>
                      Aenean ornare velit lacus, ac varius enim lorem
                      ullamcorper dolore aliquam.
                    </p>
                  </article>
                </div>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">
                      More
                    </a>
                  </li>
                </ul>
              </section> */}

              {/* <section>
                <header class="major">
                  <h2>Get in touch</h2>
                </header>
                <p>
                  Sed varius enim lorem ullamcorper dolore aliquam aenean ornare
                  velit lacus, ac varius enim lorem ullamcorper dolore. Proin
                  sed aliquam facilisis ante interdum. Sed nulla amet lorem
                  feugiat tempus aliquam.
                </p>
                <ul class="contact">
                  <li class="icon solid fa-envelope">
                    <a href="#">information@untitled.tld</a>
                  </li>
                  <li class="icon solid fa-phone">(000) 000-0000</li>
                  <li class="icon solid fa-home">
                    1234 Somewhere Road #8254
                    <br />
                    Nashville, TN 00000-0000
                  </li>
                </ul>
              </section> */}

              {/* <footer id="footer">
                <p class="copyright">
                  &copy; Untitled. All rights reserved. Demo Images:{" "}
                  <a href="https://unsplash.com">Unsplash</a>. Design:{" "}
                  <a href="https://html5up.net">HTML5 UP</a>.
                </p>
              </footer> */}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
// /compact
// /demol
// /lift
// /earth
// /tranport
export default App;
