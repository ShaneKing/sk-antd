import {Select} from 'antd';
import _ from 'lodash';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../util/Comp';

export default class SKSelect extends Comp {
  static defaultProps = SK.assign({}, Select.defaultProps, {
    compTag: Select,
    dataId: undefined
  });
  static propTypes = SK.assign({}, Comp.propTypes, Select.Option.propTypes, Select.propTypes, {
    dataId: React.PropTypes.string
  });

  constructor(...args) {
    super(...args);
  }

  handleSelect(value, option) {
    if (this.props.onSelect && _.isFunction(this.props.onSelect)) {
      this.props.onSelect(value);
    } else {
      this.skVal(value);
    }
  }

  optionMap(selectOption) {
    return (<Select.Option key={selectOption.id}>{selectOption.text}</Select.Option>);
  }

  render() {
    let {compTag: CompTag, dataId} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)}
               onSelect={this.handleSelect.bind(this)}
               value={this.skVal()}>
        {dataId ? this.iModel().skVal(dataId).map((selectOption) => {
          return this.optionMap(selectOption);
        }) : this.skPropsTrans()}
      </CompTag>
    );
  }
}
