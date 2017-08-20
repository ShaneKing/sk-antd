import React from 'react';
import SK from 'sk-js';
import SKCol from './SKCol';
import SKFormItem from './SKFormItem';
import Comp from '../../util/Comp';
import Model from '../../util/Model';

export default class FormComp extends Comp {
  static propTypes = SK.assign({}, Comp.propTypes, SKCol.propTypes, SKFormItem.propTypes, {});

  constructor(...args) {
    super(...args);
  }

  componentDidMount() {
    super.componentDidMount();
    this.addAllErroredMonitor();
    this.addExtendErroredMonitor();
  }

  componentWillUpdate() {
    super.componentWillUpdate();
    this.rmvAllErroredMonitor();
    this.rmvExtendErroredMonitor();
  }

  componentDidUpdate() {
    super.componentDidUpdate();
    this.addAllErroredMonitor();
    this.addExtendErroredMonitor();
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    this.rmvAllErroredMonitor();
    this.rmvExtendErroredMonitor();
  }

  addExtendErroredMonitor() {

  }

  rmvExtendErroredMonitor() {

  }

  //monitor begin
  addAllErroredMonitor() {
    Model.parseSao(this.props.monitor).forEach(($idOrReg) => {
      this.addErroredMonitor($idOrReg);
    });
    //Self value monitor
    if (this.iModelId()) {
      this.addErroredMonitor(this.iModelId());
    }
  }

  addErroredMonitor(idOrReg) {
    if (this.monitors.indexOf(idOrReg) < 0) {
      this.monitors.push(idOrReg);
    }
    if (_.isRegExp(idOrReg)) {
      this.iModel().addRegErroredListener(idOrReg, this._updateUI);
    } else {
      this.iModel().addIdErroredListener(idOrReg, this._updateUI)
    }
  }

  rmvAllErroredMonitor() {
    this.monitors.forEach(($idOrReg) => {
      this.rmvErroredMonitor($idOrReg);
    });
  }

  rmvErroredMonitor(idOrReg) {
    if (_.isRegExp(idOrReg)) {
      this.iModel().rmvRegErroredListener(idOrReg, this._updateUI);
    } else {
      this.iModel().rmvIdErroredListener(idOrReg, this._updateUI)
    }
    this.monitors.skRmv(idOrReg);
  }

  render() {
    let inFormItem = this.skProp(Comp.SK_PROPS.IN_FROM_ITEM);
    let inFormRow = this.skProp(Comp.SK_PROPS.IN_FROM_ROW);

    let errorObj = this.getErrors();
    let help = _.isEmpty(errorObj) ? SK.EMPTY : _.join(errorObj.skVals(), SK.CHAR_VERTICAL);
    let validateStatus = _.isEmpty(errorObj) ? SK.EMPTY : SK.STR_ERROR;

    if (inFormRow && inFormItem) {
      return (
        <SKCol {...this.compValidProps(SKCol)}>
          <SKFormItem {...this.compValidProps(SKFormItem)} validateStatus={validateStatus} help={help}>
            {this.renderFormComp()}
          </SKFormItem>
        </SKCol>
      );
    } else if (inFormRow && !inFormItem) {
      return (
        <SKCol {...this.compValidProps(SKCol)}>
          {this.renderFormComp()}
        </SKCol>
      );
    } else if (!inFormRow && inFormItem) {
      return (
        <SKFormItem {...this.compValidProps(SKFormItem)} validateStatus={validateStatus} help={help}>
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
      <CompTag {...this.compValidProps(CompTag)} modelId={modelId}>
        {this.skPropsTrans()}
      </CompTag>
    );
  }
}
