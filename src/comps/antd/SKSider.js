import {Layout} from 'antd';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../utils/Comp';

Layout.Sider.propTypes = SK.assign({}, Layout.Sider.propTypes, {
  collapsed: React.PropTypes.bool,
  collapsedWidth: React.PropTypes.number,
  collapsible: React.PropTypes.bool,
  onCollapse: React.PropTypes.func,
  trigger: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node
  ]),
  width: React.PropTypes.number
}, {});

export default class SKSider extends Comp {
  static defaultProps = {
    compTag: Layout.Sider
  };
  static propTypes = SK.assign({}, Comp.propTypes, Layout.Sider.propTypes, {});

  constructor(...args) {
    super(...args);
  }
}
