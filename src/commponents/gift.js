import "../CssFile/gift.css";
import React, { useState } from "react";
import Nav from "./nav";
import Footer from "./footer";
function Gift() {
  const [showTo, setShowTo] = useState(false);
  const [valueTo, setValueTo] = useState("");
  function handleChangeTo(e) {
    setValueTo(e.target.value);
    setShowTo(true);
    if (e.target.value == "") {
      setShowTo(false);
    }
  }

  const [ShowFrom, setShowFrom] = useState(false);
  const [valueFrom, setValueFrom] = useState("");
  function handleChangeFrom(e) {
    setValueFrom(e.target.value);
    setShowFrom(true);
    if (e.target.value == "") {
      setShowFrom(false);
    }
  }

  const [ShowMessage, setShowMessage] = useState(false);
  const [valueMessage, setValueMessage] = useState("");
  function handleChangeMessage(e) {
    setValueMessage(e.target.value);
    setShowMessage(true);
    if (e.target.value == "") {
      setShowMessage(false);
    }
  }

  const [ShowPrice, setShowPrice] = useState(false);
  const [valuePrice, setValuePrice] = useState("");
  function handleChangePrice(e) {
    setValuePrice(e.target.value);
    setShowPrice(true);
    if (e.target.value == "") {
      setShowPrice(false);
    }
  }

  return (
    <>
      <Nav />
      <div className="allGift">
        <h4 className="GiftCard">Gift Card</h4>

        <div className="section-gift-one"></div>

        <div className="section-gift-tow">
          <section className="section-gift-tow-info">
            <h4>Gift Card</h4>
            {showTo && <p className="paragrph-1">To: {valueTo}</p>}
            {ShowFrom && <p className="paragrph-2">from: {valueFrom}</p>}
            {ShowMessage && <p className="paragrph-3">{valueMessage}</p>}
            {ShowPrice && <p className="paragrph-4">{valuePrice}$</p>}
          </section>
        </div>

        <div className="section-gift-three"></div>

        <div className="division-gift-tow">
          <form>
            <div>
              <label for="username">From</label>
              <input
                type="text"
                onChange={handleChangeFrom}
                placeholder="Your Name"
                maxLength={6}
              ></input>
            </div>

            <div>
              <label for="username">To</label>
              <input
                type="text"
                onChange={handleChangeTo}
                placeholder="Your Name"
                maxLength={6}
              ></input>
            </div>

            <div>
              <label for="username">Amount</label>
              <input
                type="number"
                onChange={handleChangePrice}
                placeholder="10$"
                onInput={(e) => (e.target.value = e.target.value.slice(0, 2))}
              ></input>
            </div>

            <div>
              <label for="username">Payment Method</label>
              <select>
                <option>PayPal</option>
                <option>Visa</option>
                <option>Pay</option>
              </select>
            </div>

            <div>
              <label for="username">
                Message <span>(Optional)</span>
              </label>
              <textarea
                onChange={handleChangeMessage}
                placeholder="65 Char Max"
                maxLength={65}
              ></textarea>
            </div>
          </form>
          <button>Checkout</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Gift;
