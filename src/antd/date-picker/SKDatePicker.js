import {DatePicker} from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import {I18N} from 'sk-l10n';
import CommonPicker from './CommonPicker';
import AntdComp from '../AntdComp';

DatePicker.defaultProps = SK.assign({}, {
  format: SK.DEFAULT_MOMENT_DATE,
  showToday: true
}, CommonPicker.defaultProps, DatePicker.defaultProps, {});

DatePicker.propTypes = SK.assign({}, {
  //https://ant.design/components/date-picker-cn/#DatePicker
  defaultValue: PropTypes.instanceOf(moment),
  disabledTime: PropTypes.func,
  format: PropTypes.string,
  renderExtraFooter: PropTypes.func,
  showTime: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
  //showTime.defaultValue:PropTypes.instanceOf(moment),
  showToday: PropTypes.bool,
  value: PropTypes.instanceOf(moment),
  onChange: PropTypes.func,
  onOk: PropTypes.func
}, CommonPicker.propTypes, DatePicker.propTypes, {});

export default class SKDatePicker extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, DatePicker.defaultProps, {
    compTag: DatePicker
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, DatePicker.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKDatePicker';
    this.handleChange = (dateMoment, dateString) => {
      if (dateMoment) {
        this.skVal(dateMoment.format(SK.DEFAULT_MOMENT_DATE));
      } else {
        this.skVal(undefined);
      }
    };
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               onChange={this.handleChange}
               placeholder={I18N.get('Please_select_date')}
               size={this.skProp(AntdComp.SK_PROPS.SIZE)}
               value={this.skVal() ? moment(this.skVal(), SK.DEFAULT_MOMENT_DATE) : undefined}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
