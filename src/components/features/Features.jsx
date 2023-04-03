import React from "react";

//style
import "./Features.css";

//icons
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

const Features = () => {
  return (
    <div className="featuers">
      <div className="featuerItem">
        <span className="featureTitle">Revnue</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            -11.4
            <ArrowDownwardRoundedIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="featcherSubTitle">compare to last month</span>
      </div>

      <div className="featuerItem">
        <span className="featureTitle">Revnue</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,215</span>
          <span className="featureRate">
            +1.4
            <ArrowUpwardRoundedIcon className="featureIcon " />
          </span>
        </div>
        <span className="featcherSubTitle">compare to last month</span>
      </div>

      <div className="featuerItem">
        <span className="featureTitle">Revnue</span>
        <div className="featureContainer">
          <span className="featureMoney">$2,415</span>
          <span className="featureRate">
            -11.4
            <ArrowDownwardRoundedIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="featcherSubTitle">compare to last month</span>
      </div>
    </div>
  );
};

export default Features;
