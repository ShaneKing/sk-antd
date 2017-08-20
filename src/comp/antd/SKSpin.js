import {Spin} from 'antd';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../util/Comp';

Spin.propTypes = SK.assign({}, Spin.propTypes, {
  tip: React.PropTypes.string
}, {});

export default class SKSpin extends Comp {
  static defaultProps = {
    compTag: Spin
  };
  static propTypes = SK.assign({}, Comp.propTypes, Spin.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  render() {
    let {compTag: CompTag, className} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)}
        className={className}
        spinning={this.skVal()}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
