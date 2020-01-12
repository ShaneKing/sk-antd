import PropTypes from 'prop-types';
import React from 'react';
import {Proxy0, SK} from 'sk-js';
import {Comp, Model, Reacts, SKDiv} from 'sk-react';
import {SIZE} from './AntdConst';

/**
 * 1.The defaultProps and propTypes of AntD just can be use in wrapper Comp or non-Comp
 * 2.if origin exist, must be use origin
 */
export default class AntdComp extends Comp {
  static SK_COMP_NAME = 'AntdComp';
  static SK_PROPS = SK.extends(true, {}, Comp.SK_PROPS, {
    SIZE: 'size',
  });
  static defaultProps = SK.extends(true, {}, Comp.defaultProps, {});
  static propTypes = SK.extends(true, {}, Comp.propTypes, {
    size: PropTypes.oneOf(Object.values(SIZE)),
    skSize: PropTypes.oneOf(Object.values(SIZE)),
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = AntdComp.SK_COMP_NAME;
  }

  // react
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

  // monitor
  addAllErroredMonitor() {
    Model.parseSao(this.props.monitor).forEach((idOrReg) => {
      this.addErroredMonitor(idOrReg);
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
    if (Proxy0._.isRegExp(idOrReg)) {
      this.skModel().addRegErroredListener(idOrReg, this.updateUI);
    } else {
      this.skModel().addIdErroredListener(idOrReg, this.updateUI);
    }
  }

  addExtendErroredMonitor() {
  }

  rmvAllErroredMonitor() {
    this.monitors.forEach((idOrReg) => {
      this.rmvErroredMonitor(idOrReg);
    });
  }

  rmvErroredMonitor(idOrReg) {
    if (Proxy0._.isRegExp(idOrReg)) {
      this.skModel().rmvRegErroredListener(idOrReg, this.updateUI);
    } else {
      this.skModel().rmvIdErroredListener(idOrReg, this.updateUI);
    }
    this.monitors.skRmv(idOrReg);
  }

  rmvExtendErroredMonitor() {
  }

  //@Deprecated
  hasSpecialChild(specialChildName) {
    return Reacts.some(this.props.children, $child => $child.type && $child.type.name === specialChildName, this);
  }

  renderAntdCompPreview() {
    return (<SKDiv>{this.m2v()}</SKDiv>);
  }
}
