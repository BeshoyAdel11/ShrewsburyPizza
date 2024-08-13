import "../CssFile/navbar.css";
import slice from "../images/navbar-Images/slice.png";
import Nav from "./nav";
import Sidebar from "./sidebar";
import { useState } from "react";

function Navbar() {
  return (
    <>
      <nav>
        <div className="Shrewsbury">
          <Nav />

          <h1>
            Shrewsbury <br /> House of <br /> <span>PIZZA</span>{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Odio pellentesque morbi
            egestas tempus. Senectus lacinia sed platea interdum pellentesque.
            Et a mauris interdum ut.
          </p>
          <button className="btn-1">Order Now</button>
          <button className="btn-2">BooK A Table</button>
          <img
            src="https://s3-alpha-sig.figma.com/img/f054/477e/60a2400dcab10bcd5584b8566318eef2?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FPnq96EZEI8fZ5AGbU4Xi5ZdyjrbmbAMKD9scF3F7kn9wKl3PH2iQ2hzSR3gn3SYiJ8pz1DBxy8KrtRH6CcB5TTiSk1clBOjbWKca4FCiQPQi-O4tKxzf0jWtXvCgIyLfHCRBCaAmzUJ5sjVOOX7RCKgRzqq4gpMB79bM0ICOnaX6jdFqS9jQfeyp1493P2ZzAwHjyDeuLDO-3YyxYYRdXYWTE0w-M007-5h777es5bCEK86OBm26-SlzrzyLA2D87wjKYpiKRzgSNriA-IOjERED33a25KLUouL-1iuzs1w97GFRTZD5I6X6eENii7105MDoDJYOVBAZov-Y3aISg__"
            className="slice"
          ></img>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
