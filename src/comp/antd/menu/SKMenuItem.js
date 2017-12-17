import {Menu} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import OriginMenu from './OriginMenu';
import AntdComp from '../AntdComp';

Menu.Item.defaultProps = SK.assign({}, {
  disabled: false
}, OriginMenu.defaultProps, Menu.Item.defaultProps, {});

Menu.Item.propTypes = SK.assign({
  //https://github.com/react-component/menu/blob/master/src/MenuItem.jsx#L21
  onItemHover: PropTypes.func
}, {
  //https://ant.design/components/menu-cn/#Menu.Item
  disabled: PropTypes.bool,
  //https://github.com/react-component/menu#menuitem-props
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
}, OriginMenu.propTypes, Menu.Item.propTypes, {});

export default class SKMenuItem extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Menu.Item.defaultProps, {
    compTag: Menu.Item
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Menu.Item.propTypes, {});


  constructor(...args) {
    super(...args);
    this.compName = 'SKMenuItem';
  }
}
