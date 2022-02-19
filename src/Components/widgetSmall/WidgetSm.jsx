import { Visibility } from '@material-ui/icons';
import React from 'react';
import "./widgetSm.css"

const Widgetsm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">
                New Join Members
            </span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-CgCnOUSFp4lffJY24-qHeCzGyPTTMdwUiw&usqp=CAU" alt="" className="widgetsmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Glenn Maxwell</span>
                        <span className="widgetSmUserTitle">Australian Cricketer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Widgetsm;

