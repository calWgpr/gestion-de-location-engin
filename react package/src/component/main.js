import { Link } from "react-router-dom";
function Main() {
  return (
    <div className="main">
      
      <div id="navigationLink">
      </div>
      {/* <header id="header">
									<a href="index.html" class="logo"><img id='logo' src="logo.png" alt="" srcset="" /></a>
									<ul class="icons">
                                       <li className="liIcons">
                                               <img className="icons" src="accountIcon.png" alt="" srcset="" /><br />
                                        <strong>My account</strong>
                                       </li>
                                       <li className="liIcons">
                                            <img className="icons" src="shopIcon.png" alt="" srcset="" /><br />
                                        <strong>My cart</strong>
                                       </li>
										{/* <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
										<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
										<li><a href="#" class="icon brands fa-snapchat-ghost"><span class="label">Snapchat</span></a></li>
										<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
										<li><a href="#" class="icon brands fa-medium-m"><span class="label">Medium</span></a></li> */}
      {/* </ul>
								</header> */}
      <section id="banner">
        <div class="content">
          <header>
            <h1>
              Welcome
              <br />
              to EnginTrac
            </h1>
            <p>Your construction Engin Rental Marketplace</p>
          </header>
          <p>
            EnginTrac is your premier online platform for construction equipment
            rentals, designed to empower contractors of all sizes to tackle any
            project with confidence. We understand the critical role that having
            the right equipment at the right time plays in ensuring project
            success. That's why we offer a comprehensive selection of
            top-quality construction machinery, meticulously maintained and
            readily available to meet your specific needs.
          </p>
          <ul class="actions">
            <li>
              <a href="#" class="button big">
                Learn More
              </a>
            </li>
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
              <p>
                EnginTrac boasts a comprehensive inventory encompassing a vast
                array of construction equipment. We have the right equipment to
                bring your vision to life. Our extensive selection ensures you
                can find the perfect solution for any construction job,
                eliminating the need to search through multiple vendors.
              </p>
            </div>
          </article>
          <article>
            <span class="icon solid fa-paper-plane"></span>
            <div class="content">
              <h3>Seamless Rentals: Streamline Your Project Workflow</h3>
              <p>
                EnginTrac is committed to streamlining your construction project
                workflow. Our user-friendly online platform allows you to browse
                our extensive equipment catalog, compare specifications, and
                secure your rental reservation in a matter of minutes. Your
                satisfaction is our top priority{" "}
              </p>
            </div>
          </article>
          <article>
            <span class="icon solid fa-rocket"></span>
            <div class="content">
              <h3>
                Confidence in Every Rental: Top-Tier Equipment, Maintained for
                Performance
              </h3>
              <p>
                At EnginTrac, your project's success and operator safety are our
                top priorities. Our commitment to quality is reflected in our
                meticulously maintained fleet of equipment. Each machine
                undergoes rigorous inspections and maintenance schedules to
                guarantee optimal performance and reliability on your project
                site.{" "}
              </p>
            </div>
          </article>
          <article>
            <span class="icon solid fa-signal"></span>
            <div class="content">
              <h3>Expert Support: Your Partner in Every Project</h3>
              <p>
                EnginTrac doesn't simply offer equipment rentals; we provide a
                comprehensive support system to ensure your project runs
                smoothly. Our dedicated customer service team is comprised of
                construction industry experts readily available to answer your
                questions and guide you through the rental process.{" "}
              </p>
            </div>
          </article>
        </div>
      </section>
      <section>
        <header class="major">
          <h2>Engin categories</h2>
        </header>
        <div class="posts">
          <article className="articleMain">
            <Link to="/x" class="image">
              <img className="imgCategorie" src="compacCategorie.jpg" alt="" />
            </Link>
            <h3>Compacting Machine</h3>
<p>
  The compacting machine efficiently reduces the thickness and stabilizes the dimensional properties of knitted fabrics. This process, also known as calendering, ensures consistent fabric behavior and prevents unwanted shrinkage during washing or wear. 
</p>

            <ul class="actions">
              <li>
                <Link  to="/compact" class="button">
                  Explore
                </Link>
              </li>
            </ul>
          </article>
          <article className="articleMain">
            <a href="#" class="image">
              <img className="imgCategorie" src="comp.jpg" alt="" />
            </a>
           <h3>Demolition Equipment</h3>
<p>Demolition projects require the right equipment to ensure safety, efficiency, and successful completion. Our comprehensive selection of demolition tools and machinery caters to projects of all sizes and complexities. From powerful excavators to precise concrete breakers, we have everything you need to get the job done right.</p>

            <ul class="actions">
              <li>
                <Link to="/demol" class="button">
                  Explore
                </Link>
              </li>
            </ul>
          </article>
          <article className="articleMain">
            <a href="#" class="image">
              <img className="imgCategorie" src="nacelle.jpg" alt="" />
            </a>
           <h3>Lift Trucks</h3>

<p>Lift trucks, also known as forklifts or industrial trucks, are versatile workhorses that streamline material handling operations in warehouses and distribution centers. These powerful machines efficiently lift, transport, and stack heavy loads, improving productivity and worker safety. We offer a wide range of lift trucks to meet your specific needs, from compact electric models for indoor use to heavy-duty machines capable of handling massive loads outdoors.</p>

            <ul class="actions">
              <li>
                <Link to="/lift" class="button">
                  Explore
                </Link>
              </li>
            </ul>
          </article>
          <article className="articleMain">
            <a href="#" class="image">
              <img className="imgCategorie" src="charg.jpg" alt="" />
            </a>
            <h3>Earthmoving machinery</h3>
            <p>
             Earthmoving machinery forms the backbone of any construction project. Whether you're tackling a small landscaping project or a large-scale infrastructure development, we offer a comprehensive selection of earthmoving equipment to meet your needs.

            </p>
            <ul class="actions">
              <li>
                <Link to="/earth" class="button">
                  Explore
                </Link>
              </li>
            </ul>
          </article>
          <article className="articleMain">
            <a href="#" class="image">
              <img className="imgCategorie" src="dump.jpg" alt="" />
            </a>
            <h3>Transporation truck</h3>
            <p>
              Transportation trucks are the workhorses of the global economy, ensuring the seamless movement of goods across vast distances. Whether you require transporting delicate electronics or temperature-controlled perishables, there's a transportation truck perfectly suited for the job.
            </p>
            <ul class="actions">
              <li>
                <Link to="/tranport" class="button">
                  Explore
                </Link>
              </li>
            </ul>
          </article>
          {/* <article>
                                                <a href="#" class="image"><img src="images/pic06.jpg" alt="" /></a>
                                                <h3>Amet varius aliquam</h3>
                                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                                                <ul class="actions">
                                                    <li><a href="#" class="button">More</a></li>
                                                </ul>
                                            </article> */}
        </div>
      </section>
      {/* <div id="sidebar">
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
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
  );
}

export default Main;
