import React, { useState } from 'react';
import { Form, DatePicker, message, Input, Select, InputNumber, Button, Divider, Modal, Empty, Row, Col} from 'antd';
import Todos from './components/Todos';
import 'antd/dist/antd.css';
import './index.css';
import { Tabs } from 'antd';


const { TabPane } = Tabs;
const { TextArea } = Input;

const App = ({ form }) => {
  const [date, setDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [name, setName] = useState(null);
  const [major, setMajor] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [institution, setInstitution] = useState(null);
  const [ID, setID] = useState(null);
  const [num, setNum] = useState(null);
  const [designation, setDesignation] = useState(null);
  const [location, setLocation] = useState(null);
  const [degree, setDegree] = useState(null);
  const [gender, setGender] = useState(null);
  const [view, setView] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const handleDateChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  const handleStartDateChange = value => {
    setStartDate(value);
  };
  const handleEndDateChange = value => {
    setEndDate(value);
  };
  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleMajorChange = e => {
    setMajor(e.target.value);
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handleAddressChange = e => {
    setAddress(e.target.value);
  };
  const handleInstitutionChange = e => {
    setInstitution(e.target.value);
  };
  const handleIDChange = e => {
    setID(e);
  };
  const handleNumChange = e => {
    setNum(e);
  };
  const handleDesignationChange = e => {
    setDesignation(e);
  };
  const handleLocationChange = e => {
    setLocation(e);
  };
  const handleDegreeChange = e => {
    setDegree(e);
  };
  const handleGenderChange = e => {
    setGender(e);
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
    <div >
      {view?
      
      <div style={{ width:1000, margin:"auto"}}>
        
        <Row>
      <Col  flex={2}>
      <div style={{ textAlign:"center", width: 350,margin: '100px auto' }}>
        <Todos/>
        
        </div>
      </Col>

      <Col flex={3}>
        
   
    <div style={{ width: 350, margin: '100px auto' }}>
      <center> <h2>Help us get to know you better!</h2></center>
    
      <Divider />

      <Tabs defaultActiveKey="1" >
    <TabPane tab="Personal Info" key="1">
      <br></br>
    <Form
    labelCol={{
      span: 6,
    }}
    wrapperCol={{
      span: 18,
    }}
    
      layout="horizontal"
      >
        <Form.Item label="Full Name">
          <Input onChange={handleNameChange} />
        </Form.Item>

        <Form.Item label="CNIC" required tooltip="This is a required field">
          <InputNumber style={{ width: '100%' }}  onChange={handleIDChange}/>
        </Form.Item>

        <Form.Item label="Gender">
          <Select onChange={handleGenderChange}>
            <Select.Option value="Male">Male</Select.Option>
            <Select.Option value="Female">Female</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Designation">
          <Select onChange={handleDesignationChange}>
            <Select.Option value="softwareEngineer">Software Engineer</Select.Option>
            <Select.Option value="QAEngineer">QA Engineer</Select.Option>
            <Select.Option value="Project Manager">Project Manager</Select.Option>
          </Select>
        </Form.Item>



        <Form.Item label="Date of Birth">
          <DatePicker  onChange={handleDateChange} />
        </Form.Item>


      </Form>
      
    </TabPane>
    <TabPane tab="Education" key="2">
    <br></br>
    <Form
    labelCol={{
      span: 6,
    }}
    wrapperCol={{
      span: 18,
    }}
      layout="horizontal"
      >
       <Form.Item label="Degree">
          <Select onChange={handleDegreeChange}>
            <Select.Option value="bachelors">Bachelors</Select.Option>
            <Select.Option value="masters">Masters</Select.Option>
            <Select.Option value="PhD">PhD</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Major">
          <Input onChange={handleMajorChange} />
        </Form.Item>

        <Form.Item label="Institution">
          <Input onChange={handleInstitutionChange} />
        </Form.Item>


        <Form.Item label="Start Date">
          <DatePicker  onChange={handleStartDateChange} />
        </Form.Item>

        <Form.Item label="End Date">
          <DatePicker  onChange={handleEndDateChange} />
        </Form.Item>

      </Form>
    </TabPane>
    <TabPane tab="Contact" key="3">
    <br></br>
    <Form
    labelCol={{
      span: 6,
    }}
    wrapperCol={{
      span: 18,
    }}
    
      layout="horizontal"
      >
      

        <Form.Item label="City">
          <Select onChange={handleLocationChange}>
            <Select.Option value="Karachi">Karachi</Select.Option>
            <Select.Option value="Lahore">Lahore</Select.Option>
            <Select.Option value="Islamabad">Islamabad</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Mobile Num">
          <InputNumber style={{ width: '100%' }} onChange={handleNumChange}/>
        </Form.Item>


        <Form.Item label="Email">
          <Input onChange={handleEmailChange} />
        </Form.Item>

        <Form.Item label="Address">
        <TextArea rows={3} onChange={handleAddressChange}/>
        </Form.Item>


        <Form.Item>
          <Button onClick={handleViewChange}>Save</Button>
        </Form.Item>
      </Form>
    </TabPane>
  </Tabs>

      
      </div>
      </Col>
        </Row>

      <Modal title="Please Enter CNIC" visible={openModal} onOk={handleOk} onCancel={handleCancel}>
        <p>CNIC is Mandatory. Please Enter your CNIC to proceed...</p>
      </Modal>

      </div>
      : 
      <div style={{ width: 750, margin: '100px auto' }}>
        <center><h2>Here's what we know about you: </h2>
        <Divider />
        <p><b>Your Name: </b>{name? name : "Unknown"} </p>
        <p><b>CNIC: </b> {ID}</p>
        <p><b>Gender: </b>{gender? gender : "Unknown"} </p>
        <p><b>Designation: </b> {designation ? designation : <Empty />}</p>
        <p><b>Location: </b> {location ? location : <Empty />}</p>
        <p><b>Date of Birth: </b> {date ? date.format('YYYY-MM-DD') : "None"}</p>
        </center>
        <Divider />
        <p>You have a {degree ? degree : "Unknown"} Degree in {major ? major : "Unknown major"} from the institute {institution ? institution : "Unknown "} From {startDate ? startDate.format('YYYY-MM-DD') : "Unknown Date" } To {endDate ? endDate.format('YYYY-MM-DD') : "Unknown Date"}</p>
        <Divider />
        <center>
        <p><b>Your Contact Information is given below:</b></p>
        
        <p><b>Your City: </b> {location ? location : <Empty />}</p>
        <p><b>Address: </b> {address ? address: "Unknown"}</p>
        <p><b>Email: </b> {email? email: "Unknown"}</p>
        <p><b>Mobile Number: </b> {num ?num: "Unknown"}</p>
        </center>
      </div>
      
      }

    </div>
  );
};


export default App;
