import { Switch } from 'antd/lib/index';
import PropTypes from 'prop-types';
import React from 'react';
import { Proxy0, SK } from 'sk-js';
import { SKDiv } from 'sk-react';
import AntdComp from '../AntdComp';
import { SIZE } from '../AntdConst';

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

/**
 * @MustModelId
 * @NoChild
 */
export default class SKSwitch extends AntdComp {
  static SK_COMP_NAME = 'SKSwitch';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Switch.defaultProps, {
    compTag: Switch,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Switch.propTypes, {
    ssChange: PropTypes.func,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKSwitch.SK_COMP_NAME;
    this.handleChange = (checked) => {
      if (this.props.ssChange && Proxy0._.isFunction(this.props.ssChange)) {
        this.props.ssChange(checked);
      } else {
        this.n2m(checked);
      }
    };
  }

  renderComp() {
    const {compTag: CompTag} = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        checked={this.m2n()}
        onChange={this.handleChange}
      />
    );
  }

  renderPreview() {
    return this.m2n() ? <SKDiv>{this.props.checkedChildren}</SKDiv> : undefined;
  }
}
