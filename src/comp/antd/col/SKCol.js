import {Col} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKCol extends AntdComp {
  static SK_PROPS = {
    COL_SPAN: 'colSpan',
    GRID_GUTTER: 'gridGutter'
  };
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Col
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {
    colSpan: PropTypes.number,
    skColSpan: PropTypes.number,
    gridGutter: PropTypes.number,
    skGridGutter: PropTypes.number
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKCol';
  }

  render() {
    let {compTag: CompTag, span, gutter, style} = this.props;
    span = span || this.skProp(SKCol.SK_PROPS.COL_SPAN);

    style = style || {};
    gutter = gutter || this.skProp(SKCol.SK_PROPS.GRID_GUTTER);
    if (gutter > 0) {
      style.paddingLeft = gutter / 2;
      style.paddingRight = gutter / 2;
    }

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               span={span}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
