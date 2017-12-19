import {DatePicker} from 'antd';
import moment from 'moment';
import React from 'react';
import {SK} from 'sk-js';
import {I18N} from 'sk-l10n';
import AntdComp from '../AntdComp';

export default class SKDatePicker extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: DatePicker
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {});

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
