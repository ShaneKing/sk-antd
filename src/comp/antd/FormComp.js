import _ from 'lodash';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from './AntdComp';
import SKCol from './SKCol';
import SKFormItem from './SKFormItem';

export default class FormComp extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, SKCol.defaultProps, SKFormItem.defaultProps, {});
  static propTypes = SK.assign({}, AntdComp.propTypes, SKCol.propTypes, SKFormItem.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'FormComp';
  }

  render() {
    let inFormItem = this.skProp(AntdComp.SK_PROPS.IN_FROM_ITEM);
    let inFormRow = this.skProp(AntdComp.SK_PROPS.IN_FROM_ROW);

    let errorObj = this.getErrors();
    let help = _.isEmpty(errorObj) ? SK.EMPTY : _.join(errorObj.skVals(), SK.CHAR_VERTICAL);
    let validateStatus = _.isEmpty(errorObj) ? SK.EMPTY : SK.STR_ERROR;

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
    let {compTag: CompTag, modelId} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} modelId={modelId}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
