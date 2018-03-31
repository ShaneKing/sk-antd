import { Spin } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import { SIZE } from '../AntdConst';

Spin.defaultProps = SK.assign({}, {
  size: SIZE.Default,
  spinning: true,
}, Spin.defaultProps, {});

Spin.propTypes = SK.assign({}, {
  //https://ant.design/components/spin-cn/#API
  delay: PropTypes.number,
  indicator: PropTypes.node,
  size: PropTypes.string,
  spinning: PropTypes.bool,
  tip: PropTypes.string,
  wrapperClassName: PropTypes.string,
}, Spin.propTypes, {});

export default class SKSpin extends AntdComp {
  static SK_COMP_NAME = 'SKSpin';
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Spin.defaultProps, {
    compTag: Spin,
    size: SIZE.Large,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Spin.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKSpin.SK_COMP_NAME;
  }

  render() {
    const { compTag: CompTag, className } = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        className={className}
        spinning={this.skVal()}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
