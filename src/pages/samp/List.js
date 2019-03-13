import React, {Component} from 'react';
import {Table} from 'antd';
import {Http} from '../../utils';
import {Url} from '../../config';
import _ from 'lodash';
import moment from 'moment';
import {Modal} from "antd/lib/index";

const columns = [{
  title: '序号',
  dataIndex: 'index',
  key: 'index'
},{
  title: '姓名',
  dataIndex: 'name',
  key: 'name'
}, {
  title: '电话',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: '餐饮品牌',
  dataIndex: 'brand',
  key: 'brand',
}, {
  title: '经营餐厅年数',
  dataIndex: 'duration',
  key: 'duration',
}, {
  title: '地址（省市）',
  dataIndex: 'location',
  key: 'location',
}, {
  title: '"城店"预计面积',
  dataIndex: 'area',
  key: 'area',
}, {
  title: '计划开始时间',
  dataIndex: 'plan',
  key: 'plan',
},{
  title: '报名时间',
  dataIndex: 'created_at',
  key: 'created_at'
}];

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.getList();
  }

  render() {
    return (
      <Table columns={columns} dataSource={this.state.data}/>
    );
  }

  getList = () => {
    const url = Url.host + Url.samp_list;
    Http.get(url, (res) => {
      console.log(res);
      this.setState({
        data:  _.remove(_.uniqBy(res.data, 'phone'), (ele) => ele.phone !== '1').map((ele, i) => {
          ele.index = i + 1;
          ele.created_at = moment(ele.created_at).format('YYYY-MM-DD HH:mm:ss');
          return ele;
        })
      });
    }, err => {
      console.log(err);
      Modal.error({
        title: '提示',
        content: '获取数据失败！',
      });
    });
  }
}

module.exports = List;
