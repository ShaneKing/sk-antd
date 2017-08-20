import React from 'react';
import SK from 'sk-js';
import Comp from '../../util/Comp';
import ReactUtil from '../../util/ReactUtil';
import REACT from '../../util/REACT';

export default class SKLink extends Comp {
  static defaultProps = {
    compTag: REACT.TAG.a,
    to: SK.CHAR_SLASH
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
