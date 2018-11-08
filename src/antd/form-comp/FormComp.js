import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';
import SKCol from '../col/SKCol';
import SKFormItem from '../form/SKFormItem';

export default class FormComp extends AntdComp {
  static SK_COMP_NAME = 'FormComp';
  static SK_PROPS = SK.extend(true, {}, AntdComp.SK_PROPS, {
    HELP_IN_LABEL: 'helpInLabel',
    IN_FROM_ROW: 'inFormRow',
    NEED_FROM_ITEM: 'needFormItem',
  });
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, SKCol.defaultProps, SKFormItem.defaultProps, {});
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, SKCol.propTypes, SKFormItem.propTypes, {
    helpInLabel: PropTypes.bool,
    inFormRow: PropTypes.bool,
    skInFormRow: PropTypes.bool,
    needFormItem: PropTypes.bool,
    skNeedFormItem: PropTypes.bool,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = FormComp.SK_COMP_NAME;
  }

  render() {
    const inFormRow = this.skBfo(FormComp.SK_PROPS.IN_FROM_ROW);
    const needFormItem = this.skBfo(FormComp.SK_PROPS.NEED_FROM_ITEM);

    const errorObj = this.getErrors();
    const help = _.isEmpty(errorObj) ? SK.CHAR_EMPTY : _.join(errorObj.skVals(), SK.CHAR_BLANK + SK.CHAR_AMPERSAND + SK.CHAR_AMPERSAND + SK.CHAR_BLANK);
    const validateStatus = _.isEmpty(errorObj) ? SK.CHAR_EMPTY : SK.STR_ERROR;

    if (inFormRow && needFormItem) {
      return (
        <SKCol {...this.skTransProps2Self(SKCol)}>
          {this.renderFormItem(help, validateStatus)}
        </SKCol>
      );
    } else if (inFormRow && !needFormItem) {
      return (
        <SKCol {...this.skTransProps2Self(SKCol)}>
          {this.renderFormComp()}
        </SKCol>
      );
    } else if (!inFormRow && needFormItem) {
      return this.renderFormItem(help, validateStatus);
    } else {
      return this.renderFormComp();
    }
  }

  renderFormComp() {
    const {compTag: CompTag, modelId} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} modelId={modelId}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }

  renderFormItem(help, validateStatus) {
    return (
      <SKFormItem {...this.skTransProps2Self(SKFormItem, this.props)} help={help} label={this.skBfo(FormComp.SK_PROPS.HELP_IN_LABEL) && help ? help : this.props.label}
                  required={this.skProp(AntdComp.SK_PROPS.REQUIRED)} validateStatus={validateStatus}>
        {this.renderFormComp()}
      </SKFormItem>
    );
  }
}
