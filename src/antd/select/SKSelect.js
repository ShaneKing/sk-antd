import {Select} from 'antd';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {Mesgs, SK} from 'sk-js';
import AntdComp from '../AntdComp';
import {SELECT_MODE, SELECT_MODES, SIZE} from '../AntdConst';
import SKDiv from '../../h/SKDiv';

/*eslint no-unused-vars: "off"*/

Select.defaultProps = SK.extend(true, {}, {
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

Select.propTypes = SK.extend(true, {}, {
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

export default class SKSelect extends AntdComp {
  static SK_COMP_NAME = 'SKSelect';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, Select.OptGroup.defaultProps, Select.Option.defaultProps, Select.defaultProps, {
    compTag: Select,
    dataId: undefined,
    modes: SELECT_MODES.Local,
    textId: undefined,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, Select.OptGroup.propTypes, Select.Option.propTypes, Select.propTypes, {
    dataId: PropTypes.string.isRequired,
    modes: PropTypes.oneOf(Object.values(SELECT_MODES)),
    textId: PropTypes.string,
  });

  static optionMap(selectOption) {
    return selectOption.label ? <Select.OptGroup key={selectOption.id} label={selectOption.label}/> : <Select.Option key={selectOption.id}>{selectOption.text}</Select.Option>;
  }

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKSelect.SK_COMP_NAME;
    this.handleChange = (value, option) => {
      if (this.props.mode === SELECT_MODE.Multiple) {
        if (this.props.onChange && _.isFunction(this.props.onChange)) {
          this.props.onChange(value, option);
        } else {
          this.skVal(value);
        }
      } else {
        if (this.props.modes === SELECT_MODES.Remote && this.props.textId && option) {
          this.skTmpVal(this.props.textId, option.props.children);
          if (!option.props.children) {
            this.skModel().skVal(this.props.textId, option.props.children);
            this.skVal(option.props.children);
          }
        }

        if (this.props.onChange && _.isFunction(this.props.onChange)) {
          this.props.onChange(value, option);
        } else if (!option || !option.key) {
          //if clear, reset value of modelId
          this.skVal(undefined);
        }
      }
    };
    this.handleBlur = () => {
      if (this.props.modes === SELECT_MODES.Remote && this.props.textId) {
        this.skTmpVal(this.props.textId, this.skModel().skVal(this.props.textId));
        this.updateUI();
      }
      if (this.props.onBlur && _.isFunction(this.props.onBlur)) {
        this.props.onBlur();
      }
    };
    this.handleFocus = () => {
      if (this.props.modes === SELECT_MODES.Remote && this.props.textId) {
        const tmpVal = this.skTmpVal(this.props.textId);
        this.handleChange(tmpVal, {key: tmpVal, props: {children: tmpVal}});
      }
      if (this.props.onFocus && _.isFunction(this.props.onFocus)) {
        this.props.onFocus();
      }
    };
    this.handleSelect = (value, option) => {
      if (this.props.mode === SELECT_MODE.Multiple) {
        if (this.props.onSelect && _.isFunction(this.props.onSelect)) {
          this.props.onSelect(value, option);
        }
      } else {
        if (this.props.modes === SELECT_MODES.Remote && this.props.textId) {
          this.skModel().skVal(this.props.textId, option.props.children);
          this.skTmpVal(this.props.textId, option.props.children);
        }

        if (this.props.onSelect && _.isFunction(this.props.onSelect)) {
          this.props.onSelect(value, option);
        } else {
          this.skVal(option.key);
        }
      }
    };
  }

  addExtendChangedMonitor() {
    super.addExtendChangedMonitor();
    this.addChangedMonitor(this.props.dataId);
  }

  rmvExtendChangedMonitor() {
    super.rmvExtendChangedMonitor();
    this.rmvChangedMonitor(this.props.dataId);
  }

  m2eConvertor(){
    const {modes, textId} = this.props;
    return (modes === SELECT_MODES.Remote && textId) ? this.skTmpVal(textId) : this.skVal();
  }

  renderPreview() {
    const {dataId, modes, textId} = this.props;

    if (this.props.mode === SELECT_MODE.Multiple) {
      return (<SKDiv>{this.skModel().skVal(dataId).filter((item) => {
        return this.skVal().includes(item.id);
      }).map((item) => {
        return item.text;
      }).join()}</SKDiv>)
    } else {
      let tmpPreview = {};
      this.skModel().skVal(dataId).forEach((item) => {
        if (item.id === this.skVal()) {
          tmpPreview = item;
        }
      });
      return (<SKDiv>{(modes === SELECT_MODES.Remote && textId) ? this.skModel().skVal(textId) : tmpPreview.text}</SKDiv>);
    }
  }

  renderComp() {
    const {compTag: CompTag, dataId, modes, placeholder, textId} = this.props;

    let defaultProps = {};
    if (modes === SELECT_MODES.Local) {
      defaultProps = {
        filterOption: (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
        optionFilterProp: 'children',
        showSearch: true,
      };
    } else if (modes === SELECT_MODES.Remote) {
      defaultProps = {
        defaultActiveFirstOption: false,
        mode: SELECT_MODE.Combobox,
        filterOption: false,
        optionLabelProp: 'children',
        showArrow: false,
      };
    }

    return (
      <CompTag
        {...defaultProps}
        {...this.skTransProps2Self(CompTag)}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        placeholder={placeholder || Mesgs.get('Please_select')}
        value={this.m2e()}
        getPopupContainer={triggerNode => triggerNode.parentNode}
      >
        {dataId ? this.skModel().skVal(dataId).map((selectOption) => {
          return SKSelect.optionMap(selectOption);
        }) : this.skTransProps2Child()}
      </CompTag>
    );
  }
}
