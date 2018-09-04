import {Row} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';
import {ALIGN, JUSTIFY} from '../AntdConst';

//comments because has skGutter
// Row.defaultProps = SK.extend(true, {}, {
//   align: ALIGN.Top,
//   //gutter: 0, //comments because has skGutter
//   justify: JUSTIFY.Start,
// }, Row.defaultProps, {});

Row.propTypes = SK.extend(true, {}, {
  //https://ant.design/components/grid-cn/#Row
  align: PropTypes.oneOf(Object.values(ALIGN)),
  gutter: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  justify: PropTypes.oneOf(Object.values(JUSTIFY)),
  type: PropTypes.string,
}, Row.propTypes, {});

Row.NON_SK_COMP_NAME = 'Row';

export default class SKRow extends AntdComp {
  static SK_COMP_NAME = 'SKRow';
  static SK_PROPS = SK.extend(true, {}, AntdComp.SK_PROPS, {
    GUTTER: 'gutter',
  });
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, {}, {
    compTag: Row,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, Row.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKRow.SK_COMP_NAME;
  }

  render() {
    const {compTag: CompTag} = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        gutter={this.skProp(SKRow.SK_PROPS.GUTTER)}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
