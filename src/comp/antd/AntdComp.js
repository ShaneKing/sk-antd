import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import Comp from '../../util/Comp';
import {Dir, SIZE} from '../../util/Const';
import Model from '../../util/Model';
import Reacts from '../../util/Reacts';

export default class AntdComp extends Comp {
  static SK_PROPS = {
    COL_SPAN: 'colSpan',
    COL_XS: 'colXs',
    COL_SM: 'colSm',
    COL_MD: 'colMd',
    COL_LG: 'colLg',
    COL_XL: 'colXl',
    FORM_LABEL_COL: 'formLabelCol',
    FORM_LAYOUT: 'formLayout',
    FORM_WRAPPER_COL: 'formWrapperCol',
    GRID_GUTTER: 'gridGutter',
    IN_FROM_ITEM: 'inFormItem',
    IN_FROM_ROW: 'inFormRow',
    SIZE: 'size'
  };
  static defaultProps = SK.assign({}, Comp.defaultProps, {});
  static propTypes = SK.assign({}, Comp.propTypes, {
    colSpan: PropTypes.number,
    skColSpan: PropTypes.number,
    colXs: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    skColXs: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    colSm: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    skColSm: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    colMd: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    skColMd: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    colLg: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    skColLg: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    colXl: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    skColXl: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object
    ]),
    formLayout: PropTypes.oneOf([Dir.Horizontal, Dir.Vertical, Dir.Inline]),
    skFormLayout: PropTypes.oneOf([Dir.Horizontal, Dir.Vertical, Dir.Inline]),//Const.Dir
    formLabelCol: PropTypes.object,
    skFormLabelCol: PropTypes.object,
    formWrapperCol: PropTypes.object,
    skFormWrapperCol: PropTypes.object,
    gridGutter: PropTypes.number,
    skGridGutter: PropTypes.number,
    inFormItem: PropTypes.bool,
    skInFormItem: PropTypes.bool,
    inFormRow: PropTypes.bool,
    skInFormRow: PropTypes.bool,
    size: PropTypes.oneOf([SIZE.Large, SIZE.Default, SIZE.Small]),
    skSize: PropTypes.oneOf([SIZE.Large, SIZE.Default, SIZE.Small])
  });

  constructor(...args) {
    super(...args);
    this.compName = 'AntdComp';
  }

  componentDidMount() {
    super.componentDidMount();
    this.addAllErroredMonitor();
    this.addExtendErroredMonitor();
  }

  componentWillUpdate() {
    this.rmvAllErroredMonitor();
    this.rmvExtendErroredMonitor();
    super.componentWillUpdate();
  }

  componentDidUpdate() {
    super.componentDidUpdate();
    this.addAllErroredMonitor();
    this.addExtendErroredMonitor();
  }

  componentWillUnmount() {
    this.rmvAllErroredMonitor();
    this.rmvExtendErroredMonitor();
    super.componentWillUnmount();
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
    if (this.getModelId()) {
      this.addErroredMonitor(this.getModelId());
    }
  }

  addErroredMonitor(idOrReg) {
    if (this.monitors.indexOf(idOrReg) < 0) {
      this.monitors.push(idOrReg);
    }
    if (_.isRegExp(idOrReg)) {
      this.skModel().addRegErroredListener(idOrReg, this.updateUI);
    } else {
      this.skModel().addIdErroredListener(idOrReg, this.updateUI)
    }
  }

  rmvAllErroredMonitor() {
    this.monitors.forEach(($idOrReg) => {
      this.rmvErroredMonitor($idOrReg);
    });
  }

  rmvErroredMonitor(idOrReg) {
    if (_.isRegExp(idOrReg)) {
      this.skModel().rmvRegErroredListener(idOrReg, this.updateUI);
    } else {
      this.skModel().rmvIdErroredListener(idOrReg, this.updateUI)
    }
    this.monitors.skRmv(idOrReg);
  }

  hasSpecialChild(specialChildName) {
    return Reacts.some(this.props.children, (child, idx) => {
      return child.type && child.type.name === specialChildName
    }, this);
  }

}
