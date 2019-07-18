import { Col } from 'antd/lib/index';
import PropTypes from 'prop-types';
import React from 'react';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';

Col.defaultProps = SK.extends(true, {}, {
  offset: 0,
  order: 0,
  pull: 0,
  push: 0,
}, Col.defaultProps, {});

Col.propTypes = SK.extends(true, {}, {
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

Col.NON_SK_COMP_NAME = 'Col';

export default class SKCol extends AntdComp {
  static SK_COMP_NAME = 'SKCol';
  static SK_PROPS = SK.extends(true, {}, AntdComp.SK_PROPS, {
    SPAN: 'span',
  });
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Col.defaultProps, {
    compTag: Col,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Col.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKCol.SK_COMP_NAME;
  }

  render() {
    const {compTag: CompTag} = this.props;
    // const gutter = this.skProp(SKRow.SK_PROPS.GUTTER);

    // const style = this.props.style || {};
    // if (gutter > 0) {
    //   style.paddingLeft = gutter / 2;
    //   style.paddingRight = gutter / 2;
    // }

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        span={this.skProp(SKCol.SK_PROPS.SPAN)}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
