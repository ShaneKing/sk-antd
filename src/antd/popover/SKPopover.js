import { Popover } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import CommonTip from '../tooltip/CommonTip';

Popover.defaultProps = SK.assign({}, {}, CommonTip.defaultProps, Popover.defaultProps, {});
Popover.propTypes = SK.assign({}, {
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

export default class SKPopover extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Popover.defaultProps, {
    compTag: Popover,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Popover.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKPopover';
    this.handleVisibleChange = (visible) => {
      this.skVal(visible);
    };
  }

  render() {
    const { compTag: CompTag } = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        onVisibleChange={this.handleVisibleChange}
        visible={this.skVal()}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
