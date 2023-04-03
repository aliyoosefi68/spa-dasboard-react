import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userRow } from "../../datas";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import "./UserList.css";

const UserList = () => {
  const [userData, setUserData] = useState(userRow);

  const userDelet = (id) => {
    setUserData(userData.filter((user) => user.id != id));
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="userListLink">
            <div className="uerListUser">
              <img src={params.row.img} className="userListImg" />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 250,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelet"
              onClick={() => userDelet(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={4}
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
