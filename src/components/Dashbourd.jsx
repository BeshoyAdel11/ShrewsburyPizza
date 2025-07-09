import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardOverview from "../DashboardPages/DashboardOverview";
import Orders from "../DashboardPages/Orders/Orders";
import ClientDetails from "../DashboardPages/Orders/ClientDetails";
import Anlysis from "../DashboardPages/Anlysis/Anlysis";
import Menu from "../DashboardPages/Menu/Menu";
import CouponCode from "../DashboardPages/Coupon Code/CouponCode";
import GiftCards from "../DashboardPages/Gift Cards/GiftCards";
import ToppingsCategories from "../DashboardPages/Categories/ToppingsCategoris/ToppingsCategories";
import Sidebar from "../DashboardPages/SideBar";
import FoodCategories from "../DashboardPages/Categories/FoodCategories/FoodCategories";
import PremiumToppings from "../DashboardPages/Categories/ToppingsCategoris/ToppingsItems/PremiumToppings";

const Dashboard = () => {
  return (
    <>
      <Router>
        <div
          style={{
            display: "flex",
            height: "1024px",
            backgroundColor: "#FAFAFA",
          }}
        >
          <Sidebar />

          <div style={{ flex: 1, height: "1024px" }}>
            <Routes>
              <Route path="/" element={<DashboardOverview />} />
              <Route path="/Orders" element={<Orders />} />
              <Route path="/ClientDetails" element={<ClientDetails />} />
              <Route path="/Anlysis" element={<Anlysis />} />
              <Route path="/Menu" element={<Menu />} />
              <Route path="/FoodCategories" element={<FoodCategories />} />
              <Route
                path="/ToppingsCategories"
                element={<ToppingsCategories />}
              />
              <Route path="/PremiumToppings" element={<PremiumToppings />} />
              <Route path="/GiftCard" element={<GiftCards />} />
              <Route path="/CouponCode" element={<CouponCode />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

/*
 
*/
export default Dashboard;
