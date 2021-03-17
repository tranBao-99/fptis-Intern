import React from 'react'
import Select from '../Select';
import "./SetViewList.css"

const SetViewList: React.FC = () => {
    return (
        <div className="SetViewList">
            <h2 className="SetViewList__title">Tất cả đề nghị </h2>
            <p className="SetViewList__action">Hiện thị</p>
            <Select list={['tất cả']}
                size={1} />
            <button className="SetViewList__btn_left"><img src={process.env.PUBLIC_URL + "/Left.png"} alt=""></img></button>
            <button className="SetViewList__btn_num">1</button>
            <button className="SetViewList__btn_num">2</button>
            <button className="SetViewList__btn_num">3</button>
            <b className="SetViewList__line">...</b>
            <button className="SetViewList__btn_num">10</button>
            <button className="SetViewList__btn_right"><img src={process.env.PUBLIC_URL + "/Right.png"} alt=""></img></button>
            <select className="SetViewList__listOfNum">
                <option>8</option>
            </select>
        </div>
    );
}
export default SetViewList;
