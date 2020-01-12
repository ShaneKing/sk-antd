import {Input} from 'antd';
import PropTypes from 'prop-types';
import {SK} from 'sk-js';
import {INPUT_TYPE} from '../AntdConst';

Input.defaultProps = SK.extends(true, {}, {
  disabled: false,
  //size: SIZE.Default,//invalid function this.skProp(AntdComp.SK_PROPS.SIZE)
  type: INPUT_TYPE.Text,
}, Input.defaultProps, {});
Input.propTypes = SK.extends(true, {}, {
  //https://ant.design/components/input-cn/#Input
  addonAfter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  addonBefore: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  prefix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  size: PropTypes.string,
  suffix: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  type: PropTypes.string,
  value: PropTypes.string,
  onPressEnter: PropTypes.func,
}, Input.propTypes, {});

Input.NON_SK_COMP_NAME = 'Input';

export default class OriginInput {
  static defaultProps = SK.extends(true, {}, Input.defaultProps, {});
  static propTypes = SK.extends(true, {}, Input.propTypes, {});
}
