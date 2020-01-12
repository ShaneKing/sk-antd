import {Select} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {Mesgs, SK} from 'sk-js';
import {SELECT_MODE, SIZE} from '../AntdConst';

Select.defaultProps = SK.extends(true, {}, {
  //allowClear: false,
  //autoFocus: false,
  //combobox: false,
  //defaultActiveFirstOption: true,
  //disabled: false,
  //dropdownMatchSelectWidth: true,
  //filterOption: true,
  //labelInValue: false,
  // multiple: false,
  notFoundContent: Mesgs.get('Not_Found'),
  // optionFilterProp:'value',
  //showSearch: false,
  size: SIZE.Default,
  //tags: false,
}, Select.defaultProps, {});

Select.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/select-cn/#API
  allowClear: PropTypes.bool,
  autoFocus: PropTypes.bool,
  combobox: PropTypes.bool,
  defaultActiveFirstOption: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  disabled: PropTypes.bool,
  dropdownClassName: PropTypes.string,
  dropdownMatchSelectWidth: PropTypes.bool,
  dropdownStyle: PropTypes.object,
  filterOption: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
  ]),
  firstActiveValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  getPopupContainer: PropTypes.func,
  labelInValue: PropTypes.bool,
  maxTagCount: PropTypes.number,
  maxTagPlaceholder: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
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
    PropTypes.array,
  ]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onDeselect: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onPopupScroll: PropTypes.func,
  onSearch: PropTypes.func,
  onSelect: PropTypes.func,
}, Select.propTypes, {});

Select.NON_SK_COMP_NAME = 'Select';

export default class OriginSelect {
  static defaultProps = SK.extends(true, {}, Select.defaultProps, {});
  static propTypes = SK.extends(true, {}, Select.propTypes, {});
  static optionMap = (selectOption) => {
    return selectOption.label ? <Select.OptGroup key={selectOption.id} label={selectOption.label}/> :
      <Select.Option key={selectOption.id} disabled={selectOption.disabled}>{selectOption.text}</Select.Option>;
  }
}
