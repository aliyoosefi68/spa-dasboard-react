import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { productsData } from "../../datas";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Products = () => {
  const [productData, setProductData] = useState(productsData);

  const userDelet = (id) => {
    setProductData(productData.filter((product) => product.id !== id));
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "product",
      headerName: "Product",
      width: 500,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="userListLink">
            <div className="uerListUser">
              <img
                src={params.row.img}
                className="userListImg"
                alt={params.row.name}
              />
              {params.row.name}
            </div>
          </Link>
        );
      },
    },

    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="userListEdit">Buy</button>
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
        rows={productData}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        checkboxSelection
      />
    </div>
  );
};

export default Products;
