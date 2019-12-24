import { Checkbox } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Proxy0, SK } from 'sk-js';
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

/**
 * @MustModelId
 * @PreviewIsDisabled
 */
export default class SKCheckbox extends AntdComp {
  static SK_COMP_NAME = 'SKCheckbox';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Checkbox.defaultProps, {
    compTag: Checkbox,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Checkbox.propTypes, {
    ssChange: PropTypes.func,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKCheckbox.SK_COMP_NAME;
    this.handleChange = (domEvent) => {
      if (this.props.ssChange && Proxy0._.isFunction(this.props.ssChange)) {
        this.props.ssChange(domEvent);
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
        disabled={this.skBfo(AntdComp.SK_PROPS.DISABLED) || this.skBfo(AntdComp.SK_PROPS.PREVIEW)}
        onChange={this.handleChange}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
