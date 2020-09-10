import React, { Component } from 'react';

class MobileHeader extends Component {
	state = {};
	render() {
		return (
			<header className="mobile-header">
				<div className="container">
					<div className="menu-icon d-inline-flex mr-4">
						<button>
							<i class="fas fa-bars" />
						</button>
					</div>
					<div className="site-logo">
						<h1>
							Kelvin<span className="logo-dot">.</span>
						</h1>
					</div>
				</div>
			</header>
		);
	}
}

export default MobileHeader;
