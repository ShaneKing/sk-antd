import {DatePicker} from 'antd';
import moment from 'moment';
import React from 'react';
import SK from 'sk-js';
import {I18N} from 'sk-l10n';
import Comp from '../../util/Comp';

export default class SKDatePicker extends Comp {
  static defaultProps = {
    compTag: DatePicker
  };
  static propTypes = SK.assign({}, Comp.propTypes, DatePicker.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  handleChange(dateMoment, dateString) {
    if (dateMoment) {
      this.skVal(dateMoment.format(SK.DEFAULT_MOMENT_DATE));
    } else {
      this.skVal(undefined);
    }
  }

  render() {
    let {compTag: CompTag} = this.props;

    return (
      <CompTag {...this.compValidProps(CompTag)}
        onChange={this.handleChange.bind(this)}
        placeholder={I18N.get('Please_select_date')}
        size={this.skProp(Comp.SK_PROPS.SIZE)}
        value={this.skVal() ? moment(this.skVal(), SK.DEFAULT_MOMENT_DATE) : undefined}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
