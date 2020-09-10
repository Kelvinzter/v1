import React, { Component } from 'react';

class Main extends Component {
	state = {};
	render() {
		return (
			<main className="content">
				<section id="home">
					<div className="container">
						<div className="intro">
							<div className="intro-text">
								<img src="img/profilepic.jpg" alt="Kelvin" className="profilepic fade-in" />

								<h1 className="intro-title fade-in">Kelvin Chua</h1>

								<h3 className="fade-in">Software Developer</h3>

								<ul className="social fade-in">
									<li>
										<a href="https://facebook.com/kelvinzter" target="_blank">
											<i className="fab fa-facebook" />
										</a>
									</li>
									<li>
										<a href="https://twitter.com/Kelvinzter" target="_blank">
											<i className="fab fa-twitter" />
										</a>
									</li>
									<li>
										<a href="https://instagram.com/kelvinzter" target="_blank">
											<i className="fab fa-instagram" />
										</a>
									</li>

									<li>
										<a href="https://linkedin.com/in/kelvinchuafoolong" target="_blank">
											<i className="fab fa-linkedin" />
										</a>
									</li>

									<li>
										<a href="https://github.com/Kelvinzter" target="_blank">
											<i className="fab fa-github" />
										</a>
									</li>

									<li>
										<a href="https://kelvinchuafoolong.wixsite.com/portfolio" target="_blank">
											<i className="fas fa-globe" />
										</a>
									</li>
								</ul>

								<div className="contact fade-in">
									<a href="#contact" className="btn btn-default">
										Contact Me
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="about">
					<div className="container">
						<div className="about-info">
							<h1>About Me</h1>

							<div className="spacer" data-height="70" />

							<div className="row">
								<div className="col-md-3">
									<div className="text-center text-md-left">
										<img src="img/profilepic.jpg" alt="Kelvin" className="profilepic" />
									</div>

									<div className="spacer d-md-none d-lg-none" data-height="30" />
								</div>

								<div className="col-md-9">
									<div className="info-box">
										<div className="row">
											<div className="col-md-6">
												<p>
													Hello there! I'm Kelvin Chua, a software developer from Kuala
													Lumpur, Malaysia. I have a passion in application development, human
													computer interaction and UI/UX design. I have experience with
													website creators such as WiX. My side hobbies include singing,
													video-editing, playing games, keeping up-to-date with the latest
													technological trends and devices as well as working on personal
													projects.
												</p>

												<a
													href="../res/KelvinChuaFooLongResume.pdf"
													className="btn btn-default"
													target="_blank"
												>
													Download CV
												</a>
												<div className="spacer d-md-none d-lg-none" data-height="30" />
											</div>

											<div className="col-md-6">
												<div className="tech">
													<p>Here are a few technologies I am familiar with:</p>

													<div className="row">
														<div className="col-md-6">
															<ul className="fa-ul">
																<li>
																	<p>
																		<i class="fa-li fas fa-caret-right" />HTML & CSS
																	</p>
																</li>

																<li>
																	<p>
																		<i class="fa-li fas fa-caret-right" />JavaScript
																	</p>
																</li>

																<li>
																	<p>
																		<i class="fa-li fas fa-caret-right" />Bootstrap
																	</p>
																</li>

																<li>
																	<p>
																		<i class="fa-li fas fa-caret-right" />React
																	</p>
																</li>

																<li>
																	<p>
																		<i class="fa-li fas fa-caret-right" />PHP
																	</p>
																</li>

																<li>
																	<p>
																		<i class="fa-li fas fa-caret-right" />MySQL
																	</p>
																</li>
															</ul>
														</div>

														<div className="col-md-6">
															<ul className="fa-ul">
																<li>
																	<p>
																		<i class="fa-li fas fa-caret-right" />Python
																	</p>
																</li>

																<li>
																	<p>
																		<i class="fa-li fas fa-caret-right" />C
																	</p>
																</li>

																<li>
																	<p>
																		<i class="fa-li fas fa-caret-right" />Java
																	</p>
																</li>

																<li>
																	<p>
																		<i class="fa-li fas fa-caret-right" />Android
																		Studio
																	</p>
																</li>

																<li>
																	<p>
																		<i class="fa-li fas fa-caret-right" />Xcode
																	</p>
																</li>

																<li>
																	<p>
																		<i class="fa-li fas fa-caret-right" />Final Cut
																		Pro
																	</p>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="experience">
					<div className="container">
						<div className="experience-info">
							<h1>Experience</h1>

							<div className="spacer" data-height="70" />

							<div className="row">
								<div className="col-md-6">
									<div className="info-box">
										<div className="experience-content">
											<span className="time">October 2018 - July 2020</span>
											<h1>Bachelor of Computer Science with Honours</h1>
											<p>Class II Division I, CGPA: 3.25</p>
											<p>University of Birmingham, United Kingdom</p>
											<br />
											<p>Completed my second and final years at the University of Birmingham.</p>
										</div>

										<div className="experience-content">
											<span className="time">August 2017 - July 2018</span>
											<h1>Bachelor of Computer Science with Honours</h1>
											<p>CGPA: 3.83</p>
											<p>Taylor's University, Malaysia</p>
											<br />
											<p>
												Completed my first year of Computer Science at Taylor's University in
												Malaysia. Participated in the NASA Space Apps Challenge. I was team
												leader for the majority of assignments and projects. Made the Dean's
												list every semester.
											</p>
										</div>
									</div>
									<div className="spacer d-md-none d-lg-none" data-height="30" />
								</div>

								<div className="col-md-6">
									<div className="info-box">
										<div className="experience-content">
											<span className="time">June 2019</span>
											<h1>Digital Team Shadow</h1>
											<p>Axis eCommerce</p>
											<p>Kuala Lumpur, Malaysia</p>
											<br />
											<p>
												Volunteered to shadow and work alongside the digital team at AXIS
												eCommerce. I assisted with the creation and completion of various HTML
												web pages for the company's clients.
											</p>
										</div>

										<div className="experience-content">
											<span className="time">April 2017</span>
											<h1>Participant</h1>
											<p>NASA Space Apps Challenge</p>
											<p>Kuala Lumpur, Malaysia</p>
											<br />
											<p>
												Led a team of 3 people to develop an app on the theme of Eco at NASA's
												annual global hackathon. Used a prototyping software called Proto.io to
												develop the app.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="projects">
					<div className="container">
						<div className="projects-info">
							<h1>Projects</h1>

							<div className="spacer" data-height="70" />

							<div className="row">
								<div className="col-md-6">
									<div className="card">
										<img className="card-img-top" src="img/warstrike.PNG" alt="Card image" />
										<div className="card-body">
											<h4 className="card-title">Warstrike</h4>
											<p className="card-text">
												A 2D turn-based artillery game made using Java and the Slick2D game
												library. This game was made as part of my team project during the second
												year of my degree. I was mainly responsible for developing the UI and
												graphics of the game.
											</p>
											<a
												href="https://github.com/Kelvinzter/Wipeout"
												className="btn btn-default"
												target="_blank"
											>
												Github
											</a>

											<a href="../res/Warstrike.pdf" className="btn btn-default" target="_blank">
												Report
											</a>
										</div>
									</div>
									<div className="spacer d-md-none d-lg-none" data-height="30" />
								</div>

								<div className="col-md-6">
									<div className="card">
										<img className="card-img-top" src="img/SSN.png" alt="Card image" />
										<div className="card-body">
											<h4 className="card-title">Student Social Network</h4>
											<p className="card-text">
												A student social network that emphasizes on collaborative learning
												through the use of structured discussion forums. Developed using a
												combination of the Boostrap web development framework for the front-end
												and PHP for the back-end.
											</p>
											<a
												href="https://github.com/Kelvinzter/StudentSocialNetwork"
												className="btn btn-default"
												target="_blank"
											>
												Github
											</a>

											<a href="../res/FYP.pdf" className="btn btn-default" target="_blank">
												Report
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="contact">
					<div className="container">
						<div className="contact-info">
							<h1>Get In Touch</h1>

							<div className="spacer" data-height="70" />

							<div className="contact-description">
								<p>
									Although I'm not currently open to opportunites, my inbox is always open. Feel free
									to drop me an email if you have a question or if you simply want to say hi. I'll try
									my best to get back to you!
								</p>
								<a href="mailto:kelvinchuafoolong@gmail.com" className="btn btn-default">
									Get In Touch
								</a>
							</div>
						</div>
					</div>
				</section>

				<section id="spacer">
					<div className="spacer" data-height="70" />
				</section>
			</main>
		);
	}
}

export default Main;
