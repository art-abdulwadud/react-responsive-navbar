import React, { Component } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

class NavBar extends Component {
	render() {
		return (
			<header>
				<nav>
					<div className="brand-logo float-left">
						<img src={this.props.logo} alt="" width="60" height="50" />
						Brand Name
					</div>
					<span className="toggler float-right">
						<GiHamburgerMenu />
					</span>
				</nav>
			</header>
		);
	}
}

export default NavBar;
