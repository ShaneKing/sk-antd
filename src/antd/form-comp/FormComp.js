import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import SKCol from '../col/SKCol';
import SKFormItem from '../form/SKFormItem';

export default class FormComp extends AntdComp {
  static SK_COMP_NAME = 'FormComp';
  static SK_PROPS = {
    IN_FROM_ITEM: 'inFormItem',
    IN_FROM_ROW: 'inFormRow',
  };
  static defaultProps = SK.assign({}, AntdComp.defaultProps, SKCol.defaultProps, SKFormItem.defaultProps, {});
  static propTypes = SK.assign({}, AntdComp.propTypes, SKCol.propTypes, SKFormItem.propTypes, {
    inFormItem: PropTypes.bool,
    skInFormItem: PropTypes.bool,
    inFormRow: PropTypes.bool,
    skInFormRow: PropTypes.bool,
  });

  constructor(...args) {
    super(...args);
    this.compName = 'FormComp';
  }

  render() {
    const inFormItem = this.skProp(FormComp.SK_PROPS.IN_FROM_ITEM);
    const inFormRow = this.skProp(FormComp.SK_PROPS.IN_FROM_ROW);

    const errorObj = this.getErrors();
    const help = _.isEmpty(errorObj) ? SK.EMPTY : _.join(errorObj.skVals(), SK.CHAR_VERTICAL);
    const validateStatus = _.isEmpty(errorObj) ? SK.EMPTY : SK.STR_ERROR;

    if (inFormRow && inFormItem) {
      return (
        <SKCol {...this.skTransProps2Self(SKCol)}>
          <SKFormItem {...this.skTransProps2Self(SKFormItem)} validateStatus={validateStatus} help={help}>
            {this.renderFormComp()}
          </SKFormItem>
        </SKCol>
      );
    } else if (inFormRow && !inFormItem) {
      return (
        <SKCol {...this.skTransProps2Self(SKCol)}>
          {this.renderFormComp()}
        </SKCol>
      );
    } else if (!inFormRow && inFormItem) {
      return (
        <SKFormItem {...this.skTransProps2Self(SKFormItem)} validateStatus={validateStatus} help={help}>
          {this.renderFormComp()}
        </SKFormItem>
      );
    } else {
      return this.renderFormComp();
    }
  }

  renderFormComp() {
    const { compTag: CompTag, modelId } = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} modelId={modelId}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
