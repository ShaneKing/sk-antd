import {Popover} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';
import CommonTip from '../tooltip/CommonTip';

Popover.defaultProps = SK.extend(true, {}, {}, CommonTip.defaultProps, Popover.defaultProps, {});
Popover.propTypes = SK.extend(true, {}, {
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
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, Popover.defaultProps, {
    compTag: Popover,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, Popover.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKPopover.SK_COMP_NAME;
    this.handleVisibleChange = (visible) => {
      this.skVal(visible);
    };
  }

  render() {
    const {compTag: CompTag} = this.props;

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
