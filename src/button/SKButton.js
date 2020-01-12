import {Button} from 'antd';
import PropTypes from 'prop-types';
import {SK} from 'sk-js';
import {Reacts} from 'sk-react';
import AntdComp from '../AntdComp';
import {SIZE} from '../AntdConst';

Button.defaultProps = SK.extends(true, {}, {
  block: false,
  // disabled: false,//Comp
  ghost: false,
  htmlType: Reacts.TAG.button,
  loading: false,
  size: SIZE.Default,
}, Button.defaultProps, {});

Button.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/button-cn/#API
  block: PropTypes.bool,
  // disabled: PropTypes.bool,//Comp
  ghost: PropTypes.bool,
  href: PropTypes.string,
  htmlType: PropTypes.string,
  icon: PropTypes.string,
  loading: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  shape: PropTypes.string,
  size: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
}, Button.propTypes, {});

Button.NON_SK_COMP_NAME = 'Button';

export default class SKButton extends AntdComp {
  static SK_COMP_NAME = 'SKButton';
  static defaultProps = SK.extends(true, {}, AntdComp.defaultProps, Button.defaultProps, {
    compTag: Button,
  });
  static propTypes = SK.extends(true, {}, AntdComp.propTypes, Button.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKButton.SK_COMP_NAME;
  }
}
