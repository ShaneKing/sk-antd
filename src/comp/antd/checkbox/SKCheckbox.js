import {Checkbox} from 'antd';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKCheckbox extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Checkbox
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKCheckbox';
    this.handleChange = (domEvent) => {
      this.skVal(domEvent.target.checked);
    };
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               checked={this.skVal()}
               onChange={this.handleChange}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
