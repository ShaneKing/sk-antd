import { Col } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import SKRow from '../row/SKRow';

/*eslint no-unused-vars: "off"*/

Col.defaultProps = SK.assign({}, {
  offset: 0,
  order: 0,
  pull: 0,
  push: 0,
}, Col.defaultProps, {});

Col.propTypes = SK.assign({}, {
  //https://ant.design/components/grid-cn/#Col
  offset: PropTypes.number,
  order: PropTypes.number,
  pull: PropTypes.number,
  push: PropTypes.number,
  span: PropTypes.number,
  xs: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  sm: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  md: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  lg: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  xl: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  xxl: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
}, Col.propTypes, {});

export default class SKCol extends AntdComp {
  static SK_PROPS = {
    SPAN: 'span',
  };
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Col.defaultProps, {
    compTag: Col,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Col.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKCol';
  }

  render() {
    const { compTag: CompTag } = this.props;
    const span = this.skProp(SKCol.SK_PROPS.SPAN);
    const gutter = this.skProp(SKRow.SK_PROPS.GUTTER);

    const style = this.props.style || {};
    if (gutter > 0) {
      style.paddingLeft = gutter / 2;
      style.paddingRight = gutter / 2;
    }

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        span={span}
        style={style}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }

  allowTransProps2Child(child) {
    return { style: {} };
  }
}
