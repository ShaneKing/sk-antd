import {Checkbox} from 'antd';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../util/Comp';

export default class SKCheckbox extends Comp {
  static defaultProps = {
    compTag: Checkbox
  };
  static propTypes = SK.assign({}, Comp.propTypes, Checkbox.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  handleChange(domEvent) {
    this.skVal(domEvent.target.checked);
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
