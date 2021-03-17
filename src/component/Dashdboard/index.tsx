import React from 'react'
import "./Dashboard.css"
const Dashboard: React.FC = () => {
    return (
        <div className="Dashboard">
            <img className="Dashboard__logo" src={process.env.PUBLIC_URL + "/logo.png"} alt="logo"></img>
            <img className="Dashboard__item" src={process.env.PUBLIC_URL + "/item1.png"} alt="item"></img>
            <p className="Dashboard__line">............</p>
            <img className="Dashboard__item" src={process.env.PUBLIC_URL + "/item2.png"} alt="item"></img>
            <img className="Dashboard__item" src={process.env.PUBLIC_URL + "/item3.png"} alt="item"></img>
            <img className="Dashboard__item" src={process.env.PUBLIC_URL + "/item4.png"} alt="item"></img>
        </div>
    );
}
export default Dashboard;
