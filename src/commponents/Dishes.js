import "../CssFile/dishes.css";
import pizza from "../images/dishes-Images/pizza-slice.svg";
import calzone from "../images/dishes-Images/calzone.svg";
import chicken from "../images/dishes-Images/chicken.svg";
import seafood from "../images/dishes-Images/seafood.svg";
import soups from "../images/dishes-Images/soups.svg";
import pasta from "../images/dishes-Images/pasta.svg";
import slice from "../images/dishes-Images/new-slice-pizza.png";
import heart from "../images/dishes-Images/heart.svg";
import stars from "../images/dishes-Images/stars.svg";
import market from "../images/dishes-Images/market.svg";
import pepperoni from "../images/dishes-Images/pepperoni-pizza.png";
import Hawaiian from "../images/dishes-Images/Hawaiian  Pizza.png";
import { useState } from "react";

function Dishes() {
  /*
    const initialDisplayCount = 3;
 const [displayCount, setDisplayCount] = useState(initialDisplayCount);
 const showMoreCards = () => {
    setDisplayCount((prevCount) => prevCount + initialDisplayCount);
  };
*/

  return (
    <>
      <div className="dishes">
        <h3>Popular Dishes</h3>
        <section className="dishes-section-one">
          <ul>
            <li>
              <img src={pizza}></img>Pizza
            </li>
            <li>
              <img src={calzone}></img>Calzone
            </li>
            <li>
              <img src={chicken}></img>Chicken
            </li>
            <li>
              <img src={seafood}></img>Seafood
            </li>
            <li>
              <img src={soups}></img>Soups
            </li>
            <li>
              <img src={pasta}></img>Pasta
            </li>
          </ul>
        </section>
        <section className="dishes-section-tow">
          <div className="dishes-Division-one">
            <img src={slice} className="slice-pizza"></img>
            <section className="dishes-section-three">
              <h4>Cheese Pizza</h4>
              <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
              <img src={stars} className="stars-img"></img>
              <img src={heart} className="heart-img"></img>
              <p>
                Lorem ipsum dolor sit amet consectetur. Odio pellentesque morbi
                egestas tempus. Senectus lacinia sed platea interdum
                pellentesque.
              </p>
              <span>9$</span>
              <img src={market} className="market-img"></img>
            </section>
          </div>

          <div className="dishes-Division-tow">
            <img src={pepperoni} className="slice-pepperoni"></img>
            <section className="dishes-section-four">
              <h4>Cheese Pizza</h4>
              <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
              <img src={stars} className="stars-img-2"></img>
              <img src={heart} className="heart-img-2"></img>
              <p>
                Lorem ipsum dolor sit amet consectetur. Odio pellentesque morbi
                egestas tempus. Senectus lacinia sed platea interdum
                pellentesque.
              </p>
              <span>9$</span>
              <img src={market} className="market-img-2"></img>
            </section>
          </div>

          <div className="dishes-Division-three">
            <img src={Hawaiian} className="slice-Hawaiian"></img>
            <section className="dishes-section-five">
              <h4>Cheese Pizza</h4>
              <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
              <img src={stars} className="stars-img-3"></img>
              <img src={heart} className="heart-img-3"></img>
              <p>
                Lorem ipsum dolor sit amet consectetur. Odio pellentesque morbi
                egestas tempus. Senectus lacinia sed platea interdum
                pellentesque.
              </p>
              <span>9$</span>
              <img src={market} className="market-img-3"></img>
            </section>
          </div>
        </section>

        <button>View All</button>
      </div>
    </>
  );
}
export default Dishes;
