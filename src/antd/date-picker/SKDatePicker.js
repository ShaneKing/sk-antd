import {DatePicker} from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {Mesgs, SK} from 'sk-js';
import CommonPicker from './CommonPicker';
import AntdComp from '../AntdComp';
import SKDiv from '../../html/SKDiv';

/*eslint no-unused-vars: "off"*/

DatePicker.defaultProps = SK.extend(true, {}, {
  showToday: true,
}, CommonPicker.defaultProps, DatePicker.defaultProps, {
  format: SK.DEFAULT_MOMENT_DATETIME,
});

DatePicker.propTypes = SK.extend(true, {}, {
  //https://ant.design/components/date-picker-cn/#DatePicker
  defaultValue: PropTypes.instanceOf(moment),
  disabledTime: PropTypes.func,
  format: PropTypes.string,
  renderExtraFooter: PropTypes.func,
  showTime: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  //showTime.defaultValue:PropTypes.instanceOf(moment),
  showToday: PropTypes.bool,
  value: PropTypes.instanceOf(moment),
  onChange: PropTypes.func,
  onOk: PropTypes.func,
}, CommonPicker.propTypes, DatePicker.propTypes, {});

export default class SKDatePicker extends AntdComp {
  static SK_COMP_NAME = 'SKDatePicker';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, DatePicker.defaultProps, {
    compTag: DatePicker,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, DatePicker.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKDatePicker.SK_COMP_NAME;
    this.handleChange = (dateMoment, dateString) => {
      this.e2m(dateMoment);
    };
  }

  e2mConvertor(dateMoment){
    return dateMoment ? dateMoment.format(this.props.format) : undefined;
  }

  m2eConvertor(){
    return this.skVal() ? moment(this.skVal(), this.props.format) : undefined;
  }

  renderComp() {
    const {compTag: CompTag} = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        onChange={this.handleChange}
        placeholder={Mesgs.get('Please_select')}
        size={this.skProp(AntdComp.SK_PROPS.SIZE)}
        value={this.m2e()}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
