import React from 'react'
import "./Header.css"
const Header: React.FC = () => {
    return (
        <div className="Header">
            <button className="Header__btn_add">+</button>
            <b className="Header__language">Tiếng việt </b>
            <img className="Header__notice" src={process.env.PUBLIC_URL + "/notice_icon.png"} alt="notice"></img>
            <div className="Header__user">
                <p className="Header__user__name">Vu Tuan</p>
                <p className="Header__user__role">Administrator</p>
            </div>
            <img className="Header__user_img" src={process.env.PUBLIC_URL + "/Oval.png"} alt="img"></img>
        </div>
    );
}
export default Header;
