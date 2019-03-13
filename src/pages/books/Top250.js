import React, {Component} from 'react';
import './top250.css';
import {List, Icon} from 'antd';
import {http} from '../../utils/http';
import {Url} from '../../config';

const IconText = ({type, text}) => (
  <span>
    <Icon type={type} style={{marginRight: 8}}/>
    {text}
  </span>
);

class Top250 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };

    this.pagination = {
      pageSize: 25,
      current: 1,
      total: 250,
      onChange: ((offset) => {
        this.fetch(offset);
      }),
    };
  }

  componentDidMount() {
    this.fetch(0);
  }

  fetch(start) {
    const url = Url.host + Url.top250;
    http.post(url, {
      start: start * 25,
      pagesize: 25
    }, (res) => {
      this.setState({
        listData: res.data.map((ele) => {
          return {
            href: ele.url,
            title: ele.title,
            avatar: ele.img,
            desc: ele.abstract,
            content: ele.info,
            star: ele.mark,
            judge: ele.judge
          }
        })
      });
    }, (err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <List
        itemLayout="vertical"
        size="small"
        className="list"
        pagination={this.pagination}
        dataSource={this.state.listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[<IconText type="star-o" text={item.star}/>,
              <IconText type="message" text={item.judge}/>]}
            extra={<img width={120} alt="logo"
                        src={item.avatar}/>}>
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.desc}/>
            {item.content}
          </List.Item>
        )}
      />
    );
  }
}

export default Top250;
