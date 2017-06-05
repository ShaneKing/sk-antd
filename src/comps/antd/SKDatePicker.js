import {DatePicker} from 'antd';
import moment from 'moment';
import React from 'react';
import SK from 'sk-js';
import {I18N} from 'sk-l10n';
import Comp from '../../utils/Comp';

export default class SKDatePicker extends Comp {
  static defaultProps = {
    compTag: DatePicker
  };
  static propTypes = SK.assign({}, Comp.propTypes, DatePicker.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  handleChange(e) {
    if (e) {
      this.skVal(e.format(SK.DEFAULT_MOMENT_DATE));
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
        value={this.skVal() ? moment(this.skVal(), SK.DEFAULT_MOMENT_DATE) : undefined}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
