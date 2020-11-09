import React from 'react';
import Logo from "./Logo";

class Header extends React.Component {

	render() {
		return (
			<footer>
				<div className="container">
					<div className="footer_inside">
						<div className="copyright">
							<Logo />
							<div className="year">© 2019</div>
						</div>
						<div className="contacts">
							<p>Kolkata</p>
							<p>West Bengal, 700122</p>
							<p>9804019155</p>
							<p>pramanik.85849@gmail.com</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Header;
