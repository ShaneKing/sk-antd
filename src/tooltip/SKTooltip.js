import {Tooltip} from 'antd';
import PropTypes from 'prop-types';
import {SK} from 'sk-js';
import CommonTip from './CommonTip';
import AntdComp from '../AntdComp';

Tooltip.defaultProps = SK.extends(true, {}, {}, CommonTip.defaultProps, Tooltip.defaultProps, {});
Tooltip.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/tooltip-cn/#API
  title: PropTypes.any,
}, CommonTip.propTypes, Tooltip.propTypes, {});

Tooltip.NON_SK_COMP_NAME = 'Tooltip';


//!important maybe children must wrap by span/div ...
export default class SKTooltip extends AntdComp {
  static SK_COMP_NAME = 'SKTooltip';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Tooltip.defaultProps, {
    compTag: Tooltip,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Tooltip.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKTooltip.SK_COMP_NAME;
  }
}
