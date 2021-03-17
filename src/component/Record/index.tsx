import React from 'react'
import Label from '../Label/index';
import PropTypes from 'prop-types';
import "./Record.css"
import Select from '../Select';

Record.propTypes = {
    item: PropTypes.object,
    DeleteRecord: PropTypes.func,
    openModal: PropTypes.func,
};

function Record(props: { item: any; DeleteRecord: any; openModal: any }) {
    const { item, DeleteRecord, openModal } = props;
    const list = ['a', 'b', 'c', 'd'];
    const size = 1;

    return (
        <div className="Record">
            <img className="Record__checkbox" src={process.env.PUBLIC_URL + "/checkbox.png"} alt="logo"></img>

            <p className="Record__id">{item.id}</p>

            <div className="Record__name">
                <b>{item.name}</b>

                <p>{item.email}</p>
            </div>

            <div className="Record__depart">
                <b>{item.department}</b>

                <p>{item.deId}</p>

            </div>

            <p className="Record__date"><b>{item.date}</b></p>

            <p className="Record__note"><b>{item.note}</b></p>

            <p className="Record__type"><b>{item.type}</b></p>

            <Label state={item.state} />

            <p className="Record__total"><b>{item.total}</b></p>

            <div className="Record__action">
                <img className="Record__action__btn_view"
                    src={process.env.PUBLIC_URL + "/view.png"}
                    alt="logo"
                    onClick={() => openModal(item)}></img>

                <img className="Record__action__btn_update"
                    src={process.env.PUBLIC_URL + "/fix.png"}
                    alt="logo"></img>

                <img className="Record__action__btn_delete"
                    src={process.env.PUBLIC_URL + "/delete.png"}
                    alt="logo"
                    onClick={() => DeleteRecord(item)}></img>

            </div>
        </div>
    );
}
export default Record;
