import "./index.css";
import { Link } from "react-router-dom";
const Header =()=>{
    return (
        <div className="header-div">
            <img  className="logo_image"src="/logo2.png" alt="logo"/>
            <input type="search" placeholder="search"/>
            <Link to="/home"><h1>Home</h1></Link>
            <Link to="/cart"><h1>Cart</h1></Link>
            <Link to="/contact"><h1>Contact</h1></Link>
        </div>
    )
}
export default Header;