
 import MyCart from './components/MyCart'
import Footer from './components/Footer'
import Gift from './components/gift'
import MenuData from './components/MenuData'
import Menue from './components/Menue'
import MyProfile from './components/MyProfile'
import Nav from './components/Nav'
import NavBar from './components/NavBar'
import PopularDishes from './components/PopularDishes'
import SideBar from './components/SideBar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BuildPizza from './components/BuildPizza'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import VerificationCode from './components/VerificationCode'
import NewPassword from './components/NewPassword'
import Dashbourd from './components/Dashbourd'
import { useState, useEffect } from 'react';
import logo1 from './assets/images/nav-Images/logo1.svg';
 function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);  
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh' }} className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-br from-[#00833F] to-[#B7E2D1]">
        <img src={logo1} alt="Logo" className="w-[180px] h-[180px] mb-8 animate-bounce" />
       </div>
    );
  }
 
  return (
    <>
    {/*<Dashbourd/>*/}
  
    <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Nav/>
                <NavBar />
                <PopularDishes />
                <Footer />
              </>
            }
          ></Route>
          <Route path="/menu" element={<Menue/>}></Route>
          <Route path="MenuData" element={<MenuData />}></Route>
          <Route path="/gift" element={<Gift/>}></Route>
          <Route path="/myCart" element={<MyCart/>}></Route>
          <Route path="/myProfile" element={<MyProfile />}></Route>
          <Route path="/SignUp" element= {<SignUp />}></Route>
          <Route path="/SignIn" element= {<SignIn />}></Route>
          <Route path="/NewPassword" element= {<NewPassword/>}></Route>
          <Route path="/VerificationCode" element= {<VerificationCode/>}></Route>


        </Routes>
      </Router>
      
      </>
  )
}

export default App

 