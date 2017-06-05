import React from 'react';
import SK from 'sk-js';
import Comp from '../../utils/Comp';
import REACT from '../../utils/REACT';

export default class SKA extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.a
  };
  static propTypes = SK.assign({}, Comp.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  handleClick(e) {
    if (this.props.onClick && _.isFunction(this.props.onClick)) {
      this.props.onClick(e);
    }
  }

  render() {
    let {compTag: CompTag} = this.props;
    return (
      <CompTag {...this.compValidProps(CompTag)}
        href={'javascript:void(0);'}
        onClick={this.handleClick.bind(this)}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
