import "../CssFile/menu.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mydata from "../data.json";
import Nav from "./nav";

function Menue() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = mydata.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const initialDisplayCount = 6;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const showMoreCards = () => {
    setDisplayCount((prevCount) => prevCount + initialDisplayCount);
  };

  /*
    const getData=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
              setmydata(myJson)
           });
      }
      useEffect(()=>{
        getData()
       
      },[])
 
     */

  return (
    <>
      <Nav />

      <div className="menu-search">
        <h1>
          Pizza <span>Menu</span>
        </h1>
        <input
          type="search"
          placeholder="Search for pizza you want"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          value={searchTerm}
        ></input>
      </div>

      <div className="menu">
        {filteredProducts.slice(0, displayCount).map((item) => (
          <Link to={`/products/${item.id}`}>
            <div key={item.id} className="division-menu">
              <img src="https://s3-alpha-sig.figma.com/img/3bb2/7d4b/67dfc18de3ebd4fd456b1e636e87553c?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UHDEx-xj~n9PyZv~UHQRS~mSLpdKfvJgtPbo3lb7OYkxKWWcLX5JPCwe3WAmcI8KV-KpAOZLliXxvw6fJ5THrVOE0N0~3R~VBwM1MC88Wpd-03FdJYIe2fobe~9VIQ5gyb1KwKShXH3YASFomcZiX4tCAheDrgN27d6FyUoLu18FAc2WxuIInguaKaTmsNAeq6q5E~jVjVOXBi0AAZYuYIjAhLJvyh0gLrnsZdmDpiZFpMDWoCG5TBrkfcOq2OABtuOhxeUtlLFlnYJiocFSHA37YaqPJxTXhTmop6RNnXXjD6E72M0vWdzb918AhNbnPQCS7xi4XgsjN28~D-tByw__"></img>
              <div className="division-menu-info">
                <h4>{item.title}</h4>
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

                <p>{item.paragraph}</p>
                <span>{item.price}$</span>
                <i className="fa-solid fa-store"></i>
              </div>
            </div>
          </Link>
        ))}

        {displayCount < mydata.length && (
          <button onClick={showMoreCards}>Show More</button>
        )}
      </div>
    </>
  );
}
export default Menue;
