import React from "react";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

import { newMemebrs } from "../../datas";

//style
import "./WidgetSm.css";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joins Members</span>
      <ul className="widgetSmList">
        {newMemebrs.map((member) => (
          <li key={member.id} className="widgetSmListItem">
            <img src={member.img} alt="imdd" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{member.userName}</span>
              <span className="widgetSmUserTitle">{member.title}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityRoundedIcon className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
