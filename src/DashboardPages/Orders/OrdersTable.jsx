import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Chip, Typography, Paper } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const columns = [
  {
    field: "customer",
    headerName: "Customer",
    flex: 1,
    renderCell: (params) => (
      <div
        style={{
          textAlign: "center",
          whiteSpace: "normal",
          overflowWrap: "anywhere",
        }}
      >
        <Link to="/ClientDetails">
          <Typography className="text-[#6A9ED1] underline" fontWeight="bold">
            {params.row.customer}
          </Typography>
        </Link>
        <Typography variant="body2" color="textSecondary">
          {params.row.email}
        </Typography>
      </div>
    ),
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
    renderCell: (params) => (
      <div
        style={{
          textAlign: "center",
          wordWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        <Typography>{params.row.address}</Typography>
      </div>
    ),
  },
  {
    field: "payment",
    headerName: "Payment",
    flex: 1,
    renderCell: (params) => (
      <div
        style={{
          textAlign: "center",
          wordWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        <Typography className="text-[#088D56]" fontWeight="bold">
          {params.row.payment.method}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {params.row.payment.amount}
        </Typography>
      </div>
    ),
  },
  {
    field: "items",
    headerName: "Items",
    flex: 1,
    renderCell: (params) => (
      <div
        style={{
          textAlign: "center",
          wordWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        <Typography>{params.row.items}</Typography>
      </div>
    ),
  },
  {
    field: "delivery",
    headerName: "Delivery Method",
    flex: 1,
    renderCell: (params) => (
      <div
        style={{
          textAlign: "center",
          wordWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        <Typography>{params.row.delivery}</Typography>
      </div>
    ),
  },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    renderCell: (params) => (
      <div
        style={{
          textAlign: "center",
          wordWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        <Typography>{params.row.date}</Typography>
      </div>
    ),
  },
  {
    field: "status",
    headerName: "Order Status",
    flex: 1,
    renderCell: (params) => (
      <div
        style={{
          textAlign: "center",
          wordWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        <Chip
          label={params.row.status}
          style={{
            color: params.row.status === "Pending" ? "#E35353CC" : "#4caf50",
            background: "Transparent",
          }}
        />
      </div>
    ),
  },
];

function OrdersDataGrid({ rows, setRows }) {
  return (
    <Paper elevation={3} sx={{ pt: 2, backgroundColor: "transparent" }}>
      <div
        style={{
          height: 450,
          width: "100%",

          backgroundColor: "#ffffff",
        }}
      >
        <DataGrid
          checkboxSelection
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 15]}
          disableSelectionOnClick
          rowHeight={100}
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f5f5f5",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#f9f9f9",
            },
            "& .MuiDataGrid-cell": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              border: "1px solid #ddd",
            },
            "& .MuiCheckbox-root.Mui-checked": {
              color: "#088D56",
            },
          }}
        />
      </div>
    </Paper>
  );
}
export default OrdersDataGrid;
