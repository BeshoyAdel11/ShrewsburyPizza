import "../CssFile/menuData.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import mydata from "../data.json";

function MenuData() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const [num, setNum] = useState(0);

  const numPlus = () => {
    setNum(num + 1);
  };

  const numMinus = () => {
    setNum(num - 1);
    if (num === 0) {
    }
  };

  useEffect(() => {
    const foundProduct = mydata.find((card) => card.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="menudata">
        <div className="menudata-card">
          <div className="menudata-card-divisionOne">
            <img src={product.image}></img>
            <h1>{product.title}</h1>
            <section className="menudataCardSectionOne">
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
              <span>{product.price}$</span>
            </section>
            <p>{product.paragraph.slice(0, 80)}</p>
          </div>

          <div className="menudata-card-divisionTow">
            <div className="size">
              <label>Size</label>
              <select>
                <option>small</option>
                <option>large</option>
                <option>medium</option>
              </select>
            </div>

            <div className="ExtraToppings">
              <label>Extra Toppings</label>
              <select>
                <option>small</option>
                <option>large</option>
                <option>medium</option>
              </select>
            </div>

            <div className="notes">
              <label>Notes</label>
              <textarea></textarea>
            </div>

            <div className="Quantity">
              <h3>Quantity</h3>
              <ul>
                <li onClick={numPlus}>
                  <i class="fa-solid fa-plus"></i>
                </li>
                <li>
                  <span>{num}</span>
                </li>
                <li onClick={numMinus}>
                  <i class="fa-solid fa-minus"></i>
                </li>
              </ul>
            </div>

            <div className="Total">
              <p className="para1">Total</p>
              <p className="para2">{product.price * num}$</p>
            </div>

            <button className="btn1">Check Out</button>
            <button className="btn2">
              <i class="fa-solid fa-cart-plus"></i>Add To Cart
            </button>
          </div>

          <button onClick={() => navigate("/")}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default MenuData;
