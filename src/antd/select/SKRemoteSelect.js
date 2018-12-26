import {Select} from 'antd';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {Mesgs, SK} from 'sk-js';
import OriginSelect from './OriginSelect';
import AntdComp from '../AntdComp';
import {SELECT_MODE} from '../AntdConst';
import SKDiv from '../../h/SKDiv';

export default class SKRemoteSelect extends AntdComp {
  static SK_COMP_NAME = 'SKSelect';
  static SK_EXTEND_COMP_NAME = 'SKRemoteSelect';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Select.OptGroup.defaultProps, Select.Option.defaultProps, OriginSelect.defaultProps, {
    compTag: Select,
    dataId: undefined,
    allowClear: true,
    defaultActiveFirstOption: false,
    filterOption: false,
    optionFilterProp: 'children',
    showArrow: false,
    showSearch: true,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Select.OptGroup.propTypes, Select.Option.propTypes, OriginSelect.propTypes, {
    dataId: PropTypes.string.isRequired,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKRemoteSelect.SK_COMP_NAME;
    this.SK_EXTEND_COMP_NAME = SKRemoteSelect.SK_EXTEND_COMP_NAME;
    this.handleChange = (value, option) => {
      if (this.props.onChange && _.isFunction(this.props.onChange)) {
        this.props.onChange(this, value, option);
      } else {
        //option default object, clear is undefined
        //multiple will array, clear is empty array
        this.n2m((option && _.isArray(option)) ? option.map(item => item.key) : undefined);
      }
    };
    this.handleSearch = (value) => {
      if (this.props.onSearch && _.isFunction(this.props.onSearch)) {
        this.props.onSearch(this, value);
      }
    };
  }

  addExtendChangedMonitor() {
    super.addExtendChangedMonitor();
  }

  rmvExtendChangedMonitor() {
    super.rmvExtendChangedMonitor();
  }

  renderPreview() {
    const {dataId} = this.props;

    if (this.props.mode === SELECT_MODE.Multiple) {
      return (<SKDiv>{this.skModel().skVal(dataId).filter((item) => {
        return this.m2n().includes(item.id);
      }).map((item) => {
        return item.text;
      }).join()}</SKDiv>)
    } else {
      let tmpPreview = {};
      this.skModel().skVal(dataId).forEach((item) => {
        if (item.id === this.m2n()) {
          tmpPreview = item;
        }
      });
      return (<SKDiv>{tmpPreview.text}</SKDiv>);
    }
  }

  renderComp() {
    const {compTag: CompTag, dataId, placeholder} = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        onChange={this.handleChange}
        placeholder={placeholder || Mesgs.get('Please_select')}
        value={this.m2n()}
        getPopupContainer={triggerNode => triggerNode.parentNode}
      >
        {dataId ? this.skModel().skVal(dataId).map((selectOption) => {
          return OriginSelect.optionMap(selectOption);
        }) : this.skTransProps2Child()}
      </CompTag>
    );
  }
}
