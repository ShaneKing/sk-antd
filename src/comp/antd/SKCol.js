import {Col} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from './AntdComp';

Col.defaultProps = SK.assign({}, {
  offset: 0,
  order: 0,
  pull: 0,
  push: 0
}, Col.defaultProps, {});

Col.propTypes = SK.assign({}, {
  offset: PropTypes.number,
  order: PropTypes.number,
  pull: PropTypes.number,
  push: PropTypes.number,
  span: PropTypes.number,
  xs: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  sm: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  md: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  lg: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  xl: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ]),
  xxl: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ])
}, Col.propTypes, {});

export default class SKCol extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Col.defaultProps, {
    compTag: Col
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Col.propTypes, {});


  constructor(...args) {
    super(...args);
    this.compName = 'SKCol';
  }

  render() {
    let {compTag: CompTag, span, gutter, style} = this.props;
    span = span || this.skProp(AntdComp.SK_PROPS.COL_SPAN);

    style = style || {};
    gutter = gutter || this.skProp(AntdComp.SK_PROPS.GRID_GUTTER);
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

  allowTransProps2Child(child) {
    return {style: {}};
  }
}
