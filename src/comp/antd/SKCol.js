import {Col} from 'antd';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../util/Comp';

export default class SKCol extends Comp {
  static defaultProps = {
    compTag: Col
  };
  static propTypes = SK.assign({}, Comp.propTypes, Col.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  render() {
    let {compTag: CompTag, span, gutter, style} = this.props;
    span = span || this.skProp(Comp.SK_PROPS.COL_SPAN);

    style = style || {};
    gutter = gutter || this.skProp(Comp.SK_PROPS.GRID_GUTTER);
    if (gutter > 0) {
      style.paddingLeft = gutter / 2;
      style.paddingRight = gutter / 2;
    }

    return (
      <CompTag {...this.compValidProps(CompTag)}
               span={span}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }

  childPropsTrans(child) {
    return {style: {}};
  }
}
