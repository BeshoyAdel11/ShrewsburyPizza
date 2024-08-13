import { useState } from "react";
import "../CssFile/MyCart.css";
import pizaa from "../images/myCart/pizaa.svg";
import { useMediaQuery } from "@uidotdev/usehooks";
import Nav from "./nav";
import Footer from "./footer";
function MyCart() {
  const isPhone = useMediaQuery("(max-width: 600px)");
  const isDesktop = useMediaQuery("(min-width: 600px)");

  const [Showdetails, setShowdetails] = useState(false);

  const ShowdetailsBtn = () => {
    setShowdetails(!Showdetails);
  };

  const [ShowOption, setShowOption] = useState(false);
  const ShowOptionBtn = () => {
    setShowOption(!ShowOption);
  };

  return (
    <>
      <div className="mycart">
        <Nav />

        <h1>My cart</h1>
        <h3>Product</h3>
        <ul className="mycart-List">
          <il>Quantity</il>
          <li>Price</li>
          <li>Total</li>
        </ul>
        {isDesktop && (
          <div className="mycart-info">
            <div className="cartParent">
              <div className="cartParent-img">
                <img src={pizaa}></img>
              </div>

              <div className="cart">
                <ul className="cart-list">
                  <li className="cart-list-one">Hawaiian  Pizza</li>
                  <li className="cart-list-tow">
                    <i class="fa-solid fa-plus"></i>
                    <span>0</span>
                    <i class="fa-solid fa-minus"></i>
                  </li>
                  <li>0$</li>
                  <li>0$</li>
                  <li className="ellipsis">
                    <i class="fa-solid fa-ellipsis" onClick={ShowOptionBtn}></i>
                    {ShowOption && (
                      <ul className="pizza-select">
                        <li>
                          <i class="fa-regular fa-eye"></i>
                          <h6>View Pizza Details</h6>
                        </li>
                        <li>
                          <i class="fa-regular fa-trash-can"></i>
                          <h6>Delete</h6>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
            </div>

            <div className="cartParent">
              <div className="cartParent-img">
                <img src={pizaa}></img>
              </div>{" "}
              <div className="cart">
                <ul className="cart-list">
                  <li className="cart-list-one">Hawaiian  Pizza</li>
                  <li className="cart-list-tow">
                    <i class="fa-solid fa-plus"></i>
                    <span>0</span>
                    <i class="fa-solid fa-minus"></i>
                  </li>
                  <li>0$</li>
                  <li>0$</li>
                  <li>
                    <i class="fa-solid fa-ellipsis"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {isPhone && (
          <div className="pizza-parent">
            <div className="child-pizza">
              <img src={pizaa}></img>
              <div className="pizza-info">
                <div className="Hawaiian-option">
                  <ul>
                    <li>
                      <h4>Hawaiian  Pizza</h4>
                    </li>
                    <li onClick={ShowdetailsBtn}>
                      {" "}
                      <i class="fa-solid fa-ellipsis"></i>
                      {Showdetails && (
                        <ul className="pizza-option">
                          <li>
                            <i class="fa-regular fa-eye"></i>
                            <h6>View Pizza Details</h6>
                          </li>
                          <li>
                            <i class="fa-regular fa-trash-can"></i>
                            <h6>Delete</h6>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
                <div className="info-parent">
                  <div className="Quantity-info">
                    <h5>Quantity</h5>
                    <div>
                      {" "}
                      <i class="fa-solid fa-plus"></i>
                      <span>0</span>
                      <i class="fa-solid fa-minus"></i>
                    </div>
                  </div>
                  <div className="Price-info">
                    <h5>Price</h5>
                    <span>0$</span>
                  </div>
                  <div className="Total-info">
                    <h5>Total</h5>
                    <span>0$</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="child-pizza">
              <img src={pizaa}></img>
              <div className="pizza-info">
                <div className="Hawaiian-option">
                  <ul>
                    <li>
                      <h4>Hawaiian  Pizza</h4>
                    </li>
                    <li onClick={ShowdetailsBtn}>
                      {" "}
                      <i class="fa-solid fa-ellipsis"></i>
                      {Showdetails && (
                        <ul className="pizza-option">
                          <li>
                            <i class="fa-regular fa-eye"></i>
                            <h6>View Pizza Details</h6>
                          </li>
                          <li>
                            <i class="fa-regular fa-trash-can"></i>
                            <h6>Delete</h6>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
                <div className="info-parent">
                  <div className="Quantity-info">
                    <h5>Quantity</h5>
                    <div>
                      {" "}
                      <i class="fa-solid fa-plus"></i>
                      <span>0</span>
                      <i class="fa-solid fa-minus"></i>
                    </div>
                  </div>
                  <div className="Price-info">
                    <h5>Price</h5>
                    <span>0$</span>
                  </div>
                  <div className="Total-info">
                    <h5>Total</h5>
                    <span>0$</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="child-pizza">
              <img src={pizaa}></img>
              <div className="pizza-info">
                <div className="Hawaiian-option">
                  <ul>
                    <li>
                      <h4>Hawaiian  Pizza</h4>
                    </li>
                    <li onClick={ShowdetailsBtn}>
                      {" "}
                      <i class="fa-solid fa-ellipsis"></i>
                      {Showdetails && (
                        <ul className="pizza-option">
                          <li>
                            <i class="fa-regular fa-eye"></i>
                            <h6>View Pizza Details</h6>
                          </li>
                          <li>
                            <i class="fa-regular fa-trash-can"></i>
                            <h6>Delete</h6>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
                <div className="info-parent">
                  <div className="Quantity-info">
                    <h5>Quantity</h5>
                    <div>
                      {" "}
                      <i class="fa-solid fa-plus"></i>
                      <span>0</span>
                      <i class="fa-solid fa-minus"></i>
                    </div>
                  </div>
                  <div className="Price-info">
                    <h5>Price</h5>
                    <span>0$</span>
                  </div>
                  <div className="Total-info">
                    <h5>Total</h5>
                    <span>0$</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="OrderSummery">
          <h1>Order Summery</h1>
          <div className="OrderSummery-info">
            <div className="Subtotal">
              <h4>Subtotal</h4>
              <span>0$</span>
            </div>
            <div className="VAT">
              <h4>VAT</h4>
              <span>5$</span>
            </div>
            <div className="Delivery">
              <h4>Delivery</h4>
              <span>3$</span>
            </div>

            <div className="SelectAddress">
              <label>Select Address</label>
              <div className="Address-select">
                <select>
                  <option>Cario</option>
                  <option>Gizza</option>
                </select>
                <div className="add-SelectAddress">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>

            <div className="VoucherCode">
              <label>Voucher Code</label>
              <div className="VoucherCode-coupon">
                <input type="txet" placeholder="Enter coupon code here"></input>
                <div className="add-coupon">Apply</div>
              </div>
            </div>

            <div className="PaymentMethod">
              <label>Payment Method</label>
              <div className="PaymentMethod-option">
                <select>
                  <option>Cash</option>
                  <option>Cash</option>
                  <option>Cash</option>
                </select>
              </div>
            </div>

            <div className="line"></div>

            <div className="Total-order">
              <h4>Total</h4>
              <span>0$</span>
            </div>
          </div>
          <button>Check Out</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyCart;
