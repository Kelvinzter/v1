import React, { Component } from 'react';

class Projects extends Component {
	state = {};
	render() {
		return (
			<section id="projects">
				<div className="container">
					<div className="projects-info">
						<h1>Projects</h1>

						<div className="spacer" data-height="70" />

						<div className="row">
							<div className="col-md-6">
								<div className="card">
									<img className="card-img-top" src="img/warstrike.png" alt="Card image" />
									<div className="card-body">
										<h4 className="card-title">Warstrike</h4>
										<p className="card-text">
											A 2D turn-based artillery game made using Java and the Slick2D game library.
											This game was made as part of my team project during the second year of my
											degree.
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
											A student social network that emphasizes on collaborative learning through
											the use of structured discussion forums. Developed using a combination of
											the Boostrap web development framework for the front-end and PHP for the
											back-end.
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
		);
	}
}

export default Projects;
