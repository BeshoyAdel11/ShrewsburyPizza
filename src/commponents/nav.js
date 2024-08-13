import "../CssFile/nav.css";
import logo1 from "../images/nav-Images/logo1.svg";
import madi_cart from "../images/nav-Images/mdi_cart.svg";
import group from "../images/nav-Images/group.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./sidebar";
function Nav() {
  const [isOpen, setIsopen] = useState(false);

  const handleOpen = () => setIsopen(!isOpen);
  return (
    <>
      {isOpen && <Sidebar handleOpen={handleOpen} />}

      <div className="Hero">
        <section className="about">
          <img src={logo1}></img>
          <ul className="nav-list">
            <li>
              <Link to="/" className="home">
                Home
              </Link>
            </li>
            <li className="menus">
              <Link to="/menu">Menu</Link>
              <ul className="menu-list">
                <li>Pizza</li>
                <li>Calzone</li>
                <li>Other</li>
              </ul>
            </li>
            <li>
              <Link to="/myCart">Build Pizza </Link>
            </li>
            <li>
              <Link to="/gift"> Gift Card </Link>
            </li>
            <li>
              <a>Contact Us </a>
            </li>
          </ul>
        </section>
        <section className="login">
          <ul>
            <li>
              <img src={madi_cart} className="madi_cart"></img>
            </li>
            <li>
              <button>
                <Link to="/MyProfile">login</Link>
              </button>
            </li>
          </ul>
        </section>

        <div className="group" onClick={handleOpen}>
          {" "}
          <img src={group}></img>{" "}
        </div>
      </div>
    </>
  );
}
export default Nav;
