import React from "react";
import Chart from "../../components/Chart/Chart";
import Features from "../../components/features/Features";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { XAxisData } from "../../datas";

//style
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Features />
      <Chart grid title="month Sale" data={XAxisData} dataKey="sale" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
