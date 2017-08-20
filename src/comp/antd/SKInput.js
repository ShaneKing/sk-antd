import {Input} from 'antd';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../util/Comp';

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
  });

  constructor(...args) {
    super(...args);
  }

  handleChange(domEvent) {
    this.skVal(domEvent.target.value);
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
