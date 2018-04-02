import { Input } from 'antd';
import PropTypes from 'prop-types';
import { SK } from 'sk-js';
import { INPUT_TYPE, SIZE } from '../AntdConst';

Input.defaultProps = SK.assign({}, {
  disabled: false,
  size: SIZE.Default,
  type: INPUT_TYPE.Text,
}, Input.defaultProps, {});
Input.propTypes = SK.assign({}, {
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

export default class OriginInput {
  static defaultProps = SK.assign({}, Input.defaultProps, {});
  static propTypes = SK.assign({}, Input.propTypes, {});
}
