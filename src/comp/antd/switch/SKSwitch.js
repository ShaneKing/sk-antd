import {Switch} from 'antd';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKSwitch extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Switch
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKSwitch';
    this.handleChange = (checked) => {
      this.skVal(checked);
    }
  }

  render() {
    let {compTag: CompTag, checkedChildren, unCheckedChildren} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               checked={this.skVal()}
               checkedChildren={checkedChildren}
               onChange={this.handleChange}
               unCheckedChildren={unCheckedChildren}/>
    );
  }
}
