import React, { useState } from 'react';
import { Form, DatePicker, message, Input, Select, InputNumber, Switch, Button, Divider, Modal, Empty} from 'antd';
import 'antd/dist/antd.css';
import './index.css';

const App = () => {
  const [date, setDate] = useState(null);
  const [name, setName] = useState(null);
  const [ID, setID] = useState(null);
  const [designation, setDesignation] = useState(null);
  const [location, setLocation] = useState(null);
  const [fullTime, setfullTime] = useState(false);
  const [view, setView] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const handleDateChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleIDChange = e => {
    setID(e);
  };
  const handleDesignationChange = e => {
    setDesignation(e);
  };
  const handleLocationChange = e => {
    setLocation(e);
  };
  const handleFullTimeChange = e => {
    setfullTime(e);
  };
  const handleOk = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };
  const handleViewChange = () => {
    if(ID==null){
      setOpenModal(true);
    }
    else{
      setView(false);
    }
    
  };
  return (
    <div style={{ width: 350, margin: '100px auto' }}>
      {view?
      <div>
      <center><h2>Help us get to know you better!</h2></center>
      <Divider />
      <Form
    labelCol={{
      span: 10,
    }}
    wrapperCol={{
      span: 13,
    }}
      layout="horizontal"
      >
        <Form.Item label="Full Name">
          <Input onChange={handleNameChange} />
        </Form.Item>

        <Form.Item label="Employee ID">
          <InputNumber onChange={handleIDChange}/>
        </Form.Item>

        <Form.Item label="Designation">
          <Select onChange={handleDesignationChange}>
            <Select.Option value="softwareEngineer">Software Engineer</Select.Option>
            <Select.Option value="QAEngineer">QA Engineer</Select.Option>
            <Select.Option value="Project Manager">Project Manager</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Location">
          <Select onChange={handleLocationChange}>
            <Select.Option value="Karachi">Karachi</Select.Option>
            <Select.Option value="Lahore">Lahore</Select.Option>
            <Select.Option value="Islamabad">Islamabad</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Date of Birth">
          <DatePicker  onChange={handleDateChange} />
        </Form.Item>

        <Form.Item label="Full-Time Employee"  onChange={handleFullTimeChange}>
          <Switch />
        </Form.Item>

        <Form.Item>
          <Button onClick={handleViewChange}>Save</Button>
        </Form.Item>
      </Form>

      <Modal title="Please Enter ID" visible={openModal} onOk={handleOk} onCancel={handleCancel}>
        <p>Employee ID is Mandatory. Please Enter your ID to proceed...</p>
      </Modal>

      </div>
      : 
      <div style={{ marginTop: 16 }}>
        <center><h2>Here's what we know about you: </h2>
        <Divider />
        <p><b>Your Name: </b>{name? name : "Unknown"} </p>
        <p><b>ID: </b> {ID}</p>
        <p><b>Designation: </b> {designation ? designation : <Empty />}</p>
        <p><b>Location: </b> {location ? location : <Empty />}</p>
        <p><b>Full Time Employee: </b> {fullTime ? "Yes" : 'No'}</p>
        <p><b>Date of Birth: </b> {date ? date.format('YYYY-MM-DD') : "None"}</p>
        </center>
      </div>
      
      }

    </div>
  );
};

export default App;
