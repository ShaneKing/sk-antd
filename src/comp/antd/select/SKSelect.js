import {Select} from 'antd';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKSelect extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Select,
    dataId: undefined
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {
    dataId: PropTypes.string
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKSelect';
    this.handleSelect = (value, option) => {
      if (this.props.onSelect && _.isFunction(this.props.onSelect)) {
        this.props.onSelect(value);
      } else {
        this.skVal(value);
      }
    };
  }

  static optionMap(selectOption) {
    return (<Select.Option key={selectOption.id}>{selectOption.text}</Select.Option>);
  }

  render() {
    let {compTag: CompTag, dataId} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               onSelect={this.handleSelect}
               value={this.skVal()}>
        {dataId ? this.skModel().skVal(dataId).map((selectOption) => {
          return SKSelect.optionMap(selectOption);
        }) : this.skTransProps2Child()}
      </CompTag>
    );
  }
}
