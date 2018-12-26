import {Checkbox} from 'antd';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

Checkbox.defaultProps = SK.extends(true, {}, {
  autoFocus: false,
  checked: false,
  defaultChecked: false,
  indeterminate: false,
}, Checkbox.defaultProps, {});

Checkbox.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/checkbox-cn/#Checkbox
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
}, Checkbox.propTypes, {});

Checkbox.NON_SK_COMP_NAME = 'Checkbox';

export default class SKCheckbox extends AntdComp {
  static SK_COMP_NAME = 'SKCheckbox';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Checkbox.defaultProps, {
    compTag: Checkbox,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Checkbox.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKCheckbox.SK_COMP_NAME;
    this.handleChange = (domEvent) => {
      if (this.props.onChange && _.isFunction(this.props.onChange)) {
        this.props.onChange(this, domEvent);
      } else {
        this.n2m(domEvent.target.checked);
      }
    };
  }

  render() {
    const {compTag: CompTag} = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        checked={this.m2n()}
        onChange={this.handleChange}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
