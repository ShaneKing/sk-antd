import {Input} from 'antd';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../utils/Comp';

Input.propTypes = SK.assign({}, Input.propTypes, {
  suffix: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.node
  ])
}, {});

export default class SKInput extends Comp {
  static defaultProps = {
    compTag: Input
  };
  static propTypes = SK.assign({}, Comp.propTypes, Input.propTypes, {
    searchFuncId: React.PropTypes.string
  });

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
        size={this.skProp(Comp.SK_PROPS.SIZE)}
        value={this.skVal()}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
