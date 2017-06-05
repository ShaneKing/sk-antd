import {Popover} from 'antd';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../utils/Comp';

Popover.propTypes = SK.assign({}, Popover.propTypes, {
  onVisibleChange: React.PropTypes.func,
  overlayClassName: React.PropTypes.string,
  placement: React.PropTypes.string,
  visible: React.PropTypes.bool,
  trigger: React.PropTypes.string
}, {});

export default class SKPopover extends Comp {
  static defaultProps = {
    compTag: Popover
  };
  static propTypes = SK.assign({}, Comp.propTypes, Popover.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  handleVisibleChange(visible) {
    this.skVal(visible);
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)}
        onVisibleChange={this.handleVisibleChange.bind(this)}
        visible={this.skVal()}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
