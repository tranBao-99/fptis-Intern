import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./RecordDetail.css"

RecordDetail.propTypes = {
    item: PropTypes.object,
    turnOn: PropTypes.bool,
    turnOff: PropTypes.func,
    updateRecord: PropTypes.func,
};

function RecordDetail(props: any) {
    const { turnOn, item, turnOff, updateRecord } = props;
    return turnOn ? (
        <div className="RecordDetail">

            <div className="RecordDetail__area">
                <div className="RecordDetail__data">
                    <label className="RecordDetail__label">Mã</label>
                    <input className="RecordDetail__input "
                        type="text"
                        defaultValue={item.id}
                        onChange={(e) => item.id = e.target.value}></input>
                </div>

                <div className="RecordDetail__data">
                    <label className="RecordDetail__label">Tên</label>
                    <input className="RecordDetail__input"
                        type="text"
                        defaultValue={item.name}
                        onChange={(e) => item.name = e.target.value}></input>
                </div>

                <div className="RecordDetail__data">
                    <label className="RecordDetail__label">Email</label>
                    <input className="RecordDetail__input"
                        type="text"
                        defaultValue={item.email}
                        onChange={(e) => item.email = e.target.value}></input>
                </div>

                <div className="RecordDetail__data">
                    <label className="RecordDetail__label">Phòng ban</label>
                    <input className="RecordDetail__input"
                        type="text"
                        defaultValue={item.department}
                        onChange={(e) => item.department = e.target.value}></input>
                </div>

                <div className="RecordDetail__data">
                    <label className="RecordDetail__label">Mã phòng ban </label>
                    <input className="RecordDetail__input"
                        type="text"
                        defaultValue={item.deId}
                        onChange={(e) => item.deId = e.target.value}></input>
                </div>

                <div className="RecordDetail__data">
                    <label className="RecordDetail__label">Ngày đề nghị</label>
                    <input className="RecordDetail__input"
                        type="date"
                        defaultValue={item.date}
                        onChange={(e) => item.date = e.target.value}></input>
                </div>

                <div className="RecordDetail__data">
                    <label className="RecordDetail__label">Loại đề nghị</label>
                    <input className="RecordDetail__input"
                        type="text"
                        defaultValue={item.type}
                        onChange={(e) => item.type = e.target.value}></input>
                </div>
            </div>

            <div className="RecordDetail__area">
                <div className="RecordDetail__data">
                    <label className="RecordDetail__label">Mô tả</label>
                    <textarea className="RecordDetail__textArea"
                        defaultValue={item.note}
                        onChange={(e) => item.note = e.target.value}></textarea>
                </div>

                <div className="RecordDetail__data">
                    <label className="RecordDetail__label">Trạng thái</label>
                    <input className="RecordDetail__input"
                        type="text"
                        defaultValue={item.state}
                        onChange={(e) => item.state = e.target.value}
                    ></input>
                </div>

                <div className="RecordDetail__data">
                    <label className="RecordDetail__label">Thành tiền</label>
                    <input className="RecordDetail__input"
                        type="text"
                        defaultValue={item.total}
                        onChange={(e) => item.total = e.target.value}></input>
                </div>

                <div className="AddRecordFrom__action">
                    <button className="RecordDetail__btn_add" onClick={() => updateRecord(item)} >Thêm đề nghị</button>
                    <button className="RecordDetail__btn_close" onClick={turnOff}>Đóng</button>
                </div>
            </div>
        </div>
    ) : null;
}

export default RecordDetail;