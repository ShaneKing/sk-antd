import { DatePicker } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Mesgs, Proxy0, SK } from 'sk-js';
import CommonPicker from './CommonPicker';
import AntdComp from '../AntdComp';

let {RangePicker} = DatePicker;

RangePicker.defaultProps = SK.extends(true, {}, {}, CommonPicker.defaultProps, RangePicker.defaultProps, {
  format: SK.DEFAULT_MOMENT_DATETIME,
});

RangePicker.propTypes = SK.extends(true, {}, {
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
  //showTime.defaultValue:PropTypes.instanceOf(Proxy0.moment),
  value: PropTypes.array,
  onCalendarChange: PropTypes.func,
  onChange: PropTypes.func,
  onOk: PropTypes.func,
}, CommonPicker.propTypes, RangePicker.propTypes, {});

RangePicker.NON_SK_COMP_NAME = 'RangePicker';

/**
 * @HasPreview
 * @MustModelId
 */
export default class SKRangePicker extends AntdComp {
  static SK_COMP_NAME = 'SKRangePicker';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, RangePicker.defaultProps, {
    compTag: RangePicker,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, RangePicker.propTypes, {
    ssChange: PropTypes.func,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKRangePicker.SK_COMP_NAME;
    this.handleChange = (dateMoment, dateString) => {
      if (this.props.ssChange && Proxy0._.isFunction(this.props.ssChange)) {
        this.props.ssChange(dateMoment, dateString);
      } else {
        this.n2m(dateMoment);
      }
    };
  }

  n2mConvertor(dateMoment) {
    return dateMoment && dateMoment.length === 2 ? [dateMoment[0].format(this.props.format), dateMoment[1].format(this.props.format)] : undefined;
  }

  m2nConvertor() {
    return this.skVal() ? [Proxy0.momentAny(this.skVal()[0], this.props.format), Proxy0.momentAny(this.skVal()[1], this.props.format)] : undefined;
  }

  m2vConvertor() {
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
        value={this.m2n()}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }

  renderPreview() {
    return this.renderAntdCompPreview();
  }
}
