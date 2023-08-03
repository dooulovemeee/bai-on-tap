import { NavLink } from "react-router-dom";
import '../../src/assets/styles/header.css'

export default function Header () {
    const navItem = {
        TextDecoderation: 'none',
        color: ' #000',
        

    };
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-item" to='/trang-chu' >Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-item"  to='/todo' >Todo</NavLink>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
    )
};