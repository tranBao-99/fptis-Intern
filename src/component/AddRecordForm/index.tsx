import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./AddRecordForm.css"

AddRecordForm.propTypes = {
    trigger: PropTypes.bool,
    closeAddForm: PropTypes.func,
    addRecord: PropTypes.func,
};

function AddRecordForm(props: any) {
    const { closeAddForm, addRecord } = props;
    const [record, setRecord] = useState({
        id: "", name: "", email: "", depart: "", deId: "", date: "", type: "", note: "", state: "", total: ""
    })
    function handleClickBtnAdd() {
        addRecord(record);
    }

    return (props.trigger) ? (
        <div className="AddRecordForm">
            <div className="AddRecordForm__area">
                <div className="AddRecordForm__data">
                    <label className="AddRecordForm__label">Mã</label>
                    <input className="AddRecordForm__input "
                        type="text"
                        defaultValue={record.id}
                        onChange={(e) => setRecord({ ...record, id: e.target.value })}></input>
                </div>

                <div className="AddRecordForm__data">
                    <label className="AddRecordForm__label">Tên</label>
                    <input className="AddRecordForm__input"
                        type="text"
                        defaultValue={record.name}
                        onChange={(e) => setRecord({ ...record, name: e.target.value })}></input>
                </div>

                <div className="AddRecordForm__data">
                    <label className="AddRecordForm__label">Email</label>
                    <input className="AddRecordForm__input"
                        type="text"
                        defaultValue={record.email}
                        onChange={(e) => setRecord({ ...record, email: e.target.value })}></input>
                </div>

                <div className="AddRecordForm__data">
                    <label className="AddRecordForm__label">Phòng ban</label>
                    <input className="AddRecordForm__input"
                        type="text"
                        defaultValue={record.depart}
                        onChange={(e) => setRecord({ ...record, depart: e.target.value })}></input>
                </div>

                <div className="AddRecordForm__data">
                    <label className="AddRecordForm__label">Mã phòng ban </label>
                    <input className="AddRecordForm__input"
                        type="text"
                        defaultValue={record.deId}
                        onChange={(e) => setRecord({ ...record, deId: e.target.value })}></input>
                </div>

                <div className="AddRecordForm__data">
                    <label className="AddRecordForm__label">Ngày đề nghị</label>
                    <input className="AddRecordForm__input"
                        type="date"
                        defaultValue={record.date}
                        onChange={(e) => setRecord({ ...record, date: e.target.value })}></input>
                </div>

                <div className="AddRecordForm__data">
                    <label className="AddRecordForm__label">Loại đề nghị</label>
                    <input className="AddRecordForm__input"
                        type="text"
                        defaultValue={record.type}
                        onChange={(e) => setRecord({ ...record, type: e.target.value })}></input>
                </div>
            </div>

            <div className="AddRecordForm__area">
                <div className="AddRecordForm__data">
                    <label className="AddRecordForm__label">Mô tả</label>
                    <textarea className="AddRecordForm__textArea"
                        defaultValue={record.note}
                        onChange={(e) => setRecord({ ...record, note: e.target.value })}></textarea>
                </div>

                <div className="AddRecordForm__data">
                    <label className="AddRecordForm__label">Trạng thái</label>
                    <select className="AddRecordForm__input"
                        defaultValue={record.state}
                        onChange={(e) => setRecord({ ...record, state: e.target.value })}
                    >
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Cancel</option>
                    </select>
                </div>

                <div className="AddRecordForm__data">
                    <label className="AddRecordForm__label">Thành tiền</label>
                    <input className="AddRecordForm__input"
                        type="text"
                        defaultValue={record.total}
                        onChange={(e) => setRecord({ ...record, total: e.target.value })}></input>
                </div>

                <div className="AddRecordFrom__action">
                    <button className="AddRecordForm__btn_add" onClick={() => handleClickBtnAdd()}>Thêm đề nghị</button>
                    <button className="AddRecordForm__btn_close" onClick={closeAddForm}>Đóng</button>
                </div>
            </div>

        </div>
    ) : null;
}

export default AddRecordForm;