import {Popover} from 'antd';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';
import CommonTip from '../tooltip/CommonTip';

Popover.defaultProps = SK.extends(true, {}, {}, CommonTip.defaultProps, Popover.defaultProps, {});
Popover.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/popover-cn/#API
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
}, CommonTip.propTypes, Popover.propTypes, {});

Popover.NON_SK_COMP_NAME = 'Popover';

export default class SKPopover extends AntdComp {
  static SK_COMP_NAME = 'SKPopover';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Popover.defaultProps, {
    compTag: Popover,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Popover.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKPopover.SK_COMP_NAME;
    this.handleVisibleChange = (visible) => {
      if (this.props.onVisibleChange && _.isFunction(this.props.onVisibleChange)) {
        this.props.onVisibleChange(visible);
      } else {
        this.n2m(visible);
      }
    };
  }

  render() {
    const {compTag: CompTag} = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        onVisibleChange={this.handleVisibleChange}
        visible={this.m2n()}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
