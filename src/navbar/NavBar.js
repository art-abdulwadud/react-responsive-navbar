import React, { Component } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavList from './NavList';

class NavBar extends Component {
	state = {
		open: false
	};
	render() {
		return (
			<header>
				<nav id="navigation">
					<div className="brand-logo float-left">
						<img
							src="https://media.giphy.com/media/kdQfI8PROXIB0NjbgT/giphy.gif"
							alt="logo"
							width="60"
							height="50"
						/>
						Brand Name
					</div>
					<span
						className="toggler float-right mr-2"
						onClick={() => this.setState({ open: !this.state.open })}
					>
						<GiHamburgerMenu />
					</span>
					<NavList open={this.state.open} />
				</nav>
			</header>
		);
	}
}

export default NavBar;
