import 'antd/dist/antd.css';
import React from "react";
import "../App.css";
import { Form, Button, Input, Row, Col, Card } from "antd";
import { useState } from 'react'

const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

function AddCourse() {
    const[data,setdata]=useState({CourseName : "" ,CourseDuration:"",Price:"",Actions:""})
   

    
    const onTextChange =(e) =>{
        
        let Element = e.target.name
        setdata({...data,[Element]:e.target.value})
    }


    const onSubmit =() => {
        console.log(data)
    }

    
    return (
        <div className="course">
          <Card
            title="Apply For Course">
            <Row>
              <Col>
                <Form
                  name="basic"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off">
                  <Row>
                    <Col>
                      <Form.Item
                        label="Course Name"
                        name="Course Name">
                        
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    
                    <Col>
                      
                      <Input name="Course Name" onChange = {onTextChange} />
                    </Col>
                  </Row>
    
                  <Row>
                    <Col>
                      <Form.Item
                        label="Course Duration"
                        name="Course Duration">
                        
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input name="Course Duration" onChange={onTextChange}/>
                    </Col>
                  </Row>
    
                  <Row>
                    <Col>
                      <Form.Item
                        label="Price"
                        name="Price">
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    
                    <Col>
                      
                      <Input name="Price" onChange={onTextChange}/>
                    </Col>
                  </Row>
    
                  <Row>
                    <Col>
                      <Form.Item
                        wrapperCol={{
                          offset: 8,
                          span: 16,
                        }}>
                        <Button type="primary" htmlType="submit" class="button-85" onClick={onSubmit}>
                          Submit
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Card>
        </div>
      );


}
export default AddCourse;