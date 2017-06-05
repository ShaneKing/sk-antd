import {Menu} from 'antd';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../utils/Comp';

Menu.SubMenu.propTypes = SK.assign({}, Menu.SubMenu.propTypes, {}, {
  inlineIndent: React.PropTypes.number,
  level: React.PropTypes.number
});

// Menu.SubMenu.defaultProps = SK.assign({}, Menu.SubMenu.defaultProps, {
//   inlineIndent: 24
// });

export default class SKSubMenu extends Comp {
  static defaultProps = SK.assign({}, Menu.SubMenu.defaultProps, {
    compTag: Menu.SubMenu
  });
  static propTypes = SK.assign({}, Comp.propTypes, Menu.SubMenu.propTypes, {});

  constructor(...args) {
    super(...args);
  }
}
