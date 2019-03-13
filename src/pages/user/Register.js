import React, {Component} from 'react';

import {
  Input,
  Button
} from 'antd';

import {String, Url} from "../../config";
import {Http} from '../../utils';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pass: '',
      rpass: ''
    }
  }

  render() {
    return (
      <div>
        <Input placeholder={'输入用户名'}
               onChange={(m) => this.setState({name: m.target.value})}/>

        <Input type="password" placeholder={'输入密码'}
               onChange={(e) => this.setState({pass: e.target.value})}/>

        <Input type="password" placeholder={'再次输入密码'}
               onChange={(e) => this.setState({rpass: e.target.value})}/>

        <Button onClick={this.onRegister}>{'注册'}</Button>
      </div>
    );
  }

  onRegister = () => {
    const url = Url.host + Url.register;
    const {name, pass, rpass} = this.state;
    if(pass === rpass) {
      Http.post(url, {
        name,
        pass
      }, (res) => {
        // todo: 成功，并处理token
      }, (e) => {
        // todo: 失败
      });
    } else {
      // todo: 提示用户密码输入错误
    }
  }
}

export default Register;
