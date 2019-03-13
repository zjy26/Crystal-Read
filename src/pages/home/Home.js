import React from 'react';

import './home.css';

import {
  Link,
  Router,
  Route
} from 'react-router-dom';

import {String, Url} from '../../config';
import {Http} from '../../utils';

import {connect} from 'react-redux';

import {Input} from 'antd';
import {Button} from 'antd';
import {Checkbox} from 'antd';

import Background from '../../../image/background.png';

import Top250 from '../books/Top250';

const bg = {
  width: "100%",
  height: "400px",
  background: `url(${Background})`
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pass: ''
    };
  }

  render() {
    return (
      <div id='header' style={bg}>
        <h1 className="title"> {String.Title}</h1>
        <div className='login'>
          <div>
            <Input className="input" placeholder={String.Placeholder.UserName}
                   onChange={(e) => this.setState({name: e.target.value})}/>
            <Input className="input" type="password" placeholder={String.Placeholder.Password}
                   onChange={(e) => this.setState({pass: e.target.value})}/>
            <Button onClick={this.onLogin}>{String.Login}</Button>
          </div>
          <div className='password'>
            <Checkbox className="checkbox">{String.SavePassword}</Checkbox>
            <a className='a'>{String.ForgetPassword}</a>
            <Button>
              <Link to="/register">{String.Register}</Link>
            </Button>
          </div>
        </div>
        <div id="headline">{String.Topic}</div>

        <Top250/>
      </div>
    )
  }

  onLogin = () => {
    const url = Url.host + Url.login;
    const {name, pass} = this.state;
    Http.post(url, {
      name,
      pass
    }, (res) => {
      console.log(res);
    }, (e) => {
      console.log(e);
    });
  };
}

function select(store) {
  console.log(store);
  return {}
}

export default connect(select)(Home);
