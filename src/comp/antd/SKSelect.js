import {Select} from 'antd';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import {I18N} from 'sk-l10n';
import AntdComp from './AntdComp';
import {SELECT_MODE, SIZE} from '../../util/Const';

Select.defaultProps = SK.assign({}, {
  allowClear: false,
  autoFocus: false,
  combobox: false,
  defaultActiveFirstOption: true,
  disabled: false,
  dropdownMatchSelectWidth: true,
  filterOption: true,
  labelInValue: false,
  // multiple: false,
  notFoundContent: I18N.get('Not_Found'),
  // optionFilterProp:'value',
  showSearch: false,
  size: SIZE.Default,
  tags: false
}, Select.defaultProps, {});

Select.propTypes = SK.assign({}, {
  allowClear: PropTypes.bool,
  autoFocus: PropTypes.bool,
  combobox: PropTypes.bool,
  defaultActiveFirstOption: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  disabled: PropTypes.bool,
  dropdownClassName: PropTypes.string,
  dropdownMatchSelectWidth: PropTypes.bool,
  dropdownStyle: PropTypes.object,
  filterOption: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func
  ]),
  firstActiveValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  getPopupContainer: PropTypes.func,
  labelInValue: PropTypes.bool,
  maxTagCount: PropTypes.number,
  maxTagPlaceholder: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func
  ]),
  mode: PropTypes.oneOf(Object.values(SELECT_MODE)),
  multiple: PropTypes.bool,
  notFoundContent: PropTypes.string,
  optionFilterProp: PropTypes.string,
  optionLabelProp: PropTypes.string,
  placeholder: PropTypes.string,
  showSearch: PropTypes.bool,
  size: PropTypes.string,
  tags: PropTypes.bool,
  tokenSeparators: PropTypes.array,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onDeselect: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onPopupScroll: PropTypes.func,
  onSearch: PropTypes.func,
  onSelect: PropTypes.func
}, Select.propTypes, {});

export default class SKSelect extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Select.Option.defaultProps, Select.defaultProps, {
    compTag: Select,
    dataId: undefined
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Select.Option.propTypes, Select.propTypes, {
    dataId: PropTypes.string
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKSelect';
  }

  static optionMap(selectOption) {
    return (<Select.Option key={selectOption.id}>{selectOption.text}</Select.Option>);
  }

  handleSelect(value, option) {
    if (this.props.onSelect && _.isFunction(this.props.onSelect)) {
      this.props.onSelect(value);
    } else {
      this.skVal(value);
    }
  }

  render() {
    let {compTag: CompTag, dataId} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               onSelect={this.handleSelect.bind(this)}
               value={this.skVal()}>
        {dataId ? this.skModel().skVal(dataId).map((selectOption) => {
          return SKSelect.optionMap(selectOption);
        }) : this.skTransProps2Child()}
      </CompTag>
    );
  }
}
