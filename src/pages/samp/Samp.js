'use strict';

import React from 'react';
import {Layout, Input, Button, Modal} from 'antd';
import {connect} from 'react-redux';
import {Http} from '../../utils';
import {Url} from '../../config';
import './Samp.css';

class Samp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      brand: '',
      duration: 0,
      location: '',
      area: 0.0,
      plan: ''
    }
  }

  render() {
    return (
      <Layout style={styles.container} >
        <img src="./image/logo.png" style = {{width:'100%'}}/>

        <Layout style={styles.space} className='top'>
          <span style={styles.tag}>姓名</span>
          <Input placeholder="输入姓名" style={styles.input} onChange={(m) => this.setState({name: m.target.value})}/>
        </Layout>

        <Layout style={styles.space}>
          <span style={styles.tag}>电话</span>
          <Input placeholder="输入电话号码" type="tel" maxLength="11" style={styles.input} onChange={(m) => this.setState({phone: m.target.value})}/>
        </Layout>

        <Layout style={styles.space}>
          <span style={styles.tag}>餐饮品牌</span>
          <Input placeholder="输入品牌" style={styles.input} onChange={(m) => this.setState({brand: m.target.value})}/>
        </Layout>

        <Layout style={styles.space}>
          <span style={styles.tag}>经营餐厅年数</span>
          <Input placeholder="输入经营年数" type="number" style={styles.input} onChange={(m) => this.setState({duration: m.target.value})}/>
        </Layout>

        <Layout style={styles.space}>
          <span style={styles.tag}>地址（省市）</span>
          <Input placeholder="输入省市，格式：浙江-杭州" style={styles.input} onChange={(m) => this.setState({location: m.target.value})}/>
        </Layout>

        <Layout style={styles.space}>
          <span style={styles.tag}>“城店”预计面积</span>
          <Input placeholder="输入面积" type="number" style={styles.input} onChange={(m) => this.setState({area: m.target.value})}/>
        </Layout>

        <Layout style={styles.space}>
          <span style={styles.tag}>计划开始时间</span>
          <Input placeholder="输入日期，格式：2018-01-01" style={styles.input} onChange={(m) => this.setState({plan: m.target.value})}/>
        </Layout>

        <Button type="primary" style={styles.button} onClick={this.submit}>提交</Button>
      </Layout>
    );
  }

  submit = () => {
    const url = Url.host + Url.samp_register;
    for(let k in this.state) {
      if(!this.state[k]) {
        Modal.warn({
          title: '警告',
          content: '请检查输入是否正确！',
        });
        return;
      }
    }

    Http.post(url, this.state, (res) => {
      if(res.code === 0) {
        Modal.success({
          title: '提示',
          content: '提交成功！',
        });
      }
    }, (e) => {
      console.log(e.toString());
      Modal.error({
        title: '提示',
        content: '出错啦，请联系管理员！',
      });
    })
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  space: {
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 30,
    marginLeft: 10,
    width: 500,
    height: 70,
    fontSize: 30
  },
  date_select: {
    height: 60,
    width: 320
  },
  button: {
    marginTop: 70,
    width: 250,
    height: 70,
    fontSize: 30
  },
  desc: {
    marginTop: 20,
    height: 30,
    textAlign: 'center',
    fontSize: 30
  },
  tag: {
    marginTop: 35,
    width: 230,
    height: 60,
    textAlign: 'center',
    fontSize: 30
  }
};

export default connect()(Samp);

