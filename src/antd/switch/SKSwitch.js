import {Switch} from 'antd';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';
import {SIZE} from '../AntdConst';

Switch.defaultProps = SK.extends(true, {}, {
  allowClear: false,
  checked: false,
  defaultChecked: false,
  size: SIZE.Default,
  loading: false,
}, Switch.defaultProps, {});

Switch.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/switch-cn/#API
  allowClear: PropTypes.bool,
  checked: PropTypes.bool,
  checkedChildren: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  defaultChecked: PropTypes.bool,
  size: PropTypes.string,
  unCheckedChildren: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  onChange: PropTypes.func,
  loading: PropTypes.bool,
}, Switch.propTypes, {});

Switch.NON_SK_COMP_NAME = 'Switch';

export default class SKSwitch extends AntdComp {
  static SK_COMP_NAME = 'SKSwitch';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Switch.defaultProps, {
    compTag: Switch,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Switch.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKSwitch.SK_COMP_NAME;
    this.handleChange = (checked) => {
      if (this.props.onChange && _.isFunction(this.props.onChange)) {
        this.props.onChange(this, checked);
      } else {
        this.n2m(checked);
      }
    };
  }

  render() {
    const {compTag: CompTag, checkedChildren, unCheckedChildren} = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        checked={this.m2n()}
        checkedChildren={checkedChildren}
        onChange={this.handleChange}
        unCheckedChildren={unCheckedChildren}
      />
    );
  }
}
