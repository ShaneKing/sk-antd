import {Badge} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from './AntdComp';
import {STATUS} from '../../util/Const';

Badge.defaultProps = SK.assign({}, {
  dot: false,
  overflowCount: 99,
  showZero: false
}, Badge.defaultProps, {});

Badge.propTypes = SK.assign({}, {
  count: PropTypes.number,
  dot: PropTypes.bool,
  overflowCount: PropTypes.number,
  showZero: PropTypes.bool,
  status: PropTypes.oneOf(Object.values(STATUS)),
  text: PropTypes.string,
  offset: PropTypes.any
}, Badge.propTypes, {});

export default class SKBadge extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Badge.defaultProps, {
    compTag: Badge
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Badge.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKBadge';
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} count={this.skVal()}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
