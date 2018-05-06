import { Button } from 'antd';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import AntdComp from '../AntdComp';
import { SIZE } from '../AntdConst';
import Reacts from '../../Reacts';

Button.defaultProps = SK.extend(true, {}, {
  ghost: false,
  htmlType: Reacts.TAG.button,
  loading: false,
  size: SIZE.Default,
}, Button.defaultProps, {});

Button.propTypes = SK.extend(true, {}, {
  //https://ant.design/components/button-cn/#API
  ghost: PropTypes.bool,
  htmlType: PropTypes.string,
  icon: PropTypes.string,
  loading: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  shape: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
}, Button.propTypes, {});

export default class SKButton extends AntdComp {
  static SK_COMP_NAME = 'SKButton';
  static defaultProps = SK.extend(true, {}, AntdComp.defaultProps, Button.defaultProps, {
    compTag: Button,
  });
  static propTypes = SK.extend(true, {}, AntdComp.propTypes, Button.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKButton.SK_COMP_NAME;
  }
}
