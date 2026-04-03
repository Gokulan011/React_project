import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import LoginModal from "./LoginModal";
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { useDevice } from "../context/DeviceContext";


export default function Navbar() {

  const { device, setDevice } = useDevice();

  const { cartCount } = useContext(CartContext);
  const location = useLocation();

  const { user, logout, deleteAccount } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='nav-bg'>
      <ul>
        <div style={{ margin: " 0px 0px 0px 30px" }}>
          <li><FontAwesomeIcon icon={faCrown} className="logo" /></li>
          <li className="brand-name">GK </li></div>
        <div className="nav1">
          <li ><Link to="/" className={location.pathname === "/" ? "active" : ""} id='nav-li'>Home</Link></li>
          <li ><Link to="/allproducts" className={location.pathname === "/allproducts" ? "active" : ""} id='nav-li'>All products</Link></li>
          <li><Link to={"/men"} className={location.pathname === "/men" ? "active" : ""} id='nav-li'>Men's</Link></li>
          <li ><Link to={"/women"} className={location.pathname === "/women" ? "active" : ""} id='nav-li'>Women's</Link></li>
          <li ><Link to={"/kids"} className={location.pathname === "/kids" ? "active" : ""} id='nav-li'>Kids</Link></li></div>
        <div className="nav2">
          <div className="nav-line">|
          </div>
          <li className="user-area">
            {!user ? (
              <button className="nav-li2" onClick={() => setShowLogin(true)}>
                <FontAwesomeIcon icon={faCircleUser} /> Login
              </button>
            ) : (
              <div className="user-menu">
                <span
                  className="nav-li2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMenu(prev => !prev);
                  }}
                >
                  <FontAwesomeIcon icon={faCircleUser} /> {user.username}
                </span>


                {showMenu && (
                  <div className="logout-dropdown">
                    <button className="logout-btn" onClick={logout}>Logout</button>

                    <button className="logout-btn" onClick={deleteAccount} style={{ color: "white", marginTop: "5px" }}>
                      Delete Account
                    </button>
                  </div>
                )}
              </div>
            )}
          </li>
          <li>
            <Link to="/cart" className="nav-li2">
              <FontAwesomeIcon icon={faCartShopping} />
              Cart ({cartCount})
            </Link>
          </li>
        </div>
        <li><div class="offcanvas offcanvas-end" id="demo">
            <div class="offcanvas-header">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
              <p><Link to="/" className={location.pathname === "/" ? "active" : ""} id='offcanvas-menu'>Home</Link></p>
              <p><Link to="/allproducts" className={location.pathname === "/allproducts" ? "active" : ""} id='offcanvas-menu'>All products</Link></p>
              <p><Link to={"/men"} className={location.pathname === "/men" ? "active" : ""} id='offcanvas-menu'>Men's</Link></p>
              <p><Link to={"/women"} className={location.pathname === "/women" ? "active" : ""} id='offcanvas-menu'>Women's</Link></p>
              <p><Link to={"/kids"} className={location.pathname === "/kids" ? "active" : ""} id='offcanvas-menu'>Kids</Link></p>
            </div>
          </div>

            <div class="container-fluid mt-3">
              <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo" id="offcanvas-btn">
                <FontAwesomeIcon icon={faBars} /></button>
            </div></li>
      </ul>
      {showLogin && <LoginModal close={() => setShowLogin(false)} />}
    </div>

  )
}
