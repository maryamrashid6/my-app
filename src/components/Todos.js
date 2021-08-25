import React, { Component } from 'react';
import { Divider, Button, Input, Row, Col, List, Typography } from 'antd';
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import {connect} from 'react-redux'
import {deleteTodo, addTodo} from '../actions/TodoActions'

class Todos extends Component {
    constructor(props){
        super(props);
        this.state = {  
            item: "",
            key: null
        };
    }
    handleAdd =()=>{
        this.props.addTodo(this.state.item);
    }
    handleDelete =(id)=>{
        this.setState({
            key: id
        },()=>{
            this.props.deleteTodo(this.state.key);
        })
        
    }
    handleTextChange = e => {
        this.setState({item: e.target.value});
    };
    render(){
        const {todos}= this.props;
        return (
            <div>
                <h2>To Do List | React Redux</h2>
                <Divider />
                <List
                 bordered
                 dataSource={todos}
                  renderItem={todo => (
                  <List.Item>
                   <Typography.Text>{todo.id}.  {todo.body} </Typography.Text>
                   <Button  
                        onClick={()=>{this.handleDelete(todo.id)}}
                        shape="circle" 
                        icon={<DeleteOutlined />}
                    >
                    </Button>
                   </List.Item>
                  )}
                />
                <br></br>
                <Row>
                    <Col flex={6}>
                        <Input placeholder="Add a new item" onChange={this.handleTextChange} style={{marginTop:4}}/>
                    </Col>
                    <Col flex={1}>
                        <Button  
                        onClick={this.handleAdd}
                        size="large" 
                        shape="circle" 
                        type="dashed" 
                        icon={<PlusCircleOutlined />}
                        >
                        </Button>
                    </Col>
                </Row>
                
                
            </div>
          );
    }
  
 
};

const mapStateToProps =(state)=>{
    return {
        todos: state.todos
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        addTodo: (body)=>{ dispatch (addTodo(body))},
        deleteTodo: (id) =>{dispatch(deleteTodo(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
