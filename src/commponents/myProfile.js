import "../CssFile/myprofile.css";
import imageUpdate from "../images/myProfile-Images/imageUpdate.svg";
import userImage from "../images/myProfile-Images/userImage.svg";
import slicepizza from "../images/myProfile-Images/slice-pizza.png";

import { useState } from "react";
import Nav from "./nav";
import Footer from "./footer";

function MyProfile() {
  const [show, setShow] = useState(true);
  const showMore = () => {
    setShow(true);
    setshowWishlist(false);
    setRecentOrders(false);
    setAddress(false);
  };

  const [showWishlist, setshowWishlist] = useState(false);
  const ShowWishlist = () => {
    setshowWishlist(true);
    setShow(false);
    setRecentOrders(false);
    setAddress(false);
  };

  const [recentOrders, setRecentOrders] = useState(false);
  const RecentOrders = () => {
    setRecentOrders(true);
    setshowWishlist(false);
    setShow(false);
    setAddress(false);
  };

  const [address, setAddress] = useState(false);
  const Address = () => {
    setAddress(true);
    setshowWishlist(false);
    setShow(false);
    setRecentOrders(false);
  };

  return (
    <>
      <div className="myprofile">
        <Nav />
        <h2>My Profile</h2>
        <div className="profile-division-one">
          <div className="profile-user">
            <div className="images">
              <img src={userImage}></img>
              <img src={imageUpdate}></img>
            </div>
            <h3>Andrew Raafat</h3>
            <p>androraafat@gmail.com</p>
          </div>
          <div className="profile-info">
            <ul>
              <li onClick={showMore} className={show ? "active" : " "}>
                <i class="fa-solid fa-user"></i>Personal Information
              </li>
              <li
                onClick={ShowWishlist}
                className={showWishlist ? "active" : " "}
              >
                <i class="fa-solid fa-heart"></i>Wishlist
              </li>
              <li
                onClick={RecentOrders}
                className={recentOrders ? "active" : " "}
              >
                <i class="fa-solid fa-bag-shopping"></i>Recent Orders
              </li>
              <li onClick={Address} className={address ? "active" : " "}>
                <i class="fa-solid fa-location-dot"></i>Address
              </li>
              <li>
                <i class="fa-solid fa-cart-shopping"></i>Cart
              </li>
            </ul>
          </div>
        </div>

        {show && (
          <div className="profile-division-tow">
            <h3>Personal Information</h3>
            <div className="line"></div>

            <div className="name-info">
              <label for="name ">Name</label>
              <input type="text" id="name"></input>
            </div>
            <div className="Birthday-info">
              <label for="Birthday">Birthday</label>
              <input type="date" id="Birthday"></input>
            </div>
            <div className="email-info">
              <label for="email">Email</label>
              <input type="email" id="email"></input>
            </div>
            <div className="MobileNumber-info">
              <label for="Mobile Number">Mobile Number</label>
              <input type="tel" id="Mobile Number"></input>
            </div>

            <p>Gender</p>

            <div className="male">
              <input type="checkbox" id="Male"></input>
              <label for="Male">Male</label>
            </div>

            <div className="female">
              <input type="checkbox" id="Female"></input>
              <label for="Female">Female</label>
            </div>

            <button className="btn">Save Changes </button>
          </div>
        )}

        {showWishlist && (
          <div className="profile-division-three">
            <h3>Wishlist</h3>
            <div className="line"></div>

            <div className="Wishlist">
              <div className="division-menu">
                <img src={slicepizza}></img>
                <div className="division-menu-info">
                  <h4>Cheese Pizza</h4>
                  <i className="fa-regular fa-heart"></i>

                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>

                  <select>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                  </select>

                  <p>
                    Lorem ipsum dolor sit amet consectetur. Odio pellentesque
                    morbi egestas tempus. Senectus lacinia sed platea interdum
                    pellentesque.
                  </p>
                  <span>9$</span>
                  <i className="fa-solid fa-store"></i>
                </div>
              </div>

              <div className="division-menu">
                <img src={slicepizza}></img>
                <div className="division-menu-info">
                  <h4>Cheese Pizza</h4>
                  <i className="fa-regular fa-heart"></i>

                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>

                  <select>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                  </select>

                  <p>
                    Lorem ipsum dolor sit amet consectetur. Odio pellentesque
                    morbi egestas tempus. Senectus lacinia sed platea interdum
                    pellentesque.
                  </p>
                  <span>9$</span>
                  <i className="fa-solid fa-store"></i>
                </div>
              </div>

              <div className="division-menu">
                <img src={slicepizza}></img>
                <div className="division-menu-info">
                  <h4>Cheese Pizza</h4>
                  <i className="fa-regular fa-heart"></i>

                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>

                  <select>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                  </select>

                  <p>
                    Lorem ipsum dolor sit amet consectetur. Odio pellentesque
                    morbi egestas tempus. Senectus lacinia sed platea interdum
                    pellentesque.
                  </p>
                  <span>9$</span>
                  <i className="fa-solid fa-store"></i>
                </div>
              </div>

              <div className="division-menu">
                <img src={slicepizza}></img>
                <div className="division-menu-info">
                  <h4>Cheese Pizza</h4>
                  <i className="fa-regular fa-heart"></i>

                  <ul>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                    <li>
                      <i class="fa-solid fa-star"></i>
                    </li>
                  </ul>

                  <select>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                  </select>

                  <p>
                    Lorem ipsum dolor sit amet consectetur. Odio pellentesque
                    morbi egestas tempus. Senectus lacinia sed platea interdum
                    pellentesque.
                  </p>
                  <span>9$</span>
                  <i className="fa-solid fa-store"></i>
                </div>
              </div>
            </div>
          </div>
        )}

        {recentOrders && (
          <div className="RecentOrders">
            <h3>Recent Orders</h3>
            <div className="line"></div>
            <div className="parentOrders">
              <div className="Orders">
                <div className="order-info">
                  <div className="image-pizza">
                    <img src={slicepizza}></img>
                  </div>
                  <div className="orderDetails">
                    <ul>
                      <li>Cheese Pizza</li>
                      <li>Order ID: 2345678</li>
                      <li>Price: $12</li>
                    </ul>
                  </div>
                </div>

                <button className="btn-1">Order again</button>
                <button className="btn-2">Remove</button>
              </div>

              <div className="Orders">
                <div className="order-info">
                  <div className="image-pizza">
                    <img src={slicepizza}></img>
                  </div>
                  <div className="orderDetails">
                    <ul>
                      <li>Cheese Pizza</li>
                      <li>Order ID: 2345678</li>
                      <li>Price: $12</li>
                    </ul>
                  </div>
                </div>
                <button className="btn-1">Order again</button>
                <button className="btn-2">Remove</button>
              </div>
            </div>
          </div>
        )}

        {address && (
          <div className="Address">
            <h3>Address</h3>
            <div className="line"></div>
            <div className="Addresss">
              <div className="Address-info">
                <div className="Address-info-parent">
                  <ul>
                    <li>
                      <h4>Home</h4>
                    </li>
                    <li>
                      <h4>Address: </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Odio pellentesq
                      </p>
                    </li>
                    <li>
                      {" "}
                      <h4>City: </h4> <p>Lorem ipsum </p>
                    </li>
                    <li>
                      {" "}
                      <h4>District: </h4>
                      <p>Lorem ipsum </p>
                    </li>
                  </ul>
                  <button className="btn-1">Edit</button>
                  <button className="btn-2">Remove</button>
                </div>
              </div>

              <div className="Address-info">
                <div className="Address-info-parent">
                  <ul>
                    <li>
                      <h4>Home</h4>
                    </li>
                    <li>
                      <h4>Address: </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Odio pellentesq
                      </p>
                    </li>
                    <li>
                      {" "}
                      <h4>City: </h4> <p>Lorem ipsum </p>
                    </li>
                    <li>
                      {" "}
                      <h4>District: </h4>
                      <p>Lorem ipsum </p>
                    </li>
                  </ul>
                  <button className="btn-1">Edit</button>
                  <button className="btn-2">Remove</button>
                </div>
              </div>

              <div className="Address-info">
                <div className="Address-info-parent">
                  <ul>
                    <li>
                      <h4>Home</h4>
                    </li>
                    <li>
                      <h4>Address: </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Odio pellentesq
                      </p>
                    </li>
                    <li>
                      {" "}
                      <h4>City: </h4> <p>Lorem ipsum </p>
                    </li>
                    <li>
                      {" "}
                      <h4>District: </h4>
                      <p>Lorem ipsum </p>
                    </li>
                  </ul>
                  <button className="btn-1">Edit</button>
                  <button className="btn-2">Remove</button>
                </div>
              </div>

              <div className="Address-info">
                <div className="Address-info-parent">
                  <ul>
                    <li>
                      <h4>Home</h4>
                    </li>
                    <li>
                      <h4>Address: </h4>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Odio pellentesq
                      </p>
                    </li>
                    <li>
                      {" "}
                      <h4>City: </h4> <p>Lorem ipsum </p>
                    </li>
                    <li>
                      {" "}
                      <h4>District: </h4>
                      <p>Lorem ipsum </p>
                    </li>
                  </ul>
                  <button className="btn-1">Edit</button>
                  <button className="btn-2">Remove</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
export default MyProfile;
