import React, { useState } from 'react'
import './App.css';
import Dashboard from "./component/Dashdboard/index"
import Header from "./component/Header/index"
import Title from "./component/Title/index"
import SearchArea from "./component/SearchArea/index"
import SetViewList from "./component/SetViewList/index"
import ListOfRecords from "./component/ListOfRecords/index"
import AddRecordForm from './component/AddRecordForm';
import Select from './component/Select';

function App() {
  const [records, setRecords] = useState(
    [
      { id: 'ID 10-3290-01', name: 'Rodney Cannon', email: 'rodneyCannon@gmail.com', department: 'Phòng CNTT', deId: 'FIS.HO.CNTT', date: '2017-08-01', note: 'Đề nghị thanh toán ...', type: 'Chuyển khoản', state: 'Shipped', total: '1100000đ' },
      { id: 'ID 10-3290-02', name: 'Louis Franklin', email: 'Franklin2121@gmail.com', department: 'Phòng Hành Chính', deId: 'FIS.HO.AD', date: '2018-07-06', note: 'Đề nghị thanh toán ...', type: 'Chuyển khoản', state: 'Cancelled', total: '1300000đ' },
      { id: 'ID 10-3290-03', name: 'Rodney Cannon', email: 'rodneyCannon@gmail.com', department: 'Phòng CNTT', deId: 'FIS.HO.CNTT', date: '2017-06-19', note: 'Đề nghị thanh toán ...', type: 'Chuyển khoản', state: 'Processing', total: '1100000đ' },
      { id: 'ID 10-3290-04', name: 'Rodney Cannon', email: 'rodneyCannon@gmail.com', department: 'Phòng Hành Chính', deId: 'FIS.HO.AD', date: '2020-12-12', note: 'Đề nghị thanh toán ...', type: 'Chuyển khoản', state: 'Shipped', total: '1100000đ' },
      { id: 'ID 10-3290-05', name: 'Rodney Cannon', email: 'rodneyCannon@gmail.com', department: 'Phòng CNTT', deId: 'FIS.HO.CNTT', date: '2010-03-03', note: 'Đề nghị thanh toán ...', type: 'Chuyển khoản', state: 'Shipped', total: '1100000đ' },
      { id: 'ID 10-3290-06', name: 'Rodney Cannon', email: 'rodneyCannon@gmail.com', department: 'Phòng CNTT', deId: 'FIS.HO.CNTT', date: '2021-03-09', note: 'Đề nghị thanh toán ...', type: 'Chuyển khoản', state: 'Shipped', total: '1100000đ' },
      { id: 'ID 10-3290-07', name: 'Rodney Cannon', email: 'rodneyCannon@gmail.com', department: 'Phòng Hành Chính', deId: 'FIS.HO.AD', date: '2017-05-05', note: 'Đề nghị thanh toán ...', type: 'Chuyển khoản', state: 'Shipped', total: '1100000đ' },
      { id: 'ID 10-3290-08', name: 'Rodney Cannon', email: 'rodneyCannon@gmail.com', department: 'Phòng CNTT', deId: 'FIS.HO.CNTT', date: '2019-09-09', note: 'Đề nghị thanh toán ...', type: 'Chuyển khoản', state: 'Cancelled', total: '1100000đ' },
      { id: 'ID 10-3290-09', name: 'Rodney Cannon', email: 'rodneyCannon@gmail.com', department: 'Phòng CNTT', deId: 'FIS.HO.CNTT', date: '2020-02-02', note: 'Đề nghị thanh toán ...', type: 'Chuyển khoản', state: 'Shipped', total: '1100000đ' },
      { id: 'ID 10-3290-10', name: 'Rodney Cannon', email: 'rodneyCannon@gmail.com', department: 'Phòng CNTT', deId: 'FIS.HO.CNTT', date: '2015-05-05', note: 'Đề nghị thanh toán ...', type: 'Chuyển khoản', state: 'Processing', total: '1100000đ' }
    ]
  );
  const [formOn, setFormOn] = useState(false);
  function openAddForm() {
    setFormOn(true);
  }

  function closeAddForm() {
    setFormOn(false);
  }

  function AddRecord(record: any) {
    const newRecords = [...records];
    newRecords.push(record);
    setRecords(newRecords);
  }

  function updateRecord(Record: any) {
    const index = records.findIndex(item => item.id === Record.id);
    const newRecords = [...records];
    newRecords[index] = Record;
    console.log(newRecords);
    setRecords(newRecords);
  }

  function DeleteRecord(record: any) {
    const index = records.findIndex(item => item.id === record.id);
    const newRecords = [...records];
    newRecords.splice(index, 1);
    setRecords(newRecords);
  }

  return (
    <div className="App">
      <Dashboard />
      <div className="App__main" >
        <Header />
        <Title openAddForm={openAddForm} />
        <AddRecordForm trigger={formOn}
          closeAddForm={closeAddForm}
          addRecord={AddRecord} />
        <SearchArea />
        <SetViewList />
        <ListOfRecords records={records}
          DeleteRecord={DeleteRecord}
          updateRecord={updateRecord} />
      </div>
    </div>
  );
}

export default App;

