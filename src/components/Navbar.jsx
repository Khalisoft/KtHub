import "./../styles/navbar.css";
import LogoImage from "./../assets/images/logo.png";
import { FiMenu, FiBluetooth } from "react-icons/fi";
const Navbar = () => {
	return (
		<div className="parent">
			<div>
				<img src={LogoImage} alt="Logo" className="logo" />
				<FiMenu color="#044f04" size={32}/>
			</div>
		</div>
	);
};

export default Navbar;
