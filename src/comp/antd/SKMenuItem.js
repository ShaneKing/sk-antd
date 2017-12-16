import {Menu} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from './AntdComp';

Menu.Item.defaultProps = SK.assign({}, {
  disabled: false
}, Menu.defaultProps, Menu.Item.defaultProps, {});

Menu.Item.propTypes = SK.assign({}, {
  disabled: PropTypes.bool
}, Menu.propTypes, Menu.Item.propTypes, {});

export default class SKMenuItem extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Menu.Item.defaultProps, {
    compTag: Menu.Item
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Menu.Item.propTypes, {});


  constructor(...args) {
    super(...args);
    this.compName = 'SKMenuItem';
  }

  allowTransProps2Self() {
    return Object.keys(Menu.propTypes);
  }
}
