import React from 'react';
import Chart from '../../Components/chart/Chart';
import Featuredinfo from '../../Components/featuredInfo/FeaturedInfo';
import "./home.css"
import {userData} from "../../DummyData"
import WidgetSm from "../../Components/widgetSmall/WidgetSm";
import WidgetLg from '../../Components/widgetLarge/WidgetLg';

const Home = () => {
    return (
        <div className="home">
            <Featuredinfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
             <WidgetSm/>
             <WidgetLg/>
            </div>
        </div>
    );
}

export default Home;
