import PropTypes from 'prop-types';
import React from 'react';
import {Proxy0, SK} from 'sk-js';
import AntdComp from '../AntdComp';
import SKCol from '../col/SKCol';
import SKFormItem from '../form/SKFormItem';
import SKPopover from '../popover/SKPopover';

/**
 * @MustModels
 */
export default class FormComp extends AntdComp {
  static SK_COMP_NAME = 'FormComp';
  static SK_PROPS = SK.extends(true, {}, AntdComp.SK_PROPS, {
    HELP_ON_COMP: 'helpOnComp',
    IN_FROM_ROW: 'inFormRow',
    NEED_FROM_ITEM: 'needFormItem',
  });
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, SKCol.defaultProps, SKFormItem.defaultProps, {});
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, SKCol.propTypes, SKFormItem.propTypes, {
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

    const errorObj = this.skModel().getErrors(this.getModelId());
    const help = Proxy0._.isEmpty(errorObj) ? SK.STR_EMPTY : Proxy0._.join(errorObj.skVals(), SK.CHAR_BLANK + SK.CHAR_AMPERSAND + SK.CHAR_AMPERSAND + SK.CHAR_BLANK);
    const validateStatus = Proxy0._.isEmpty(errorObj) ? SK.STR_EMPTY : SK.STR_ERROR;

    if (inFormRow && needFormItem) {
      return (
        <SKCol {...this.skTransProps2Self(SKCol)}>
          {this.renderFormItem(help, validateStatus)}
        </SKCol>
      );
    } else if (inFormRow && !needFormItem) {
      return (
        <SKCol {...this.skTransProps2Self(SKCol)}>
          {this.renderFormComp(help, validateStatus)}
        </SKCol>
      );
    } else if (!inFormRow && needFormItem) {
      return this.renderFormItem(help, validateStatus);
    } else {
      return this.renderFormComp(help, validateStatus);
    }
  }

  renderFormComp(help, validateStatus) {
    if (this.skBfo(FormComp.SK_PROPS.HELP_ON_COMP) && !Proxy0._.isNil(help) && !Proxy0._.isNil(validateStatus)) {
      return <SKPopover content={help} title={validateStatus}>{this.renderFormCompWithoutHelp()}</SKPopover>
    } else {
      return this.renderFormCompWithoutHelp();
    }
  }

  renderFormCompWithoutHelp() {
    const {compTag: CompTag, modelId} = this.props;

    return (
      <CompTag {...this.skTransProps2Self(CompTag)} modelId={modelId}>
        {this.skTransProps2Child()}
      </CompTag>
    );

  }

  renderFormItem(help, validateStatus) {
    return (
      <SKFormItem {...this.skTransProps2Self(SKFormItem, this.props)} help={help} label={this.props.label}
                  required={this.skBfo(AntdComp.SK_PROPS.REQUIRED)} validateStatus={validateStatus}>
        {this.renderFormComp()}
      </SKFormItem>
    );
  }
}
