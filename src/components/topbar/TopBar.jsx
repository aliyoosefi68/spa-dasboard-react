import React from "react";
import "./TopBar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";
import userPic from "../../images/pexels-pixabay-220453.jpg";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">HIELEMENTOR</span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <SettingsIcon />
          </div>
          <Avatar
            src={userPic}
            sizes
            sx={{ width: "40px", height: "40px", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
