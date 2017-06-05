import {Switch} from 'antd';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../utils/Comp';

export default class SKSwitch extends Comp {
  static defaultProps = {
    compTag: Switch
  };
  static propTypes = SK.assign({}, Comp.propTypes, Switch.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  handleChange(e) {
    this.skVal(e);
  }

  render() {
    let {compTag: CompTag, checkedChildren, unCheckedChildren} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)}
        checked={this.skVal()}
        checkedChildren={checkedChildren}
        onChange={this.handleChange.bind(this)}
        unCheckedChildren={unCheckedChildren}/>
    );
  }
}
