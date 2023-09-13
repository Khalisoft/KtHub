import "./../styles/Navbar.css";
import LogoImage from "./../assets/images/logo.png";

const Navbar = () => {
	return (
		<div className="parent">
			<div>
				<img src={LogoImage} alt="Logo" className="logo" />
				<p>Menu</p>
			</div>
		</div>
	);
};

export default Navbar;
