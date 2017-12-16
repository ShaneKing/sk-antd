import {Popover, Tooltip} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from './AntdComp';

Popover.defaultProps = SK.assign({}, {}, Tooltip.COMMON_DEFAULT_PROPS, Popover.defaultProps, {});

Popover.propTypes = SK.assign({}, {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ])
}, Tooltip.COMMON_PROP_TYPES, Popover.propTypes, {});

export default class SKPopover extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Popover.defaultProps, {
    compTag: Popover
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Popover.propTypes, {});


  constructor(...args) {
    super(...args);
    this.compName = 'SKPopover';
  }

  handleVisibleChange(visible) {
    this.skVal(visible);
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               onVisibleChange={this.handleVisibleChange.bind(this)}
               visible={this.skVal()}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
