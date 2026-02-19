import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import LoginModal from "./LoginModal";

import { useDevice } from "../context/DeviceContext";
import { FaDesktop, FaMobileAlt } from "react-icons/fa";


export default function Navbar() {

  const { device, setDevice } = useDevice();


  const { cartCount } = useContext(CartContext);
  const [menu, setMenu] = useState("home");

  const { user, logout } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest(".user-menu")) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);


  return (
    <div className='nav-bg'>
      <ul>
        <div style={{ margin: " 0px 0px 0px 30px" }}>
          <li><FontAwesomeIcon icon={faCrown} className="logo" /></li>
          <li className="brand-name">GK </li></div>
        <div className="nav1">
          <li onClick={() => setMenu("home")}><Link to="/" className={menu == "home" ? "active" : ""} id='nav-li'>Home</Link></li>
          <li onClick={() => setMenu("allproducts")}><Link to="/allproducts" className={menu == "allproducts" ? "active" : ""} id='nav-li'>All products</Link></li>
          <li onClick={() => setMenu("men")}><Link to={"/men"} className={menu == "men" ? "active" : ""} id='nav-li'>Men's</Link></li>
          <li onClick={() => setMenu("women")}><Link to={"/women"} className={menu == "women" ? "active" : ""} id='nav-li'>Women's</Link></li>
          <li onClick={() => setMenu("kids")}><Link to={"/kids"} className={menu == "kids" ? "active" : ""} id='nav-li'>Kids</Link></li></div>
        <div className="nav2">          <div className="nav-line">
          <li>|</li>
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
          </li></div>
      </ul>
      <h2>
      </h2>
      {showLogin && <LoginModal close={() => setShowLogin(false)} />}

      {/* <div className="device-switch">
        <FaDesktop
          className={device === "desktop" ? "active" : ""}
          onClick={() => setDevice("desktop")}
        />

        <FaMobileAlt
          className={device === "mobile" ? "active" : ""}
          onClick={() => setDevice("mobile")}
        />
      </div> */}

    </div>

  )
}
