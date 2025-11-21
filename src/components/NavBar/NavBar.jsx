import logo from "../../assets/img/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (

    <nav className="navbar">
      <Link to="/"><img className="logo" src={logo} alt="" /></Link>


      <ul className="categories">
        <li><Link to="/category/rifle" className="category" >rifle</Link></li>
        <li><Link to="/category/pistola" className="category" >pistola</Link></li>
        <li><Link to="/category/cuchillo" className="category" >cuchillo</Link></li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar