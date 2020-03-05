import React, { Component } from 'react';

class NavList extends Component {
	render() {
		return (
			<div className={this.props.open ? 'nav-small float-right' : 'nav float-right'}>
				<ul className="l-navlist mt-2 mr-2">
					<li className="l-navitem">
						<a href="/" className="l-navlink">
							Home
						</a>
					</li>
					<li className="l-navitem">
						<a href="/" className="l-navlink">
							Sevices
						</a>
					</li>
					<li className="l-navitem">
						<a href="/" className="l-navlink">
							About
						</a>
					</li>
					<li className="l-navitem">
						<a href="/" className="l-navlink">
							Contact
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavList;
