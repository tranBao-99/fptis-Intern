import React, { useState } from 'react'
import Record from '../Record';
import "./ListOfRecords.css"
import PropTypes from 'prop-types';
import RecordDetail from '../RecordDetail';

ListOfRecords.propTypes = {
    records: PropTypes.array,
    DeleteRecord: PropTypes.func,
    updateRecord: PropTypes.func,
}
function ListOfRecords(props: any) {
    const { records, DeleteRecord, updateRecord } = props;
    const [onModal, setOnModal] = useState(false);
    const [item, setItem] = useState({
        id: "", name: "", email: "", depart: "", deId: "", date: "", type: "", note: "", state: "", total: ""
    });

    function openModal(item: any) {
        setItem(item);
        setOnModal(true);
    }

    function closeModal() {
        setOnModal(false);
    }

    return (
        <div className="ListOfRecords">
            <div className='ListOfRecords__title'>
                <img className="ListOfRecords__title__checkbox" src={process.env.PUBLIC_URL + "/checkbox.png"} alt="logo"></img>
                <p className="ListOfRecords__title__id">Mã đề nghị</p>
                <p className="ListOfRecords__title__name">Người đề nghị</p>
                <p className="ListOfRecords__title__department">Đơn vị duyệt</p>
                <p className="ListOfRecords__title__date">Ngày đề nghị</p>
                <p className="ListOfRecords__title__note">Mô tả</p>
                <p className="ListOfRecords__title__type">Loại đề nghị</p>
                <p className="ListOfRecords__title__state">Trạng thái</p>
                <p className="ListOfRecords__title__total">Thành tiền</p>
                <p className="ListOfRecords__title__action">Thao tác</p>
            </div>

            <RecordDetail turnOn={onModal}
                turnOff={closeModal}
                item={item}
                updateRecord={updateRecord} />

            {
                records.map((record: object, index: React.Key | null | undefined) => (
                    <Record key={index}
                        item={record}
                        DeleteRecord={DeleteRecord}
                        openModal={openModal} />
                ))
            }
        </div>
    );
}
export default ListOfRecords;
