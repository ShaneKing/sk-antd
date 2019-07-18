import AntdComp from '../AntdComp';
import { SK } from 'sk-js';
import { Tag } from 'antd/lib/index';
import React from 'react';
import CommonTag from './CommonTag';
import PropTypes from 'prop-types';

Tag.CheckableTag.defaultProps = SK.extends(true, {}, {
  checked: false,
}, CommonTag.defaultProps, Tag.CheckableTag.defaultProps, {});

Tag.CheckableTag.propTypes = SK.extends(true, {}, {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}, CommonTag.propTypes, Tag.CheckableTag.propTypes, {});

Tag.CheckableTag.NON_SK_COMP_NAME = 'CheckableTag';

export default class SKCheckableTag extends AntdComp {
  static SK_COMP_NAME = 'SKCheckableTag';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Tag.CheckableTag.defaultProps, {
    compTag: Tag.CheckableTag,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Tag.CheckableTag.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKCheckableTag.SK_COMP_NAME;
  }

}
