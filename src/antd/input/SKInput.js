import { Input } from 'antd';
import React from 'react';
import { Mesgs, SK } from 'sk-js';
import OriginInput from './OriginInput';
import AntdComp from '../AntdComp';

//origin exist, use origin
export default class SKInput extends AntdComp {
  static SK_COMP_NAME = 'SKInput';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, OriginInput.defaultProps, {
    compTag: Input,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, OriginInput.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKInput.SK_COMP_NAME;
    this.handleChange = (domEvent) => {
      this.skVal(domEvent.target.value);
    };
  }

  render() {
    const { compTag: CompTag, placeholder } = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        onChange={this.handleChange}
        placeholder={placeholder || Mesgs.get('Please_input')}
        size={this.skProp(AntdComp.SK_PROPS.SIZE)}
        value={this.skVal()}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
