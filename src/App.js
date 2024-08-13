import "./App.css";
import Sidebar from "./commponents/sidebar";
import Navbar from "./commponents/navbar";
import Footer from "./commponents/footer";
import Dishes from "./commponents/Dishes";
import Gift from "./commponents/gift";
import { useState } from "react";
import Nav from "./commponents/nav";
import Mune from "./commponents/menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuData from "./commponents/menue-data";
import MyProfile from "./commponents/myProfile";
import MyCart from "./commponents/myCart";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Dishes />
                <Footer />
              </>
            }
          ></Route>
          <Route path="/menu" element={<Mune />}></Route>
          <Route path="/products/:id" element={<MenuData />}></Route>
          <Route path="/gift" element={<Gift />}></Route>
          <Route path="/myCart" element={<MyCart />}></Route>
          <Route path="/myProfile" element={<MyProfile />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
