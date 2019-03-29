import React from 'react';

import './home.css';

import {
  Link,
  Router,
  Route
} from 'react-router-dom';

import {String} from '../../config';

import {connect} from 'react-redux';

import {Modal, Button, Form, Icon, Input, Checkbox} from 'antd';

import Background from '../../../image/background.png';

import Top250 from '../books/Top250';
import { spawn } from 'child_process';

const bg = {
  background: `url(${Background}) 100% 100%`
};

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
      if (!err) {
          console.log('Received values of form: ', values);
      }
      });
  }

  render() {
      const { getFieldDecorator } = this.props.form;
      return (
      <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
          {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
          })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
          })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
          })(
              <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
          </Button>
          Or <a href="">register now!</a>
          </Form.Item>
      </Form>
      );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'login' })(NormalLoginForm);

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pass: '',
      visible:false,
      loading: false
    };
  }

  render() {
    const { visible, loading } = this.state;
    return (
      <div id='header' style={bg}>
        <h1 className="title"> {String.Title}</h1>
        <div className='login'>
          <div>
            <Button type="primary" onClick={this.showModal}>
              登录
            </Button>
              <Modal
                visible={visible}
                title="登录"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                  <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                    {String.Login}
                  </Button>,
                ]}
              >
               <WrappedNormalLoginForm/>
              </Modal>
          </div>
        </div>
        <div id="headline">{String.Topic}</div>
        <Top250/>
      </div>
    )
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }
}

function select(store) {
  console.log(store);
  return {}
}

export default connect(select)(Home);