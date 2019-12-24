import { Badge } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import { STATUS } from '../AntdConst';

Badge.defaultProps = SK.extends(true, {}, {
  dot: false,
  overflowCount: 99,
  showZero: false,
}, Badge.defaultProps, {});

Badge.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/badge-cn/#API
  count: PropTypes.number,
  dot: PropTypes.bool,
  overflowCount: PropTypes.number,
  showZero: PropTypes.bool,
  status: PropTypes.oneOf(Object.values(STATUS)),
  text: PropTypes.string,
  offset: PropTypes.any,
}, Badge.propTypes, {});

Badge.NON_SK_COMP_NAME = 'Badge';

/**
 * @MustModels
 */
export default class SKBadge extends AntdComp {
  static SK_COMP_NAME = 'SKBadge';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Badge.defaultProps, {
    compTag: Badge,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Badge.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKBadge.SK_COMP_NAME;
  }

  render() {
    const {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} count={this.m2n()}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
