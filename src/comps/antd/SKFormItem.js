import {Form} from 'antd';
import React from 'react';
import SK from 'sk-js';
import Comp from '../../utils/Comp';

export default class SKFormItem extends Comp {
  static defaultProps = {
    compTag: Form.Item
  };
  static propTypes = SK.assign({}, Comp.propTypes, Form.Item.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  render() {
    let {compTag: CompTag, labelCol, wrapperCol} = this.props;
    labelCol = labelCol || this.skProp(Comp.SK_PROPS.FORM_LABEL_COL);
    wrapperCol = wrapperCol || this.skProp(Comp.SK_PROPS.FORM_WRAPPER_COL);

    return (
      <CompTag {...this.compValidProps(CompTag)}
        labelCol={labelCol}
        wrapperCol={wrapperCol}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
