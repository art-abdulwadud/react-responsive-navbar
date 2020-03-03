import React, { Component } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import LargeNav from './LargeNav';

class NavBar extends Component {
	render() {
		return (
			<header>
				<nav id="navigation">
					<div className="brand-logo float-left">
						<img
							src="https://media.giphy.com/media/kdQfI8PROXIB0NjbgT/giphy.gif"
							alt=""
							width="60"
							height="50"
						/>
						Brand Name
					</div>
					<span className="toggler float-right mr-2 d-none">
						<GiHamburgerMenu />
					</span>
					<LargeNav />
				</nav>
			</header>
		);
	}
}

export default NavBar;
