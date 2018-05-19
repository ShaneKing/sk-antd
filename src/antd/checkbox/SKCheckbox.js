import { Checkbox } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';

Checkbox.defaultProps = SK.extend(true, {}, {
  autoFocus: false,
  checked: false,
  defaultChecked: false,
  indeterminate: false,
}, Checkbox.defaultProps, {});

Checkbox.propTypes = SK.extend(true, {}, {
  //https://ant.design/components/checkbox-cn/#Checkbox
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
}, Checkbox.propTypes, {});

export default class SKCheckbox extends AntdComp {
  static SK_COMP_NAME = 'SKCheckbox';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, Checkbox.defaultProps, {
    compTag: Checkbox,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, Checkbox.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKCheckbox.SK_COMP_NAME;
    this.handleChange = (domEvent) => {
      this.e2m(domEvent.target.checked);
    };
  }

  render() {
    const { compTag: CompTag } = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        checked={this.m2e()}
        onChange={this.handleChange}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
