import React from 'react'
import "./Title.css"

function Title(props: { openAddForm: any; }) {
    const { openAddForm } = props;
    return (
        <div className="Title">
            <p className="Title__content">Đề nghị thanh toán </p>
            <button className="Title__btn_createRecord" onClick={openAddForm} >Tạo đề nghị</button>
        </div>
    );
}
export default Title;
