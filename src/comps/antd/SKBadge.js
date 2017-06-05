import {Badge} from 'antd';
import SK from 'sk-js';
import React from 'react';
import Comp from '../../utils/Comp';

export default class SKBadge extends Comp {
  static defaultProps = {
    compTag: Badge
  };
  static propTypes = SK.assign({}, Comp.propTypes, Badge.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)} count={this.skVal()}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
