import {Button} from 'antd';
import PropTypes from 'prop-types';
import {SK} from 'sk-js';
import {REACT} from 'sk-react';
import AntdComp from '../AntdComp';
import {SIZE} from '../../Const';

Button.defaultProps = SK.assign({}, {
  ghost: false,
  htmlType: REACT.TAG.button,
  loading: false,
  size: SIZE.Default,
}, Button.defaultProps, {});

Button.propTypes = SK.assign({}, {
  //https://ant.design/components/button-cn/#API
  ghost: PropTypes.bool,
  htmlType: PropTypes.string,
  icon: PropTypes.string,
  loading: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  shape: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string
}, Button.propTypes, {});

export default class SKButton extends AntdComp {
  static TYPE = {
    Primary: 'primary',
    Dashed: 'dashed',
    Danger: 'danger'
  };
  static defaultProps = SK.assign({}, AntdComp.defaultProps, Button.defaultProps, {
    compTag: Button
  });
  static propTypes = SK.assign({}, AntdComp.propTypes, Button.propTypes, {});

  constructor(...args) {
    super(...args);
    this.compName = 'SKButton';
  }
}
