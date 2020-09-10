import React, { Component } from 'react';

class Experience extends Component {
	state = {};
	render() {
		return (
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
											Malaysia. Participated in the NASA Space Apps Challenge. Made the Dean's
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
											Volunteered to shadow and work alongside the digital team at AXIS eCommerce.
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
		);
	}
}

export default Experience;
