import React from 'react';
import SK from 'sk-js';
import Comp from '../../utils/Comp';
import ReactUtil from '../../utils/ReactUtil';
import REACT from '../../utils/REACT';

export default class SKLink extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.a,
    to: '/'
  };
  static propTypes = SK.assign({}, Comp.propTypes, {
    to: React.PropTypes.string
  });

  constructor(...args) {
    super(...args);
  }

  handleClick() {
    ReactUtil.forward(this.props.to);
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
