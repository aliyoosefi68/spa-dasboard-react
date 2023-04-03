import React from "react";
import "./WidgetLg.css";

//images

import { TransActionData } from "../../datas";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Last Transactions</h3>
      <table className="WidgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        {TransActionData.map((item) => (
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={item.img} alt="" className="widgetLgImg" />
              <span className="widgetLgName">{item.userName}</span>
            </td>
            <td className="widgetLgDate">{item.date}</td>
            <td className="widgetLgAmount">{item.amount}</td>
            <td className="widgetLgStatus">
              <Button type={item.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetLg;
