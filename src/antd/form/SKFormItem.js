import {Form} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import OriginForm from './OriginForm';
import AntdComp from '../AntdComp';

const {Item} = Form;

Item.defaultProps = SK.extend(true, {}, {
  colon: true,
  hasFeedback: false,
  required: false,
}, OriginForm.defaultProps, Item.defaultProps, {});
Item.propTypes = SK.extend(true, {}, {
  //https://ant.design/components/form-cn/#Form.Item
  colon: PropTypes.bool,
  extra: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  hasFeedback: PropTypes.bool,
  help: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  labelCol: PropTypes.object,
  required: PropTypes.bool,
  validateStatus: PropTypes.string,
  wrapperCol: PropTypes.object,
}, OriginForm.propTypes, Item.propTypes, {});

Item.NON_SK_COMP_NAME = 'FormItem';

export default class SKFormItem extends AntdComp {
  static SK_COMP_NAME = 'SKFormItem';
  static SK_PROPS = SK.extend(true, {}, AntdComp.SK_PROPS, {
    LABEL_COL: 'labelCol',
    WRAPPER_COL: 'wrapperCol',
  });
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, Item.defaultProps, {
    compTag: Form.Item,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, Item.propTypes, {
    formLabelCol: PropTypes.object,
    skFormLabelCol: PropTypes.object,
    formWrapperCol: PropTypes.object,
    skFormWrapperCol: PropTypes.object,
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKFormItem.SK_COMP_NAME;
  }

  render() {
    const {compTag: CompTag} = this.props;
    const labelCol = this.skProp(SKFormItem.SK_PROPS.LABEL_COL);
    const wrapperCol = this.skProp(SKFormItem.SK_PROPS.WRAPPER_COL);

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        labelCol={labelCol}
        required={this.skBfo(AntdComp.SK_PROPS.REQUIRED)}
        wrapperCol={wrapperCol}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
