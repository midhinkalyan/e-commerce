import "./index.css";
import {Link, link} from "react-router-dom";
const Header =()=>{
      return(
    <div className="main">
   <div className="heade">
       <img className="first" src="\breezelogo_prev_ui.png" alt="image"  />
       <ul className="nav_clas">
       <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/aout">About</Link>
      </li>
      <li>
        <Link to="/404error">contact</Link>
      </li>
       </ul>
       </div>
       </div>
    )
  }
 
  export default Header;
 