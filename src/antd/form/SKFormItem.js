import { Form } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { SK } from 'sk-js';
import OriginForm from './OriginForm';
import AntdComp from '../AntdComp';

Form.Item.defaultProps = SK.assign({}, {
  colon: true,
  hasFeedback: false,
  required: false,
}, OriginForm.defaultProps, Form.Item.defaultProps, {});
Form.Item.propTypes = SK.assign({}, {
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
}, OriginForm.propTypes, Form.Item.propTypes, {});

export default class SKFormItem extends AntdComp {
  static SK_COMP_NAME = 'SKFormItem';
  static SK_PROPS = SK.assign({}, AntdComp.SK_PROPS, {
    LABEL_COL: 'labelCol',
    WRAPPER_COL: 'wrapperCol',
  });
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Form.Item.defaultProps, {
    compTag: Form.Item,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Form.Item.propTypes, {
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
    const { compTag: CompTag } = this.props;
    const labelCol = this.skProp(SKFormItem.SK_PROPS.LABEL_COL);
    const wrapperCol = this.skProp(SKFormItem.SK_PROPS.WRAPPER_COL);

    return (
      <CompTag
        {...this.skTransProps2Self(CompTag)}
        labelCol={labelCol}
        wrapperCol={wrapperCol}
      >
        {this.skTransProps2Child()}
      </CompTag>
    );
  }
}
