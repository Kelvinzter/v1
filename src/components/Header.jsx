import React, { Component } from 'react';

class Header extends Component {
	state = {};
	render() {
		return (
			<header className="desktop-header">
				<div className="logo">
					<h1>
						Kelvin<span className="logo-dot">.</span>
					</h1>
				</div>

				<nav>
					<ul className="vertical-menu">
						<li className="active">
							<a href="#home" className="nav-link active">
								<i className="fas fa-fw fa-home" />Home
							</a>
						</li>
						<li>
							<a href="#about" className="nav-link">
								<i className="fas fa-fw  fa-user" />About
							</a>
						</li>
						<li>
							<a href="#experience" className="nav-link">
								<i className="fas fa-fw  fa-graduation-cap" />Experience
							</a>
						</li>
						<li>
							<a href="#projects" className="nav-link">
								<i className="fas fa-fw  fa-layer-group" />Projects
							</a>
						</li>
						<li>
							<a href="#contact" className="nav-link">
								<i className="fas fa-fw  fa-comments" />Contact
							</a>
						</li>
					</ul>
				</nav>

				<div className="footer">
					<span>© 2020 Kelvin Chua</span>
				</div>
			</header>
		);
	}
}

export default Header;
