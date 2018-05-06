import {DatePicker} from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {Mesgs, SK} from 'sk-js';
import CommonPicker from './CommonPicker';
import AntdComp from '../AntdComp';

/*eslint no-unused-vars: "off"*/
let {RangePicker} = DatePicker;

RangePicker.defaultProps = SK.extend(true, {}, {
  format: SK.DEFAULT_MOMENT_DATE,
}, CommonPicker.defaultProps, RangePicker.defaultProps, {});

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
      if (dateMoment && dateMoment.length === 2) {
        this.skVal([dateMoment[0].format(SK.DEFAULT_MOMENT_DATE), dateMoment[1].format(SK.DEFAULT_MOMENT_DATE)]);
      } else {
        this.skVal(undefined);
      }
    };
  }

  render() {
    const {compTag: CompTag} = this.props;

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        onChange={this.handleChange}
        placeholder={[Mesgs.get('Please_select'), Mesgs.get('Please_select')]}
        size={this.skProp(AntdComp.SK_PROPS.SIZE)}
        value={this.skVal() ? [moment(this.skVal()[0], SK.DEFAULT_MOMENT_DATE), moment(this.skVal()[1], SK.DEFAULT_MOMENT_DATE)] : undefined}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
