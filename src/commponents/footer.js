import "../CssFile/Footer.css";
import logo1 from "../images/footer-Images/logo1.svg";
import phone from "../images/footer-Images/phone.svg";
import fmarker from "../images/footer-Images/fmarker.svg";
import enelope from "../images/footer-Images/envelope.svg";
import instagram from "../images/footer-Images/brands-instagram.svg";
import twitter from "../images/footer-Images/brands-twitter.svg";
import youtube from "../images/footer-Images/brands-youtube.svg";
import facebook from "../images/footer-Images/facebook.svg";
import pay from "../images/footer-Images/pay.svg";
import discover from "../images/footer-Images/discover.svg";
import paypal from "../images/footer-Images/paypal.svg";
import mastercard from "../images/footer-Images/mastercard.svg";
import visa from "../images/footer-Images/visa.svg";
import usa from "../images/footer-Images/amiracen.svg";

function Footer() {
  return (
    <>
      <footer>
        <img src={logo1} className="footer-logo"></img>
        <div className="footer-division">
          <section className="footer-section-one">
            <ul>
              <li>
                <img src={fmarker}></img>
                <p>
                  424 Hartford Turnpike, <br /> Shrewsbury, MA 01545{" "}
                </p>
              </li>
              <li>
                <img src={enelope}></img>
                <p>Info@Shrewsburyhousepizza.com</p>
              </li>
              <li>
                <img src={phone}></img> <p>5087198285 - 5087198285 </p>
              </li>
            </ul>
          </section>
          <section className="footer-section-tow">
            <ul>
              <li>Quick links</li>
              <li>Home</li>
              <li>Menu</li>
              <li>Gift Card</li>
              <li>Contact Us</li>
            </ul>
          </section>
          <section className="footer-section-three">
            <ul>
              <li>Opening hours</li>
              <li>
                Monday - Saturday: <span> 10AM - 9 PM</span>
              </li>
              <li>
                Sunday :<span> Closed</span>
              </li>
              <li>
                <img src={facebook}></img>
                <img src={twitter}></img>
                <img src={instagram}></img>
                <img src={youtube}></img>
              </li>
            </ul>
          </section>
        </div>
        <section className="footer-section-four">
          <ul>
            <li>
              <span>©2024 </span> Shrewsbury House of Pizza{" "}
              <span>All rights reserved</span>
            </li>
            <li>
              <img src={pay}></img>
              <img src={discover}></img>
              <img src={paypal}></img>
              <img src={mastercard}></img>
              <img src={visa}></img>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}
export default Footer;
