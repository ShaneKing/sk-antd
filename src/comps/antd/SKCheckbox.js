import {Checkbox} from 'antd';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../utils/Comp';

export default class SKCheckbox extends Comp {
  static defaultProps = {
    compTag: Checkbox
  };
  static propTypes = SK.assign({}, Comp.propTypes, Checkbox.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  handleChange(e) {
    this.skVal(e.target.checked);
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)}
        checked={this.skVal()}
        onChange={this.handleChange.bind(this)}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
