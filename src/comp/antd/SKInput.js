import {Input} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from './AntdComp';
import {INPUT_TYPE, SIZE} from '../../util/Const';

Input.defaultProps = SK.assign({}, {
  disabled: false,
  size: SIZE.Default,
  type: INPUT_TYPE.Text
}, Input.defaultProps, {});

Input.propTypes = SK.assign({}, {
  addonAfter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  addonBefore: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  prefix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  size: PropTypes.string,
  suffix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  type: PropTypes.string,
  value: PropTypes.string,
  onPressEnter: PropTypes.func
}, Input.propTypes, {});

export default class SKInput extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Input.defaultProps, {
    compTag: Input
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Input.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKInput';
  }

  handleChange(domEvent) {
    this.skVal(domEvent.target.value);
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               onChange={this.handleChange.bind(this)}
               size={this.skProp(AntdComp.SK_PROPS.SIZE)}
               value={this.skVal()}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
