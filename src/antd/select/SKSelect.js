import {Select} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {Color0, Mesgs, Proxy0, SK} from 'sk-js';
import OriginSelect from './OriginSelect';
import AntdComp from '../AntdComp';
import {SELECT_MODE} from '../AntdConst';
import SKTag from '../tag/SKTag';
import SKTooltip from '../tooltip/SKTooltip';
import SKDiv from '../../h/SKDiv';

/**
 * @HasPreview
 * @MustModelId
 */
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
    data: PropTypes.array,
    dataId: PropTypes.string,
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
    this.handleSearch = undefined;
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
    const {data, dataId} = this.props;
    let dataArray = dataId ? this.skModel().skVal(dataId) : SK.s4a(data);

    if (this.props.mode === SELECT_MODE.Multiple) {
      return (<SKDiv>{dataArray.filter((item) => {
        return this.m2n().includes(item.id);
      }).map((item) => {
        return <SKTooltip title={item.id}><SKTag color={Color0.hexColor(item.id)}>{item.text}</SKTag></SKTooltip>;
      }).join()}</SKDiv>)
    } else {
      let tmpPreview = {};
      dataArray.forEach((item) => {
        if (item.id === this.m2n()) {
          tmpPreview = item;
        }
      });
      return (<SKDiv><SKTooltip title={tmpPreview.id}><SKTag color={Color0.hexColor(tmpPreview.id)}>{tmpPreview.text}</SKTag></SKTooltip></SKDiv>);
    }
  }

  renderComp() {
    const {compTag: CompTag, data, dataId, placeholder} = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        onChange={this.handleChange}
        placeholder={placeholder || Mesgs.get('Please_select')}
        value={this.m2n()}
        getPopupContainer={triggerNode => triggerNode.parentNode}
      >
        {(data || dataId) ? ((dataId ? this.skModel().skVal(dataId) : SK.s4a(data)).map((selectOption) => {
          return OriginSelect.optionMap(selectOption);
        })) : this.skTransProps2Child()}
      </CompTag>
    );
  }
}
