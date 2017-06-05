import {Menu} from 'antd';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../utils/Comp';

Menu.Item.propTypes = SK.assign({}, Menu.Item.propTypes, {}, {
  inlineIndent: React.PropTypes.number,
  level: React.PropTypes.number
});

// Menu.Item.defaultProps = SK.assign({}, Menu.Item.defaultProps, {
//   inlineIndent: 24
// });

export default class SKMenuItem extends Comp {
  static defaultProps = SK.assign({}, Menu.Item.defaultProps, {
    compTag: Menu.Item
  });
  static propTypes = SK.assign({}, Comp.propTypes, Menu.Item.propTypes, {});

  constructor(...args) {
    super(...args);
  }
}
