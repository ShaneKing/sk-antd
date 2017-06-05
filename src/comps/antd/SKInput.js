import {Input} from 'antd';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../utils/Comp';

export default class SKInput extends Comp {
  static defaultProps = {
    compTag: Input
  };
  static propTypes = SK.assign({}, Comp.propTypes, Input.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  handleChange(e) {
    this.skVal(e.target.value);
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)}
        onChange={this.handleChange.bind(this)}
        value={this.skVal()}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
