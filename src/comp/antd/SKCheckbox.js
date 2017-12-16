import {Checkbox} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from './AntdComp';

Checkbox.defaultProps = SK.assign({}, {
  autoFocus: false,
  checked: false,
  defaultChecked: false,
  indeterminate: false
}, Checkbox.defaultProps, {});

Checkbox.propTypes = SK.assign({}, {
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func
}, Checkbox.propTypes, {});

export default class SKCheckbox extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Checkbox.defaultProps, {
    compTag: Checkbox
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Checkbox.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKCheckbox';
  }

  handleChange(domEvent) {
    this.skVal(domEvent.target.checked);
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               checked={this.skVal()}
               onChange={this.handleChange.bind(this)}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
