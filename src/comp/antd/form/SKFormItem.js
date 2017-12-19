import {Form} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from '../AntdComp';

export default class SKFormItem extends AntdComp {
  static SK_PROPS = {
    FORM_LABEL_COL: 'formLabelCol',
    FORM_WRAPPER_COL: 'formWrapperCol'
  };
  static defaultProps = SK.assign({}, AntdComp.defaultProps, {
    compTag: Form.Item
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, {
    formLabelCol: PropTypes.object,
    skFormLabelCol: PropTypes.object,
    formWrapperCol: PropTypes.object,
    skFormWrapperCol: PropTypes.object
  });

  constructor(...args) {
    super(...args);
    this.compName = 'SKFormItem';
  }

  render() {
    let {compTag: CompTag, labelCol, wrapperCol} = this.props;
    labelCol = labelCol || this.skProp(SKFormItem.SK_PROPS.FORM_LABEL_COL);
    wrapperCol = wrapperCol || this.skProp(SKFormItem.SK_PROPS.FORM_WRAPPER_COL);

    return (
      <CompTag {...this.skTransProps2Self(CompTag)}
               labelCol={labelCol}
               wrapperCol={wrapperCol}>
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
