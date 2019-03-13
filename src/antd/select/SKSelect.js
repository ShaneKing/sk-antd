import {Select} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {Mesgs, Proxy0, SK} from 'sk-js';
import OriginSelect from './OriginSelect';
import AntdComp from '../AntdComp';
import {SELECT_MODE} from '../AntdConst';
import SKDiv from '../../h/SKDiv';

//default: implement Select with search field local, SKRemoteSelect support remote
export default class SKSelect extends AntdComp {
  static SK_COMP_NAME = 'SKSelect';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Select.OptGroup.defaultProps, Select.Option.defaultProps, OriginSelect.defaultProps, {
    compTag: Select,
    dataId: undefined,
    allowClear: true,
    defaultActiveFirstOption: false,
    filterOption: (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
    optionFilterProp: 'children',
    showArrow: false,
    showSearch: true,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Select.OptGroup.propTypes, Select.Option.propTypes, OriginSelect.propTypes, {
    dataId: PropTypes.string.isRequired,
    ssChange: PropTypes.func,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKSelect.SK_COMP_NAME;
    this.handleChange = (value, option) => {
      if (this.props.ssChange && Proxy0._.isFunction(this.props.ssChange)) {
        this.props.ssChange(value, option);
      } else {
        //option default object, clear is undefined
        //multiple will array, clear is empty array
        this.n2m(option ? (Proxy0._.isArray(option) ? option.map(item => item.key) : option.key) : undefined);
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
