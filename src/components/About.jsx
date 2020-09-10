import React, { Component } from 'react';

class About extends Component {
	state = {};
	render() {
		return (
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
												I'm Kelvin Chua, a software developer from Kuala Lumpur, Malaysia. I
												have a passion in application development, human computer interaction
												and UI/UX design. I have experience with website creators such as WiX
												and WordPress. My side hobbies include singing, video-editing, playing
												games, keeping up-to-date with the latest technological trends and
												devices as well as working on personal projects.
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
																	<i class="fa-li fas fa-caret-right" />Android Studio
																</p>
															</li>

															<li>
																<p>
																	<i class="fa-li fas fa-caret-right" />Xcode
																</p>
															</li>

															<li>
																<p>
																	<i class="fa-li fas fa-caret-right" />Final Cut Pro
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
		);
	}
}

export default About;
