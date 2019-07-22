import { Spin } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import { SIZE } from '../AntdConst';

Spin.defaultProps = SK.extends(true, {}, {
  size: SIZE.Default,
  spinning: true,
}, Spin.defaultProps, {});

Spin.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/spin-cn/#API
  delay: PropTypes.number,
  indicator: PropTypes.node,
  size: PropTypes.string,
  spinning: PropTypes.bool,
  tip: PropTypes.string,
  wrapperClassName: PropTypes.string,
}, Spin.propTypes, {});

Spin.NON_SK_COMP_NAME = 'Spin';

/**
 * @MustModels
 */
export default class SKSpin extends AntdComp {
  static SK_COMP_NAME = 'SKSpin';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Spin.defaultProps, {
    compTag: Spin,
    size: SIZE.Large,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Spin.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKSpin.SK_COMP_NAME;
  }

  render() {
    const {compTag: CompTag, className} = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        className={className}
        spinning={this.m2n()}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
