import {Switch} from 'antd';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../util/Comp';

export default class SKSwitch extends Comp {
  static defaultProps = {
    compTag: Switch
  };
  static propTypes = SK.assign({}, Comp.propTypes, Switch.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  handleChange(checked) {
    this.skVal(checked);
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
