import {Tooltip} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import AntdComp from './AntdComp';
import {PLACEMENT, TRIGGER} from '../../util/Const';

Tooltip.COMMON_DEFAULT_PROPS = SK.assign({}, {
  arrowPointAtCenter: false,
  autoAdjustOverflow: true,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  placement: PLACEMENT.Top,
  trigger: TRIGGER.Hover,
  defaultVisible: false,
  visible: false
}, {});

Tooltip.COMMON_PROP_TYPES = SK.assign({}, {
  arrowPointAtCenter: PropTypes.bool,
  autoAdjustOverflow: PropTypes.bool,
  getPopupContainer: PropTypes.func,
  mouseEnterDelay: PropTypes.number,
  mouseLeaveDelay: PropTypes.number,
  overlayClassName: PropTypes.string,
  overlayStyle: PropTypes.object,
  placement: PropTypes.oneOf(Object.values(PLACEMENT)),
  trigger: PropTypes.string,
  defaultVisible: PropTypes.bool,
  visible: PropTypes.bool,
  onCollapse: PropTypes.func
}, {});

Tooltip.defaultProps = SK.assign({}, {}, Tooltip.COMMON_DEFAULT_PROPS, Tooltip.defaultProps, {});

Tooltip.propTypes = SK.assign({}, {
  title: PropTypes.string
}, Tooltip.COMMON_PROP_TYPES, Tooltip.propTypes, {});

export default class SKTooltip extends AntdComp {
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Tooltip.defaultProps, {
    compTag: Tooltip
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Tooltip.propTypes, {});


  constructor(...args) {
    super(...args);
    this.compName = 'SKTooltip';
  }
}
