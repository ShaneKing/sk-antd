import { Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import { ALIGN, JUSTIFY } from '../../Const';

Row.defaultProps = SK.assign({}, {
  align: ALIGN.Top,
  gutter: 0,
  justify: JUSTIFY.Start,
}, Row.defaultProps, {});

Row.propTypes = SK.assign({}, {
  //https://ant.design/components/grid-cn/#Row
  align: PropTypes.oneOf(Object.values(ALIGN)),
  gutter: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  justify: PropTypes.oneOf(Object.values(JUSTIFY)),
  type: PropTypes.string,
}, Row.propTypes, {});

export default class SKRow extends AntdComp {
  static SK_PROPS = {
    GUTTER: 'gutter',
  };
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Row.defaultProps, {
    compTag: Row,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Row.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKRow';
  }

  render() {
    const { compTag: CompTag } = this.props;
    const gutter = this.skProp(SKRow.SK_PROPS.GUTTER);

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        gutter={gutter}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
