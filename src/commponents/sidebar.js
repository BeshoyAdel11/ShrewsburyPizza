import "../CssFile/sidebar.css";
import personeImage from "../images/sidebar-Images/personeImage.png";
import home from "../images/sidebar-Images/Home.svg";
import MyCart from "../images/sidebar-Images/My Cart.svg";
import Menu from "../images/sidebar-Images/Menu.svg";
import GiftCard from "../images/sidebar-Images/Gift Card.svg";
import ContactUs from "../images/sidebar-Images/Contact Us.svg";
import Logout from "../images/sidebar-Images/Logout.svg";
import newPiza from "../images/sidebar-Images/newPizaa.svg";
import calzone from "../images/sidebar-Images/calzone.svg";
import other from "../images/sidebar-Images/other.svg";
import back from "../images/sidebar-Images/back.png";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const [isOpen, setIsopen] = useState(false);
  const handleOpen = () => setIsopen(!isOpen);
  const isPhone = useMediaQuery("(max-width: 600px)");

  return (
    <>
      {isPhone && (
        <div className="sidebar">
          {/*
<div className='login' onClick={props.handleOpen}>
  <img  src={personeImage}></img>
  <p>Andrew Raafat <br/> <span>andro@gmail.com</span> </p>
</div>
   */}

          <div className="back">
            <img src={back} onClick={props.handleOpen}></img>
          </div>

          <div className="info-list">
            <ul className="sidebar-list">
              <li>
                <Link to="/">
                  <img src={home}></img> Home
                </Link>
              </li>
              <li>
                <Link to="/myprofile">
                  <img src={MyCart}></img> My Cart
                </Link>
              </li>
              <li className={isOpen ? "menue" : ""} onClick={handleOpen}>
                <Link to="/menu">
                  <img src={Menu}></img> Menu{" "}
                </Link>
                <i class="fa-solid fa-chevron-down"></i>
                {isOpen && (
                  <ul className="menue-list">
                    <li>
                      <img src={newPiza}></img> Pizza
                    </li>
                    <li>
                      {" "}
                      <img src={calzone}></img>Calzone
                    </li>
                    <li>
                      <img src={other}></img> Other
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/gift">
                  <img src={GiftCard}></img> Gift Card
                </Link>
              </li>
              {/*<li><img src={ContactUs}></img> Contact Us</li>*/}
              {/*<li><img src={Logout}></img> Logout</li>*/}
            </ul>
            <button className="login">
              <Link to="/MyProfile">Login</Link>
            </button>
            <button className="contactUs">Contact Us</button>
          </div>
        </div>
      )}
    </>
  );
}
export default Sidebar;
