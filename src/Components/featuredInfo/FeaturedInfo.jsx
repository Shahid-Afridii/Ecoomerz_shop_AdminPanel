import React from 'react';
import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

const Featuredinfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">
                    Revenue
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">  $2,415 </span>
                    <span className="featuredMoneyRate">
                        -11.4
                        <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">
                    Compared To Last Month
                </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    Sales
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">  $4,415 </span>
                    <span className="featuredMoneyRate">
                        -12.4
                        <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">
                    Compared To Last Month
                </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    Cost
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">  $3,415 </span>
                    <span className="featuredMoneyRate">
                        +2.4
                        <ArrowUpward className="featuredIcon "/>
                    </span>
                </div>
                <span className="featuredSub">
                    Compared To Last Month
                </span>
            </div>
        </div>
    );
}

export default Featuredinfo;
