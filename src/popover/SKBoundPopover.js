import { Popover } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Proxy0, SK } from 'sk-js';
import SKPopover from './SKPopover';

/**
 * @MustModelId
 */
export default class SKBoundPopover extends SKPopover {
  static SK_COMP_NAME = 'SKPopover';
  static SK_EXTEND_COMP_NAME = 'SKBoundPopover';
  static defaultProps = SK.extends(true, {}, SKPopover.defaultProps, {
    compTag: Popover
  });
  static propTypes = SK.extends(true, {}, SKPopover.propTypes, {
    ssVisibleChange: PropTypes.func,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKBoundPopover.SK_COMP_NAME;
    this.SK_EXTEND_COMP_NAME = SKBoundPopover.SK_EXTEND_COMP_NAME;
    this.handleVisibleChange = (visible) => {
      if (this.props.ssVisibleChange && Proxy0._.isFunction(this.props.ssVisibleChange)) {
        this.props.ssVisibleChange(visible);
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
