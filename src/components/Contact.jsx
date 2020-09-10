import React, { Component } from 'react';

class Contact extends Component {
	state = {};
	render() {
		return (
			<section id="contact">
				<div className="container">
					<div className="contact-info">
						<h1>Get In Touch</h1>

						<div className="spacer" data-height="70" />

						<div className="row">
							<div className="col-md-4">
								<div className="contact-description">
									<h3>Let's talk about everything!</h3>
									<p>
										Don't like forms? Send me an{' '}
										<a href="mailto:kelvinchuafoolong@gmail.com">email</a>.
									</p>
								</div>
							</div>

							<div className="col-md-8">
								<form
									id="contact-form"
									className="contact-form"
									method="POST"
									action=""
									novalidate="true"
								>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													name="InputName"
													id="InputName"
													placeholder="Your name"
													required="required"
													data-error="Name is required."
												/>
											</div>
										</div>

										<div className="col-md-6">
											<div className="form-group">
												<input
													type="email"
													className="form-control"
													name="InputEmail"
													id="InputEmail"
													placeholder="Email address"
													required="required"
													data-error="Email is required."
												/>
											</div>
										</div>

										<div className="col-md-12">
											<div className="form-group">
												<input
													type="text"
													className="form-control"
													name="InputSubject"
													id="InputSubject"
													placeholder="Subject"
													required="required"
													data-error="Subject is required."
												/>
											</div>
										</div>

										<div className="col-md-12">
											<div className="form-group">
												<textarea
													className="form-control"
													rows="5"
													name="InputMessage"
													id="InputMessage"
													placeholder="Message"
													required="required"
													data-error="Message is required."
												/>
											</div>
										</div>
									</div>
									<button
										type="submit"
										name="submit"
										id="submit"
										value="Submit"
										className="btn btn-default"
									>
										Send Message
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Contact;
