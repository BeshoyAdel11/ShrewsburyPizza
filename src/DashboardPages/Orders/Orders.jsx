import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import OrdersTable from "./OrdersTable";
import Waiter from "/src/assets/images/Dashboard-images/Waiter.png";

import { Tabs, Tab, Box } from "@mui/material";
import {
  Chip,
  Typography,
  TextField,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Search, FilterList } from "@mui/icons-material";

function Orders() {
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const initialRows = [
    {
      id: 1,
      customer: "Adam S.",
      email: "fuzzypineappleheadass@gmail.com",
      address: "50 Purinton St Shrewsbury",
      payment: { method: "Credit card", amount: "$53.36" },
      items: "2 items",
      delivery: "Delivery",
      date: "10/28/2024 6:56 PM",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Chris Demers",
      email: "bbfan17@yahoo.com",
      address: "160 Crescent St Shrewsbury",
      payment: { method: "Cash", amount: "$9.90" },
      items: "1 item",
      delivery: "Pick-up",
      date: "10/28/2024 6:04 PM",
      status: "Completed",
    },
    {
      id: 3,
      customer: "Sully Roberts",
      email: "thesullyer@gmail.com",
      address: "268 South Quinsigamond Avenue Shrewsbury",
      payment: { method: "Credit card", amount: "$30.00" },
      items: "2 items",
      delivery: "Delivery",
      date: "10/28/2024 6:15 PM",
      status: "Pending",
    },
  ];

  const [rows, setRows] = useState(initialRows);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    const filteredRows = initialRows.filter((row) =>
      row.customer.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRows(filteredRows);
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const applyFilter = (status) => {
    const filteredRows = initialRows.filter((row) => row.status === status);
    setRows(filteredRows);
    handleFilterClose();
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  var date = new Date();
  var getdate = date.getDate();

  return (
    <section>
      <div className="w-full  h-[1024px] ">
        <header className="flex custom-shadow justify-between mb-[20px] bg-[#ffffff] items-center ml-[20px] h-[86px]  px-[25px]  rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] ">
          <div>
            <h1 className=" InterFont font-[400] text-[30px] leading-[36.31px] text-[#000000] ">
              Orders
            </h1>
          </div>

          <div className="">
            <button className="p-2 rounded-full hover:bg-[#B7E2D133]">
              <FaBell className="text-gray-600" size={20} />
            </button>

            <button className="p-2 rounded-full hover:bg-[#B7E2D133]">
              <FaUserCircle className="text-gray-600" size={24} />
            </button>
          </div>
        </header>

        <div className="flex flex-col gap-[30px]">
          <div className=" flex justify-between rounded-[20px] h-[117px] gap-[30px] w-[calc(100%-32px)] mx-4  bg-[#ffffff]">
            <div className="flex-1 flex justify-center text-center items-center gap-[10px]  h-full rounded-[20px] border-solid border-[#0000001A] border-[1px]">
              <div className="w-[30px] flex flex-col rounded-[3px] justify-between items-center h-[30px] bg-[#000000A6]">
                <div className="w-[25px]   h-[7px] mt-[3px] bg-[#ffffff]"></div>
                <span className="InterFont font-[500] text-[13px]   text-[#ffffff]">
                  {getdate}
                </span>
              </div>
              <span className="InterFont font-[400] text-[24px] leading-[29.05px]  text-[#000000A6]">
                Today
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-center text-center items-center  h-full rounded-[20px] border-solid border-[#0000001A] border-[1px]">
              <p className="InterFont font-[400] text-[24px] leading-[29.05px]  text-[#000000A6]">
                Total Orders
              </p>
              <span className="InterFont font-[400] text-[24px] leading-[29.05px]  text-[#000000A6]">
                52
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-center text-center items-center  h-full rounded-[20px] border-solid border-[#0000001A] border-[1px]">
              <p className="InterFont font-[400] text-[24px] leading-[29.05px]  text-[#000000A6]">
                Returns
              </p>
              <span className="InterFont font-[400] text-[24px] leading-[29.05px]  text-[#000000A6]">
                2
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-center text-center items-center  h-full rounded-[20px] border-solid border-[#0000001A] border-[1px]">
              <p className="InterFont font-[400] text-[24px] leading-[29.05px]  text-[#000000A6]">
                Gift Certificate
              </p>
              <span className="InterFont font-[400] text-[24px] leading-[29.05px]  text-[#000000A6]">
                5
              </span>
            </div>
          </div>

          <Box className="w-[calc(100%-64px)] mx-8">
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="custom tabs"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#088D56 !important",
                  height: "2px !important",
                },
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontSize: "24px !important",
                  lineHeight: "29.05px",
                  fontFamily: "Inter",
                  fontWeight: "400",
                  color: "#000000A6 !important",
                  "&:hover": {
                    backgroundColor: "#F5F5F5 !important",
                    color: "#088D56 !important",
                  },
                },
                "& .Mui-selected": {
                  color: "#088D56 !important",
                },
              }}
            >
              <Tab label="All" />
              <Tab label="Need to ship" />
              <Tab label="Sent" />
              <Tab label="Completed" />
              <Tab label="Cancelation" />
            </Tabs>

            <Box
              sx={{
                height: "2px !important",
                backgroundColor: "#e0e0e0 !important",
                width: "100%",
              }}
            />
          </Box>

          <div className="flex justify-between items-center  w-[calc(100%-64px)] mx-8 px-4  bg-[#ffffff]  ">
            <div className="flex items-centerrounded-lg p-2 h-[38px] w-[314px]">
              <Search className="mr-2 text-gray-400" />
              <TextField
                placeholder="Search Order..."
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                fullWidth
                value={search}
                onChange={handleSearchChange}
              />
            </div>

            <div>
              <div className="flex gap-[2px] px-[10px] rounded-[10px] justify-center items-center">
                <IconButton className="p-0" onClick={handleFilterClick}>
                  <FilterList />
                </IconButton>
                <Typography>Filter</Typography>
              </div>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleFilterClose}
              >
                <MenuItem onClick={() => applyFilter("Pending")}>
                  Pending
                </MenuItem>
                <MenuItem onClick={() => applyFilter("Completed")}>
                  Completed
                </MenuItem>
                <MenuItem onClick={() => setRows(initialRows)}>All</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="  w-[calc(100%-16px)] mx-2  ">
            <div className=" flex gap-5 items-center h-[78.55px] pl-10 bg-[#B7E2D133] rounded-tr-[20px] rounded-tl-[20px] rounded-br-[20px] custom-shadow ">
              <img src={Waiter} className="object-contain" alt="Waiter" />
              <Typography variant="h6">New Orders</Typography>
              <Chip label="105" color="success" />
            </div>

            <div>
              <OrdersTable rows={rows} setRows={setRows} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Orders;
