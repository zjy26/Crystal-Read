'use strict';

import React from 'react';
import './test.css';

import icon from '../../../image/icon.png';

import { Button } from 'antd';
import { connect } from 'react-redux';

import { String } from '../../config';
import { Colors } from '../../styles'
import { Http } from '../../utils';
import { test } from '../../redux/actions/test'
import { image } from '_superagent@3.8.1@superagent/lib/node/parsers';

const colors = ['#f00', '#ff0', '#0ff'];

class Test extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      no: 0,
      color: colors[0]
    };

    setInterval(() => {
      this.setState({
        no: this.state.no += 1,
        color: colors[this.state.no % 3]
      });
    }, 1000);
  }

  render() {
    let { count } = this.props;
    let { no, color } = this.state;

    let a = `no=${no}`;

    return (
      <div style={{ 
        margin: 100,
        backgroundImage: `url(${icon})` 
       }}>
        <h1>{String.Test}</h1>
        <Button onClick={this.increase}> + </Button>
        <span style={{ margin: 10, fontSize: 20, color: Colors.red }}>{count}</span>
        <Button onClick={this.decrease}> - </Button>

        <h1>
          <span 
            className='count'
            style={{ color: color }}>
            {a}
          </span>
        </h1>
      </div>
    );
  }

  increase = () => {
    this.props.dispatch(test.increase());
  };

  decrease = () => {
    this.props.dispatch(test.decrease());
  }
}

function select(store) {
  return {
    count: store.test.count
  }
}

export default connect(select)(Test);
