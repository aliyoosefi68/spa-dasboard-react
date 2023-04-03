import React from "react";
import { Link } from "react-router-dom";

//style
import "./Product.css";

//components
import Chart from "../../components/Chart/Chart";

//Chart data
import { productChartData } from "../../datas";

//image
import productimg1 from "../../images/1.jpg";
import PublishRoundedIcon from "@mui/icons-material/PublishRounded";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h2 className="productTitle">Product</h2>
        <Link to="/newProduct">
          <button className="productAddButton">Create +</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="produtTopLeft">
          <Chart
            title="Sell in This Month"
            data={productChartData}
            dataKey="sale"
          />
        </div>
        <div className="produtTopRight">
          <div className="productInfoTop">
            <img src={productimg1} alt="ddd" className="productImageTop" />
            <span className="productName">watch apple1</span>
          </div>

          <div className="productInfoButtom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID:</div>
              <div className="productInfoValue">132</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Name:</div>
              <div className="productInfoValue">Apple Watch serrise</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">InStore:</div>
              <div className="productInfoValue">No</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Sales:</div>
              <div className="productInfoValue">1350</div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form action="#" className="productForm">
          <div className="productformLeft">
            <label>Product Name</label>
            <input type="text" placeholder="AmazeFit" />

            <label>In Stock</label>
            <select id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label>Active</label>
            <select id="isActive">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="productformRight">
            <div className="productUploader">
              <img src={productimg1} className="productUploadImg" alt="aaa" />
              <label>
                <PublishRoundedIcon />
              </label>
              <input type="file" style={{ display: "none" }} />
            </div>

            <button className="productButton">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
