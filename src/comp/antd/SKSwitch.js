import {Switch} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from './AntdComp';
import {SIZE} from '../../util/Const';

Switch.defaultProps = SK.assign({}, {
  allowClear: false,
  checked: false,
  defaultChecked: false,
  size: SIZE.Default,
  loading: false
}, Switch.defaultProps, {});

Switch.propTypes = SK.assign({}, {
  allowClear: PropTypes.bool,
  checked: PropTypes.bool,
  checkedChildren: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  defaultChecked: PropTypes.bool,
  size: PropTypes.string,
  unCheckedChildren: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  onChange: PropTypes.func,
  loading: PropTypes.bool
}, Switch.propTypes, {});

export default class SKSwitch extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Switch.defaultProps, {
    compTag: Switch
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Switch.propTypes, {});


  constructor(...args) {
    super(...args);
    this.compName = 'SKSwitch';
  }

  handleChange(checked) {
    this.skVal(checked);
  }

  render() {
    let {compTag: CompTag, checkedChildren, unCheckedChildren} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               checked={this.skVal()}
               checkedChildren={checkedChildren}
               onChange={this.handleChange.bind(this)}
               unCheckedChildren={unCheckedChildren}/>
    );
  }
}
