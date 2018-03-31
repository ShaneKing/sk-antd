import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import CommonTip from './CommonTip';
import AntdComp from '../AntdComp';

Tooltip.defaultProps = SK.assign({}, {}, CommonTip.defaultProps, Tooltip.defaultProps, {});
Tooltip.propTypes = SK.assign({}, {
  //https://ant.design/components/tooltip-cn/#API
  title: PropTypes.string,
}, CommonTip.propTypes, Tooltip.propTypes, {});

export default class SKTooltip extends AntdComp {
  static SK_COMP_NAME = 'SKTooltip';
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Tooltip.defaultProps, {
    compTag: Tooltip,
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Tooltip.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKTooltip.SK_COMP_NAME;
  }
}
