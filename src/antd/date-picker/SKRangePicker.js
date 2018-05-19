import {DatePicker} from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {Mesgs, SK} from 'sk-js';
import CommonPicker from './CommonPicker';
import AntdComp from '../AntdComp';
import SKDiv from '../../html/SKDiv';

/*eslint no-unused-vars: "off"*/
let {RangePicker} = DatePicker;

RangePicker.defaultProps = SK.extend(true, {}, {}, CommonPicker.defaultProps, RangePicker.defaultProps, {
  format: SK.DEFAULT_MOMENT_DATETIME,
});

RangePicker.propTypes = SK.extend(true, {}, {
  //https://ant.design/components/date-picker-cn/#RangePicker
  defaultValue: PropTypes.array,
  disabledTime: PropTypes.func,
  format: PropTypes.string,
  ranges: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  renderExtraFooter: PropTypes.func,
  showTime: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  //showTime.defaultValue:PropTypes.instanceOf(moment),
  value: PropTypes.array,
  onCalendarChange: PropTypes.func,
  onChange: PropTypes.func,
  onOk: PropTypes.func,
}, CommonPicker.propTypes, RangePicker.propTypes, {});

export default class SKRangePicker extends AntdComp {
  static SK_COMP_NAME = 'SKRangePicker';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, RangePicker.defaultProps, {
    compTag: RangePicker,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, RangePicker.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKRangePicker.SK_COMP_NAME;
    this.handleChange = (dateMoment, dateString) => {
      this.e2m(dateMoment);
    };
  }

  e2mConvertor(dateMoment){
    return dateMoment && dateMoment.length === 2 ? [dateMoment[0].format(this.props.format), dateMoment[1].format(this.props.format)] : undefined;
  }

  m2eConvertor(){
    return this.skVal() ? [moment(this.skVal()[0], this.props.format), moment(this.skVal()[1], this.props.format)] : undefined;
  }

  m2vConvertor(){
    return this.skVal() ? `${this.skVal()[0]}~${this.skVal()[1]}` : undefined;
  }

  renderComp() {
    const {compTag: CompTag} = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        onChange={this.handleChange}
        placeholder={[Mesgs.get('Please_select'), Mesgs.get('Please_select')]}
        size={this.skProp(AntdComp.SK_PROPS.SIZE)}
        value={this.m2e()}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
