import AntdComp from '../AntdComp';
import { SK } from 'sk-js';
import { Tag } from 'antd';
import React from 'react';
import CommonTag from './CommonTag';

Tag.defaultProps = SK.extends(true, {}, {}, CommonTag.defaultProps, Tag.defaultProps, {});

Tag.propTypes = SK.extends(true, {}, {}, CommonTag.propTypes, Tag.propTypes, {});

Tag.NON_SK_COMP_NAME = 'Tag';

export default class SKTag extends AntdComp {
  static SK_COMP_NAME = 'SKTag';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Tag.defaultProps, {
    compTag: Tag,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Tag.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKTag.SK_COMP_NAME;
  }

}
