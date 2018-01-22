import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {SK, Model} from 'sk-js';
import {Comp, Reacts} from 'sk-react';
import {SIZE} from '../Const';

/**
 * 1.The defaultProps and propTypes of AntD just can be use in wrapper Comp or non-Comp
 * 2.if origin exist, must be use origin
 */
export default class AntdComp extends Comp {
  static SK_PROPS = {
    SIZE: 'size'
  };
  static defaultProps = SK.assign({}, Comp.defaultProps, {});
  static propTypes = SK.assign({}, Comp.propTypes, {
    size: PropTypes.oneOf(Object.values(SIZE)),
    skSize: PropTypes.oneOf(Object.values(SIZE))
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
